import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Zap, Lock, CreditCard, BarChart3, Globe } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: <BarChart3 className="text-primary-400" />,
            title: 'Real-time Tracking',
            description: 'Monitor every click, signup, and commission in real-time with our advanced tracking system.'
        },
        {
            icon: <PieChart className="text-accent-light" />,
            title: 'Advanced Analytics',
            description: 'Get deep insights into your audience behavior and optimize your conversion rates.'
        },
        {
            icon: <Zap className="text-yellow-400" />,
            title: 'Instant Payouts',
            description: 'No more waiting for weeks. Request your earnings and get paid via multiple methods instantly.'
        },
        {
            icon: <Lock className="text-green-400" />,
            title: 'Secure Infrastructure',
            description: 'Your data and earnings are protected by enterprise-grade encryption and security protocols.'
        },
        {
            icon: <CreditCard className="text-blue-400" />,
            title: 'Multiple Payout Options',
            description: 'Withdraw via PayPal, Crypto, Bank Transfer, or Payoneer with minimal fees.'
        },
        {
            icon: <Globe className="text-purple-400" />,
            title: 'Global Reach',
            description: 'Refer users from anywhere in the world and earn in your preferred currency.'
        }
    ];

    return (
        <section id="features" className="py-24">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center justify-between mb-16">
                    <div className="lg:w-1/2 mb-10 lg:mb-0">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Powerful Features for <br />
                            <span className="gradient-text">Serious Earners</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-xl">
                            We provide all the tools you need to build a successful referral business. From tracking to payouts, we've got you covered.
                        </p>
                    </div>
                    <div className="lg:w-1/2 flex justify-end">
                        <button className="btn-secondary">Explore All Features</button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="card-premium group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center mb-6 group-hover:bg-primary-600/10 group-hover:border-primary-600/20 transition-all duration-300">
                                {React.cloneElement(feature.icon, { size: 24 })}
                            </div>
                            <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
