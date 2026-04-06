"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Kwame Asante",
      role: "Young Entrepreneur",
      image: "👨🏿",
      rating: 5,
      content:
        "CDIO changed my life. Through their entrepreneurship program, I launched my tech startup and now employ five others. The mentorship was invaluable.",
    },
    {
      name: "Ama Owusu",
      role: "Cultural Diplomat",
      image: "👩🏿",
      rating: 5,
      content:
        "The cultural diplomacy internship opened doors I never imagined. I've worked with international organizations and discovered my passion for global impact.",
    },
    {
      name: "Nana Boakye",
      role: "Leadership Fellow",
      image: "👨🏿",
      rating: 5,
      content:
        "Being part of the CDIO community transformed how I view leadership. The faith-centered approach resonates deeply with my values.",
    },
    {
      name: "Zainab Mohammed",
      role: "Program Graduate",
      image: "👩🏿",
      rating: 5,
      content:
        "CDIO provided the funding and support I needed to turn my business idea into reality. Now I'm giving back to the community.",
    },
    {
      name: "Kofi Mensah",
      role: "Mentee",
      image: "👨🏿",
      rating: 5,
      content:
        "My mentor has been instrumental in my career development. The guidance and connections I received are priceless.",
    },
    {
      name: "Akosua Yeboah",
      role: "Business Owner",
      image: "👩🏿",
      rating: 5,
      content:
        "CDIO believes in you when you believe in yourself. They provided more than just funding—they provided a family.",
    },
  ];

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-deep-blue text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Testimonials
            </h1>
            <p className="text-lg sm:text-xl text-gray-200">
              Stories of transformation from our community members
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-8 rounded-2xl bg-white border-2 border-gold/30 hover:border-gold/60 hover:shadow-lg transition-all relative overflow-hidden"
              >
                {/* Quote icon background */}
                <Quote
                  size={40}
                  className="absolute top-4 right-4 text-gold/10"
                />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star
                      key={j}
                      size={16}
                      className="fill-gold text-gold"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-gold/20">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center text-2xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <p className="font-bold text-deep-blue">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gold">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 md:py-32 bg-deep-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Community <span className="text-gold">Impact</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "1000+", label: "Lives Transformed" },
              { number: "87%", label: "Employment Rate" },
              { number: "500K+", label: "GHS Distributed" },
              { number: "48", label: "Partners" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-5xl font-bold text-gold mb-2">{stat.number}</p>
                <p className="text-gray-200">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-deep-blue mb-6">
              Your Story Could Be Next
            </h2>
            <motion.a
              href="/apply"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-gold text-deep-blue rounded-lg font-bold text-lg hover:shadow-lg transition-all cursor-pointer"
            >
              Start Your Journey
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
