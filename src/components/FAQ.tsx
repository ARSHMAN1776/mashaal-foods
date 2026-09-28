import { SectionLabel } from "@/components/SectionLabel";

const faqs = [
  {
    question: "Do you deliver?",
    answer:
      "Yes — delivery runs from our Rahim Yar Khan outlet. Message us on WhatsApp with your address and we'll confirm timing before you pay.",
  },
  {
    question: "What are your hours?",
    answer: "Daily, 12:00 PM to 2:00 AM, at Total Pump, Khanpur Road, RYK.",
  },
  {
    question: "When does the Lahore branch open?",
    answer:
      "We're finalizing our Raiwind Road location in Lahore now. Message us on WhatsApp to be notified the day it opens.",
  },
  {
    question: "How do I pay?",
    answer: "Cash on pickup or on delivery, for now.",
  },
  {
    question: "Interested in a franchise?",
    answer:
      "Send \"Franchise Enquiry\" on WhatsApp and our team will get back to you with details.",
  },
];

export function FAQ() {
  return (
    <section className="bg-paper-2 py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <SectionLabel>Good To Know</SectionLabel>
        <h2 className="font-display text-[36px] sm:text-[46px] leading-[0.95] text-ink text-balance">
          Questions? Answered.
        </h2>

        <div className="mt-10 divide-y divide-dashed divide-line">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[16px] font-bold text-ink">
                {faq.question}
                <span className="shrink-0 text-ember text-[20px] leading-none transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-muted">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
