"use client";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Join the waitlist",
    description: "$25 deposit, fully refundable. No commitment yet.",
  },
  {
    number: "02",
    title: "Pick your tier",
    description: "8 rides, 18 rides, or unlimited. Whatever fits your season.",
  },
  {
    number: "03",
    title: "Ride all season",
    description: "Hunter, Windham, Mountain Creek, and more coming.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 md:px-12 bg-[#FAFAFA]">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-black tracking-[-0.02em] text-[#111111] mb-16"
        >
          How it works
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col"
            >
              <span className="text-7xl font-black text-[#EEEEEE] leading-none">
                {step.number}
              </span>
              <h3 className="mt-4 text-xl font-bold text-[#111111] tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 text-[#666666] leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
