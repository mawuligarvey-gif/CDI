"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-deep-blue to-deep-blue/80 text-white flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* 404 Animation */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 2, -2, 0],
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="text-9xl font-bold text-gold mb-6"
          >
            404
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-gray-200 mb-8 leading-relaxed">
            Oops! It seems like the page you're looking for has wandered off to explore new opportunities. Let's get you back on track.
          </p>

          {/* Navigation Links */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gold text-deep-blue rounded-lg font-bold text-lg hover:shadow-gold transition-all"
              >
                Go Home
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
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-bold text-lg hover:border-gold transition-all"
              >
                Contact Support
              </motion.button>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-gold/30">
            <p className="text-sm text-gray-200 mb-4">Quick Navigation:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Programs", href: "/programs" },
                { name: "Apply", href: "/apply" },
              ].map((link) => (
                <Link key={link.name} href={link.href}>
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 rounded-lg bg-gold/20 hover:bg-gold/40 transition-all cursor-pointer text-sm"
                  >
                    {link.name}
                  </motion.span>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
