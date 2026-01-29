import React from 'react';
import { Bot, Layers, Users, Palette, ArrowUpRight } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: '1',
    title: 'AGENTES IA & BOTS DE ACCIÓN',
    description: 'Delegue la toma de decisiones. Desarrollamos cerebros digitales con n8n, Make y ManyChat corriendo sobre infraestructura segura (Easypanel) que gestionan ventas y logística 24/7.',
    icon: <Bot className="w-8 h-8 text-innobate-cyan" />,
    colSpan: 'md:col-span-2',
    bgImage: 'from-cyan-900/40 to-innobate-black'
  },
  {
    id: '2',
    title: 'BRANDING & DISEÑO 2.0',
    description: 'Identidades que dominan. Desde Logos vectoriales hasta transformación Logo-to-Product. Vea su marca aplicada en el mundo real antes de fabricar nada.',
    icon: <Palette className="w-8 h-8 text-pink-500" />,
    colSpan: 'md:col-span-1',
    bgImage: 'from-pink-900/40 to-innobate-black'
  },
  {
    id: '3',
    title: 'LAB DE HUMANOS DIGITALES',
    description: 'Rostros consistentes y carismáticos. Influencers IA propios y videos UGC virales para campañas de alto impacto que conectan emocionalmente.',
    icon: <Users className="w-8 h-8 text-purple-400" />,
    colSpan: 'md:col-span-2',
    bgImage: 'from-purple-900/40 to-innobate-black'
  },
  {
    id: '4',
    title: 'ECOSISTEMA DE VENTAS',
    description: 'Funnels automatizados integrados a CRM que convierten tráfico frío en clientes leales.',
    icon: <Layers className="w-8 h-8 text-innobate-accent" />,
    colSpan: 'md:col-span-1',
    bgImage: 'from-blue-900/40 to-innobate-black'
  }
];

const ServicesBento: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-innobate-black px-4 border-t border-white/5 relative">
       {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-innobate-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto relative z-10">
        <div className="mb-16">
          <h2 className="text-5xl md:text-8xl font-black text-white mb-6 uppercase tracking-tighter opacity-90">
            Ecosistema <br/>
            <span className="text-stroke-white text-transparent">Innobate</span>
          </h2>
          <p className="text-innobate-muted text-xl max-w-2xl border-l-2 border-innobate-accent pl-6">
            Ingeniería comercial armada con Inteligencia Artificial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
          {services.map((service) => (
            <div 
              key={service.id}
              className={`group relative p-8 border border-white/10 hover:border-innobate-accent/50 transition-all duration-500 bg-gradient-to-br ${service.bgImage} overflow-hidden ${service.colSpan}`}
            >
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRight className="w-6 h-6 text-white" />
              </div>
              
              <div className="h-full flex flex-col justify-between relative z-10">
                <div className="bg-black/40 w-16 h-16 flex items-center justify-center backdrop-blur-md border border-white/10 group-hover:bg-white/10 transition-colors rounded-lg">
                  {service.icon}
                </div>
                
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-3 tracking-tight">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Metallic Hover Glow Effect */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesBento;