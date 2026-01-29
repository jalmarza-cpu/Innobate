import React from 'react';

const SocialProof: React.FC = () => {
  // Clients list prioritizing Decoforce
  const clients = [
    { name: 'Decoforce', color: 'bg-white' }, // Priority
    { name: 'RetailX', color: 'bg-gray-600' },
    { name: 'Inmobiliaria K\'iris', color: 'bg-gray-600' },
    { name: 'TechChile', color: 'bg-gray-600' },
    { name: 'AutoGroup', color: 'bg-gray-600' },
  ];

  return (
    <section id="social-proof" className="py-12 bg-black border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 mb-8 text-center">
        <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Empresas que innovan con nosotros</p>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="py-2 animate-marquee whitespace-nowrap flex gap-16 px-8">
          {[...clients, ...clients, ...clients].map((client, idx) => (
            <div key={idx} className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
              {/* Logo Placeholder - using text styling for impact */}
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${client.name === 'Decoforce' ? 'bg-innobate-accent' : 'bg-gray-700'}`}></div>
                <span className={`text-xl font-bold ${client.name === 'Decoforce' ? 'text-white' : 'text-gray-400'}`}>{client.name}</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Clone for seamless loop */}
         <div className="absolute top-0 py-2 animate-marquee2 whitespace-nowrap flex gap-16 px-8">
          {[...clients, ...clients, ...clients].map((client, idx) => (
             <div key={idx} className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
               <div className="flex items-center gap-2">
                 <div className={`w-3 h-3 rounded-full ${client.name === 'Decoforce' ? 'bg-innobate-accent' : 'bg-gray-700'}`}></div>
                 <span className={`text-xl font-bold ${client.name === 'Decoforce' ? 'text-white' : 'text-gray-400'}`}>{client.name}</span>
               </div>
             </div>
          ))}
        </div>
      </div>
      
      <style>{`
        .animate-marquee { animation: marquee 25s linear infinite; }
        .animate-marquee2 { animation: marquee2 25s linear infinite; }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </section>
  );
};

export default SocialProof;