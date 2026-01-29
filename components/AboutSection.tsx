import React from 'react';
import { Cpu, Fingerprint, Activity, Zap } from 'lucide-react';

const AboutSection: React.FC = () => {
  const differentiators = [
    {
      icon: <Fingerprint className="w-8 h-8 text-blue-400" />,
      title: "Consistencia Absoluta",
      desc: "Ingeniería de identidad. Nuestras modelos mantienen sus rasgos en cada pixel. Construimos marcas personales sólidas, no imágenes aleatorias."
    },
    {
      icon: <Cpu className="w-8 h-8 text-purple-400" />,
      title: "Automatización E2E",
      desc: "No solo atraemos tráfico; construimos sistemas inteligentes (End-to-End) que capturan leads y cierran ventas mientras tu equipo duerme."
    },
    {
      icon: <Activity className="w-8 h-8 text-emerald-400" />,
      title: "Performance Focus",
      desc: "Adiós a las métricas de vanidad. Cada influencer y flujo de automatización está diseñado con un solo KPI en mente: el ROI de tu negocio."
    }
  ];

  return (
    <section id="agency" className="py-24 bg-innobate-black relative overflow-hidden">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              <span className="text-xs font-mono text-blue-300 uppercase">Innobate Labs • Santiago, CL</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              EL FUTURO DEL <br />
              MARKETING <span className="text-blue-600">ES SINTÉTICO</span>
            </h2>
            
            <p className="text-xl text-white font-medium mb-4">
              Somos el laboratorio de Humanos Digitales y Automatización que está redefiniendo cómo las marcas conectan.
            </p>
            
            <p className="text-gray-400 leading-relaxed mb-8">
              En Innobate, fusionamos la creatividad humana con el poder ilimitado de la Inteligencia Artificial. 
              Creemos que el futuro de las ventas no está en los anuncios estáticos, sino en la experiencia y la cercanía. 
              Por eso creamos a <span className="text-white font-bold">Mia Innoba</span> y sus compañeros: entes digitales diseñados para tener alma, carisma y capacidad de venta.
            </p>

            <div className="p-6 bg-gradient-to-r from-blue-900/20 to-transparent border-l-4 border-blue-500">
               <p className="text-gray-300 italic">
                 "La IA no es una tendencia pasajera, es la herramienta de ventas más potente del 2026 y el futuro próximo."
               </p>
            </div>
          </div>

          {/* Cards / Visuals */}
          <div className="w-full lg:w-1/2 grid gap-6">
            {differentiators.map((item, idx) => (
              <div 
                key={idx}
                className="bg-innobate-dark border border-white/10 p-6 flex items-start gap-4 hover:border-blue-500/30 transition-all hover:bg-white/5 group"
              >
                <div className="p-3 bg-black rounded-lg border border-white/10 group-hover:border-blue-500/50 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;