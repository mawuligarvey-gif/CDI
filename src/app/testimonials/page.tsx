"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Link from "next/link";

export default function TestimonialsPage() {
  const testimonials = [
    {
      text: "Cultural Diplomat Impact Organization changed my life. Through their entrepreneurship program, I launched my tech startup and now employ five others. The mentorship was invaluable.",
      author: "Ama Sarpong",
      role: "Founder, Tech Solutions Ghana",
    },
    {
      text: "Being part of the Cultural Diplomat Impact Organization community transformed how I view leadership. The faith-centered approach resonates deeply with my values.",
      author: "Kwesi Boateng",
      role: "Program Participant",
    },
    {
      text: "Cultural Diplomat Impact Organization provided the funding and support I needed to turn my business idea into reality. Now I'm giving back to the community.",
      author: "Abena Mensah",
      role: "Social Enterprise Owner",
    },
    {
      text: "The program gave me clarity about my purpose and the tools to pursue it. I'm now mentoring other young entrepreneurs in my community.",
      author: "Nana Yaw",
      role: "Young Entrepreneur",
    },
  ];

  const stats = [
    { number: "500+", label: "Lives Transformed" },
    { number: "95%", label: "Success Rate" },
    { number: "48+", label: "Partner Organizations" },
    { number: "10K+", label: "GHS Awarded" },
  ];

  return (
    <div className="pt-20 min-h-screen bg-white">
      <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-6">
              Success Stories
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real stories from leaders and entrepreneurs who have been transformed through Cultural Diplomat Impact Organization.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <p className="text-white/80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-accent/30 transition-all shadow-sm hover:shadow-lg"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                <div>
                  <p className="font-semibold text-primary">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6">
              Ready to Write Your Story?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join hundreds of young leaders and entrepreneurs who are transforming their lives and communities.
            </p>
            <Link href="/apply">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-accent text-white rounded-lg font-bold text-lg hover:bg-highlight transition-all"
              >
                Apply Now
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
