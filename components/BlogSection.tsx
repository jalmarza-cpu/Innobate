import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: "¿Cómo la IA está cambiando el retail en Chile?",
    // AEO Optimization: Direct answer format ("The answer is...")
    excerpt: "El retail nacional está pasando de la intuición a la predicción algorítmica. La IA ahora permite anticipar quiebres de stock antes de que ocurran, hiper-personalizar ofertas en tiempo real y automatizar la post-venta, reduciendo costos operativos hasta un 30%.",
    date: "Oct 12, 2025",
    readTime: "5 min",
    category: "Retail & IA"
  },
  {
    id: 2,
    title: "Guía para automatizar tu embudo de ventas en 2026",
    // AEO Optimization: Conversational explanation
    excerpt: "Automatizar en 2026 ya no es solo enviar emails masivos. Se trata de implementar agentes autónomos que califican leads vía WhatsApp, agendan reuniones en tu calendario y nutren a los prospectos indecisos sin intervención humana.",
    date: "Sep 28, 2025",
    readTime: "7 min",
    category: "Automation"
  }
];

const BlogSection: React.FC = () => {
  return (
    <section className="py-24 bg-black border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-innobate-purple" />
              <span className="text-innobate-purple font-bold tracking-widest text-sm uppercase">Innobate Insights</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Autoridad Temática
            </h2>
            <p className="text-innobate-muted text-lg">
              Contenido estratégico diseñado para responder las preguntas reales que tus clientes le hacen a la IA. 
              <span className="text-white font-medium"> AEO (Answer Engine Optimization)</span> aplicado.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-white hover:text-innobate-accent transition-colors mt-6 md:mt-0 font-medium">
            Ver todos los artículos <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Changed to grid-cols-2 to fit 2 articles perfectly */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {articles.map((article) => (
            <article 
              key={article.id} 
              className="group bg-innobate-dark border border-white/10 rounded-2xl p-8 hover:border-innobate-purple/50 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between h-full relative overflow-hidden"
            >
              {/* Decorative gradient blob */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-innobate-purple/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-innobate-purple/20 transition-all"></div>

              <div>
                <div className="flex justify-between items-center mb-6 relative z-10">
                  <span className="text-xs font-bold text-innobate-accent bg-innobate-accent/10 px-3 py-1 rounded-full uppercase tracking-wider border border-innobate-accent/20">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-500 font-mono">{article.readTime} lectura</span>
                </div>
                
                <h3 className="text-xl md:text-3xl font-bold text-white mb-4 leading-tight group-hover:text-innobate-purple transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-gray-400 mb-8 text-base leading-relaxed border-l-2 border-white/10 pl-4">
                  {article.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-white/5 pt-6 mt-auto">
                <span className="text-xs text-gray-600 font-mono">{article.date}</span>
                <button className="text-white text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all hover:text-innobate-accent">
                  Leer Insight <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
        
        {/* Mobile View All Button */}
        <div className="mt-12 text-center md:hidden">
            <button className="text-white hover:text-innobate-accent transition-colors font-medium flex items-center justify-center gap-2 mx-auto">
            Ver todos los artículos <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;