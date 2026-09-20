import { cn } from "@/lib/cn";

/**
 * Standard "not professional advice" notice. Use wherever agriculture, livestock,
 * AI, education or business guidance is discussed.
 */
export function AdviceNotice({ dark = false, className }: { dark?: boolean; className?: string }) {
  return (
    <p className={cn("max-w-3xl text-sm leading-relaxed", dark ? "text-white/80" : "text-deep/75", className)}>
      <span className="font-sans font-semibold">General information only.</span> Content on this website is not
      agricultural, veterinary, medical, legal or financial advice, and it is not a diagnosis. For decisions about a
      specific crop, animal, business or legal matter, consult a suitably qualified professional.
    </p>
  );
}
