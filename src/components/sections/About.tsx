"use client";

import { motion } from "framer-motion";
import { Heart, Lightbulb, Users } from "lucide-react";
import Image from "next/image";

export default function About() {
  const features = [
    {
      icon: Heart,
      title: "Faith-Centered",
      description:
        "Our work is grounded in faith principles that guide our mentorship and leadership development.",
    },
    {
      icon: Lightbulb,
      title: "Innovation-Driven",
      description:
        "We empower young minds to think critically and create innovative solutions for societal challenges.",
    },
    {
      icon: Users,
      title: "Community Focus",
      description:
        "Building a thriving community of purpose-driven leaders who support each other's growth.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 md:py-32 bg-white">
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
            About <span className="text-gold">CDIO</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            We are a premier NGO dedicated to transforming lives through leadership, entrepreneurship, and cultural diplomacy.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
              {/* Placeholder with gradient */}
             <div className="relative w-full h-full">
  <Image
    src="/images/gallery/cmn_15.jpg"
    alt="Global Impact"
    fill
    className="object-cover rounded-2xl"
  />
</div>
              {/* Animated border */}
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(212, 175, 55, 0.5)",
                    "0 0 40px rgba(212, 175, 55, 0.8)",
                    "0 0 20px rgba(212, 175, 55, 0.5)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 rounded-2xl pointer-events-none"
              ></motion.div>
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-deep-blue mb-4 sm:mb-6">
              Transforming Lives, Building Leaders
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              The Cultural Diplomat Impact Organization is committed to empowering young Africans with the skills, knowledge, and faith-based values needed to become leaders in their communities.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Through our integrated programs in mentorship, entrepreneurship training, and cultural diplomacy, we create pathways for youth to achieve their potential and contribute meaningfully to society.
            </p>
            <motion.div whileHover={{ x: 10 }} className="flex items-center gap-2">
              <span className="text-gold font-bold">→</span>
              <a href="/about" className="text-deep-blue font-bold hover:text-gold transition-colors">
                Learn More About Us
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  boxShadow: "0 10px 40px rgba(212, 175, 55, 0.2)",
                }}
                className="p-8 rounded-2xl border border-gold/20 hover:border-gold/50 transition-all bg-white"
              >
                <div className="w-14 h-14 bg-gold/20 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="text-gold" size={28} />
                </div>
                <h4 className="text-xl font-bold text-deep-blue mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
