"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState, FormEvent } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "theculturaldiplomats@gmail.com",
      href: "mailto:theculturaldiplomats@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+233 (0) 000-000-000",
      href: "tel:+233000000000",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Accra, Ghana",
      href: "#",
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
              Get in <span className="text-gold">Touch</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">
              Have questions about our programs? Want to partner with us? We'd love to hear from you!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Info Cards */}
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={i}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-gold/10 to-deep-blue/10 border border-gold/30 hover:border-gold/60 transition-all cursor-pointer"
                >
                  <div className="w-14 h-14 bg-gold/20 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="text-gold" size={28} />
                  </div>
                  <h3 className="font-bold text-deep-blue mb-2">{info.label}</h3>
                  <p className="text-gray-600 hover:text-gold transition-colors">
                    {info.value}
                  </p>
                </motion.a>
              );
            })}
          </div>

          {/* Contact Form & Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-deep-blue mb-8">Send us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-deep-blue mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg border border-gold/30 focus:border-gold focus:outline-none transition-colors bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-deep-blue mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-gold/30 focus:border-gold focus:outline-none transition-colors bg-white"
                  />
                </div>

                <div>
                  
                </div>

                <div>
                  <label className="block text-sm font-bold text-deep-blue mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us more..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gold/30 focus:border-gold focus:outline-none transition-colors bg-white resize-none"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: loading ? 1 : 1.05 }}
                  whileTap={{ scale: loading ? 1 : 0.95 }}
                  type="submit"
                  disabled={loading}
                  className="w-full px-8 py-4 bg-gold text-deep-blue rounded-lg font-bold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-deep-blue border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-lg bg-green-100 border border-green-500 text-green-700"
                  >
                    ✓ Message sent successfully! We'll get back to you soon.
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-deep-blue mb-8">Connect With Us</h2>

              <div className="space-y-6">
                {[
                  {
                    title: "For Program Inquiries",
                    desc: "Have questions about our programs? Contact our programs team.",
                    email: "theculturaldiplomats@gmail.com",
                  },
                  {
                    title: "For Partnership Opportunities",
                    desc: "Interested in partnering with CDIO? Let's talk!",
                    email: "theculturaldiplomats@gmail.com",
                  },
                  {
                    title: "For Media & Press",
                    desc: "Media inquiries and press releases",
                    email: "theculturaldiplomats@gmail.com",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 rounded-xl bg-gold/5 border border-gold/30"
                  >
                    <h3 className="font-bold text-deep-blue mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{item.desc}</p>
                    <a
                      href={`mailto:${item.email}`}
                      className="text-gold font-bold text-sm hover:underline"
                    >
                      {item.email} →
                    </a>
                  </motion.div>
                ))}
              </div>

              {/* Hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-12 p-6 rounded-xl bg-deep-blue/5 border border-deep-blue/30"
              >
                <h3 className="font-bold text-deep-blue mb-4">Office Hours</h3>
                <div className="space-y-2 text-gray-600 text-sm">
                  <p>Monday - Friday: 9:00 AM - 5:00 PM GMT</p>
                  <p>Saturday: 10:00 AM - 2:00 PM GMT</p>
                  <p>Sunday: Closed</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
