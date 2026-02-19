import React from 'react';
import { UserPlus, Link, Share2, Wallet } from 'lucide-react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
    const steps = [
        {
            icon: <UserPlus size={32} />,
            title: 'Sign Up',
            description: 'Create your free account in less than 60 seconds. No credit card required.',
            color: 'bg-blue-600/20 text-blue-400'
        },
        {
            icon: <Link size={32} />,
            title: 'Get Link',
            description: 'Access your unique referral link from your personal dashboard instantly.',
            color: 'bg-accent/20 text-accent-light'
        },
        {
            icon: <Share2 size={32} />,
            title: 'Share & Promote',
            description: 'Share your link on social media, blogs, or directly with your network.',
            color: 'bg-purple-600/20 text-purple-400'
        },
        {
            icon: <Wallet size={32} />,
            title: 'Earn Commission',
            description: 'Receive real-time commissions for every successful referral you bring.',
            color: 'bg-green-600/20 text-green-400'
        }
    ];

    return (
        <section id="how-it-works" className="py-24 bg-navy-dark/50">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Start Earning in <span className="gradient-text">4 Simple Steps</span>
                        </h2>
                        <p className="text-gray-400 text-lg">
                            We've made it incredibly easy to start your journey as a referral partner. Follow these steps and watch your balance grow.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="card-premium relative group"
                        >
                            <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                {step.icon}
                            </div>
                            <div className="absolute top-6 right-6 text-4xl font-bold text-white/5 group-hover:text-white/10 transition-colors">
                                0{index + 1}
                            </div>
                            <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {step.description}
                            </p>

                            {/* Connector line for desktop */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-14 -right-4 w-8 h-[2px] bg-white/5 z-0" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
