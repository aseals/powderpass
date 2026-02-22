"use client";
import { motion } from "framer-motion";

const addons = [
  {
    icon: "◻",
    title: "Gear Storage",
    description: "Store your board in the city. No hauling it on the subway anymore.",
  },
  {
    icon: "◻",
    title: "Pickup Hubs",
    description: "Williamsburg, UWS, Hoboken stops added. More neighborhoods coming.",
  },
  {
    icon: "◻",
    title: "Food Included",
    description: "Lunch packed for you. Skip the $18 lodge burger.",
  },
];

export default function AddOns() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#FAFAFA]">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-black tracking-[-0.02em] text-[#111111] mb-4"
        >
          Coming soon
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[#666666] mb-16"
        >
          We&apos;re building more. Here&apos;s what&apos;s next.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {addons.map((addon, index) => (
            <motion.div
              key={addon.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 border border-[#E0E0E0] rounded-2xl bg-white opacity-70"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl text-[#CCCCCC]">{addon.icon}</span>
                <span className="text-xs font-bold uppercase tracking-widest text-[#CCCCCC] border border-[#E0E0E0] rounded-full px-3 py-1">
                  Coming Soon
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#999999] tracking-tight">
                {addon.title}
              </h3>
              <p className="mt-2 text-[#BBBBBB] leading-relaxed">
                {addon.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
