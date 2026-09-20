"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { contactInfo } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { INQUIRY_TYPES, LIMITS, validateContact, type ContactField, type ContactValues } from "@/lib/contact";

type Status = "idle" | "sending" | "success" | "unavailable" | "rate-limited" | "error";
type Errors = Partial<Record<ContactField, string>>;

const emptyValues: ContactValues = {
  name: "",
  email: "",
  phone: "",
  inquiryType: INQUIRY_TYPES[0],
  subject: "",
  message: "",
};

const inputClass =
  "w-full rounded-lg border border-deep/30 bg-white px-3.5 py-3 font-sans text-base text-deep placeholder:text-deep/50 focus-visible:border-field-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-field-700 aria-[invalid=true]:border-red-700";

function Field({
  name,
  label,
  required,
  error,
  hint,
  children,
}: {
  name: ContactField;
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={`field-${name}`} className="mb-1.5 block font-sans text-sm font-semibold">
        {label}
        {required ? <span className="text-red-700"> *</span> : <span className="font-normal text-deep/70"> (optional)</span>}
      </label>
      {children}
      {hint && !error ? (
        <p id={`hint-${name}`} className="mt-1.5 font-sans text-sm text-deep/70">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={`error-${name}`} className="mt-1.5 flex items-start gap-1.5 font-sans text-sm text-red-700">
          <AlertCircle aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function ContactForm({ defaultSubject = "" }: { defaultSubject?: string }) {
  const [values, setValues] = useState<ContactValues>({ ...emptyValues, subject: defaultSubject });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const successRef = useRef<HTMLDivElement>(null);

  // Move focus to the confirmation so keyboard and screen-reader users notice it.
  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  function onChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name as ContactField]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  function describedBy(name: ContactField, hasHint = false) {
    if (errors[name]) return `error-${name}`;
    return hasHint ? `hint-${name}` : undefined;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const found = validateContact(values);
    setErrors(found);
    const firstInvalid = (Object.keys(found) as ContactField[])[0];
    if (firstInvalid) {
      setStatus("idle");
      document.getElementById(`field-${firstInvalid}`)?.focus();
      return;
    }

    const honeypot = (new FormData(event.currentTarget).get("website") as string | null) ?? "";
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, website: honeypot }),
      });
      // "Message sent" is shown only when the server confirms the email service accepted it.
      if (response.ok) {
        setStatus("success");
        setValues(emptyValues);
      } else if (response.status === 501) {
        setStatus("unavailable");
      } else if (response.status === 429) {
        setStatus("rate-limited");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const mailto = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
    `${values.inquiryType}: ${values.subject || "Website inquiry"}`,
  )}&body=${encodeURIComponent(`${values.message}\n\n${values.name}${values.phone ? `\n${values.phone}` : ""}`)}`;

  if (status === "success") {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        className="rounded-2xl border border-field-700/40 bg-field-100 p-8 focus-visible:outline-none"
      >
        <CheckCircle2 aria-hidden="true" className="h-8 w-8 text-field-700" />
        <h3 className="mt-4 font-sans text-2xl font-semibold tracking-tight">Message sent</h3>
        <p className="mt-2 text-base leading-relaxed text-deep/85">
          Thank you for contacting Ntinginya Tech. We will reply to the email address you gave us.
        </p>
        <Button variant="outline" className="mt-6" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </div>
    );
  }

  const fallback = (
    <>
      You can{" "}
      <a href={mailto} className="font-semibold underline underline-offset-4">
        email us at {contactInfo.email}
      </a>
      , call{" "}
      <a href={contactInfo.phoneHref} className="font-semibold underline underline-offset-4">
        {contactInfo.phone}
      </a>{" "}
      or{" "}
      <a href={contactInfo.whatsappHref} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4">
        message us on WhatsApp<span className="sr-only"> (opens in a new tab)</span>
      </a>
      .
    </>
  );

  return (
    <form onSubmit={onSubmit} noValidate className="relative space-y-5" aria-describedby="form-status">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field name="name" label="Full name" required error={errors.name}>
          <input
            id="field-name"
            name="name"
            type="text"
            autoComplete="name"
            maxLength={LIMITS.name}
            value={values.name}
            onChange={onChange}
            aria-required="true"
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={describedBy("name")}
            className={inputClass}
          />
        </Field>
        <Field name="email" label="Email" required error={errors.email}>
          <input
            id="field-email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            maxLength={LIMITS.email}
            value={values.email}
            onChange={onChange}
            aria-required="true"
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={describedBy("email")}
            className={inputClass}
          />
        </Field>
        <Field name="phone" label="Phone" error={errors.phone}>
          <input
            id="field-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            maxLength={LIMITS.phone}
            value={values.phone}
            onChange={onChange}
            aria-invalid={errors.phone ? true : undefined}
            aria-describedby={describedBy("phone")}
            className={inputClass}
          />
        </Field>
        <Field name="inquiryType" label="Type of inquiry" required error={errors.inquiryType}>
          <select
            id="field-inquiryType"
            name="inquiryType"
            value={values.inquiryType}
            onChange={onChange}
            aria-required="true"
            aria-invalid={errors.inquiryType ? true : undefined}
            aria-describedby={describedBy("inquiryType")}
            className={inputClass}
          >
            {INQUIRY_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field name="subject" label="Subject" required error={errors.subject}>
        <input
          id="field-subject"
          name="subject"
          type="text"
          maxLength={LIMITS.subject}
          value={values.subject}
          onChange={onChange}
          aria-required="true"
          aria-invalid={errors.subject ? true : undefined}
          aria-describedby={describedBy("subject")}
          className={inputClass}
        />
      </Field>

      <Field name="message" label="Message" required error={errors.message}>
        <textarea
          id="field-message"
          name="message"
          rows={6}
          maxLength={LIMITS.message}
          value={values.message}
          onChange={onChange}
          aria-required="true"
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={describedBy("message")}
          className={cn(inputClass, "resize-y")}
        />
      </Field>

      {/* Honeypot: hidden from people, tempting to bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="field-website">Website</label>
        <input id="field-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div id="form-status" aria-live="polite">
        {status === "unavailable" ? (
          <p className="rounded-lg border border-maize-700/50 bg-maize-300/40 p-4 font-sans text-[0.9375rem] leading-relaxed">
            Sending from this page is not available right now, so your message was not sent. {fallback}
          </p>
        ) : null}
        {status === "rate-limited" ? (
          <p role="alert" className="rounded-lg border border-maize-700/50 bg-maize-300/40 p-4 font-sans text-[0.9375rem] leading-relaxed">
            You have sent several messages in a short time, so your message was not sent. Please wait a few minutes and
            try again. {fallback}
          </p>
        ) : null}
        {status === "error" ? (
          <p role="alert" className="rounded-lg border border-red-700/40 bg-red-50 p-4 font-sans text-[0.9375rem] leading-relaxed text-red-900">
            Something went wrong and your message was not sent. Please try again. {fallback}
          </p>
        ) : null}
      </div>

      <p className="font-sans text-sm text-deep/70">
        By sending this form you agree that we may use your details to reply to you, as described in our{" "}
        <Link href="/privacy" className="underline underline-offset-4">
          Privacy Policy
        </Link>
        .
      </p>

      <Button type="submit" variant="dark" size="lg" disabled={status === "sending"} className="w-full sm:w-auto">
        {status === "sending" ? (
          <>
            <Loader2 aria-hidden="true" className="mr-2 h-4 w-4 animate-spin" />
            Sending
          </>
        ) : (
          "Talk to Ntinginya Tech"
        )}
      </Button>
    </form>
  );
}
