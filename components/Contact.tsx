"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [headingRef, headingInView] = useInView<HTMLDivElement>({ threshold: 0.2 });
  const [formRef, formInView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
          <p className="terminal-prefix text-xs tracking-widest mb-3">
            &gt; contact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Say hello
          </h2>
          <p className="text-[15px] text-muted-foreground leading-relaxed">
            I&apos;m heads-down building at Svea Solar, but I&apos;m always
            interested in conversations about systems architecture, content
            platforms, or where AI tooling is taking software development.
          </p>
        </div>

        <div
          ref={formRef}
          className={cn(
            "rounded-xl bg-surface border border-border/60 p-8 transition-all duration-500",
            formInView ? "animate-fade-up opacity-100" : "opacity-0"
          )}
        >
          {submitted ? (
            <div className="text-center py-8">
              <p className="text-lg font-semibold text-foreground">
                Message received.
              </p>
              <p className="text-[15px] text-muted-foreground mt-2">
                I&apos;ll get back to you as soon as I can.
              </p>
              <Button
                variant="outline"
                className="mt-6 border-border/60 text-muted-foreground hover:text-foreground"
                onClick={() => setSubmitted(false)}
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
                    placeholder="Your name"
                    required
                    className="bg-background/50 border-border/60 focus:border-primary/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm text-muted-foreground">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    required
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
                  placeholder="What's on your mind?"
                  rows={5}
                  required
                  minLength={25}
                  maxLength={350}
                  className="bg-background/50 border-border/60 focus:border-primary/50 resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                size="lg"
              >
                Send message
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
