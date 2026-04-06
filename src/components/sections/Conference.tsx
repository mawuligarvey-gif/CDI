"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Conference() {
  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      {/* Parallax background */}
      <motion.div
        initial={{ y: 0 }}
        whileInView={{ y: -50 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ type: "tween", ease: "easeOut" }}
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 600'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%230a1f44;stop-opacity:0.1'/%3E%3Cstop offset='100%25' style='stop-color:%23D4AF37;stop-opacity:0.1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='600' fill='url(%23grad)'/%3E%3C/svg%3E")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4 px-4 py-2 rounded-full border border-gold/50 bg-gold/10"
            >
              <span className="text-gold text-sm font-bold">🎯 ANNUAL EVENT</span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-deep-blue mb-6">
              Cultural Diplomat <span className="text-gold">Impact Conference</span>
            </h2>

            <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
              Join us for our flagship annual conference where young leaders, entrepreneurs, and community changemakers gather to network, learn, and inspire.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Industry-leading keynote speakers",
                "Interactive workshops & masterclasses",
                "Networking with global leaders",
                "Startup pitch competition",
                "Cultural performances & celebrations",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-gold text-xl"
                  >
                    ✨
                  </motion.span>
                  {item}
                </motion.li>
              ))}
            </ul>

            <Link href="/conference">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gold text-deep-blue rounded-lg font-bold text-lg hover:shadow-gold transition-all"
              >
                Learn About the Conference
              </motion.button>
            </Link>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-96 md:h-[450px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/gallery/cmn_29.jpg"
                alt="Cultural Diplomat Impact Conference"
                fill
                className="object-cover"
                priority
              />

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-4 left-4 bg-white/90 px-4 py-2 rounded-full text-sm font-bold text-deep-blue shadow-lg z-10"
              >
                200+ Attendees
              </motion.div>
            </div>

            {/* Decorative circles */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute -top-8 -right-8 w-40 h-40 border-2 border-gold/30 rounded-full pointer-events-none"
            ></motion.div>
            <motion.div
              animate={{
                scale: [1.1, 1, 1.1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: 1,
              }}
              className="absolute -bottom-8 -left-8 w-48 h-48 border-2 border-gold/20 rounded-full pointer-events-none"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
