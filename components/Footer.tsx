'use client';

import { motion } from 'framer-motion';

const footerLinks = {
  Product: ['Features', 'Pricing', 'Security', 'Roadmap', 'Changelog'],
  Company: ['About', 'Blog', 'Careers', 'Press', 'Partners'],
  Resources: ['Documentation', 'Help Center', 'Community', 'Contact', 'Status'],
  Legal: ['Privacy', 'Terms', 'Cookie Policy', 'Licenses', 'GDPR'],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-dark-border px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold gradient-text mb-4">Supergrow</h3>
              <p className="text-text-secondary text-sm mb-6">
                Elevate your LinkedIn presence with AI-powered tools.
              </p>
              <div className="flex gap-4">
                {['twitter', 'linkedin', 'github', 'instagram'].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    className="w-10 h-10 glass glass-hover rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social}
                  >
                    <span className="text-text-secondary hover:text-accent-primary transition-colors">
                      {social === 'twitter' && '𝕏'}
                      {social === 'linkedin' && 'in'}
                      {social === 'github' && 'gh'}
                      {social === 'instagram' && 'ig'}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold mb-4 text-text-primary">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-text-secondary hover:text-accent-primary transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-dark-border flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-text-muted text-sm">
            © 2025 Supergrow. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-text-muted hover:text-accent-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-text-muted hover:text-accent-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-text-muted hover:text-accent-primary transition-colors">
              Cookies
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
