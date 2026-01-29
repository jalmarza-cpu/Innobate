import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingActions: React.FC = () => {
  const whatsappNumber = "56912345678"; // Chile format
  const message = "Hola Innobate, quiero escalar mis ventas.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6 fill-current" />
    </a>
  );
};

export default FloatingActions;