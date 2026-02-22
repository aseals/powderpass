"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { waitlistSchema, WaitlistFormData } from "@/lib/validations";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

const neighborhoods = [
  "Williamsburg",
  "Upper West Side",
  "Bushwick",
  "Hoboken",
  "Lower East Side",
  "Astoria",
  "Brooklyn Heights",
  "Other",
];

export default function WaitlistForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: { depositIntent: false },
  });

  const onSubmit = async (data: WaitlistFormData) => {
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error || "Something went wrong");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Try again.");
    }
  };

  return (
    <section id="waitlist" className="py-24 px-6 md:px-12 bg-[#111111]">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-black tracking-[-0.02em] text-white mb-4"
        >
          Reserve your spot
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[#999999] mb-12"
        >
          We launch this winter. Get early access and locked-in pricing.
        </motion.p>

        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 bg-[#4A9B7F] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">You&apos;re on the list.</h3>
              <p className="text-[#999999]">We&apos;ll be in touch when we launch. No spam, ever.</p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  id="name"
                  label="Name"
                  placeholder="Your name"
                  error={errors.name?.message}
                  {...register("name")}
                  className="bg-[#1A1A1A] border-[#333333] text-white placeholder:text-[#555555] focus:border-[#4A9B7F]"
                />
                <Input
                  id="email"
                  type="email"
                  label="Email"
                  placeholder="your@email.com"
                  error={errors.email?.message}
                  {...register("email")}
                  className="bg-[#1A1A1A] border-[#333333] text-white placeholder:text-[#555555] focus:border-[#4A9B7F]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-[#FAFAFA]">Neighborhood</label>
                <select
                  {...register("neighborhood")}
                  className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#333333] rounded-lg text-white focus:outline-none focus:border-[#4A9B7F] transition-colors"
                >
                  <option value="">Select your neighborhood</option>
                  {neighborhoods.map((n) => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
                {errors.neighborhood && (
                  <p className="text-sm text-red-400">{errors.neighborhood.message}</p>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-[#FAFAFA]">Which pass do you have?</label>
                <select
                  {...register("passType")}
                  className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#333333] rounded-lg text-white focus:outline-none focus:border-[#4A9B7F] transition-colors"
                >
                  <option value="">Select your pass</option>
                  <option value="ikon">Ikon Pass</option>
                  <option value="epic">Epic Pass</option>
                  <option value="indy">Indy Pass</option>
                  <option value="other">Other</option>
                  <option value="none">None</option>
                </select>
                {errors.passType && (
                  <p className="text-sm text-red-400">{errors.passType.message}</p>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-[#FAFAFA]">How many trips last season?</label>
                <select
                  {...register("tripsLastSeason")}
                  className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#333333] rounded-lg text-white focus:outline-none focus:border-[#4A9B7F] transition-colors"
                >
                  <option value="">Select trips</option>
                  <option value="0-5">0–5 trips</option>
                  <option value="6-10">6–10 trips</option>
                  <option value="11-20">11–20 trips</option>
                  <option value="20+">20+ trips</option>
                </select>
                {errors.tripsLastSeason && (
                  <p className="text-sm text-red-400">{errors.tripsLastSeason.message}</p>
                )}
              </div>

              <div className="flex items-start gap-3 pt-2">
                <input
                  type="checkbox"
                  id="depositIntent"
                  {...register("depositIntent")}
                  className="mt-1 w-4 h-4 rounded border-[#333333] bg-[#1A1A1A] accent-[#4A9B7F]"
                />
                <label htmlFor="depositIntent" className="text-sm text-[#CCCCCC] leading-relaxed">
                  I&apos;ll put down a <strong className="text-white">$25 refundable deposit</strong> to lock in early pricing
                </label>
              </div>

              {status === "error" && (
                <p className="text-sm text-red-400 bg-red-400/10 px-4 py-3 rounded-lg">
                  {errorMessage}
                </p>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={status === "loading"}
                className="w-full bg-[#4A9B7F] hover:bg-[#3A8B6F] text-white border-0"
              >
                {status === "loading" ? "Joining..." : "Join Waitlist"}
              </Button>

              <p className="text-center text-xs text-[#555555]">
                We&apos;ll email you when we launch. No spam, ever.
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
