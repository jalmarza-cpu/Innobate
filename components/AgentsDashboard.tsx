import React, { useState, useEffect } from 'react';
import { Bot, Terminal, Workflow, MessageSquare, Zap, Cpu, Server, Activity } from 'lucide-react';

const AgentsDashboard: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([
    "[SYSTEM] Inicializando Agente de Ventas v2.4...",
    "[MANYCHAT] Nuevo lead detectado: ID #9928",
    "[N8N] Ejecutando workflow de calificación...",
    "[CRM] Lead sincronizado exitosamente."
  ]);

  // Simulate live terminal logs
  useEffect(() => {
    const possibleLogs = [
      "[WHATSAPP] Mensaje entrante procesado (Sentiment: Positive)",
      "[OPENAI] Generando respuesta contextual (Tokens: 145)",
      "[MAKE] Webhook recibido: Actualización de Inventario",
      "[DB] Sincronización con ERP completada en 12ms",
      "[AGENT] 'Hunter' ha agendado una reunión",
      "[SYSTEM] Chequeo de salud del servidor: 100% OK"
    ];

    const interval = setInterval(() => {
      const newLog = possibleLogs[Math.floor(Math.random() * possibleLogs.length)];
      setLogs(prev => [newLog, ...prev].slice(0, 6));
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const agents = [
    {
      id: 1,
      name: "Hunter Bot",
      role: "Agente de Ventas",
      icon: <MessageSquare className="w-6 h-6 text-innobate-cyan" />,
      stack: ["ManyChat", "OpenAI", "WhatsApp"],
      status: "Online",
      desc: "Califica leads en tiempo real, responde dudas frecuentes y agenda reuniones solo con prospectos viables.",
      stats: "24/7 Active"
    },
    {
      id: 2,
      name: "Ops Manager",
      role: "Orquestador de Procesos",
      icon: <Workflow className="w-6 h-6 text-purple-400" />,
      stack: ["n8n", "Make", "ERP"],
      status: "Processing",
      desc: "Conecta tu CRM con facturación y logística. Elimina el 'data entry' manual y reduce errores humanos a cero.",
      stats: "500 ops/min"
    },
    {
      id: 3,
      name: "Mia Core",
      role: "Cerebro Digital",
      icon: <Cpu className="w-6 h-6 text-pink-400" />,
      stack: ["RAG", "Vector DB", "Easypanel"],
      status: "Thinking",
      desc: "El cerebro detrás de la influencer. Analiza tendencias y personaliza la interacción de video con datos del cliente.",
      stats: "99.9% Uptime"
    }
  ];

  return (
    <section id="agents" className="py-24 bg-innobate-black relative overflow-hidden">
      {/* Background Tech Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-innobate-cyan/10 via-innobate-black to-innobate-black pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header Section */}
        <div className="mb-16 text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-innobate-cyan/10 border border-innobate-cyan/30 rounded mb-6">
              <Zap className="w-4 h-4 text-innobate-cyan" />
              <span className="text-xs font-mono text-innobate-cyan uppercase tracking-widest">Fuerza Laboral Sintética</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-6">
              TUS NUEVOS <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-innobate-cyan to-blue-600">EMPLEADOS DIGITALES</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl border-l-2 border-innobate-cyan pl-6 max-w-2xl">
              "Deja de programar respuestas. Empieza a delegar decisiones." <br/>
              Nuestros Agentes IA se integran en tu operación para gestionar stock, atender clientes y cerrar tratos mientras tú te enfocas en la estrategia.
            </p>
          </div>

          {/* Real-time Terminal Visual */}
          <div className="w-full md:w-96 bg-black border border-white/10 rounded-lg p-4 font-mono text-xs shadow-2xl shadow-innobate-cyan/5">
            <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
              <span className="flex items-center gap-2 text-gray-500">
                <Terminal size={14} /> System Activity
              </span>
              <span className="flex items-center gap-1 text-green-500">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div> Live
              </span>
            </div>
            <div className="space-y-2 h-32 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
              {logs.map((log, i) => (
                <div key={i} className={`truncate ${i === 0 ? 'text-innobate-cyan' : 'text-gray-600'}`}>
                  <span className="opacity-50 mr-2">{new Date().toLocaleTimeString()}</span>
                  {log}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bento Grid of Agents */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {agents.map((agent) => (
            <div 
              key={agent.id}
              className="group relative bg-innobate-dark border border-white/10 p-8 hover:border-innobate-cyan transition-all duration-300 overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-innobate-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-black border border-white/10 rounded-lg group-hover:border-innobate-cyan/50 transition-colors">
                  {agent.icon}
                </div>
                <div className="flex items-center gap-2 bg-black/50 px-3 py-1 rounded-full border border-white/5">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{agent.status}</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-innobate-cyan transition-colors">{agent.name}</h3>
              <p className="text-sm text-gray-500 font-mono mb-4 uppercase tracking-wider">{agent.role}</p>
              
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                {agent.desc}
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {agent.stack.map(tech => (
                  <span key={tech} className="px-2 py-1 bg-white/5 border border-white/10 text-[10px] text-gray-400 font-mono rounded">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 text-xs text-innobate-cyan font-bold pt-6 border-t border-white/5">
                <Server size={14} />
                {agent.stats}
              </div>
            </div>
          ))}

          {/* Infrastructure Card (Horizontal Bottom) */}
          <div className="md:col-span-3 bg-gradient-to-r from-blue-900/10 to-transparent border border-white/10 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-500/10 rounded-full">
                <Activity className="text-blue-400" />
              </div>
              <div>
                <h4 className="text-white font-bold">Infraestructura Crítica</h4>
                <p className="text-gray-400 text-sm">Deploy en Easypanel sobre contenedores aislados. Tu operación nunca se detiene.</p>
              </div>
            </div>
            <div className="flex gap-8 text-center md:text-right">
                <div>
                    <div className="text-2xl font-bold text-white">99.9%</div>
                    <div className="text-[10px] text-gray-500 uppercase">Uptime Garantizado</div>
                </div>
                 <div>
                    <div className="text-2xl font-bold text-white">&lt;50ms</div>
                    <div className="text-[10px] text-gray-500 uppercase">Latencia</div>
                </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AgentsDashboard;