import React, { useState, useEffect, useRef } from 'react';

// Componentes
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import BentoGrid from './components/BentoGrid';
import CandidatasSection from './components/CandidatasSection';
import ProgramacionSection from './components/ProgramacionSection';
import InformacionSection from './components/InformacionSection';
import Footer from './components/Footer';

// Datos
import { slidesData, candidatasData } from './data/fiestasData';
import { programacionData } from './data/programacionData';

// Estilos
import { globalStyles } from './styles/animations';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentCandidate, setCurrentCandidate] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const inicioRef = useRef(null);
  const candidatasRef = useRef(null);
  const programacionRef = useRef(null);
  const informacionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const candidateTimer = setInterval(() => {
      setCurrentCandidate((prev) => (prev + 1) % candidatas.length);
    }, 4000);
    return () => clearInterval(candidateTimer);
  }, []);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const FloatingElement = ({ delay = 0, children, className = "" }) => (
    <div 
      className={`animate-float ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F0E7D2] via-[#F0E7D2] to-[#D1A148]/20">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-slideIn {
          animation: slideIn 0.8s ease-out forwards;
        }
        
        .animate-pulse-slow {
          animation: pulse 3s ease-in-out infinite;
        }
        
        .shimmer {
          background: linear-gradient(90deg, transparent, rgba(209,161,72,0.3), transparent);
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }
        
        .bento-card {
          transition: all 0.3s ease;
        }
        
        .bento-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px -12px rgba(62, 46, 31, 0.25);
        }
      `}</style>

      {/* Header fijo con efecto parallax */}
      <header 
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrollY > 100 ? 'rgba(161, 62, 70, 0.95)' : 'transparent',
          backdropFilter: scrollY > 100 ? 'blur(10px)' : 'none'
        }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Church className="w-8 h-8 text-white" />
              <span className="text-white font-bold text-xl hidden md:block">Fiestas Patronales</span>
            </div>
            
            <nav className="flex space-x-2 md:space-x-6">
              {[
                { name: 'Inicio', ref: inicioRef },
                { name: 'Candidatas', ref: candidatasRef },
                { name: 'Programación', ref: programacionRef },
                { name: 'Información', ref: informacionRef }
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.ref)}
                  className="text-white hover:text-[#D1A148] transition-colors px-3 py-2 rounded-lg hover:bg-white/10 font-semibold"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Slider */}
      <section ref={inicioRef} className="relative h-screen overflow-hidden">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-all duration-1000 ${
              idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
            }`}
          >
            <div className={`w-full h-full bg-gradient-to-br ${slide.gradient} flex items-center justify-center relative overflow-hidden`}>
              {/* Elementos flotantes decorativos */}
              <FloatingElement delay={0} className="absolute top-20 left-10 w-20 h-20 bg-[#F0E7D2]/30 rounded-full" />
              <FloatingElement delay={1} className="absolute top-40 right-20 w-32 h-32 bg-[#D1A148]/20 rounded-full" />
              <FloatingElement delay={2} className="absolute bottom-20 left-1/4 w-16 h-16 bg-[#518488]/20 rounded-full" />
              <Star className="absolute top-32 right-1/4 w-12 h-12 text-[#D1A148] animate-pulse" />
              <Star className="absolute bottom-40 left-1/3 w-8 h-8 text-[#F0E7D2] animate-pulse" style={{ animationDelay: '1s' }} />
              
              <div className="text-center text-white z-10 px-4 animate-slideIn">
                <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-2xl">
                  {slide.title}
                </h1>
                <p className="text-3xl md:text-4xl mb-6 font-semibold drop-shadow-lg">
                  {slide.subtitle}
                </p>
                <p className="text-xl md:text-2xl opacity-90 drop-shadow-lg">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}
        
        {/* Indicadores del slider */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === currentSlide ? 'bg-[#F0E7D2] w-8' : 'bg-[#F0E7D2]/50'
              }`}
            />
          ))}
        </div>

        {/* Flecha para scroll */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-[#F0E7D2] rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-[#F0E7D2] rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Bento Grid Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#A13E46] animate-slideIn">
            ¡Únete a la Celebración!
          </h2>
          
          {/* Vista Desktop - Bento Grid */}
          <div className="hidden md:grid grid-cols-4 gap-6 auto-rows-[200px]">
            {/* Card grande - Coronación */}
            <div className="col-span-2 row-span-2 bg-gradient-to-br from-[#A13E46] to-[#D1A148] rounded-3xl p-8 text-white shadow-2xl bento-card relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#F0E7D2]/10 rounded-full -mr-32 -mt-32" />
              <Sparkles className="w-16 h-16 mb-4 animate-pulse-slow relative z-10" />
              <h3 className="text-3xl font-bold mb-3 relative z-10">Coronación de la Reina</h3>
              <p className="text-xl mb-2 relative z-10">Sábado 18 de Octubre</p>
              <p className="text-lg opacity-90 relative z-10">5:00 PM - Shows y sorpresas</p>
              <div className="absolute bottom-4 right-4">
                <Star className="w-24 h-24 text-[#D1A148] opacity-20" />
              </div>
            </div>

            {/* Card mediana - Desfile */}
            <div className="col-span-2 bg-gradient-to-br from-[#518488] to-[#A13E46] rounded-3xl p-6 text-white shadow-2xl bento-card relative overflow-hidden">
              <Music className="w-12 h-12 mb-3 animate-pulse-slow" />
              <h3 className="text-2xl font-bold mb-2">Gran Desfile</h3>
              <p className="text-lg">Con banda musical y Los Viejos</p>
              <p className="text-sm opacity-90 mt-1">2:30 PM - 18 de Octubre</p>
            </div>

            {/* Card pequeña - Actividades infantiles */}
            <div className="bg-gradient-to-br from-[#D1A148] to-[#A13E46] rounded-3xl p-6 text-white shadow-2xl bento-card">
              <PartyPopper className="w-10 h-10 mb-2" />
              <h3 className="text-xl font-bold">Piñata</h3>
              <p className="text-sm">25 Oct - 3:00 PM</p>
            </div>

            {/* Card pequeña - Procesión */}
            <div className="bg-gradient-to-br from-[#518488] to-[#3E2E1F] rounded-3xl p-6 text-white shadow-2xl bento-card">
              <Church className="w-10 h-10 mb-2" />
              <h3 className="text-xl font-bold">Procesión</h3>
              <p className="text-sm">25 Oct - 5:00 PM</p>
            </div>

            {/* Card mediana - Orquesta */}
            <div className="col-span-2 bg-gradient-to-br from-[#A13E46] to-[#3E2E1F] rounded-3xl p-6 text-white shadow-2xl bento-card relative overflow-hidden">
              <div className="shimmer absolute inset-0" />
              <Music className="w-12 h-12 mb-3 relative z-10" />
              <h3 className="text-2xl font-bold mb-2 relative z-10">Orquesta San Salvador Este</h3>
              <p className="text-lg relative z-10">25 de Octubre - 8:00 PM</p>
            </div>

            {/* Card grande - Misa */}
            <div className="col-span-2 row-span-2 bg-gradient-to-br from-[#D1A148] to-[#518488] rounded-3xl p-8 text-white shadow-2xl bento-card relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F0E7D2]/10 rounded-full -ml-32 -mb-32" />
              <Church className="w-16 h-16 mb-4 animate-pulse-slow relative z-10" />
              <h3 className="text-3xl font-bold mb-3 relative z-10">Santa Misa Solemne</h3>
              <p className="text-xl mb-2 relative z-10">Domingo 26 de Octubre</p>
              <p className="text-lg opacity-90 relative z-10">10:00 AM</p>
              <p className="text-lg mt-4 relative z-10">En honor al Santo Niño de Atocha</p>
            </div>
          </div>

          {/* Vista Mobile - Slider */}
          <div className="md:hidden space-y-6">
            <div className="bg-gradient-to-br from-[#A13E46] to-[#D1A148] rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
              <Sparkles className="w-12 h-12 mb-3" />
              <h3 className="text-2xl font-bold mb-2">Coronación de la Reina</h3>
              <p className="text-lg mb-1">Sábado 18 de Octubre</p>
              <p className="opacity-90">5:00 PM - Shows y sorpresas</p>
            </div>
            
            <div className="bg-gradient-to-br from-[#518488] to-[#A13E46] rounded-3xl p-8 text-white shadow-2xl">
              <Music className="w-12 h-12 mb-3" />
              <h3 className="text-2xl font-bold mb-2">Gran Desfile</h3>
              <p className="text-lg">Con banda musical y Los Viejos</p>
              <p className="text-sm opacity-90 mt-1">2:30 PM - 18 de Octubre</p>
            </div>

            <div className="bg-gradient-to-br from-[#D1A148] to-[#A13E46] rounded-3xl p-8 text-white shadow-2xl">
              <PartyPopper className="w-12 h-12 mb-3" />
              <h3 className="text-2xl font-bold mb-2">Piñata</h3>
              <p className="text-lg">25 Oct - 3:00 PM</p>
            </div>

            <div className="bg-gradient-to-br from-[#518488] to-[#3E2E1F] rounded-3xl p-8 text-white shadow-2xl">
              <Church className="w-12 h-12 mb-3" />
              <h3 className="text-2xl font-bold mb-2">Procesión</h3>
              <p className="text-lg">25 Oct - 5:00 PM</p>
            </div>

            <div className="bg-gradient-to-br from-[#A13E46] to-[#3E2E1F] rounded-3xl p-8 text-white shadow-2xl">
              <Music className="w-12 h-12 mb-3" />
              <h3 className="text-2xl font-bold mb-2">Orquesta San Salvador Este</h3>
              <p className="text-lg">25 de Octubre - 8:00 PM</p>
            </div>

            <div className="bg-gradient-to-br from-[#D1A148] to-[#518488] rounded-3xl p-8 text-white shadow-2xl">
              <Church className="w-12 h-12 mb-3" />
              <h3 className="text-2xl font-bold mb-2">Santa Misa Solemne</h3>
              <p className="text-lg mb-1">Domingo 26 de Octubre - 10:00 AM</p>
              <p className="opacity-90">En honor al Santo Niño de Atocha</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Candidatas */}
      <section ref={candidatasRef} className="py-20 px-4 bg-gradient-to-br from-[#F0E7D2] to-[#D1A148]/30">
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
                  <div className="h-full bg-gradient-to-br from-[#A13E46] via-[#518488] to-[#D1A148] rounded-3xl overflow-hidden shadow-2xl">
                    <div className="relative h-full flex flex-col md:flex-row">
                      {/* Imagen */}
                      <div className="md:w-1/2 h-64 md:h-full relative overflow-hidden">
                        <img 
                          src={candidata.foto} 
                          alt={candidata.nombre}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#3E2E1F]/50 to-transparent" />
                      </div>
                      
                      {/* Información */}
                      <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center text-white relative">
                        <div className="absolute top-4 right-4">
                          <Sparkles className="w-12 h-12 text-[#D1A148] animate-pulse" />
                        </div>
                        
                        <div className="space-y-6">
                          <div>
                            <p className="text-sm uppercase tracking-wider mb-2 opacity-90">Candidata</p>
                            <h3 className="text-4xl md:text-5xl font-bold mb-3">{candidata.nombre}</h3>
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
                          
                          <div className="flex items-center space-x-2">
                            <Star className="w-6 h-6 fill-[#D1A148] text-[#D1A148]" />
                            <Star className="w-6 h-6 fill-[#D1A148] text-[#D1A148]" />
                            <Star className="w-6 h-6 fill-[#D1A148] text-[#D1A148]" />
                          </div>
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

      {/* Programación Detallada */}
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
                    <Star className="w-10 h-10 fill-[#D1A148] text-[#D1A148] animate-pulse" />
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

      {/* Información */}
      <section ref={informacionRef} className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#A13E46]">
            Información General
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-[#518488] to-[#3E2E1F] text-white rounded-3xl p-8 shadow-2xl bento-card">
              <MapPin className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Ubicación</h3>
              <p className="text-lg mb-2">Parroquia Santa María Madre de América</p>
              <p className="text-lg mb-2">Sector "San Isidro"</p>
              <p className="text-lg">Soyapango, San Salvador</p>
            </div>

            <div className="bg-gradient-to-br from-[#D1A148] to-[#A13E46] text-white rounded-3xl p-8 shadow-2xl bento-card">
              <Church className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Santo Niño de Atocha</h3>
              <p className="text-lg">
                Protector de viajeros, prisioneros y quienes están en peligro. 
                Celebremos con devoción y alegría.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#A13E46] via-[#518488] to-[#D1A148] text-white rounded-3xl p-12 shadow-2xl text-center relative overflow-hidden">
            <div className="shimmer absolute inset-0" />
            <Heart className="w-16 h-16 mx-auto mb-6 animate-pulse-slow relative z-10" />
            <h3 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">
              ¡Te esperamos con los brazos abiertos!
            </h3>
            <p className="text-xl md:text-2xl relative z-10">
              Ven y sé parte de esta hermosa celebración
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#3E2E1F] via-[#A13E46] to-[#518488] text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center mb-6">
            <Star className="w-8 h-8 fill-[#D1A148] mx-2 animate-pulse" />
            <Star className="w-10 h-10 fill-[#D1A148] mx-2 animate-pulse" style={{ animationDelay: '0.5s' }} />
            <Star className="w-8 h-8 fill-[#D1A148] mx-2 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-2xl font-bold mb-3">Fiestas Patronales San Isidro 2025</p>
          <p className="text-xl mb-2">Santo Niño de Atocha, ruega por nosotros</p>
          <p className="text-lg opacity-90 mt-4">
            18 - 25 - 26 de Octubre
          </p>
        </div>
      </footer>
    </div>
  );
}