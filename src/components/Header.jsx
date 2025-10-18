import React from 'react';
import { Church } from 'lucide-react';

export default function Header({ scrollY, scrollToSection, refs }) {
  return (
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
              { name: 'Inicio', ref: refs.inicioRef },
              { name: 'Candidatas', ref: refs.candidatasRef },
              { name: 'Programación', ref: refs.programacionRef },
              { name: 'Galería', ref: refs.galeriaRef },
              { name: 'Información', ref: refs.informacionRef }
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
  );
}
