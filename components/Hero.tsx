"use client";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col bg-[#FAFAFA]">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-6">
        <div className="font-bold tracking-tight text-[#111111] text-lg">
          POWDER PASS
        </div>
        <div className="flex items-center gap-6 text-sm text-[#666666]">
          <Link href="#how-it-works" className="hover:text-[#111111] transition-colors">
            About
          </Link>
          <Link href="#faq" className="hover:text-[#111111] transition-colors">
            FAQ
          </Link>
          <Link href="#waitlist">
            <Button variant="outline" size="sm">
              Join Waitlist
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center max-w-4xl mx-auto w-full">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-black tracking-[-0.02em] text-[#111111] leading-[1.05]"
        >
          Your season pass
          <br />
          finally makes sense.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="mt-6 text-xl md:text-2xl text-[#666666] font-normal"
        >
          $30 rides to Hunter, Windham, and more. Not $100.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="mt-8 flex flex-col items-center gap-3"
        >
          <Link href="#waitlist">
            <Button size="lg" className="text-lg px-10 py-4">
              Join the Waitlist →
            </Button>
          </Link>
          <p className="text-sm text-[#999999]">
            $25 refundable deposit to reserve your spot
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-[#CCCCCC] rounded-full flex items-start justify-center pt-2"
          >
            <div className="w-1 h-2 bg-[#CCCCCC] rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
