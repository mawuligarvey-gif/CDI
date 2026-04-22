"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-32 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <div className="px-4 py-2 rounded-full border border-accent/50 bg-accent/10 backdrop-blur-sm">
              <span className="text-accent text-sm font-medium">
                Ready to Make a Difference? 🚀
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight"
          >
            Join a Movement of <span className="text-accent">Purpose-Driven</span>{" "}
            Leaders
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Whether you're a young leader looking to grow, an entrepreneur with a vision, or an organization wanting to partner with us, we're here to empower change.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <Link href="/apply">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 204, 255, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-accent text-white hover:bg-accent rounded-lg font-bold text-base sm:text-lg hover:shadow-accent transition-all"
              >
                Apply Now
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  borderColor: "#00CCFF",
                  backgroundColor: "rgba(0, 204, 255, 0.1)",
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-primary text-primary rounded-lg font-bold text-base sm:text-lg hover:border-accent transition-all"
              >
                Partner With Us
              </motion.button>
            </Link>
          </motion.div>

          {/* Secondary CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-6 text-center"
          >
            <div className="flex flex-col items-center">
              <p className="text-3xl font-bold text-accent mb-1">100%</p>
              <p className="text-sm text-gray-600">Impact-Driven</p>
            </div>
            <div className="hidden sm:block w-px bg-accent/30"></div>
            <div className="flex flex-col items-center">
              <p className="text-3xl font-bold text-accent mb-1">Free</p>
              <p className="text-sm text-gray-600">For Most Programs</p>
            </div>
            <div className="hidden sm:block w-px bg-accent/30"></div>
            <div className="flex flex-col items-center">
              <p className="text-3xl font-bold text-accent mb-1">1000+</p>
              <p className="text-sm text-gray-600">Community Members</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12 h-1 bg-gradient-to-r from-transparent via-accent to-transparent origin-center"
        ></motion.div>
      </div>
    </section>
  );
}
