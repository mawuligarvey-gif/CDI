"use client";

import { motion } from "framer-motion";

export default function About() {
  const team = [
    {
      name: "Dr. Kwesi Mensah",
      role: "Founder & Executive Director",
      image: "👨🏿‍💼",
      bio: "Faith-driven educator with 20+ years in youth empowerment",
    },
    {
      name: "Abena Agyeman",
      role: "Director of Programs",
      image: "👩🏿‍💼",
      bio: "Entrepreneurship expert with proven startup success",
    },
    {
      name: "Kofi Asiedu",
      role: "Head of Partnerships",
      image: "👨🏿‍💼",
      bio: "International relations specialist and cultural diplomat",
    },
    {
      name: "Ama Boateng",
      role: "Mentorship Coordinator",
      image: "👩🏿‍💼",
      bio: "Youth development specialist and community leader",
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
              To empower young Africans with transformative education, mentorship, and entrepreneurship opportunities grounded in faith and cultural pride, creating leaders who drive positive change in their communities and beyond.
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
                A world where African youth are recognized as the architects of innovation and cultural dialogue, leading thriving enterprises and communities rooted in integrity, excellence, and shared prosperity.
              </p>
            </motion.div>
          </div>

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <div className="text-6xl mb-4">{member.image}</div>
                <h4 className="font-bold text-deep-blue mb-1">{member.name}</h4>
                <p className="text-gold text-sm font-bold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History/Journey */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-deep-blue mb-6">
              Our <span className="text-gold">Journey</span>
            </h2>
          </motion.div>

          <div className="space-y-8">
            {[
              { year: "2018", title: "Founded", desc: "CDIO was established with a vision to empower young leaders" },
              { year: "2019", title: "First Conference", desc: "Hosted inaugural Cultural Diplomat Impact Conference with 500 attendees" },
              { year: "2021", title: "Expansion", desc: "Launched mentorship program reaching 1000+ engaged participants" },
              { year: "2023", title: "Global Impact", desc: "Extended programs to multiple African countries" },
            ].map((milestone, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gold/20 border-2 border-gold">
                    <span className="text-gold font-bold">{milestone.year}</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-deep-blue mb-2">
                    {milestone.title}
                  </h4>
                  <p className="text-gray-600">{milestone.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
