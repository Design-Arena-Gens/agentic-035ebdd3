'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const plans = [
  {
    name: 'Starter',
    price: '29',
    period: 'month',
    description: 'Perfect for individuals getting started',
    features: [
      'Up to 50 posts per month',
      'AI content generation',
      'Basic analytics',
      'Email support',
      'Content calendar',
    ],
    cta: 'Start Free Trial',
    popular: false,
  },
  {
    name: 'Professional',
    price: '79',
    period: 'month',
    description: 'For serious content creators',
    features: [
      'Unlimited posts',
      'Advanced AI features',
      'Advanced analytics & insights',
      'Priority support',
      'Team collaboration (3 seats)',
      'Custom scheduling',
      'A/B testing',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For organizations and agencies',
    features: [
      'Everything in Professional',
      'Unlimited team members',
      'Dedicated account manager',
      'Custom integrations',
      'White-label options',
      'SLA guarantee',
      'Custom training',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  return (
    <section className="relative py-32 px-6" id="pricing" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium glass rounded-full">
            <span className="gradient-text">Pricing</span>
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Choose Your
            <br />
            <span className="gradient-text">Growth Plan</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-8">
            Start free, upgrade when you're ready. No hidden fees.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center gap-4 glass rounded-full p-2">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                billingCycle === 'monthly'
                  ? 'bg-accent-primary text-white'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                billingCycle === 'annual'
                  ? 'bg-accent-primary text-white'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Annual
              <span className="ml-2 text-xs bg-accent-tertiary px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative glass rounded-2xl p-8 ${
                plan.popular ? 'glow-border ring-2 ring-accent-primary' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="inline-block px-4 py-1 bg-gradient-to-r from-accent-primary to-accent-tertiary text-white text-sm font-semibold rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-text-secondary text-sm mb-6">{plan.description}</p>
                <div className="flex items-baseline gap-2">
                  {plan.price !== 'Custom' ? (
                    <>
                      <span className="text-5xl font-bold gradient-text">
                        ${billingCycle === 'annual' ? Math.floor(parseInt(plan.price) * 0.8) : plan.price}
                      </span>
                      <span className="text-text-secondary">/{plan.period}</span>
                    </>
                  ) : (
                    <span className="text-5xl font-bold gradient-text">{plan.price}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-accent-primary flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-accent-primary hover:bg-accent-secondary text-white hover:shadow-2xl hover:shadow-accent-primary/50'
                    : 'glass glass-hover'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-12 text-text-muted"
        >
          All plans include 14-day free trial • No credit card required
        </motion.div>
      </div>
    </section>
  );
}
