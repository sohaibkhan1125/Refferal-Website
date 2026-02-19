import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Percent, ArrowUpRight } from 'lucide-react';

const Commission = () => {
    const [referrals, setReferrals] = useState(10);
    const [price, setPrice] = useState(100);

    const calculateEarnings = () => {
        // 25% commission model
        return (referrals * price * 0.25).toLocaleString();
    };

    return (
        <section className="py-24 bg-navy-dark/50 overflow-hidden relative">
            {/* Decorative gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/10 blur-[120px] rounded-full -z-10" />

            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold mb-8">
                                Industry Leading <br />
                                <span className="gradient-text">Commission Structure</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-10">
                                We believe in rewarding our partners fairly. Our flat-rate 25% recurring commission ensures you build a sustainable long-term income.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { title: '25% Lifetime Recurring', desc: 'Earn every time your referral renews or buys.' },
                                    { title: 'No Earning Caps', desc: 'There is no limit to how much you can earn.' },
                                    { title: '90-Day Cookie Duration', desc: 'Plenty of time for your referrals to convert.' }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start space-x-4">
                                        <div className="w-6 h-6 rounded-full bg-primary-600/20 flex items-center justify-center mt-1">
                                            <div className="w-2 h-2 rounded-full bg-primary-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white">{item.title}</h4>
                                            <p className="text-gray-500 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <div className="lg:w-1/2 w-full">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="glass p-8 md:p-10 rounded-[2.5rem] relative"
                        >
                            <div className="absolute -top-6 -right-6 w-20 h-20 bg-accent/20 rounded-full blur-2xl" />

                            <h3 className="text-2xl font-bold mb-8 text-center">Earnings Calculator</h3>

                            <div className="space-y-8">
                                <div>
                                    <div className="flex justify-between mb-4">
                                        <label className="text-gray-400 font-medium">Monthly Referrals</label>
                                        <span className="text-primary-400 font-bold">{referrals}</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="1"
                                        max="100"
                                        value={referrals}
                                        onChange={(e) => setReferrals(parseInt(e.target.value))}
                                        className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary-600"
                                    />
                                </div>

                                <div>
                                    <div className="flex justify-between mb-4">
                                        <label className="text-gray-400 font-medium">Average Sale Price ($)</label>
                                        <span className="text-primary-400 font-bold">${price}</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="50"
                                        max="1000"
                                        step="50"
                                        value={price}
                                        onChange={(e) => setPrice(parseInt(e.target.value))}
                                        className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary-600"
                                    />
                                </div>

                                <div className="pt-8 border-t border-white/10">
                                    <div className="text-center p-6 rounded-2xl bg-primary-600/10 border border-primary-600/20">
                                        <p className="text-gray-400 text-sm mb-2">Your Potential Monthly Income</p>
                                        <div className="text-5xl font-black text-white flex items-center justify-center">
                                            <span className="text-2xl text-primary-400 mr-1">$</span>
                                            {calculateEarnings()}
                                        </div>
                                        <button className="btn-primary mt-6 w-full flex items-center justify-center space-x-2">
                                            <span>Claim Your Share</span>
                                            <ArrowUpRight size={20} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Commission;
