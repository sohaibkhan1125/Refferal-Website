import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const Pricing = () => {
    const plans = [
        {
            name: 'Free',
            price: '0',
            description: 'Perfect for beginners just starting out.',
            features: ['25% Commission', 'Basic Dashboard', 'Standard Support', 'Standard Links'],
            notIncluded: ['Premium Support', 'Custom Link Branded', 'Team Access'],
            cta: 'Get Started',
            popular: false
        },
        {
            name: 'Pro',
            price: '29',
            interval: '/month',
            description: 'Best for active marketers and influencers.',
            features: ['30% Commission', 'Advanced Analytics', 'Priority Support', 'Custom Branded Links', 'Instant Payouts'],
            notIncluded: ['Custom API Access'],
            cta: 'Go Pro Now',
            popular: true
        },
        {
            name: 'Elite',
            price: '99',
            interval: '/month',
            description: 'For agencies and large scale networks.',
            features: ['35% Commission', 'White-label Dashboard', 'Dedicated Manager', 'Unlimited Team Members', 'API Access'],
            notIncluded: [],
            cta: 'Contact Sales',
            popular: false
        }
    ];

    return (
        <section id="pricing" className="py-24 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Plans for <span className="gradient-text">Every Ambition</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Choose the plan that fits your current needs and scale as you grow. Our transparent pricing means no hidden fees.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`card-premium relative ${plan.popular ? 'border-primary-600/50 shadow-2xl shadow-primary-600/10' : ''}`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 right-10 -translate-y-1/2 bg-primary-600 text-white text-xs font-bold py-1 px-3 rounded-full">
                                    MOST POPULAR
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                                <div className="flex items-baseline mb-4">
                                    <span className="text-4xl font-black">$</span>
                                    <span className="text-5xl font-black">{plan.price}</span>
                                    <span className="text-gray-500 ml-1">{plan.interval}</span>
                                </div>
                                <p className="text-gray-400 text-sm">{plan.description}</p>
                            </div>

                            <div className="space-y-4 mb-10">
                                {plan.features.map((feature) => (
                                    <div key={feature} className="flex items-center space-x-3">
                                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                                            <Check size={12} className="text-green-500" />
                                        </div>
                                        <span className="text-sm text-gray-300">{feature}</span>
                                    </div>
                                ))}
                                {plan.notIncluded.map((feature) => (
                                    <div key={feature} className="flex items-center space-x-3 opacity-40">
                                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                                            <X size={12} className="text-white" />
                                        </div>
                                        <span className="text-sm text-gray-300">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.popular ? 'bg-primary-600 hover:bg-primary-700 shadow-xl shadow-primary-600/20 active:scale-95' : 'bg-white/5 hover:bg-white/10 border border-white/10 active:scale-95'}`}>
                                {plan.cta}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
