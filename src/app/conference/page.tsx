"use client";

import { motion } from "framer-motion";
import { Calendar, Users, Ticket, MapPin } from "lucide-react";

export default function Conference() {
  const schedule = [
    { time: "8:00 AM", event: "Registration & Breakfast", hall: "Main Lobby" },
    { time: "9:00 AM", event: "Opening Ceremony & Keynote", hall: "Main Hall" },
    { time: "10:30 AM", event: "Break", hall: "Everywhere!" },
    { time: "10:45 AM", event: "Parallel Workshops (Choose 1)", hall: "Breakout Rooms" },
    { time: "12:30 PM", event: "Networking Lunch", hall: "Main Lobby" },
    { time: "2:00 PM", event: "Startup Pitch Competition", hall: "Main Hall" },
    { time: "4:00 PM", event: "Cultural Performances", hall: "Auditorium" },
    { time: "6:00 PM", event: "Gala Dinner", hall: "Ballroom" },
  ];

  const speakers = [
    { name: "Dr. Kofi Annan", role: "Global Impact Leader", image: "🎤" },
    { name: "Ama Twum", role: "Tech Entrepreneur", image: "🎤" },
    { name: "Nana Owusu", role: "Cultural Ambassador", image: "🎤" },
    { name: "Zainab Ahmed", role: "Investor & Mentor", image: "🎤" },
  ];

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-deep-blue to-deep-blue/80 text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Cultural Diplomat <span className="text-gold">Impact</span> Conference
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-8">
              Join us for our flagship annual conference bringing together leaders, innovators, and changemakers from across Africa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center gap-2 text-lg">
                <Calendar size={24} />
                <span>July 15-16, 2024</span>
              </div>
              <div className="flex items-center gap-2 text-lg">
                <MapPin size={24} />
                <span>Accra, Ghana</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Info */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gold/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Users, label: "2000+", desc: "Attendees Expected" },
              { icon: Ticket, label: "50+", desc: "Industry Speakers" },
              { icon: Calendar, label: "2 Days", desc: "Of Pure Impact" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-4 bg-gold/20 rounded-full flex items-center justify-center">
                  <item.icon className="text-gold" size={24} />
                </div>
                <p className="text-2xl sm:text-4xl font-bold text-deep-blue mb-2">{item.label}</p>
                <p className="text-sm sm:text-base text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-white border-2 border-gold/30"
          >
            <h3 className="text-2xl font-bold text-deep-blue mb-4">What to Expect</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Keynote speeches from global leaders",
                "Interactive masterclasses & workshops",
                "Exclusive networking sessions",
                "Startup pitch competition with prizes",
                "Cultural performances & celebrations",
                "Mentorship speed dating",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-gold text-lg">✓</span>
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-deep-blue mb-4">
              Conference <span className="text-gold">Schedule</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {schedule.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex gap-6 items-start p-4 rounded-lg bg-gold/5 hover:bg-gold/10 border border-gold/30 transition-all"
              >
                <div className="flex-shrink-0 w-24 font-bold text-gold text-lg">{item.time}</div>
                <div className="flex-grow">
                  <p className="font-bold text-deep-blue">{item.event}</p>
                  <p className="text-sm text-gray-600">{item.hall}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers */}
      <section className="py-20 md:py-32 bg-deep-blue/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-deep-blue mb-4">
              Featured <span className="text-gold">Speakers</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {speakers.map((speaker, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-6 rounded-2xl bg-white border border-gold/30 text-center hover:shadow-lg transition-all"
              >
                <div className="text-6xl mb-4">{speaker.image}</div>
                <p className="font-bold text-deep-blue mb-1">{speaker.name}</p>
                <p className="text-sm text-gold">{speaker.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-20 md:py-32 bg-deep-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-4xl font-bold mb-4">
              Don't Miss Out
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              Limited spots available. Register now to secure your seat!
            </p>
          </motion.div>

          <motion.a
            href="/apply"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-gold text-deep-blue rounded-lg font-bold text-lg hover:shadow-gold transition-all cursor-pointer"
          >
            Register Today
          </motion.a>
        </div>
      </section>
    </div>
  );
}
