"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Who is eligible to apply for Cultural Diplomat Impact Organization programs?",
      answer:
        "We welcome applications from individuals aged 18-35 across Africa and the diaspora. You should be passionate about leadership, entrepreneurship, and community development. Basic computer literacy and English proficiency are required.",
    },
    {
      question: "Are the programs free?",
      answer:
        "Most Cultural Diplomat Impact Organization programs are completely free for qualified applicants. Our Leadership & Entrepreneurship Training and Mentorship Program are fully funded. The Cultural Diplomacy Internship includes a paid stipend.",
    },
    {
      question: "How long is the application process?",
      answer:
        "The application process typically takes 2-3 weeks. It includes an online application form, document submission, phone screening, and a final interview (if selected).",
    },
    {
      question: "Do I need previous experience?",
      answer:
        "No previous experience is necessary. We welcome first-time applicants with passion and commitment. Our programs are designed to develop you from where you are, regardless of your current level.",
    },
    {
      question: "What is the time commitment for each program?",
      answer:
        "The Leadership & Entrepreneurship Training requires 10-15 hours per week for 3-6 months. The Mentorship Program typically involves bi-weekly one-on-one meetings. The Internship is full-time.",
    },
    {
      question: "Can I apply for multiple programs?",
      answer:
        "Yes, you can apply for multiple programs. However, we recommend focusing on one program initially to maximize your learning experience.",
    },
    {
      question: "How do I get funding for my business idea?",
      answer:
        'To be considered for our funding opportunities, you must be part of one of our programs or have completed one previously. We assess business ideas based on viability, innovation, and social impact.',
    },
    {
      question: "Is housing provided for the conference?",
      answer:
        "Housing details for the annual conference will be provided separately for registered attendees. We have partnership discounts with local accommodations.",
    },
  ];

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
              Frequently Asked Questions
            </h1>
            <p className="text-lg sm:text-xl text-gray-200">
              Everything you need to know about Cultural Diplomat Impact Organization
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl border-2 border-accent/30 hover:border-accent/60 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  className="w-full p-6 flex items-center justify-between bg-white hover:bg-highlight/5 transition-colors"
                >
                  <h3 className="text-lg font-bold text-primary text-left">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 ml-4"
                  >
                    <ChevronDown size={24} className="text-tertiary" />
                  </motion.div>
                </button>

                {/* Answer */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: openIndex === i ? "auto" : 0,
                    opacity: openIndex === i ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-accent/20">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-20 md:py-32 bg-highlight/5 border-t border-highlight/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Still Have Questions?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-8">
              Don't hesitate to reach out. Our team is here to help!
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-tertiary text-white rounded-lg font-bold text-lg hover:shadow-lg transition-all cursor-pointer"
            >
              Contact Us
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
