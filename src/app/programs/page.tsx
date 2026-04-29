"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

type Program = {
  id: number;
  title: string;
  icon: string;
  description: string;
  duration: string;
  benefits: string[];
  format: string;
  investment: string;
};

export default function Programs() {
  const [programs, setPrograms] = useState<Program[]>([]);

  useEffect(() => {
    const loadPrograms = async () => {
      try {
        const response = await fetch("/api/programs", { cache: "no-store" });
        const data = await response.json();
        setPrograms(Array.isArray(data.programs) ? (data.programs as Program[]) : []);
      } catch {
        setPrograms([]);
      }
    };

    void loadPrograms();
  }, []);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 md:py-32 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/gallery/worldmap.png')",
          }}
        />
        <div className="absolute inset-0 bg-[#011C40]/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-highlight">Programs</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">
              Comprehensive pathways designed to transform your potential into impact
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {programs.map((program, i) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="text-4xl sm:text-6xl mb-4">{program.icon}</div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {program.description}
                  </p>

                  {/* Quick Info */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="p-4 bg-highlight/10 rounded-lg">
                      <p className="text-tertiary font-bold text-sm">Duration</p>
                      <p className="text-primary font-semibold">
                        {program.duration}
                      </p>
                    </div>
                    <div className="p-4 bg-highlight/10 rounded-lg">
                      <p className="text-tertiary font-bold text-sm">Investment</p>
                      <p className="text-primary font-semibold">
                        {program.investment}
                      </p>
                    </div>
                  </div>

                  <motion.a
                    href="/apply"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block px-8 py-4 bg-tertiary text-white rounded-lg font-bold hover:shadow-lg transition-all cursor-pointer"
                  >
                    Apply to This Program
                  </motion.a>
                </div>

                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  {/* Benefits */}
                  <div className="p-8 rounded-2xl bg-gradient-to-br from-highlight/20 to-secondary/10 border border-highlight/30">
                    <h4 className="font-bold text-primary mb-6">
                      What You'll Get:
                    </h4>
                    <ul className="space-y-3">
                      {program.benefits.map((benefit, j) => (
                        <motion.li
                          key={j}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: j * 0.05 }}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle size={20} className="text-tertiary flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Format */}
                    <div className="mt-6 pt-6 border-t border-highlight/30">
                      <p className="text-tertiary font-bold text-sm mb-2">Format</p>
                      <p className="text-gray-700">{program.format}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Application */}
      <section className="py-20 md:py-32 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Who Can <span className="text-highlight">Apply?</span>
              </h2>
              <ul className="space-y-4">
                {[
                  "Ages 18-35",
                  "African residents or diaspora",
                  "Passionate about leadership and impact",
                  "Committed to community development",
                  "Basic computer literacy",
                  "English proficiency",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-tertiary rounded-full"></div>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-8 rounded-2xl bg-highlight/20 border border-highlight/50"
            >
              <h3 className="text-2xl font-bold mb-4">Application Process</h3>
              <ol className="space-y-4">
                {[
                  "Complete online application form",
                  "Submit required documents",
                  "Participate in phone screening",
                  "Attend interview (if selected)",
                  "Receive decision and onboarding",
                ].map((step, i) => (
                  <li key={i} className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center font-bold text-sm">
                      {i + 1}
                    </div>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <Link href="/apply">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-tertiary text-white rounded-lg font-bold hover:shadow-lg transition-all"
              >
                Start Your Application
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
