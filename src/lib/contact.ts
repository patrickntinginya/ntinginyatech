/**
 * Shared contact-form rules. The browser uses them for quick feedback,
 * and the API route uses them again, because only server-side validation can be trusted.
 */

export const INQUIRY_TYPES = [
  "General inquiry",
  "Partnership inquiry",
  "Technology / software inquiry",
  "Agriculture & innovation inquiry",
] as const;

export type InquiryType = (typeof INQUIRY_TYPES)[number];

export type ContactValues = {
  name: string;
  email: string;
  phone: string;
  inquiryType: string;
  subject: string;
  message: string;
};

export type ContactField = keyof ContactValues;

export const LIMITS = { name: 120, email: 200, phone: 30, subject: 200, message: 5000 } as const;
export const MIN_MESSAGE_LENGTH = 10;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_PATTERN = /^[+\d][\d\s().-]{5,}$/;

export function validateContact(values: ContactValues): Partial<Record<ContactField, string>> {
  const errors: Partial<Record<ContactField, string>> = {};
  const name = values.name.trim();
  const email = values.email.trim();
  const phone = values.phone.trim();
  const subject = values.subject.trim();
  const message = values.message.trim();

  if (!name) errors.name = "Enter your full name.";
  else if (name.length < 2) errors.name = "Enter your full name.";

  if (!email) errors.email = "Enter your email address.";
  else if (!EMAIL_PATTERN.test(email)) errors.email = "Enter a valid email address, like name@company.com.";

  if (phone && !PHONE_PATTERN.test(phone)) errors.phone = "Enter a valid phone number using digits, spaces and an optional + at the start.";

  if (!(INQUIRY_TYPES as readonly string[]).includes(values.inquiryType)) errors.inquiryType = "Choose the kind of inquiry.";

  if (!subject) errors.subject = "Add a short subject.";

  if (!message) errors.message = "Tell us how we can help.";
  else if (message.length < MIN_MESSAGE_LENGTH) errors.message = `Write at least ${MIN_MESSAGE_LENGTH} characters so we can understand your request.`;
  // Messages stuffed with links are almost always spam.
  else if ((message.match(/https?:\/\//gi) ?? []).length > 3) errors.message = "Please include no more than three links.";

  return errors;
}
