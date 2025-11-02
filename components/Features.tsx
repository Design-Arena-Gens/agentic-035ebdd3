'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    icon: '🤖',
    title: 'AI Content Generation',
    description: 'Generate engaging LinkedIn posts powered by advanced AI that understands your voice and audience.',
  },
  {
    icon: '📊',
    title: 'Analytics Dashboard',
    description: 'Track performance metrics, engagement rates, and audience growth with real-time analytics.',
  },
  {
    icon: '🎯',
    title: 'Smart Scheduling',
    description: 'Post at optimal times for maximum reach. AI-powered scheduling based on your audience behavior.',
  },
  {
    icon: '✨',
    title: 'Content Optimization',
    description: 'Enhance your posts with AI suggestions for hashtags, formatting, and engagement hooks.',
  },
  {
    icon: '🔗',
    title: 'Profile Growth Tools',
    description: 'Build your network strategically with intelligent connection suggestions and outreach tools.',
  },
  {
    icon: '💡',
    title: 'Trend Analysis',
    description: 'Stay ahead of the curve with insights into trending topics and viral content patterns.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="group glass glass-hover rounded-2xl p-8 will-change-transform"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="text-5xl mb-6"
        whileHover={{ scale: 1.2, rotate: 5 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {feature.icon}
      </motion.div>
      <h3 className="text-2xl font-bold mb-4 text-text-primary group-hover:gradient-text transition-all duration-300">
        {feature.title}
      </h3>
      <p className="text-text-secondary leading-relaxed">
        {feature.description}
      </p>
      <motion.div
        className="mt-6 flex items-center text-accent-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ x: -10 }}
        whileHover={{ x: 0 }}
      >
        Learn more
        <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </motion.div>
    </motion.div>
  );
}

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-32 px-6" id="features">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium glass rounded-full">
            <span className="gradient-text">Features</span>
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Everything You Need to
            <br />
            <span className="gradient-text">Succeed on LinkedIn</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Powerful tools designed to help creators and professionals grow their influence
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
