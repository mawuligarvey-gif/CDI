"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const team = [
    {
      name: "Kuukua Eshun",
      role: "Founder &  President",
      image: "/images/team/kuukua-eshun.jpeg",
      objectPosition: "center 20%",
      bio: "Award-winning filmmaker and cultural diplomat leading initiatives that empower African youth through mentorship, leadership, and entrepreneurship programs",
    },
    {
      name: "Christabel Badagbor",
      role: " Head of Operations",
      image: "/images/team/christabel-badagbor.jpeg",
      bio: "A dynamic operations strategist and leader who drives the execution of impactful cultural and leadership initiatives.",
    },
    {
      name: "Nicolette Noi",
      role: "Operations Coordinator",
      image: "/images/team/nicolette-noi.jpeg",
      objectPosition: "center 18%",
      bio: "An administrative and operations professional supporting the planning and execution of cultural and leadership programs.",
    },
    {
      name: "Emmanuel Vitashie",
      role: "Head of Programs & Research",
      image: "/images/team/emmanuel-vitashie.jpeg",
      objectPosition: "center 16%",
      bio: "A research-driven program leader who designs and executes high-impact initiatives, translating vision into scalable, results-oriented programs.",
    },
    {
      name: "Emmanuel Selormey",
      role: "Head of Production",
      image: "/images/team/emmanuel-selormey.png",
      objectPosition: "center 15%",
      bio: "A Ghanaian filmmaker, producer, and media entrepreneur specializing in visual storytelling, cinematography, and creative production.",
    },
    
  ];

  return (
    <div className="pt-20">
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
              About <span className="text-gold">CDIO</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">
              Building tomorrow's leaders with faith, innovation, and purpose
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-8 rounded-2xl border-2 border-gold/30 bg-gold/5"
            >
            <h3 className="text-2xl sm:text-3xl font-bold text-deep-blue mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To empower emerging leaders and entrepreneurs through mentorship, education, and faith-based
leadership development.
            </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-8 rounded-2xl border-2 border-gold/30 bg-gold/5"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-deep-blue mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To raise a generation of culturally grounded, purpose-driven leaders who transform communities
and influence the world through entrepreneurship, innovation, and faith.
              </p>
            </motion.div>
          </div>

          {/* Founding Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-deep-blue mb-6">
              Our <span className="text-gold">Story</span>
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Founded in 2026, CDIO was established with a vision to empower young leaders through faith-based mentorship,
              entrepreneurship, and cultural diplomacy initiatives across Africa.
            </p>
          </motion.div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl sm:text-4xl font-bold text-deep-blue mb-6">
              Our <span className="text-gold">Values</span>
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: "Faith", icon: "⛪", desc: "Guided by spiritual principles" },
              { title: "Excellence", icon: "⭐", desc: "Highest standards in all we do" },
              { title: "Innovation", icon: "💡", desc: "Creative solutions for change" },
              { title: "Community", icon: "🤝", desc: "Lifting each other up" },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-6 rounded-xl bg-gold/10 border border-gold/30 text-center hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-3">{value.icon}</div>
                <h4 className="font-bold text-deep-blue mb-2">{value.title}</h4>
                <p className="text-sm text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 md:py-32 bg-deep-blue/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-deep-blue mb-4">
              Meet Our <span className="text-gold">Leadership Team</span>
            </h2>
            <p className="text-gray-600">
              Experienced leaders dedicated to your success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -20 }}
                className="p-6 rounded-xl bg-white border border-gold/30 text-center hover:shadow-lg transition-all"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: member.objectPosition || "center" }}
                  />
                </div>
                <h4 className="font-bold text-deep-blue mb-1">{member.name}</h4>
                <p className="text-gold text-sm font-bold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
