import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesBento from './components/ServicesBento';
import SocialProof from './components/SocialProof';
import RFQForm from './components/RFQForm';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import AIChat from './components/AIChat';
import BlogSection from './components/BlogSection';
import AboutSection from './components/AboutSection';
import AgentsDashboard from './components/AgentsDashboard';
import ValueComparison from './components/ValueComparison';
import FAQSection from './components/FAQSection';

// Lazy load heavy components for Performance (WPO)
const AIModelCatalog = React.lazy(() => import('./components/AIModelCatalog'));

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-innobate-black text-white selection:bg-blue-600 selection:text-white font-sans">
      <Navbar />
      
      <Hero />
      <SocialProof />
      
      <AboutSection />
      
      <AgentsDashboard />
      
      <FAQSection />

      <Suspense fallback={<div className="h-96 w-full flex items-center justify-center bg-innobate-dark text-blue-500 font-mono">Cargando Modelos IA...</div>}>
        <AIModelCatalog />
      </Suspense>

      <ServicesBento />
      
      <BlogSection />
      
      <ValueComparison />

      <RFQForm />
      <Footer />
      
      <div className="hidden md:block">
        <AIChat />
      </div>
      <FloatingActions />
    </div>
  );
};

export default App;