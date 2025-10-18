import React from 'react';
import { Sparkles, Star } from 'lucide-react';

export default function CandidatasSection({ candidatas, currentCandidate, setCurrentCandidate, candidatasRef }) {
  return (
    <section ref={candidatasRef} className="py-20 px-4 bg-[#F0E7D2]">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#3E2E1F]">
          Candidatas a Reina
        </h2>
        <p className="text-center text-xl text-[#518488] mb-12">
          Santo Niño de Atocha 2025
        </p>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Slider de Candidatas */}
          <div className="relative h-[600px] overflow-hidden rounded-3xl">
            {candidatas.map((candidata, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-all duration-700 ${
                  idx === currentCandidate ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
                }`}
              >
                <div 
                  className="h-full rounded-3xl overflow-hidden shadow-2xl"
                  style={{ backgroundColor: candidata.color }}
                >
                  <div className="relative h-full flex flex-col md:flex-row">
                    {/* Imagen */}
                    <div className="md:w-1/2 h-64 md:h-full relative overflow-hidden">
                      <img 
                        src={candidata.foto} 
                        alt={candidata.nombre}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30" />
                    </div>
                    
                    {/* Información */}
                    <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center text-white relative">
                      <div className="absolute top-4 right-4">
                        <Sparkles className="w-12 h-12 text-[#D1A148] animate-pulse" />
                      </div>
                      
                      <div className="space-y-6">
                        <div>
                          <p className="text-sm uppercase tracking-wider mb-2 opacity-90">Candidata</p>
                          <h3 className="text-2xl md:text-3xl font-bold mb-3">{candidata.nombre}</h3>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          <div className="bg-[#F0E7D2]/20 backdrop-blur-sm rounded-xl px-6 py-3 border-2 border-[#D1A148]">
                            <p className="text-sm opacity-90">Edad</p>
                            <p className="text-3xl font-bold">{candidata.edad}</p>
                          </div>
                        </div>
                        
                        <p className="text-xl leading-relaxed opacity-95">
                          {candidata.descripcion}
                        </p>
                        
                        {/* <div className="flex items-center space-x-2">
                          <Star className="w-6 h-6 fill-[#D1A148] text-[#D1A148]" />
                          <Star className="w-6 h-6 fill-[#D1A148] text-[#D1A148]" />
                          <Star className="w-6 h-6 fill-[#D1A148] text-[#D1A148]" />
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Indicadores */}
          <div className="flex justify-center mt-8 space-x-3">
            {candidatas.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentCandidate(idx)}
                className={`transition-all ${
                  idx === currentCandidate 
                    ? 'w-12 h-3 bg-[#A13E46]' 
                    : 'w-3 h-3 bg-[#518488] hover:bg-[#A13E46]'
                } rounded-full`}
              />
            ))}
          </div>
          
          {/* Botones de navegación */}
          <button
            onClick={() => setCurrentCandidate((prev) => (prev - 1 + candidatas.length) % candidatas.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#F0E7D2]/90 hover:bg-[#F0E7D2] p-4 rounded-full shadow-xl transition-all hover:scale-110"
          >
            <svg className="w-6 h-6 text-[#3E2E1F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={() => setCurrentCandidate((prev) => (prev + 1) % candidatas.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#F0E7D2]/90 hover:bg-[#F0E7D2] p-4 rounded-full shadow-xl transition-all hover:scale-110"
          >
            <svg className="w-6 h-6 text-[#3E2E1F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
