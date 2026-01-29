import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Agencia', href: '#agency' }, 
    { name: 'Agentes', href: '#agents' },
    { name: 'Modelos', href: '#ai-catalog' },
    { name: 'Servicios', href: '#services' },
    { name: 'Casos', href: '#social-proof' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-innobate-black/80 backdrop-blur-md border-white/10 py-4' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="bg-blue-600 p-1 rounded-lg group-hover:bg-blue-500 transition-colors">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-black text-white tracking-tighter">
            INNOBATE<span className="text-blue-500">.CL</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium text-gray-400 hover:text-white hover:tracking-wide transition-all uppercase"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#rfq-section')}
            className="px-5 py-2 bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-blue-500 hover:text-white transition-all rounded-none"
          >
            Contacto
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden ${
          isOpen ? 'translate-x-0 opacity-100 visible' : 'translate-x-full opacity-0 invisible'
        }`}
      >
        {navLinks.map((link) => (
          <button
            key={link.name}
            onClick={() => handleNavClick(link.href)}
            className="text-2xl font-bold text-white hover:text-blue-500 transition-colors"
          >
            {link.name}
          </button>
        ))}
        <button
            onClick={() => handleNavClick('#rfq-section')}
            className="px-8 py-3 bg-blue-600 text-white font-bold text-lg uppercase tracking-wider rounded-none mt-4"
          >
            Contacto
          </button>
      </div>
    </nav>
  );
};

export default Navbar;