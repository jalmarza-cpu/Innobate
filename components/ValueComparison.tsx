import React from 'react';
import { X, Check, Zap, Clock, TrendingDown, Database, Cpu, ShieldCheck } from 'lucide-react';

const ValueComparison: React.FC = () => {
  return (
    <section className="py-24 bg-innobate-black relative overflow-hidden border-t border-white/5">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* SECTION 1: COMPARISON BENTO */}
        <div className="mb-24">
            <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-4">
                    <TrendingDown className="w-4 h-4 text-green-400" />
                    <span className="text-xs font-mono text-gray-300 uppercase tracking-widest">Eficiencia Operativa</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter">
                    El Costo de <span className="text-gray-600 line-through decoration-red-500">No Innovar</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    La producción de contenido tradicional es lenta, costosa y logísticamente una pesadilla. 
                    Nuestra fábrica de contenido IA elimina la fricción.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Traditional Card */}
                <div className="bg-innobate-dark border border-white/5 p-8 rounded-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Clock size={120} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-500 mb-6 flex items-center gap-3">
                        Producción Tradicional
                        <span className="text-xs bg-red-900/30 text-red-400 px-2 py-1 rounded border border-red-900/50 uppercase">Obsoleto</span>
                    </h3>
                    <ul className="space-y-4 text-gray-400">
                        <li className="flex items-start gap-3">
                            <X className="w-5 h-5 text-red-500 mt-1 shrink-0" />
                            <span>Coordinación de casting, locaciones y equipos técnicos.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <X className="w-5 h-5 text-red-500 mt-1 shrink-0" />
                            <span>Costos variables impredecibles (viáticos, horas extra).</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <X className="w-5 h-5 text-red-500 mt-1 shrink-0" />
                            <span>Semanas de espera para post-producción y edición.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <X className="w-5 h-5 text-red-500 mt-1 shrink-0" />
                            <span>Dependencia humana (enfermedades, horarios, ánimo).</span>
                        </li>
                    </ul>
                </div>

                {/* Innobate Card */}
                <div className="bg-gradient-to-br from-innobate-dark to-black border border-innobate-cyan/30 p-8 rounded-2xl relative overflow-hidden shadow-[0_0_50px_rgba(0,210,255,0.05)]">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-innobate-cyan/10 rounded-full blur-3xl pointer-events-none"></div>
                    
                    <div className="flex justify-between items-start mb-6">
                        <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                            Innobate Factory
                            <span className="text-xs bg-innobate-cyan/10 text-innobate-cyan px-2 py-1 rounded border border-innobate-cyan/30 uppercase flex items-center gap-1">
                                <Zap size={10} /> 2026 Ready
                            </span>
                        </h3>
                    </div>

                    <ul className="space-y-4 text-gray-200">
                        <li className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-innobate-cyan mt-1 shrink-0" />
                            <span>Producción 100% digital. Sin cámaras, sin set.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-innobate-cyan mt-1 shrink-0" />
                            <span><strong className="text-white">Reducción del 80%</strong> en costos operativos mensuales.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-innobate-cyan mt-1 shrink-0" />
                            <span>Generación de variantes A/B testing en minutos.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-innobate-cyan mt-1 shrink-0" />
                            <span>Escalabilidad infinita. Tu marca nunca duerme.</span>
                        </li>
                    </ul>

                    {/* Impact Badge */}
                    <div className="mt-8 p-4 bg-innobate-cyan/10 border border-innobate-cyan/20 rounded-xl flex items-center justify-between">
                         <div>
                            <span className="block text-xs text-innobate-cyan font-bold uppercase">Ahorro Proyectado</span>
                            <span className="text-2xl font-black text-white">80% OPEX</span>
                         </div>
                         <TrendingDown className="w-8 h-8 text-innobate-cyan" />
                    </div>
                </div>
            </div>
        </div>

        {/* SECTION 2: PRICING (PREMIUM TARIFF 2026) */}
        <div className="max-w-7xl mx-auto">
            <h3 className="text-3xl md:text-5xl font-black text-white mb-12 text-center uppercase tracking-tighter">
                Inversión en <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Activos Digitales</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* 1. Arquitectura (Setup) */}
                <div className="p-8 bg-innobate-dark border-t-4 border-purple-500 relative group hover:bg-white/5 transition-colors flex flex-col">
                    <div className="absolute top-6 right-6 p-2 bg-purple-900/30 rounded-lg">
                        <Cpu className="text-purple-400" size={24}/>
                    </div>
                    <h4 className="text-lg font-bold text-gray-400 uppercase tracking-widest mb-2">Arquitectura (Setup)</h4>
                    <div className="flex flex-col mb-6">
                        <span className="text-3xl font-black text-white">Desde $1.5M</span>
                        <span className="text-xs text-purple-400 font-bold uppercase tracking-wider">Aprox. 40 UF / Pago Único</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-6 border-b border-white/10 pb-6 flex-grow">
                        Diseño del "cerebro digital" y conexión profunda con sus sistemas actuales (CRM/ERP).
                    </p>
                    <ul className="space-y-3">
                        <li className="text-sm text-gray-300 flex gap-2"><Check size={16} className="text-purple-500 shrink-0"/> Ingeniería de Agentes</li>
                        <li className="text-sm text-gray-300 flex gap-2"><Check size={16} className="text-purple-500 shrink-0"/> Integración n8n & Make</li>
                        <li className="text-sm text-gray-300 flex gap-2"><Check size={16} className="text-purple-500 shrink-0"/> Setup de WhatsApp Business API</li>
                    </ul>
                </div>

                {/* 2. Fábrica de Contenido (Content Factory) */}
                <div className="p-8 bg-innobate-dark border-t-4 border-innobate-cyan relative group hover:bg-white/5 transition-colors flex flex-col shadow-2xl shadow-blue-900/10">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-innobate-cyan text-black font-bold px-4 py-1 text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(0,210,255,0.4)]">
                        Most Popular
                    </div>
                    <div className="absolute top-6 right-6 p-2 bg-cyan-900/30 rounded-lg">
                        <Database className="text-innobate-cyan" size={24}/>
                    </div>
                    <h4 className="text-lg font-bold text-gray-400 uppercase tracking-widest mb-2">Fábrica de Contenido</h4>
                    <div className="flex flex-col mb-6">
                        <span className="text-3xl font-black text-white">Desde $650k</span>
                        <span className="text-xs text-innobate-cyan font-bold uppercase tracking-wider">Mensual / Recurrente</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-6 border-b border-white/10 pb-6 flex-grow">
                        Pack de videos con influencers IA, eliminando costos de modelos y locaciones físicas.
                    </p>
                    <ul className="space-y-3">
                        <li className="text-sm text-gray-300 flex gap-2"><Check size={16} className="text-innobate-cyan shrink-0"/> 4-8 Videos UGC / Mes</li>
                        <li className="text-sm text-gray-300 flex gap-2"><Check size={16} className="text-innobate-cyan shrink-0"/> Derechos de imagen perpetuos</li>
                        <li className="text-sm text-gray-300 flex gap-2"><Check size={16} className="text-innobate-cyan shrink-0"/> Guiones de venta persuasiva</li>
                    </ul>
                </div>

                {/* 3. Gestión y Soporte Elite */}
                <div className="p-8 bg-innobate-dark border-t-4 border-blue-600 relative group hover:bg-white/5 transition-colors flex flex-col">
                    <div className="absolute top-6 right-6 p-2 bg-blue-900/30 rounded-lg">
                        <ShieldCheck className="text-blue-400" size={24}/>
                    </div>
                    <h4 className="text-lg font-bold text-gray-400 uppercase tracking-widest mb-2">Gestión & Soporte</h4>
                    <div className="flex flex-col mb-6">
                        <span className="text-3xl font-black text-white">Desde 15 UF</span>
                        <span className="text-xs text-blue-400 font-bold uppercase tracking-wider">Mensual / Elite SLA</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-6 border-b border-white/10 pb-6 flex-grow">
                        Mantención de flujos, optimización continua de IA y garantía de uptime.
                    </p>
                    <ul className="space-y-3">
                        <li className="text-sm text-gray-300 flex gap-2"><Check size={16} className="text-blue-500 shrink-0"/> Uptime Garantizado 99.9%</li>
                        <li className="text-sm text-gray-300 flex gap-2"><Check size={16} className="text-blue-500 shrink-0"/> Ajustes de Prompts Mensuales</li>
                        <li className="text-sm text-gray-300 flex gap-2"><Check size={16} className="text-blue-500 shrink-0"/> Reportes de ROI en Tiempo Real</li>
                    </ul>
                </div>

            </div>
        </div>

      </div>
    </section>
  );
};

export default ValueComparison;