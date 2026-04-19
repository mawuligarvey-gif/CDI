"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Programs() {
  const programs = [
    {
      id: 1,
      title: "Leadership & Entrepreneurship Training",
      description:
        "Intensive program designed to equip young leaders with business acumen and strategic thinking skills.",
      icon: "🚀",
      color: "from-blue-500/20 to-blue-600/20",
      borderColor: "border-blue-500/30",
    },
    {
      id: 2,
      title: "Cultural Diplomacy Internship",
      description:
        "Hands-on experience in international relations and cultural exchange programs across African nations.",
      icon: "🌐",
      color: "from-gold/20 to-yellow-600/20",
      borderColor: "border-gold/30",
    },
    {
      id: 3,
      title: "Mentorship Program",
      description:
        "One-on-one guidance from industry leaders and successful entrepreneurs in your field of interest.",
      icon: "🤝",
      color: "from-purple-500/20 to-purple-600/20",
      borderColor: "border-purple-500/30",
    },
    {
      id: 4,
      title: "Funding Opportunities",
      description:
        "Access to grants and startup funding to turn your innovative business ideas into reality.",
      icon: "💰",
      color: "from-green-500/20 to-green-600/20",
      borderColor: "border-green-500/30",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <section className="py-20 md:py-32 bg-gradient-to-b from-white via-deep-blue/5 to-white">
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
            Our <span className="text-gold">Programs</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive programs designed to develop leaders in different areas of expertise and entrepreneurship.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {programs.map((program) => (
            <motion.div
              key={program.id}
              variants={cardVariants}
              whileHover={{
                y: -15,
                transition: { duration: 0.3 },
              }}
              className={`relative p-8 rounded-2xl border-2 ${program.borderColor} bg-gradient-to-br ${program.color} backdrop-blur-sm hover:shadow-lg transition-all cursor-pointer group overflow-hidden`}
            >
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gold/5 rounded-full -mr-8 -mt-8 group-hover:scale-150 transition-transform"></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="text-5xl mb-4">{program.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-deep-blue mb-3 group-hover:text-gold transition-colors">
                  {program.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {program.description}
                </p>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-gold font-bold"
                >
                  <span>Learn More</span>
                  <ArrowRight size={18} />
                </motion.div>
              </div>

              {/* Hover border effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
              ></motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <Link href="/programs">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gold text-deep-blue rounded-lg font-bold text-lg hover:shadow-gold transition-all"
            >
              Explore All Programs
            </motion.button>
          </Link>
        </motion.div>
      </div>
      </section>
      {/* <DonationSection /> */}
    </>
  );
}
