import React from 'react';
import { Rocket, Twitter, Instagram, Linkedin, Github, Mail, ArrowRight, Globe } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-navy-dark pt-24 pb-12 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Info */}
                    <div className="col-span-1 lg:col-span-1">
                        <div className="flex items-center space-x-2 mb-6 cursor-pointer group">
                            <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                                <Rocket className="text-white" size={24} />
                            </div>
                            <span className="text-2xl font-bold tracking-tight text-white line-clamp-1">
                                Eran<span className="gradient-text">Pro</span>
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-8">
                            Empowering individuals and businesses to build sustainable passive income through high-converting referral partnerships.
                        </p>
                        <div className="flex space-x-4">
                            {[Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary-400 hover:border-primary-400/50 transition-all">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-white mb-6">Platform</h4>
                        <ul className="space-y-4">
                            {['Features', 'Dashboard', 'Commission', 'Affiliate Tools', 'Payouts'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal & Company */}
                    <div>
                        <h4 className="font-bold text-white mb-6">Company</h4>
                        <ul className="space-y-4">
                            {['About Us', 'Contact', 'Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Help Center'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-bold text-white mb-6">Newsletter</h4>
                        <p className="text-gray-400 text-sm mb-6">Get tips on how to maximize your referral earnings.</p>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary-600/50 transition-all text-white pr-12"
                            />
                            <button className="absolute right-2 top-2 w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors">
                                <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-gray-500 text-xs">
                        © {new Date().getFullYear()} EranPro Referral Platform. All rights reserved.
                    </p>
                    <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-2 text-gray-500 hover:text-white transition-colors cursor-pointer">
                            <Mail size={14} />
                            <span className="text-xs">support@eranpro.com</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-500 hover:text-white transition-colors cursor-pointer">
                            <Globe size={14} className="h-4 w-4" />
                            <span className="text-xs">English (US)</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
