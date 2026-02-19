import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: 'How do I start earning commissions?',
            answer: 'Simply sign up for a free account, go to your dashboard, and copy your unique referral link. Share it with your audience, and you will start earning as soon as they make their first purchase.'
        },
        {
            question: 'When do I get paid?',
            answer: 'Our standard payout schedule is on the 1st and 15th of every month. Once you reach the minimum threshold of $50, you can request a withdrawal via PayPal, Crypto, or Bank Transfer.'
        },
        {
            question: 'Is there a limit to how many people I can refer?',
            answer: 'Absolutely not! You can refer as many users as you want. Many of our top partners refer thousands of new users every single month.'
        },
        {
            question: 'Do you provide marketing materials?',
            answer: 'Yes! Inside your dashboard, you will find a "Brand Kit" featuring banners, logos, social media templates, and swipe emails to help you promote more effectively.'
        },
        {
            question: 'What is the cookie duration?',
            answer: 'We use a 90-day cookie window. This means if a user clicks your link and makes a purchase anywhere within the next 90 days, you get the credit!'
        }
    ];

    return (
        <section id="faq" className="py-24 bg-navy-dark/50">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Frequently Asked <span className="gradient-text">Questions</span>
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Everything you need to know about the EranPro referral program.
                        </p>
                    </motion.div>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 flex items-center justify-between ${activeIndex === index ? 'glass shadow-lg border-primary-600/30' : 'bg-white/5 border border-white/5 hover:bg-white/10'}`}
                            >
                                <span className={`text-lg font-semibold transition-colors ${activeIndex === index ? 'text-primary-400' : 'text-white group-hover:text-primary-400'}`}>
                                    {faq.question}
                                </span>
                                <div className={`transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                                    {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 text-gray-400 leading-relaxed border-x border-b border-white/10 rounded-b-2xl -mt-2 bg-white/[0.02]">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
