"use client";

import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";

export default function DonationSection() {
  const currencies = ["GHC", "$", "£"];
  const [selectedCurrency, setSelectedCurrency] = useState("GHC");
  const [customAmount, setCustomAmount] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const amount = customAmount ? Number(customAmount) : 0;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Donating ${amount} ${selectedCurrency}`);
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
            <p className="text-sm uppercase tracking-[0.35em] text-primary/70 mb-4">
              Support our mission
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Fuel real impact with your donation
            </h2>
            <p className="text-primary/80 leading-relaxed max-w-2xl">
              Every contribution helps Cultural Diplomat Impact Organization deliver mentorship, scholarships, and cultural diplomacy programs that
              lift young people and communities across Africa.
            </p>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            whileHover={{ y: -2 }}
            className="rounded-[2rem] border border-primary/10 bg-white p-8 shadow-lg shadow-primary/5 transition-all"
          >
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-sm font-semibold text-primary mb-3">Donate</p>
                <div className="grid grid-cols-3 gap-3">
                  {currencies.map((currency) => (
                    <button
                      key={currency}
                      type="button"
                      onClick={() => {
                        setSelectedCurrency(currency);
                        setSubmitted(false);
                      }}
                      className={`rounded-2xl border px-4 py-3 text-sm font-semibold transition-all ${
                        selectedCurrency === currency
                          ? "bg-accent text-white border-accent"
                          : "bg-white text-primary/70 border-primary/20 hover:bg-accent/10"
                      }`}
                    >
                      {currency}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-primary" htmlFor="customAmount">
                  Amount
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
                  className="mt-3 w-full rounded-2xl border border-primary/20 bg-loblolly/80 px-4 py-3 text-primary outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20"
                />
              </div>

              <div className="rounded-2xl bg-primary/5 p-4 text-sm text-primary/80 border border-primary/10">
                <p className="font-semibold text-primary mb-2">What your gift supports</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Mentorship and leadership training for youth</li>
                  <li>Scholarships, stipends, and program resources</li>
                  <li>Community events and cultural exchange opportunities</li>
                </ul>
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-accent px-6 py-4 text-base font-bold text-white hover:bg-hover-blue transition-all hover:bg-hover-blue hover:shadow-lg"
              >
                Donate Now
              </button>

              {submitted && (
                <div className="rounded-2xl border border-nepal/30 bg-nepal/10 p-4 text-sm text-primary">
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
