import React from 'react';
import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Users, DollarSign, Wallet, TrendingUp, ArrowUpRight } from 'lucide-react';

const data = [
    { name: 'Mon', revenue: 4000 },
    { name: 'Tue', revenue: 3000 },
    { name: 'Wed', revenue: 5000 },
    { name: 'Thu', revenue: 2780 },
    { name: 'Fri', revenue: 6890 },
    { name: 'Sat', revenue: 2390 },
    { name: 'Sun', revenue: 3490 },
];

const DashboardPreview = () => {
    const stats = [
        { title: 'Total Referrals', value: '1,248', icon: <Users size={20} />, change: '+12%', color: 'text-blue-400' },
        { title: 'Total Earnings', value: '$12,450.80', icon: <DollarSign size={20} />, change: '+24%', color: 'text-green-400' },
        { title: 'Pending Balance', value: '$1,200.00', icon: <Wallet size={20} />, change: '+$120 today', color: 'text-yellow-400' },
        { title: 'Conversion Rate', value: '8.4%', icon: <TrendingUp size={20} />, change: '+2.1%', color: 'text-purple-400' },
    ];

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[600px] bg-primary-900/10 blur-[150px] -z-10 rounded-full" />

            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Full Control with <span className="gradient-text">Advanced Dashboard</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Track your growth with detailed analytics and real-time reports. Our intuitive dashboard makes managing your referrals a breeze.
                        </p>
                    </motion.div>
                </div>

                <div className="glass p-4 md:p-8 rounded-[2.5rem] shadow-2xl relative">
                    <div className="flex flex-col lg:flex-row gap-10">
                        {/* Stats Sidebar */}
                        <div className="lg:w-1/3 space-y-4">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={stat.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between group hover:bg-white/[0.08] transition-all"
                                >
                                    <div className="flex items-center space-x-4">
                                        <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center ${stat.color}`}>
                                            {stat.icon}
                                        </div>
                                        <div>
                                            <div className="text-xs text-gray-500 font-medium">{stat.title}</div>
                                            <div className="text-xl font-bold">{stat.value}</div>
                                        </div>
                                    </div>
                                    <div className={`text-xs font-bold ${stat.color} flex items-center`}>
                                        {stat.change}
                                        <ArrowUpRight size={12} className="ml-1" />
                                    </div>
                                </motion.div>
                            ))}

                            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary-600 to-accent text-white mt-8 relative overflow-hidden group">
                                <div className="relative z-10">
                                    <h4 className="font-bold mb-2">Pro Feature: Custom Links</h4>
                                    <p className="text-sm opacity-80 mb-4">Create branded short links for higher conversion rates.</p>
                                    <button className="text-xs font-bold py-2 px-4 bg-white text-primary-600 rounded-lg hover:scale-105 transition-transform">
                                        Upgrade to Pro
                                    </button>
                                </div>
                                <div className="absolute -bottom-4 -right-4 opacity-10 group-hover:scale-110 transition-transform">
                                    <TrendingUp size={100} />
                                </div>
                            </div>
                        </div>

                        {/* Main Chart Area */}
                        <div className="lg:w-2/3">
                            <div className="p-6 rounded-3xl bg-white/5 border border-white/5 h-full min-h-[400px]">
                                <div className="flex items-center justify-between mb-8">
                                    <h4 className="font-bold">Earnings Overview</h4>
                                    <div className="flex space-x-2">
                                        {['7d', '1m', '3m', 'All'].map((t) => (
                                            <button key={t} className={`px-3 py-1 text-xs rounded-lg transition-colors ${t === '1m' ? 'bg-primary-600' : 'bg-white/5 hover:bg-white/10'}`}>
                                                {t}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="w-full h-[320px]">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <AreaChart data={data}>
                                            <defs>
                                                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                                                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                                            <XAxis
                                                dataKey="name"
                                                stroke="#94a3b8"
                                                fontSize={12}
                                                tickLine={false}
                                                axisLine={false}
                                            />
                                            <YAxis
                                                stroke="#94a3b8"
                                                fontSize={12}
                                                tickLine={false}
                                                axisLine={false}
                                                tickFormatter={(value) => `$${value}`}
                                            />
                                            <Tooltip
                                                contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #ffffff20', borderRadius: '12px' }}
                                                itemStyle={{ color: '#fff' }}
                                            />
                                            <Area
                                                type="monotone"
                                                dataKey="revenue"
                                                stroke="#3b82f6"
                                                strokeWidth={3}
                                                fillOpacity={1}
                                                fill="url(#colorRevenue)"
                                            />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DashboardPreview;
