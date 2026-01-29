import React, { useState } from 'react';
import { Send, ShieldCheck } from 'lucide-react';
import { RFQFormData, BudgetRange, ServiceType } from '../types';

const RFQForm: React.FC = () => {
  const [formData, setFormData] = useState<RFQFormData & { rut: string, industry: string }>({
    companyName: '',
    rut: '',
    contactName: '',
    email: '',
    phone: '',
    budget: '',
    serviceInterest: '',
    industry: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call to Firebase/Backend
    setTimeout(() => {
      setStatus('success');
      console.log('Lead Qualified:', formData);
    }, 1500);
  };

  if (status === 'success') {
    return (
      <section id="rfq-section" className="py-24 bg-innobate-dark">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-xl mx-auto bg-blue-900/20 border border-blue-500/30 p-12">
            <h3 className="text-3xl font-bold text-white mb-4">Solicitud Recibida</h3>
            <p className="text-gray-300 mb-6">Hemos recibido tus datos. Un consultor senior revisará la factibilidad de tu proyecto y te contactará para agendar la auditoría.</p>
            <button 
              onClick={() => setStatus('idle')}
              className="text-blue-400 font-bold hover:underline"
            >
              Volver al sitio
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="rfq-section" className="py-24 bg-gradient-to-b from-innobate-black to-slate-900 border-t border-white/5 relative overflow-hidden">
      
      {/* BACKGROUND SLOGAN WATERMARK */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none opacity-5">
         <span className="text-[12vw] font-black uppercase text-white leading-none whitespace-nowrap">Innovate</span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* MASSIVE CALL TO ACTION SLOGAN */}
        <div className="mb-20 text-center">
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-400 to-gray-800 tracking-tighter leading-[0.9] mb-4">
                INNOVATE <br/> OR ESFUMATE
            </h2>
            <p className="text-innobate-cyan font-mono text-sm tracking-[0.3em] uppercase animate-pulse">
                El mercado no espera a nadie
            </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="w-full lg:w-1/3">
            <div className="inline-block px-3 py-1 bg-blue-900/30 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
              B2B Only
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              AGENDA TU <br/> AUDITORÍA
            </h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              No hacemos "marketing bonito". Implementamos sistemas de ventas. Completa el formulario para evaluar si tu empresa califica para nuestros servicios de automatización.
            </p>
            
            <div className="flex items-start gap-4 mb-8">
                <ShieldCheck className="w-6 h-6 text-blue-500 mt-1" />
                <p className="text-xs text-gray-500">
                    Tus datos están protegidos bajo la <strong>Ley 19.628</strong> sobre Protección de la Vida Privada (Chile). NDA disponible bajo solicitud.
                </p>
            </div>

            <div className="bg-black/50 p-6 border border-white/10">
              <h4 className="text-white font-bold mb-2">Innobate HQ</h4>
              <p className="text-gray-400 text-sm">Santiago, Chile</p>
              <p className="text-gray-400 text-sm">Monjitas 527, Of 1207</p>
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 bg-white/5 border border-white/5">
              
              <div className="col-span-1">
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Razón Social / Empresa</label>
                <input
                  type="text"
                  name="companyName"
                  required
                  className="w-full bg-black border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all rounded-none"
                  placeholder="Ej: Constructora Limitada"
                  value={formData.companyName}
                  onChange={handleChange}
                />
              </div>

               <div className="col-span-1">
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">RUT Empresa (Opcional)</label>
                <input
                  type="text"
                  name="rut"
                  className="w-full bg-black border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all rounded-none"
                  placeholder="76.xxx.xxx-x"
                  value={formData.rut}
                  onChange={handleChange}
                />
              </div>

              <div className="col-span-1">
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Nombre de Contacto</label>
                <input
                  type="text"
                  name="contactName"
                  required
                  className="w-full bg-black border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all rounded-none"
                  placeholder="Gerente Comercial / CEO"
                  value={formData.contactName}
                  onChange={handleChange}
                />
              </div>

              <div className="col-span-1">
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Email Corporativo</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-black border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all rounded-none"
                  placeholder="nombre@empresa.cl"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

               <div className="col-span-1">
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Industria / Nicho</label>
                <select
                  name="industry"
                  required
                  className="w-full bg-black border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all appearance-none rounded-none"
                  value={formData.industry}
                  onChange={handleChange}
                >
                  <option value="" disabled>Selecciona industria</option>
                  <option value="Construction">Construcción & Ferretería</option>
                  <option value="Retail">Retail & Ecommerce</option>
                  <option value="Decoration">Decoración & Inmobiliaria</option>
                  <option value="Services">Servicios Profesionales</option>
                  <option value="Other">Otro</option>
                </select>
              </div>

              <div className="col-span-1">
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Presupuesto Mensual Disp.</label>
                <select
                  name="budget"
                  required
                  className="w-full bg-black border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all appearance-none rounded-none"
                  value={formData.budget}
                  onChange={handleChange}
                >
                  <option value="" disabled>Selecciona rango inversión</option>
                  {Object.values(BudgetRange).map(val => (
                    <option key={val} value={val}>{val}</option>
                  ))}
                </select>
              </div>

              <div className="col-span-1 md:col-span-2">
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Interés Principal</label>
                <select
                  name="serviceInterest"
                  required
                  className="w-full bg-black border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all appearance-none rounded-none"
                  value={formData.serviceInterest}
                  onChange={handleChange}
                >
                  <option value="" disabled>Selecciona solución</option>
                  {Object.values(ServiceType).map(val => (
                    <option key={val} value={val}>{val}</option>
                  ))}
                </select>
              </div>

              <div className="col-span-1 md:col-span-2">
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Desafío Actual</label>
                <textarea
                  name="message"
                  rows={3}
                  className="w-full bg-black border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all resize-none rounded-none"
                  placeholder="¿Qué proceso deseas automatizar o qué meta de ventas buscas alcanzar?"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <div className="col-span-1 md:col-span-2 mt-4">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-4 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider rounded-none shadow-[0_0_30px_rgba(43,88,255,0.3)] hover:shadow-[0_0_50px_rgba(43,88,255,0.5)]"
                >
                  {status === 'submitting' ? 'Procesando...' : 'Solicitar Auditoría'}
                  {!status && <Send className="w-5 h-5" />}
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RFQForm;