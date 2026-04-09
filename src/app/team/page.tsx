"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";

export default function Team() {
  const team = [
    {
      name: "Dr. Kwesi Mensah",
      role: "Founder & Executive Director",
      image: "👨🏿‍💼",
      bio: "20+ years in youth empowerment and faith-based education",
      social: ["linkedin", "twitter"],
    },
    {
      name: "Abena Agyeman",
      role: "Director of Programs",
      image: "👩🏿‍💼",
      bio: "Entrepreneurship expert with proven startup track record",
      social: ["linkedin", "twitter"],
    },
    {
      name: "Kofi Asiedu",
      role: "Head of Partnerships",
      image: "👨🏿‍💼",
      bio: "International relations specialist and cultural diplomat",
      social: ["linkedin"],
    },
    {
      name: "Ama Boateng",
      role: "Mentorship Coordinator",
      image: "👩🏿‍💼",
      bio: "Youth development specialist and community builder",
      social: ["linkedin", "twitter"],
    },
    {
      name: "Nana Owusu",
      role: "Communications Manager",
      image: "👨🏿‍💼",
      bio: "Storyteller and brand strategist",
      social: ["linkedin"],
    },
    {
      name: "Zainab Mohammed",
      role: "Operations Manager",
      image: "👩🏿‍💼",
      bio: "Process optimizer and team builder",
      social: ["linkedin"],
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
              Our <span className="text-gold">Team</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200">
              Dedicated professionals united by a mission to empower leaders
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -20 }}
                className="rounded-2xl bg-white border-2 border-gold/30 hover:border-gold/60 overflow-hidden hover:shadow-xl transition-all"
              >
                {/* Avatar */}
                <div className="h-48 bg-gradient-to-br from-gold/20 to-deep-blue/20 flex items-center justify-center text-7xl">
                  {member.image}
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-deep-blue mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gold font-bold text-sm mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-6">{member.bio}</p>

                  {/* Social Links */}
                  <div className="flex gap-3">
                    {member.social.includes("linkedin") && (
                      <motion.a
                        href="#"
                        whileHover={{ scale: 1.2 }}
                        className="w-10 h-10 rounded-lg bg-gold/20 hover:bg-gold/40 flex items-center justify-center text-deep-blue transition-all"
                      >
                        <Linkedin size={18} />
                      </motion.a>
                    )}
                    {member.social.includes("twitter") && (
                      <motion.a
                        href="#"
                        whileHover={{ scale: 1.2 }}
                        className="w-10 h-10 rounded-lg bg-gold/20 hover:bg-gold/40 flex items-center justify-center text-deep-blue transition-all"
                      >
                        <Twitter size={18} />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20 md:py-32 bg-deep-blue/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-deep-blue mb-4">
              Join Our <span className="text-gold">Team</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-8">
              We're always looking for passionate individuals to join our mission
            </p>
            <motion.a
              href="mailto:theculturaldiplomats@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-gold text-deep-blue rounded-lg font-bold text-lg hover:shadow-lg transition-all cursor-pointer"
            >
              View Career Opportunities
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
