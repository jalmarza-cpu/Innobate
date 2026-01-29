import React, { useState } from 'react';
import { CheckCircle, ArrowRight, HardHat, Armchair, ShoppingBag, Play, BarChart3, ScanFace } from 'lucide-react';

type NicheType = 'construction' | 'decoration' | 'retail';

interface ModelData {
  id: string;
  niche: NicheType;
  name: string;
  role: string;
  description: string;
  stats: { label: string; value: string }[];
  imageUrl: string;
  tags: string[];
  gradient: string;
  index: string;
}

const models: Record<NicheType, ModelData> = {
  construction: {
    id: 'cons-01',
    niche: 'construction',
    name: 'Ing. Marcos IA',
    role: 'Especialista Técnico & Logística',
    description: 'Influencer técnico diseñado para B2B. Realiza demostraciones de SKU masivos, explica fichas técnicas de maquinaria y reduce la fricción en ventas complejas de ferretería industrial.',
    stats: [
      { label: 'Retención Video', value: '65%' },
      { label: 'Leads Calificados', value: '+450/mes' },
      { label: 'Tasa de Cierre', value: '12%' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1504305754058-2f08ccd89a05?q=80&w=2070&auto=format&fit=crop', // Construction context
    tags: ['B2B', 'Ferretería', 'Logística'],
    gradient: 'from-orange-900/80 to-slate-900',
    index: '01'
  },
  decoration: {
    id: 'deco-01',
    niche: 'decoration',
    name: 'Ana Design IA',
    role: 'Interiorismo & Home Staging',
    description: 'Visualización arquitectónica con alma. Presenta mobiliario y terminaciones en entornos habitados, permitiendo a tus clientes sentir el espacio antes de comprar. La herramienta definitiva para Inmobiliarias y Tiendas de Hogar.',
    stats: [
      { label: 'Citas Showroom', value: '+85/sem' },
      { label: 'Tiempo en Sitio', value: '+4min' },
      { label: 'ROI Campaña', value: '3.8x' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop', // Interior Design context
    tags: ['B2C', 'Inmobiliaria', 'Deco'],
    gradient: 'from-teal-900/80 to-slate-900',
    index: '02'
  },
  retail: {
    id: 'ret-01',
    niche: 'retail',
    name: 'Mia Innoba',
    role: 'Fashion & Lifestyle',
    description: 'La joya de la corona. Conexión emocional pura para marcas de ropa y accesorios. Mia no vende productos, vende un estilo de vida aspiracional que detona la compra impulsiva.',
    stats: [
      { label: 'Engagement', value: '4.8%' },
      { label: 'Interacciones', value: '+15k' },
      { label: 'Disponibilidad', value: '24/7' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?q=80&w=1974&auto=format&fit=crop', // Fashion context
    tags: ['B2C', 'Ecommerce', 'Moda'],
    gradient: 'from-purple-900/80 to-slate-900',
    index: '03'
  }
};

const AIModelCatalog: React.FC = () => {
  const [activeNiche, setActiveNiche] = useState<NicheType>('retail');
  const currentModel = models[activeNiche];

  return (
    <section id="ai-catalog" className="py-24 bg-innobate-black relative overflow-hidden">
      {/* DECORATION: Tech Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>
      
      {/* DECORATION: Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-2">
            <ScanFace className="w-4 h-4 text-blue-500 animate-pulse" />
            <span className="text-blue-500 font-mono text-sm tracking-widest uppercase">Arquitectura de Humanos Digitales</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
            Selector de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Talentos IA</span>
          </h2>
        </div>

        {/* Niche Selector Tabs - Z-INDEX 20 to be above decorations */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 relative z-20">
          <button
            onClick={() => setActiveNiche('construction')}
            className={`relative overflow-hidden flex items-center gap-2 px-6 py-3 rounded-none border transition-all duration-300 group ${activeNiche === 'construction' ? 'bg-white text-black border-white' : 'bg-transparent text-gray-500 border-gray-800 hover:border-blue-500/50 hover:text-blue-400'}`}
          >
            <div className={`absolute top-0 left-0 w-1 h-full bg-blue-600 transition-transform duration-300 ${activeNiche === 'construction' ? 'scale-y-100' : 'scale-y-0'}`}></div>
            <HardHat size={18} />
            <span className="font-bold tracking-wide z-10">CONSTRUCCIÓN</span>
          </button>
          <button
            onClick={() => setActiveNiche('decoration')}
            className={`relative overflow-hidden flex items-center gap-2 px-6 py-3 rounded-none border transition-all duration-300 group ${activeNiche === 'decoration' ? 'bg-white text-black border-white' : 'bg-transparent text-gray-500 border-gray-800 hover:border-blue-500/50 hover:text-blue-400'}`}
          >
            <div className={`absolute top-0 left-0 w-1 h-full bg-teal-600 transition-transform duration-300 ${activeNiche === 'decoration' ? 'scale-y-100' : 'scale-y-0'}`}></div>
            <Armchair size={18} />
            <span className="font-bold tracking-wide z-10">DECORACIÓN</span>
          </button>
          <button
            onClick={() => setActiveNiche('retail')}
            className={`relative overflow-hidden flex items-center gap-2 px-6 py-3 rounded-none border transition-all duration-300 group ${activeNiche === 'retail' ? 'bg-white text-black border-white' : 'bg-transparent text-gray-500 border-gray-800 hover:border-blue-500/50 hover:text-blue-400'}`}
          >
            <div className={`absolute top-0 left-0 w-1 h-full bg-purple-600 transition-transform duration-300 ${activeNiche === 'retail' ? 'scale-y-100' : 'scale-y-0'}`}></div>
            <ShoppingBag size={18} />
            <span className="font-bold tracking-wide z-10">RETAIL & MODA</span>
          </button>
        </div>

        {/* Content Display Container with Glow Border */}
        <div className="relative group">
          {/* DECORATION: Subtle Gradient Border Glow - Added pointer-events-none */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg opacity-20 group-hover:opacity-40 blur-lg transition duration-1000 pointer-events-none"></div>
          
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-0 border border-white/10 bg-innobate-dark shadow-2xl">
            
            {/* Visual Side (Left) */}
            <div className="relative h-[500px] lg:h-[600px] overflow-hidden group/image">
              <div className={`absolute inset-0 bg-gradient-to-br ${currentModel.gradient} mix-blend-multiply z-10 transition-colors duration-700 pointer-events-none`}></div>
              <img 
                src={currentModel.imageUrl} 
                alt={currentModel.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-105"
              />
              
              {/* DECORATION: Tech HUD Corners - Added pointer-events-none */}
              <div className="absolute top-6 left-6 w-16 h-16 border-t-2 border-l-2 border-white/30 z-20 pointer-events-none"></div>
              <div className="absolute top-6 right-6 w-16 h-16 border-t-2 border-r-2 border-white/30 z-20 pointer-events-none"></div>
              <div className="absolute bottom-6 left-6 w-16 h-16 border-b-2 border-l-2 border-white/30 z-20 pointer-events-none"></div>
              <div className="absolute bottom-6 right-6 w-16 h-16 border-b-2 border-r-2 border-white/30 z-20 pointer-events-none"></div>

              {/* Overlay Info */}
              <div className="absolute bottom-0 left-0 w-full p-8 z-20 bg-gradient-to-t from-black via-black/80 to-transparent">
                <div className="flex gap-2 mb-4">
                  {currentModel.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-bold text-white uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-4xl font-black text-white mb-2 italic">{currentModel.name}</h3>
                <p className="text-blue-400 font-mono text-xs uppercase flex items-center gap-2 tracking-widest">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> Sistema Activo
                </p>
              </div>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                  <Play className="w-8 h-8 text-white fill-current ml-1" />
                </div>
              </div>
            </div>

            {/* Data Side (Right) */}
            <div className="p-8 lg:p-16 flex flex-col justify-center bg-gradient-to-b from-innobate-dark to-black relative overflow-hidden">
              
              {/* DECORATION: Giant Background Number */}
              <div className="absolute -right-4 -top-10 text-[180px] font-black text-white/[0.03] select-none pointer-events-none leading-none tracking-tighter">
                {currentModel.index}
              </div>

              <div className="absolute top-8 right-8 text-gray-700 pointer-events-none">
                 <BarChart3 size={40} strokeWidth={1} />
              </div>

              <div className="relative z-10">
                  <h4 className="text-2xl font-bold text-white mb-2">{currentModel.role}</h4>
                  <div className="w-12 h-1 bg-blue-600 mb-6"></div>
                  
                  <p className="text-gray-400 text-lg leading-relaxed mb-8 border-l-2 border-white/10 pl-4">
                    {currentModel.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {currentModel.stats.map((stat, idx) => (
                      <div key={idx} className="bg-white/5 p-4 border border-white/5 hover:border-blue-500/30 transition-colors">
                        <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                        <div className="text-[10px] text-gray-500 uppercase tracking-widest">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <button className="self-start group flex items-center gap-3 text-white font-bold text-lg hover:text-blue-400 transition-colors">
                    VER DEMO DE NICHO <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AIModelCatalog;