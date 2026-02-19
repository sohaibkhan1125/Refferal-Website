import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Sarah Johnson',
            role: 'Digital Nomad',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&auto=format&fit=crop&q=80',
            text: 'EranPro has changed the way I look at passive income. I started sharing links 3 months ago and now I make over $2,000 monthly in recurring commissions.',
            rating: 5
        },
        {
            name: 'Michael Chen',
            role: 'Tech Blogger',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&auto=format&fit=crop&q=80',
            text: 'The dashboard is incredible. I can track every single click and see which platforms convert the best. The team is also super responsive to any questions.',
            rating: 5
        },
        {
            name: 'Emma Williams',
            role: 'Marketing Consultant',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&auto=format&fit=crop&q=80',
            text: "I've tried many affiliate programs, but none offer the payout speed and transparency that EranPro does. It's the most trustworthy platform out there.",
            rating: 5
        }
    ];

    return (
        <section className="py-24 bg-navy-dark/30">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Loved by <span className="gradient-text">Thousands of Partners</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Join a community of successful earners who are building their wealth with EranPro.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="card-premium relative"
                        >
                            <Quote className="absolute top-6 right-6 text-primary-600/20" size={40} />

                            <div className="flex items-center space-x-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>

                            <p className="text-gray-300 italic mb-8 leading-relaxed">
                                "{testimonial.text}"
                            </p>

                            <div className="flex items-center space-x-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full border-2 border-primary-600/20"
                                />
                                <div>
                                    <div className="font-bold">{testimonial.name}</div>
                                    <div className="text-xs text-gray-500">{testimonial.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
