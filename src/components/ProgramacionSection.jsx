import React from 'react';
import { Calendar, Clock, Star } from 'lucide-react';

export default function ProgramacionSection({ programacion, programacionRef }) {
  return (
    <section ref={programacionRef} className="py-20 px-4 bg-white/50">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#518488]">
          Programación Completa
        </h2>
        
        <div className="space-y-12">
          {programacion.map((dia, idx) => (
            <div key={idx} className="animate-slideIn" style={{ animationDelay: `${idx * 0.2}s` }}>
              <div className="text-white rounded-t-3xl p-6 shadow-xl" style={{ background: `linear-gradient(135deg, ${dia.color}, ${dia.color}dd)` }}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Calendar className="w-10 h-10 mr-4" />
                    <h3 className="text-3xl font-bold">{dia.fecha}</h3>
                  </div>
                   <Star className="w-10 h-10 fill-[#D1A148] mx-2 animate-pulse" />
                </div>
              </div>
              
              <div className="bg-[#F0E7D2] rounded-b-3xl shadow-xl p-8">
                <div className="grid gap-4">
                  {dia.eventos.map((evento, eventIdx) => {
                    const IconComponent = evento.icon;
                    return (
                      <div
                        key={eventIdx}
                        className="group flex items-center gap-6 p-4 rounded-2xl bg-white hover:bg-gradient-to-r hover:from-[#F0E7D2] hover:to-white transition-all hover:shadow-lg border-2 border-transparent hover:border-[#D1A148]"
                      >
                        <div className="p-3 rounded-xl group-hover:scale-110 transition-transform" style={{ backgroundColor: `${dia.color}20` }}>
                          <IconComponent className="w-8 h-8" style={{ color: dia.color }} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <Clock className="w-5 h-5" style={{ color: dia.color }} />
                            <span className="font-bold text-lg" style={{ color: dia.color }}>{evento.hora}</span>
                          </div>
                          <p className="text-[#3E2E1F] text-lg font-semibold">{evento.actividad}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
