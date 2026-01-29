import React from 'react';
import { Instagram, Linkedin, Twitter, CreditCard, Lock, Heart, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const whatsappUrl = "https://wa.me/56912345678";

  return (
    <footer className="bg-innobate-black py-12 border-t border-white/10 text-sm relative overflow-hidden">
      {/* Subtle Background Text */}
      <div className="absolute -bottom-10 -left-10 text-[120px] font-black text-white/[0.01] pointer-events-none select-none">
        INNOBATE
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-black text-white mb-4 tracking-tighter">INNOBATE</h2>
            <p className="text-gray-500 max-w-sm mb-6">
              Agencia de Performance & IA. Transformamos visitantes en ventas mediante tecnología de punta y automatización inteligente.
            </p>
            <div className="flex items-center gap-4 text-gray-600 text-xs mb-6">
                <span className="flex items-center gap-1"><CreditCard size={14}/> Webpay Plus</span>
                <span className="flex items-center gap-1"><CreditCard size={14}/> MercadoPago</span>
            </div>
            {/* Human Trust Tagline */}
            <div className="flex items-center gap-2 text-innobate-accent text-sm font-medium border-l-2 border-innobate-accent pl-3">
              <Heart size={14} className="fill-current" />
              Tecnología diseñada por humanos, para potenciar humanos.
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Ecosistema</h4>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#" className="hover:text-innobate-accent transition">Agentes IA & Bots</a></li>
              <li><a href="#" className="hover:text-innobate-accent transition">Humanos Digitales</a></li>
              <li><a href="#" className="hover:text-innobate-accent transition">Branding 2.0</a></li>
              <li><a href={whatsappUrl} className="hover:text-green-400 transition flex items-center gap-2"><MessageCircle size={14}/> WhatsApp Business</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Legal (Chile)</h4>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#" className="hover:text-white transition">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-white transition">Términos y Condiciones</a></li>
              <li className="flex items-center gap-2 pt-2 text-xs text-gray-400 bg-white/5 p-2 rounded">
                 <Lock size={12} className="text-green-500"/> <span>Cumplimiento total <strong>Ley 19.628</strong></span>
              </li>
              <li className="text-xs text-gray-600">RUT: 78.280.864-8</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
          <p className="text-gray-600 mb-4 md:mb-0 text-xs">
            &copy; {new Date().getFullYear()} INNOBATE CHILE SPA. Todos los derechos reservados.
          </p>
          
          <div className="flex gap-4">
            <a href="#" className="text-gray-500 hover:text-white transition"><Instagram size={20} /></a>
            <a href="#" className="text-gray-500 hover:text-white transition"><Linkedin size={20} /></a>
            <a href="#" className="text-gray-500 hover:text-white transition"><Twitter size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;