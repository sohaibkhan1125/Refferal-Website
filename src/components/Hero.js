import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, Users, ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-600/20 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/20 blur-[120px] rounded-full" />
            </div>

            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 text-center md:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary-400 text-sm font-medium mb-6">
                                <ShieldCheck size={16} />
                                <span>Trusted by 50,000+ Earners</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
                                Turn Your Network into <br />
                                <span className="gradient-text">Passive Income</span>
                            </h1>
                            <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl">
                                Join the world's highest-paying referral platform. Share links, invite friends, and earn up to 25% recurring commission on every transaction.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
                                <button className="btn-primary flex items-center space-x-2 w-full sm:w-auto justify-center">
                                    <span>Start Earning Now</span>
                                    <ArrowRight size={20} />
                                </button>
                                <button className="btn-secondary w-full sm:w-auto justify-center">
                                    View Commission Rates
                                </button>
                            </div>

                            <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-10">
                                <div>
                                    <div className="text-2xl font-bold">$2.4M+</div>
                                    <div className="text-gray-500 text-sm uppercase tracking-wider">Paid Out</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold">120K+</div>
                                    <div className="text-gray-500 text-sm uppercase tracking-wider">Active Users</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold">24/7</div>
                                    <div className="text-gray-500 text-sm uppercase tracking-wider">Support</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="md:w-1/2 mt-20 md:mt-0 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative z-10"
                        >
                            {/* Mockup Preview Card */}
                            <div className="glass p-6 rounded-3xl shadow-2xl relative overflow-hidden group">
                                <div className="flex items-center justify-between mb-8">
                                    <div>
                                        <h3 className="text-sm text-gray-400">Total Earnings</h3>
                                        <div className="text-3xl font-bold">$12,450.80</div>
                                    </div>
                                    <div className="w-12 h-12 bg-primary-600/20 rounded-2xl flex items-center justify-center text-primary-400">
                                        <TrendingUp size={24} />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                                            <div className="flex items-center space-x-3">
                                                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                                                    <Users size={16} className="text-accent" />
                                                </div>
                                                <div>
                                                    <div className="text-xs font-semibold">New Referral</div>
                                                    <div className="text-[10px] text-gray-500">2 minutes ago</div>
                                                </div>
                                            </div>
                                            <div className="text-xs font-bold text-green-400">+$24.50</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Decorative element */}
                                <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary-600/30 blur-[60px] rounded-full group-hover:bg-primary-600/40 transition-colors duration-500" />
                            </div>

                            {/* Float Floating Icons */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-10 -left-10 glass p-4 rounded-2xl hidden lg:block"
                            >
                                <div className="text-primary-400 font-bold">+12% Monthly ROI</div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 20, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-10 -right-10 glass p-4 rounded-2xl hidden lg:block"
                            >
                                <div className="text-accent-light font-bold">Instantly Verified</div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
