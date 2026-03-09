"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { submitContact } from "@/lib/contact";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [headingRef, headingInView] = useInView<HTMLDivElement>({ threshold: 0.2 });
  const [formRef, formInView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem("email") as HTMLInputElement).value.trim(),
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim(),
    };

    try {
      await submitContact(data);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container mx-auto px-6 max-w-2xl">
        <div
          ref={headingRef}
          className={cn(
            "mb-12 transition-all duration-500",
            headingInView ? "animate-fade-up opacity-100" : "opacity-0"
          )}
        >
          <p className="terminal-prefix text-xs tracking-widest mb-3">&gt; contact</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Say hello</h2>
          <p className="text-[15px] text-muted-foreground leading-relaxed">
            I&apos;m heads-down building at Svea Solar, but I&apos;m always interested in
            conversations about systems architecture, content platforms, or where AI tooling is
            taking software development.
          </p>
        </div>

        <div
          ref={formRef}
          className={cn(
            "rounded-xl bg-surface/60 backdrop-blur-sm border border-border/60 p-8 transition-all duration-500",
            formInView ? "animate-fade-up opacity-100" : "opacity-0"
          )}
        >
          {status === "success" ? (
            <div className="text-center py-8 flex flex-col items-center gap-3">
              <CheckCircle className="h-10 w-10 text-primary/70" />
              <p className="text-lg font-semibold text-foreground mt-1">Message received.</p>
              <p className="text-[15px] text-muted-foreground">
                I&apos;ll get back to you as soon as I can.
              </p>
              <Button
                variant="outline"
                className="mt-3 border-border/60 text-muted-foreground hover:text-foreground"
                onClick={() => setStatus("idle")}
              >
                Send another message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm text-muted-foreground">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    disabled={status === "loading"}
                    className="bg-background/50 border-border/60 focus:border-primary/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm text-muted-foreground">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    disabled={status === "loading"}
                    className="bg-background/50 border-border/60 focus:border-primary/50"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm text-muted-foreground">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="What's on your mind?"
                  rows={5}
                  required
                  minLength={25}
                  maxLength={350}
                  disabled={status === "loading"}
                  className="bg-background/50 border-border/60 focus:border-primary/50 resize-none"
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-destructive">
                  Something went wrong — please try again or email me directly.
                </p>
              )}

              <Button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold disabled:opacity-60"
                size="lg"
              >
                {status === "loading" ? "Sending…" : "Send message"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
