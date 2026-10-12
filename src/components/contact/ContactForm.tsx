"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { profile } from "@/data/profile";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const empty: FormState = { name: "", email: "", message: "" };

export function ContactForm() {
  const [values, setValues] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [delivered, setDelivered] = useState(false);

  function validate(next: FormState) {
    const result: Partial<FormState> = {};
    if (!next.name.trim()) result.name = "Name is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(next.email)) result.email = "Enter a valid email.";
    if (next.message.trim().length < 12) result.message = "Message should be at least 12 characters.";
    return result;
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const payload = (await response.json()) as { ok?: boolean; error?: string };
      if (!response.ok) throw new Error(payload.error || "Request failed");
      setDelivered(true);
      setStatus("success");
      setValues(empty);
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <Field
        id="name"
        label="Name"
        value={values.name}
        error={errors.name}
        onChange={(value) => setValues((prev) => ({ ...prev, name: value }))}
      />
      <Field
        id="email"
        label="Email"
        type="email"
        value={values.email}
        error={errors.email}
        onChange={(value) => setValues((prev) => ({ ...prev, email: value }))}
      />
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(event) => setValues((prev) => ({ ...prev, message: event.target.value }))}
          className="w-full rounded-2xl border border-line bg-surface px-4 py-3 text-sm text-ink outline-none focus:border-accent"
        />
        {errors.message && <p className="mt-1 text-xs text-accent">{errors.message}</p>}
      </div>
      <Button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message"}
      </Button>
      {status === "success" && delivered && (
        <p className="text-sm text-muted" role="status">
          Thanks — your message was sent. I will get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-accent" role="alert">
          Something went wrong. Try again or use the email link.
        </p>
      )}
    </form>
  );
}

function Field({
  id,
  label,
  value,
  error,
  onChange,
  type = "text",
}: {
  id: string;
  label: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-2xl border border-line bg-surface px-4 py-3 text-sm text-ink outline-none focus:border-accent"
      />
      {error && <p className="mt-1 text-xs text-accent">{error}</p>}
    </div>
  );
}
