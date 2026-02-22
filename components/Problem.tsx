"use client";
import { motion } from "framer-motion";

export default function Problem() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#111111] text-[#FAFAFA]">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-black tracking-[-0.02em] mb-16"
        >
          The math is broken.
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-lg text-[#999999] mb-4">You paid</p>
            <p className="text-6xl md:text-8xl font-black tracking-tight text-white">$800</p>
            <p className="text-xl text-[#CCCCCC] mt-2">for your Ikon pass.</p>
            <p className="mt-8 text-lg text-[#999999] mb-4">You&apos;ll spend</p>
            <p className="text-6xl md:text-8xl font-black tracking-tight text-white">$1,500</p>
            <p className="text-xl text-[#CCCCCC] mt-2">getting there.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-6">
              <div className="p-6 border border-[#333333] rounded-xl">
                <p className="text-sm text-[#999999] uppercase tracking-widest mb-2">Current Reality</p>
                <p className="text-2xl font-bold text-[#FF4444]">$100/trip × 15 trips</p>
                <p className="text-4xl font-black mt-2 text-white">= $1,500</p>
              </div>
              <div className="p-6 border border-[#4A9B7F] rounded-xl bg-[#4A9B7F]/10">
                <p className="text-sm text-[#4A9B7F] uppercase tracking-widest mb-2">Powder Pass</p>
                <p className="text-2xl font-bold text-[#4A9B7F]">$499 flat</p>
                <p className="text-4xl font-black mt-2 text-white">= $33/trip</p>
              </div>
            </div>

            <blockquote className="mt-10 text-xl md:text-2xl text-[#CCCCCC] italic leading-relaxed border-l-2 border-[#4A9B7F] pl-6">
              &ldquo;Transport costs more than the pass itself.&rdquo;
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
