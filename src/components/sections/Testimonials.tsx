"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Kwame Asante",
      role: "Young Entrepreneur",
      image: "👨🏿",
      content:
        "CDIO changed my life. Through their entrepreneurship program, I launched my tech startup and now employ five others. The mentorship was invaluable.",
      rating: 5,
    },
    {
      name: "Ama Owusu",
      role: "Cultural Diplomat",
      image: "👩🏿",
      content:
        "The cultural diplomacy internship opened doors I never imagined. I've worked with international organizations and discovered my passion for global impact.",
      rating: 5,
    },
    {
      name: "Nana Boakye",
      role: "Leadership Fellow",
      image: "👨🏿",
      content:
        "Being part of the CDIO community transformed how I view leadership. The faith-centered approach resonates deeply with my values.",
      rating: 5,
    },
    {
      name: "Zainab Mohammed",
      role: "Program Graduate",
      image: "👩🏿",
      content:
        "CDIO provided the funding and support I needed to turn my business idea into reality. Now I'm giving back to the community.",
      rating: 5,
    },
  ];

  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoplay, testimonials.length]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setAutoplay(false);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoplay(false);
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-deep-blue/5 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-deep-blue mb-4">
            What Our <span className="text-gold">Community</span> Says
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from leaders and entrepreneurs who have been transformed through CDIO.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-2xl"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-8 md:p-12 rounded-2xl bg-white border-2 border-gold/30 hover:border-gold/60 transition-all shadow-lg"
                >
                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Star
                          size={20}
                          className="fill-gold text-gold"
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* Content */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-gray-700 mb-8 italic leading-relaxed"
                  >
                    "{testimonials[current].content}"
                  </motion.p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.3 }}
                      className="w-14 h-14 bg-gold/20 rounded-full flex items-center justify-center text-3xl"
                    >
                      {testimonials[current].image}
                    </motion.div>
                    <div>
                      <p className="font-bold text-deep-blue">
                        {testimonials[current].name}
                      </p>
                      <p className="text-sm text-gold">
                        {testimonials[current].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-6 mt-12">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="p-3 rounded-full bg-gold/20 hover:bg-gold/40 transition-all border border-gold/50 text-deep-blue"
            >
              <ChevronLeft size={24} />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => {
                    setCurrent(i);
                    setAutoplay(false);
                  }}
                  animate={{
                    width: i === current ? 32 : 8,
                    backgroundColor:
                      i === current ? "#D4AF37" : "#D4AF37" + "40",
                  }}
                  className="h-2 rounded-full transition-all"
                ></motion.button>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="p-3 rounded-full bg-gold/20 hover:bg-gold/40 transition-all border border-gold/50 text-deep-blue"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </div>

        {/* View all testimonials */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="/testimonials"
            className="inline-flex items-center gap-2 text-deep-blue font-bold hover:text-gold transition-colors"
          >
            View All Testimonials →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
