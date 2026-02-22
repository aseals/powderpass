"use client";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Link from "next/link";

const tiers = [
  {
    name: "WEEKENDER",
    price: "$299",
    rides: "8 rides",
    perTrip: "~$37/trip",
    popular: false,
    description: "For the occasional weekend warrior.",
  },
  {
    name: "REGULAR",
    price: "$499",
    rides: "18 rides",
    perTrip: "~$28/trip",
    popular: true,
    description: "Most popular. The sweet spot.",
  },
  {
    name: "UNLIMITED",
    price: "$699",
    rides: "Unlimited rides",
    perTrip: "~$23/trip*",
    popular: false,
    description: "For the die-hards who live for pow days.",
  },
];

export default function Tiers() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#F5F5F5]">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-black tracking-[-0.02em] text-[#111111] mb-4"
        >
          Choose your season
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[#666666] mb-16"
        >
          All plans include access to all mountains. Tier selection happens after you join.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className={`relative flex flex-col p-8 rounded-2xl border transition-shadow duration-300 hover:shadow-lg ${
                tier.popular
                  ? "bg-[#111111] text-[#FAFAFA] border-[#111111]"
                  : "bg-white text-[#111111] border-[#E0E0E0]"
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#4A9B7F] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  Most Popular
                </span>
              )}
              <p className="text-xs font-bold tracking-widest uppercase mb-6 text-[#999999]">
                {tier.name}
              </p>
              <p className={`text-5xl font-black tracking-tight ${tier.popular ? "text-white" : "text-[#111111]"}`}>
                {tier.price}
              </p>
              <p className="text-sm mt-1 text-[#999999]">
                per season
              </p>
              <div className={`my-6 border-t ${tier.popular ? "border-[#333333]" : "border-[#EEEEEE]"}`} />
              <p className={`text-xl font-bold ${tier.popular ? "text-white" : "text-[#111111]"}`}>
                {tier.rides}
              </p>
              <p className="text-lg mt-1 text-[#4A9B7F]">
                {tier.perTrip}
              </p>
              <p className={`mt-4 text-sm leading-relaxed flex-1 ${tier.popular ? "text-[#999999]" : "text-[#666666]"}`}>
                {tier.description}
              </p>
              <Link href="#waitlist" className="mt-8 block">
                <Button
                  variant={tier.popular ? "outline" : "primary"}
                  className={`w-full ${tier.popular ? "border-white text-white hover:bg-white hover:text-[#111111]" : ""}`}
                >
                  Join Waitlist
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
        <p className="mt-4 text-xs text-[#999999]">* at 30 trips</p>
      </div>
    </section>
  );
}
