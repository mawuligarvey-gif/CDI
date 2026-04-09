"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const TikTokIcon = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
    </svg>
  );

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/Culturaldiplomats", name: "Instagram" },
    { icon: TikTokIcon, href: "https://tiktok.com/@Culturaldiplomats", name: "TikTok" },
  ];

  const footerLinks = {
    Quick: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about" },
      { name: "Programs", href: "/programs" },
      { name: "Blog", href: "/blog" },
    ],
    Resources: [
      { name: "Gallery", href: "/gallery" },
      { name: "Testimonials", href: "/testimonials" },
      { name: "FAQ", href: "/faq" },
      { name: "Team", href: "/team" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms", href: "#" },
      { name: "Code of Conduct", href: "#" },
    ],
  };

  return (
    <footer className="bg-deep-blue text-white py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Link href="/">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-3 mb-4 cursor-pointer hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/images/gallery/logo.png"
                  alt="CDI Logo"
                  width={50}
                  height={50}
                  className="h-auto"
                />
              </motion.div>
            </Link>
            <p className="text-gray-200 mb-6 leading-relaxed">
              Raising leaders through faith, entrepreneurship, and education. Empowering the next generation of cultural leaders and innovators.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.2 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="w-10 h-10 bg-gold/20 hover:bg-gold hover:text-deep-blue rounded-lg flex items-center justify-center transition-colors"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Section */}
          {Object.entries(footerLinks).map((category, idx) => (
            <motion.div
              key={category[0]}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h4 className="font-bold text-gold mb-4">{category[0]}</h4>
              <ul className="space-y-2">
                {category[1].map((link) => (
                  <li key={link.name}>
                    <Link href={link.href}>
                      <span className="text-gray-200 hover:text-gold transition-colors text-sm cursor-pointer">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-bold text-gold mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:theculturaldiplomats@gmail.com"
                className="flex items-center gap-2 text-gray-200 hover:text-gold transition-colors"
              >
                <Mail size={16} />
                <span className="text-sm">theculturaldiplomats@gmail.com</span>
              </a>
              <a
                href="tel:+233000000000"
                className="flex items-center gap-2 text-gray-200 hover:text-gold transition-colors"
              >
                <Phone size={16} />
                <span className="text-sm">+233 (0) 000-000-000</span>
              </a>
              <div className="flex items-start gap-2 text-gray-200">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span className="text-sm">Accra, Ghana</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gold/20 mb-8"></div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-300 text-sm text-center md:text-left mb-4 md:mb-0">
            © {currentYear} Cultural Diplomat Impact Organization. All rights reserved.
          </p>
          <p className="text-gray-400 text-xs">
            Designed with <span className="text-gold">❤️</span> for Impact
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
