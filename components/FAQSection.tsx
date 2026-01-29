import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, Zap } from 'lucide-react';

const faqs = [
  {
    question: "¿La IA reemplazará a mi equipo actual?",
    answer: "No. La IA de Innobate está diseñada para ser un copiloto de élite. Automatizamos las tareas mecánicas y repetitivas para que su equipo humano pueda enfocarse en la estrategia, la creatividad y el cierre de negocios de alto valor."
  },
  {
    question: "¿Qué tan difícil es implementar estos Agentes?",
    answer: "Nosotros nos encargamos de la arquitectura completa. Usamos tecnología de punta como n8n y Make para que la transición sea transparente y sin fricción técnica para su empresa. No requiere que su equipo sepa programar."
  },
  {
    question: "¿Las influencers IA pueden interactuar con clientes reales?",
    answer: "Absolutamente. Gracias a nuestra Ingeniería de Identidad, modelos como Mia Innoba mantienen consistencia total y pueden integrarse con bots de ventas que responden en tiempo real 24/7, manteniendo el tono de voz de su marca."
  }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-innobate-black border-t border-white/5 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-blue-900/10 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          
          {/* Header */}
          <div className="w-full md:w-1/3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-innobate-cyan/10 border border-innobate-cyan/30 rounded mb-6">
              <HelpCircle className="w-4 h-4 text-innobate-cyan" />
              <span className="text-xs font-mono text-innobate-cyan uppercase tracking-widest">Dudas Frecuentes</span>
            </div>
            <h2 className="text-4xl font-black text-white mb-6 leading-tight">
              EL PUENTE ENTRE <br />
              <span className="text-blue-500">HUMANOS E IA</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Entendemos que la automatización genera preguntas. Aquí explicamos cómo potenciamos a tu fuerza laboral, no la reemplazamos.
            </p>
            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
              <div className="flex items-center gap-3 mb-2">
                <Zap className="text-yellow-400 fill-current" size={20} />
                <span className="text-white font-bold">Potenciación Humana</span>
              </div>
              <p className="text-xs text-gray-400">
                Nuestra tecnología devuelve a tu equipo su activo más valioso: el tiempo.
              </p>
            </div>
          </div>

          {/* Accordion */}
          <div className="w-full md:w-2/3 space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`border transition-all duration-300 rounded-xl overflow-hidden ${
                  openIndex === index 
                    ? 'bg-white/5 border-innobate-cyan/50 shadow-[0_0_20px_rgba(0,210,255,0.1)]' 
                    : 'bg-transparent border-white/10 hover:border-white/30'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className={`text-lg font-bold ${openIndex === index ? 'text-white' : 'text-gray-300'}`}>
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <Minus className="text-innobate-cyan" />
                  ) : (
                    <Plus className="text-gray-500" />
                  )}
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5 mt-2">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;