import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Commission from './components/Commission';
import DashboardPreview from './components/DashboardPreview';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';


function App() {
  return (
    <div className="min-h-screen bg-navy text-white selection:bg-primary-500 selection:text-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Commission />
        <DashboardPreview />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
