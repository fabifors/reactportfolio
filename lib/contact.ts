export type ContactSubmission = {
  name: string;
  email: string;
  message: string;
};

export async function submitContact(data: ContactSubmission): Promise<void> {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to submit contact form");
  }
}
