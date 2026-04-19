"use client";

import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";

export default function DonationSection() {
  const presetAmounts = [25, 50, 100, 250];
  const [donationType, setDonationType] = useState<"one-time" | "recurring">("one-time");
  const [selectedAmount, setSelectedAmount] = useState(100);
  const [customAmount, setCustomAmount] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const amount = customAmount ? Number(customAmount) : selectedAmount;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Donating ${amount} GHS as ${donationType}`);
    setSubmitted(true);
  };

  return (
    <section id="donate" className="py-20 md:py-32 bg-loblolly">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr] items-center"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-deep-blue/70 mb-4">
              Support our mission
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-deep-blue mb-4">
              Fuel real impact with your donation
            </h2>
            <p className="text-deep-blue/80 leading-relaxed max-w-2xl">
              Every contribution helps CDIO deliver mentorship, scholarships, and cultural diplomacy programs that
              lift young people and communities across Africa.
            </p>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            whileHover={{ y: -2 }}
            className="rounded-[2rem] border border-deep-blue/10 bg-white p-8 shadow-lg shadow-deep-blue/5 transition-all"
          >
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-sm font-semibold text-deep-blue mb-3">Donation type</p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: "one-time", label: "One-time" },
                    { value: "recurring", label: "Monthly" },
                  ].map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => {
                        setDonationType(option.value as "one-time" | "recurring");
                        setSubmitted(false);
                      }}
                      className={`rounded-2xl border px-4 py-3 text-sm font-semibold transition-all ${
                        donationType === option.value
                          ? "bg-gold text-deep-blue border-gold"
                          : "bg-white text-deep-blue/70 border-deep-blue/20 hover:bg-gold/10"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-deep-blue mb-3">Choose an amount</p>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {presetAmounts.map((value) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => {
                        setSelectedAmount(value);
                        setCustomAmount("");
                        setSubmitted(false);
                      }}
                      className={`rounded-2xl border px-4 py-4 text-sm font-bold transition-all ${
                        selectedAmount === value && !customAmount
                          ? "bg-deep-blue text-white border-deep-blue"
                          : "bg-white text-deep-blue/80 border-deep-blue/20 hover:bg-deep-blue/5"
                      }`}
                    >
                      GHS {value}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-deep-blue" htmlFor="customAmount">
                  Custom amount
                </label>
                <input
                  id="customAmount"
                  type="number"
                  min={1}
                  value={customAmount}
                  onChange={(event) => {
                    setCustomAmount(event.target.value);
                    setSubmitted(false);
                  }}
                  placeholder="Enter amount"
                  className="mt-3 w-full rounded-2xl border border-deep-blue/20 bg-loblolly/80 px-4 py-3 text-deep-blue outline-none transition-all focus:border-gold focus:ring-2 focus:ring-gold/20"
                />
              </div>

              <div className="rounded-2xl bg-deep-blue/5 p-4 text-sm text-deep-blue/80 border border-deep-blue/10">
                <p className="font-semibold text-deep-blue mb-2">What your gift supports</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Mentorship and leadership training for youth</li>
                  <li>Scholarships, stipends, and program resources</li>
                  <li>Community events and cultural exchange opportunities</li>
                </ul>
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-gold px-6 py-4 text-base font-bold text-deep-blue transition-all hover:bg-gold/90 hover:shadow-lg"
              >
                Donate Now
              </button>

              {submitted && (
                <div className="rounded-2xl border border-nepal/30 bg-nepal/10 p-4 text-sm text-deep-blue">
                  Thank you for your interest in donating! This is a placeholder flow and can be connected to Stripe,
                  Paystack, or Flutterwave in the next step.
                </div>
              )}
            </div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
