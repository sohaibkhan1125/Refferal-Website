import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

const CTA = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="relative glass p-12 md:p-20 rounded-[3rem] text-center overflow-hidden">
                    {/* Animated background blobs */}
                    <div className="absolute top-0 left-0 w-full h-full -z-10">
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                rotate: [0, 90, 0],
                                opacity: [0.3, 0.5, 0.3]
                            }}
                            transition={{ duration: 10, repeat: Infinity }}
                            className="absolute -top-1/2 -left-1/4 w-full h-full bg-primary-600/20 blur-[100px] rounded-full"
                        />
                        <motion.div
                            animate={{
                                scale: [1, 1.3, 1],
                                rotate: [0, -90, 0],
                                opacity: [0.2, 0.4, 0.2]
                            }}
                            transition={{ duration: 8, repeat: Infinity }}
                            className="absolute -bottom-1/2 -right-1/4 w-full h-full bg-accent/20 blur-[100px] rounded-full"
                        />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto"
                    >
                        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary-400 text-sm font-bold mb-8">
                            <Sparkles size={16} />
                            <span>Limited Time Payout Bonus</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                            Ready to Start Your <br />
                            <span className="gradient-text">Earning Journey?</span>
                        </h2>

                        <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-xl mx-auto">
                            Join 50,000+ partners who are already earning passive income with the world's most trusted referral platform.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                            <button className="btn-primary py-4 px-10 text-lg flex items-center space-x-3 w-full sm:w-auto justify-center group">
                                <span>Join EranPro Now</span>
                                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="btn-secondary py-4 px-10 text-lg w-full sm:w-auto">
                                Talk to Support
                            </button>
                        </div>

                        <div className="mt-12 flex items-center justify-center space-x-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                            <span className="text-xs font-bold uppercase tracking-widest">No Credit Card</span>
                            <span className="text-xs font-bold uppercase tracking-widest">Instant Approval</span>
                            <span className="text-xs font-bold uppercase tracking-widest">90 Day Cookies</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
