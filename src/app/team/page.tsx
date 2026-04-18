"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type TeamMember = {
  name: string;
  role: string;
  image: string;
  bio: string;
  objectPosition?: string;
};

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const team = [
    {
      name: "Kuukua Eshun",
      role: "Founder & President",
      image: "/images/team/kuukua-eshun.jpeg",
      objectPosition: "center 20%",
      bio: "Award-winning filmmaker and cultural diplomat leading initiatives that empower African youth through mentorship, leadership, and entrepreneurship programs.",
    },
    {
      name: "Alaba Adewale Adebajo",
      role: "Chairman",
      image: "/images/team/alaba-adewale.jpeg",
      objectPosition: "center 12%",
      bio: "A seasoned businessman, visionary leader, and ordained pastor known for bridging faith and business to drive excellence and transformation. He empowers individuals and leaders through strategic insight, strong values, and purpose-driven teachings.",
    },
    {
      name: "Christabel Badagbor",
      role: "Head of Operations",
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
    {
      name: "Donkor Ebenezer Ofori",
      role: "Creative Strategist",
      image: "/images/team/donkor-ofori.jpeg",
      objectPosition: "center 18%",
      bio: "A Ghanaian creative strategist and cultural diplomat shaping global narratives through strategy-driven storytelling across music, fashion, and media.",
    },
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-white via-deep-blue/5 to-white">
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
            <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">
              Meet the visionary leaders shaping the future of cultural diplomacy and youth empowerment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Layout */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gold mb-3">
              Leadership And Team
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-4">
              Meet The Full CDI Team
            </h2>
            <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-600">
              Every team member is shown below, with the founder and chairman highlighted first and the rest of the leadership team following in the same section.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {team.map((member, i) => {
              const isLeadership = i < 2;

              return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className={[
                  "group overflow-hidden transition-all",
                  isLeadership
                    ? "rounded-3xl bg-white border border-gold/40 shadow-xl md:col-span-2"
                    : "rounded-2xl bg-white border border-gold/30 shadow-sm hover:shadow-xl hover:border-gold/60",
                ].join(" ")}
              >
                {isLeadership ? (
                  <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch min-h-full">
                    <div className="relative min-h-[420px] bg-gold/10">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        style={{ objectPosition: member.objectPosition || "center" }}
                        sizes="(max-width: 1280px) 100vw, 50vw"
                      />
                    </div>
                    <div className="p-8 lg:p-10 bg-gradient-to-br from-white to-gold/10 flex flex-col justify-center">
                      <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-3">
                        {i === 0 ? "Founder" : "Chairman"}
                      </p>
                      <h3 className="text-3xl font-bold text-deep-blue mb-2">
                        <button
                          type="button"
                          onClick={() => setSelectedMember(member)}
                          className="text-left w-full text-3xl font-bold text-deep-blue hover:text-gold cursor-pointer transition-colors"
                          aria-label={`View full bio for ${member.name}`}
                        >
                          {member.name}
                        </button>
                      </h3>
                      <p className="text-gold font-semibold mb-4">{member.role}</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="relative h-64 bg-gold/10">
                      <div className="absolute inset-x-0 top-0 z-10 h-1 bg-gradient-to-r from-gold/30 via-gold to-gold/30" />
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        style={{ objectPosition: member.objectPosition || "center" }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                      />
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-deep-blue mb-1">
                        <button
                          type="button"
                          onClick={() => setSelectedMember(member)}
                          className="text-left w-full text-xl font-bold text-deep-blue hover:text-gold cursor-pointer transition-colors"
                          aria-label={`View full bio for ${member.name}`}
                        >
                          {member.name}
                        </button>
                      </h3>
                      <p className="text-gold font-semibold text-sm mb-3">{member.role}</p>
                    </div>
                  </>
                )}
              </motion.div>
              );
            })}
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
              We are always looking for passionate creatives and leaders to join our mission.
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

      {/* Modal for full bio */}
      {selectedMember && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedMember(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-deep-blue">{selectedMember.name}</h3>
                <button
                  onClick={() => setSelectedMember(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
                >
                  ×
                </button>
              </div>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="relative w-full md:w-1/3 h-64 bg-gold/10 rounded-lg overflow-hidden">
                  <Image
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    fill
                    className="object-cover"
                    style={{ objectPosition: selectedMember.objectPosition || "center" }}
                  />
                </div>
                <div className="flex-1">
                  <p className="text-gold font-semibold mb-4">{selectedMember.role}</p>
                  <p className="text-gray-700 leading-relaxed">{selectedMember.bio}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
