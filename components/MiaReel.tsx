import React, { useRef, useState, useEffect } from 'react';
import { Play, Volume2, VolumeX, Instagram, TrendingUp, Users, CheckCircle, ExternalLink } from 'lucide-react';

const MiaReel: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('hub-modelos');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="hub-modelos" className="py-24 bg-gradient-to-b from-innobate-dark to-black relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Hub de Modelos IA</h2>
          <p className="text-innobate-muted text-lg">Tu factor diferenciador en el mercado.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Ficha de Modelo (Mia) */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
             <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h3 className="text-3xl font-bold text-white flex items-center gap-2">
                            Mia Innoba <CheckCircle className="w-6 h-6 text-blue-500 fill-current" />
                        </h3>
                        <p className="text-purple-400 font-medium mt-1">Lúdica • Experta en Deco • Lifestyle</p>
                    </div>
                    <a 
                        href="https://mia.innobate.cl" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white group"
                        title="Ver Perfil de Mia"
                    >
                        <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </a>
                </div>

                <p className="text-gray-300 leading-relaxed mb-8 border-l-4 border-purple-500 pl-4">
                    "Mia no duerme, no pide vacaciones y genera contenido 24/7. Su personalidad conecta con audiencias que buscan autenticidad en lo digital, aunque su origen sea sintético."
                </p>

                {/* Métricas de Impacto */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="bg-black/40 p-4 rounded-2xl text-center border border-white/5">
                        <TrendingUp className="w-6 h-6 text-green-400 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-white">4.8%</div>
                        <div className="text-xs text-gray-500 uppercase">Engagement Rate</div>
                    </div>
                    <div className="bg-black/40 p-4 rounded-2xl text-center border border-white/5">
                        <Users className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-white">+15k</div>
                        <div className="text-xs text-gray-500 uppercase">Interacciones</div>
                    </div>
                     <div className="bg-black/40 p-4 rounded-2xl text-center border border-white/5">
                        <Instagram className="w-6 h-6 text-pink-500 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-white">24/7</div>
                        <div className="text-xs text-gray-500 uppercase">Disponibilidad</div>
                    </div>
                </div>

                {/* Caso de Éxito: Decoforce */}
                <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-white/10 rounded-2xl p-6">
                    <span className="text-xs font-bold text-innobate-accent uppercase tracking-wider mb-2 block">Caso de Éxito</span>
                    <h4 className="text-xl font-bold text-white mb-2">Decoforce & Mia</h4>
                    <p className="text-sm text-gray-300">
                        "Logramos humanizar una marca de construcción y decoración usando a Mia, generando <span className="text-white font-bold">+350 comentarios con intención de compra</span> en su campaña de lanzamiento."
                    </p>
                </div>

                <div className="mt-8">
                    <a 
                        href="https://mia.innobate.cl" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full block text-center py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors"
                    >
                        Visitar Perfil de Mia (mia.innobate.cl)
                    </a>
                </div>
             </div>
          </div>

          {/* Visual Content (Reel) */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-[320px] h-[580px] bg-black rounded-[40px] border-8 border-gray-900 overflow-hidden shadow-2xl shadow-purple-500/10 group cursor-pointer transform hover:rotate-1 transition-all duration-500" onClick={togglePlay}>
              
              {inView ? (
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  loop
                  muted={isMuted}
                  playsInline
                  poster="https://images.pexels.com/photos/8386654/pexels-photo-8386654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                >
                    {/* Using a lifestyle/fashion video placeholder that looks like a high-end influencer reel */}
                  <source src="https://videos.pexels.com/video-files/6974955/6974955-hd_720_1280_25fps.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                  <span className="text-gray-500">Cargando Mia...</span>
                </div>
              )}

              {/* Overlays */}
              <div className={`absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
                <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-white fill-current ml-1" />
                </div>
              </div>

              <div className="absolute top-6 left-1/2 -translate-x-1/2 px-4 py-1 bg-black/50 backdrop-blur-sm rounded-full border border-white/10">
                 <span className="text-[10px] font-bold text-white uppercase tracking-widest">Innobate Model Hub</span>
              </div>

              <div className="absolute bottom-4 right-4 z-20">
                 <button onClick={toggleMute} className="p-3 bg-black/50 rounded-full text-white hover:bg-black/70 transition border border-white/10">
                   {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                 </button>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                <div className="flex items-center gap-2 mb-1">
                    <span className="text-white font-bold text-lg">@MiaInnoba</span>
                    <span className="bg-blue-500 rounded-full p-0.5"><CheckCircle size={10} className="text-white" /></span>
                </div>
                <p className="text-gray-300 text-xs font-light">Diseño de interiores & Lifestyle Digital ✨</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiaReel;