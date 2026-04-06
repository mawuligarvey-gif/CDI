"use client";

import { motion } from "framer-motion";
import { Clock, User, ArrowRight } from "lucide-react";

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "5 Essential Skills Every Young Leader Needs in 2024",
      excerpt: "Discover the key competencies that will set you apart in the modern world.",
      author: "Dr. Kwesi Mensah",
      date: "March 15, 2024",
      category: "Leadership",
      image: "📰",
    },
    {
      id: 2,
      title: "From Idea to Impact: Launching Your First Social Enterprise",
      excerpt: "A step-by-step guide to turning your passion into a sustainable business.",
      author: "Abena Agyeman",
      date: "March 10, 2024",
      category: "Entrepreneurship",
      image: "🚀",
    },
    {
      id: 3,
      title: "Breaking Boundaries: The Role of Faith in Leadership",
      excerpt: "How faith-centered values can strengthen your leadership journey.",
      author: "Kofi Asiedu",
      date: "March 5, 2024",
      category: "Faith & Leadership",
      image: "⛪",
    },
    {
      id: 4,
      title: "CDIO Conference 2024: What You Missed and What's Next",
      excerpt: "Highlights from our flagship event and announcements for the coming year.",
      author: "Ama Boateng",
      date: "February 28, 2024",
      category: "Events",
      image: "🎤",
    },
    {
      id: 5,
      title: "Mentorship Matters: Building Meaningful Professional Relationships",
      excerpt: "How to find the right mentor and maximize the mentorship experience.",
      author: "Zainab Mohammed",
      date: "February 20, 2024",
      category: "Mentorship",
      image: "👥",
    },
    {
      id: 6,
      title: "Cultural Diplomacy in the Digital Age",
      excerpt: "Navigating international relations in our increasingly connected world.",
      author: "Nana Owusu",
      date: "February 15, 2024",
      category: "Culture",
      image: "🌐",
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
              CDIO <span className="text-gold">Blog</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200">
              Insights, stories, and inspiration for emerging leaders
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="rounded-2xl bg-white border border-gold/30 hover:border-gold/60 overflow-hidden hover:shadow-lg transition-all cursor-pointer"
              >
                {/* Image */}
                <div className="h-48 bg-gradient-to-br from-gold/20 to-deep-blue/20 flex items-center justify-center text-6xl hover:scale-110 transition-transform">
                  {post.image}
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category */}
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-gold/20 text-gold text-xs font-bold rounded-full">
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-deep-blue mb-2 line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 pb-4 border-t border-gold/20">
                    <div className="flex items-center gap-1 mt-3">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1 mt-3">
                      <Clock size={14} />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  {/* Read More */}
                  <motion.a
                    href="#"
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-2 text-gold font-bold text-sm hover:gap-3 transition-all"
                  >
                    Read More
                    <ArrowRight size={16} />
                  </motion.a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 md:py-32 bg-deep-blue text-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-base sm:text-lg text-gray-200 mb-8">
              Subscribe to our newsletter for weekly insights and inspiration
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-lg text-deep-blue"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gold text-deep-blue rounded-lg font-bold hover:shadow-lg transition-all"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
