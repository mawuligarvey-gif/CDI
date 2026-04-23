"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import DonationSection from "./DonationSection";

export default function Impact() {
  const stats = [
    { label: "Students Impacted", target: 5000, suffix: "+" },
    { label: "Active Programs", target: 3, suffix: "" },
    { label: "Funding Awarded", target: 10000, suffix: " GHS", prefix: "₵" },
    { label: "Partner Organizations", target: 48, suffix: "" },
  ];

  const Counter = ({ target, suffix, prefix = "" }: { target: number; suffix: string; prefix?: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const increments = target / 30;
      const timer = setInterval(() => {
        start += increments;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 50);
      return () => clearInterval(timer);
    }, [target]);

    return (
      <span>
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </span>
    );
  };

  return (
    <>
      <section className="py-20 md:py-32 bg-primary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-10 left-10 w-72 h-72 bg-accent-blue/10 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-accent">Impact</span>
          </h2>
          <p className="text-base sm:text-lg text-white max-w-2xl mx-auto">
            Transforming lives across Africa through education, mentorship, and entrepreneurship.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-accent-blue/30 hover:border-accent-blue transition-all text-center group cursor-pointer"
            >
              {/* Icon background */}
              <div className="w-16 h-16 bg-accent-blue/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-blue/30 transition-all">
                <div className="text-2xl">📊</div>
              </div>

              {/* Counter */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 + 0.3 }}
                className="text-4xl font-bold text-accent mb-3"
              >
                <Counter target={stat.target} suffix={stat.suffix} prefix={stat.prefix} />
              </motion.div>

              {/* Label */}
              <p className="text-white font-medium">{stat.label}</p>

              {/* Accent line */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 + 0.5, duration: 0.8 }}
                className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent mt-4"
              ></motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-white mb-6">
            These numbers represent real lives changed. Join us in making a difference.
          </p>
          <motion.a
            href="#donate"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-secondary text-white rounded-lg font-bold text-lg hover:bg-accent transition-all cursor-pointer"
          >
            Donate Now
          </motion.a>
        </motion.div>
      </div>
    </section>
      <DonationSection />
    </>
  );
}
