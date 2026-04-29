"use client";

import { motion } from "framer-motion";
import { useState, FormEvent } from "react";
import { CheckCircle } from "lucide-react";

export default function Apply() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    school: "",
    program: "",
    businessIdea: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
      } else {
        alert('Failed to submit application. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit application. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      school: "",
      program: "",
      businessIdea: "",
    });
  };

  if (submitted) {
    return (
      <div className="pt-20 min-h-screen bg-white">
        <section className="py-20 md:py-32">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1 }}
                className="w-20 h-20 mx-auto mb-6 rounded-full bg-highlight/20 flex items-center justify-center"
              >
                <CheckCircle size={48} className="text-tertiary" />
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Application Submitted!
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Thank you for your interest in Cultural Diplomat Impact Organization. We've received your application and our team will review it carefully.
              </p>
              <p className="text-gray-600 mb-12">
                You'll receive an email confirmation shortly. Look out for our screening call within 5-7 business days.
              </p>

              <div className="space-y-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={resetForm}
                  className="block w-full px-8 py-4 bg-tertiary text-white rounded-lg font-bold hover:shadow-lg transition-all"
                >
                  Submit Another Application
                </motion.button>
                <a href="/">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="block w-full px-8 py-4 border-2 border-primary text-primary rounded-lg font-bold hover:bg-primary/5 transition-all"
                  >
                    Back to Home
                  </motion.button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    );
  }

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
              Apply Now
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">
              Take the first step toward transforming your future with Cultural Diplomat Impact Organization
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 md:py-32">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-highlight/5 to-secondary/5 border border-accent/30"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="block text-sm font-bold text-primary mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    placeholder="Your first name"
                    className="w-full px-4 py-3 rounded-lg border border-accent/30 focus:border-accent focus:outline-none transition-colors bg-white"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                >
                  <label className="block text-sm font-bold text-primary mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    placeholder="Your last name"
                    className="w-full px-4 py-3 rounded-lg border border-accent/30 focus:border-tertiary focus:outline-none transition-colors bg-white"
                  />
                </motion.div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block text-sm font-bold text-primary mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-accent/30 focus:border-tertiary focus:outline-none transition-colors bg-white"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 }}
                >
                  <label className="block text-sm font-bold text-primary mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+233 (0) 000-000-000"
                    className="w-full px-4 py-3 rounded-lg border border-accent/30 focus:border-tertiary focus:outline-none transition-colors bg-white"
                  />
                </motion.div>
              </div>

              {/* School & Program */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="block text-sm font-bold text-primary mb-2">
                    School/University
                  </label>
                  <input
                    type="text"
                    name="school"
                    value={formData.school}
                    onChange={handleChange}
                    required
                    placeholder="Your school or university"
                    className="w-full px-4 py-3 rounded-lg border border-accent/30 focus:border-tertiary focus:outline-none transition-colors bg-white"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 }}
                >
                  <label className="block text-sm font-bold text-primary mb-2" htmlFor="program">
                    Program of Interest *
                  </label>
                  <select
                    id="program"
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-accent/30 focus:border-tertiary focus:outline-none transition-colors bg-white"
                  >
                    <option value="">Select a program</option>
                    <option value="leadership">Leadership & Entrepreneurship Training</option>
                    <option value="diplomacy">Cultural Diplomacy Internship</option>
                    <option value="mentorship">Mentorship Program</option>
                    <option value="funding">Funding Opportunities</option>
                  </select>
                </motion.div>
              </div>

              {/* Business Idea */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-sm font-bold text-primary mb-2">
                  Tell us about your business idea or aspirations *
                </label>
                <textarea
                  name="businessIdea"
                  value={formData.businessIdea}
                  onChange={handleChange}
                  required
                  placeholder="Describe your vision, goals, and what you hope to achieve with Cultural Diplomat Impact Organization..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-accent/30 focus:border-accent focus:outline-none transition-colors bg-white resize-none"
                ></textarea>
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45 }}
                className="pt-4"
              >
                <motion.button
                  whileHover={{ scale: loading ? 1 : 1.05 }}
                  whileTap={{ scale: loading ? 1 : 0.95 }}
                  type="submit"
                  disabled={loading}
                  className="w-full px-8 py-4 bg-tertiary text-white rounded-lg font-bold text-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Submitting...
                    </span>
                  ) : (
                    "Submit Application"
                  )}
                </motion.button>
              </motion.div>

              {/* Note */}
              <p className="text-sm text-gray-600 text-center">
                * Required fields.
              </p>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
