import React from 'react';
import { Star } from 'lucide-react';
import FloatingElement from './FloatingElement';

export default function HeroSlider({ slides, currentSlide, setCurrentSlide, inicioRef }) {
  return (
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
  );
}
