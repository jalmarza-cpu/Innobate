import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const whatsappUrl = "https://wa.me/56912345678?text=Hola%20Innobate,%20quiero%20agendar%20una%20auditor%C3%ADa%20gratuita.";

  return (
    <section id="hero" className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-innobate-black">
      {/* Video Background with Metallic Blue Overlay */}
      <div className="absolute inset-0 z-0 opacity-40">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover grayscale"
          poster="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop"
        >
          {/* Abstract Tech/Network Video */}
          <source src="https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4" type="video/mp4" />
        </video>
        {/* Deep Black Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-innobate-black/90 to-innobate-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-innobate-accent/10 via-transparent to-innobate-black"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-innobate-accent/30 bg-innobate-accent/10 backdrop-blur-md mb-8 animate-float">
          <Zap className="w-4 h-4 text-innobate-accent" />
          <span className="text-xs md:text-sm font-bold text-blue-100 tracking-[0.2em] uppercase">Agencia de Performance & IA • Chile</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-white tracking-tighter mb-4 leading-[0.9]">
          INNOVATE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-innobate-cyan via-white to-innobate-accent">OR ESFUMATE</span>
        </h1>

        <p className="text-lg md:text-2xl text-gray-400 max-w-4xl mx-auto mb-10 font-light leading-relaxed">
          Arquitectura de Humanos Digitales y Automatización Comercial. <br className="hidden md:block"/> 
          Liberamos a tu equipo de lo monótono para que se enfoquen en cerrar negocios de alto valor.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-5 bg-innobate-accent text-white font-bold text-lg rounded-none hover:bg-blue-600 transition-all duration-300 flex items-center gap-2 shadow-[0_0_30px_rgba(43,88,255,0.4)] border-l-4 border-white/20"
          >
            AGENDAR AUDITORÍA
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <button 
            onClick={() => document.getElementById('ai-catalog')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-5 border border-white/20 text-white font-medium hover:bg-white/5 transition-all duration-300 backdrop-blur-sm flex items-center gap-2 tracking-wide"
          >
            EXPLORAR TALENTOS IA
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;