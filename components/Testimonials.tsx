'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    company: 'TechCorp',
    avatar: '👩‍💼',
    content: 'Supergrow transformed our LinkedIn strategy. We\'ve seen a 300% increase in engagement and countless new business opportunities.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Content Creator',
    company: 'Independent',
    avatar: '👨‍💻',
    content: 'The AI-powered content suggestions are incredible. I\'ve grown my following from 2K to 50K in just 6 months.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'CEO',
    company: 'StartupXYZ',
    avatar: '👩‍💼',
    content: 'Best investment we\'ve made for our brand. The analytics alone are worth the price, but the content tools are game-changing.',
    rating: 5,
  },
  {
    name: 'David Park',
    role: 'Sales Leader',
    company: 'Enterprise Inc',
    avatar: '👨‍💼',
    content: 'Our team\'s LinkedIn presence has never been stronger. Supergrow makes it easy to maintain consistency and quality.',
    rating: 5,
  },
  {
    name: 'Lisa Thompson',
    role: 'Brand Strategist',
    company: 'Creative Agency',
    avatar: '👩‍🎨',
    content: 'The scheduling and optimization features save us hours every week. Our clients are seeing incredible ROI.',
    rating: 5,
  },
  {
    name: 'James Wilson',
    role: 'Entrepreneur',
    company: 'Growth Hacker',
    avatar: '👨‍🚀',
    content: 'I\'ve tried every LinkedIn tool out there. Supergrow is hands down the most powerful and intuitive platform.',
    rating: 5,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-32 px-6 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium glass rounded-full">
            <span className="gradient-text">Testimonials</span>
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Loved by
            <br />
            <span className="gradient-text">Thousands of Creators</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            See what our users are saying about their growth journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass glass-hover rounded-2xl p-6"
              whileHover={{ y: -5 }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-text-secondary mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-3">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div>
                  <div className="font-semibold text-text-primary">{testimonial.name}</div>
                  <div className="text-sm text-text-muted">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 glass rounded-2xl p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">4.9/5</div>
              <div className="text-text-secondary text-sm">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">10K+</div>
              <div className="text-text-secondary text-sm">Happy Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">1M+</div>
              <div className="text-text-secondary text-sm">Posts Created</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">98%</div>
              <div className="text-text-secondary text-sm">Would Recommend</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
