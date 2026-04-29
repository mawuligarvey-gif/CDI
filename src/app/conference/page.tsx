"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Users, Ticket, MapPin } from "lucide-react";

type ConferenceStat = {
  icon: "users" | "ticket" | "calendar";
  label: string;
  desc: string;
};

type ConferenceContent = {
  title: string;
  subtitle: string;
  location: string;
  keyStats: ConferenceStat[];
  highlights: string[];
  schedule: Array<{ time: string; event: string; hall: string }>;
  speakers: Array<{ name: string; role: string; image: string }>;
  flyers: Array<{ title: string; imageUrl: string }>;
  ctaTitle: string;
  ctaText: string;
  ctaButtonText: string;
  ctaHref: string;
};

const fallbackConference: ConferenceContent = {
  title: "Cultural Diplomat Impact Conference",
  subtitle: "Join us for our flagship annual conference bringing together leaders, innovators, and changemakers from across Africa",
  location: "Accra, Ghana",
  keyStats: [
    { icon: "users", label: "2000+", desc: "Attendees Expected" },
    { icon: "ticket", label: "50+", desc: "Industry Speakers" },
    { icon: "calendar", label: "2 Days", desc: "Of Pure Impact" },
  ],
  highlights: [
    "Keynote speeches from global leaders",
    "Interactive masterclasses & workshops",
    "Exclusive networking sessions",
    "Startup pitch competition with prizes",
    "Cultural performances & celebrations",
    "Mentorship speed dating",
  ],
  schedule: [
    { time: "8:00 AM", event: "Registration & Breakfast", hall: "Main Lobby" },
    { time: "9:00 AM", event: "Opening Ceremony & Keynote", hall: "Main Hall" },
    { time: "10:30 AM", event: "Break", hall: "Everywhere!" },
    { time: "10:45 AM", event: "Parallel Workshops (Choose 1)", hall: "Breakout Rooms" },
    { time: "12:30 PM", event: "Networking Lunch", hall: "Main Lobby" },
    { time: "2:00 PM", event: "Startup Pitch Competition", hall: "Main Hall" },
    { time: "4:00 PM", event: "Cultural Performances", hall: "Auditorium" },
    { time: "6:00 PM", event: "Gala Dinner", hall: "Ballroom" },
  ],
  speakers: [
    { name: "Dr. Kofi Annan", role: "Global Impact Leader", image: "🎤" },
    { name: "Ama Twum", role: "Tech Entrepreneur", image: "🎤" },
    { name: "Nana Owusu", role: "Cultural Ambassador", image: "🎤" },
    { name: "Zainab Ahmed", role: "Investor & Mentor", image: "🎤" },
  ],
  flyers: [],
  ctaTitle: "Don't Miss Out",
  ctaText: "Limited spots available. Register now to secure your seat!",
  ctaButtonText: "Register Today",
  ctaHref: "/apply",
};

const statIcons: Record<ConferenceStat["icon"], typeof Users> = {
  users: Users,
  ticket: Ticket,
  calendar: Calendar,
};

export default function Conference() {
  const [conference, setConference] = useState<ConferenceContent>(fallbackConference);

  useEffect(() => {
    const loadConference = async () => {
      try {
        const response = await fetch("/api/conference", { cache: "no-store" });
        const data = await response.json();
        if (response.ok && data.conference) {
          setConference(data.conference as ConferenceContent);
        }
      } catch {
        setConference(fallbackConference);
      }
    };

    void loadConference();
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-20 md:py-32 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/gallery/worldmap.png')",
          }}
        />
        <div className="absolute inset-0 bg-[#011C40]/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              {conference.title}
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-8">
              {conference.subtitle}
            </p>
            <div className="flex justify-center">
              <div className="flex items-center gap-2 text-lg">
                <MapPin size={24} />
                <span>{conference.location}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Info */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gold/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {conference.keyStats.map((item, i) => {
              const Icon = statIcons[item.icon] || Users;

              return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-4 bg-highlight/20 rounded-full flex items-center justify-center">
                  <Icon className="text-tertiary" size={24} />
                </div>
                <p className="text-2xl sm:text-4xl font-bold text-primary mb-2">{item.label}</p>
                <p className="text-sm sm:text-base text-gray-600">{item.desc}</p>
              </motion.div>
            )})}
          </div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-white border-2 border-accent/30"
          >
            <h3 className="text-2xl font-bold text-primary mb-4">What to Expect</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {conference.highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-tertiary text-lg">✓</span>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Conference <span className="text-highlight">Schedule</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {conference.schedule.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex gap-6 items-start p-4 rounded-lg bg-highlight/5 hover:bg-highlight/10 border border-accent/30 transition-all"
              >
                <div className="flex-shrink-0 w-24 font-bold text-tertiary text-lg">{item.time}</div>
                <div className="flex-grow">
                  <p className="font-bold text-primary">{item.event}</p>
                  <p className="text-sm text-gray-600">{item.hall}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers */}
      <section className="py-20 md:py-32 bg-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Featured <span className="text-highlight">Speakers</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {conference.speakers.map((speaker, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-6 rounded-2xl bg-white border border-accent/30 text-center hover:shadow-lg transition-all"
              >
                <div className="text-6xl mb-4">{speaker.image}</div>
                <p className="font-bold text-primary mb-1">{speaker.name}</p>
                <p className="text-sm text-tertiary">{speaker.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {conference.flyers.length > 0 && (
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                Conference <span className="text-highlight">Flyers</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {conference.flyers.map((flyer, i) => (
                <motion.div
                  key={`${flyer.imageUrl}-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-2xl border border-accent/30 overflow-hidden bg-white shadow-sm"
                >
                  <div className="relative h-72 bg-gray-100">
                    <Image src={flyer.imageUrl} alt={flyer.title} fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-primary">{flyer.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Registration CTA */}
      <section className="py-20 md:py-32 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-4xl font-bold mb-4">
              {conference.ctaTitle}
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              {conference.ctaText}
            </p>
          </motion.div>

          <motion.a
            href={conference.ctaHref}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-tertiary text-white rounded-lg font-bold text-lg hover:shadow-lg transition-all cursor-pointer"
          >
            {conference.ctaButtonText}
          </motion.a>
        </div>
      </section>
    </div>
  );
}
