"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16 md:pt-20 pb-8"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/images/videos/cdio.mp4" type="video/mp4" />
      </video>
      
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 md:space-y-6">
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight"
        >
          Raising Leaders{" "}
          <span className="inline-block">
            <motion.span
              className="bg-gradient-to-r from-gold via-gold to-white bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Through Faith,
            </motion.span>
          </span>
          <br />
          <span className="text-gold">Entrepreneurship & Education</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed"
        >
          Empowering the next generation of cultural leaders and innovators through mentorship, strategic training, and transformative entrepreneurship opportunities.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/apply">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(212, 175, 55, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gold text-deep-blue rounded-lg font-bold text-base sm:text-lg hover:shadow-gold transition-all"
            >
              Apply Now
            </motion.button>
          </Link>
          <Link href="/contact">
            <motion.button
              whileHover={{
                scale: 1.05,
                borderColor: "#D4AF37",
                backgroundColor: "rgba(212, 175, 55, 0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white rounded-lg font-bold text-base sm:text-lg hover:border-gold transition-all"
            >
              Partner With Us
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
