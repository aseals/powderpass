"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What mountains do you go to?",
    answer: "Hunter, Windham, and Mountain Creek to start. Killington and Vermont runs coming soon.",
  },
  {
    question: "What if I need to cancel a trip?",
    answer: "48+ hours notice: full credit back. Under 24 hours: no refund. We'll always give you as much flexibility as we can.",
  },
  {
    question: "How is this so cheap?",
    answer: "We negotiate bulk rates with existing operators. They get guaranteed riders, you get cheaper seats. Everyone wins.",
  },
  {
    question: "What about gear?",
    answer: "Bring it with you for now. Gear storage is coming — it's one of our most-requested features.",
  },
  {
    question: "Is my $25 deposit refundable?",
    answer: "Yes, 100% refundable. If we don't launch, or you change your mind before the season starts, you get it back. No questions asked.",
  },
  {
    question: "When do you launch?",
    answer: "We're targeting the 2025-2026 ski season. Joining the waitlist now locks in early pricing.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#E0E0E0]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left"
        aria-expanded={open}
      >
        <span className="text-lg font-medium text-[#111111] pr-8">{question}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 w-6 h-6 text-[#999999]"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-[#666666] leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 px-6 md:px-12 bg-[#FAFAFA]">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-black tracking-[-0.02em] text-[#111111] mb-12"
        >
          Questions
        </motion.h2>
        <div>
          {faqs.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
