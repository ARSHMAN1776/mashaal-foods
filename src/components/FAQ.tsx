import { SectionLabel } from "@/components/SectionLabel";

const faqs = [
  {
    question: "Do you deliver?",
    answer:
      "Yes — delivery runs from both our Rahim Yar Khan and Lahore branches. Message the branch on WhatsApp with your address and we'll confirm timing before you pay.",
  },
  {
    question: "What are your hours?",
    answer:
      "Rahim Yar Khan (Total Pump, Khanpur Road) is open daily, 12:00 PM to 2:00 AM. Lahore (Raiwind) is open daily too — call or WhatsApp the branch to confirm timings.",
  },
  {
    question: "Where is the Lahore branch?",
    answer:
      "Mashaal Petroleum, Kasur Road, Mohallah Islamabad, Raiwind, Lahore. Call or WhatsApp +92 306 6953677 to order.",
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
