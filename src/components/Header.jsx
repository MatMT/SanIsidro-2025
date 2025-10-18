import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header({ scrollY, scrollToSection, refs }) {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const menuItems = [
    { name: 'Inicio', ref: refs.inicioRef },
    { name: 'Candidatas', ref: refs.candidatasRef },
    { name: 'Programación', ref: refs.programacionRef },
    { name: 'Galería', ref: refs.galeriaRef },
    { name: 'Información', ref: refs.informacionRef },
    { name: 'Publicaciones', ref: refs.postsRef }
  ];

  const handleNavClick = (ref) => {
    scrollToSection(ref);
    setMenuAbierto(false);
  };

  return (
    <>
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
              <img 
                src="/images/Logo.png" 
                alt="Logo Fiestas Patronales" 
                className="w-10 h-10 md:w-14 md:h-14 object-contain rounded-full"
              />
              <span className="text-white font-bold text-lg md:text-xl">Fiestas Patronales</span>
            </div>
            
            {/* Navegación desktop */}
            <nav className="hidden md:flex space-x-6">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.ref)}
                  className="text-white hover:text-[#D1A148] transition-colors px-3 py-2 rounded-lg hover:bg-white/10 font-semibold"
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Botón hamburguesa mobile */}
            <button
              onClick={() => setMenuAbierto(true)}
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Menú móvil pantalla completa */}
      <div
        className={`fixed inset-0 bg-[#A13E46] z-[60] transition-transform duration-300 ease-in-out md:hidden ${
          menuAbierto ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header del menú */}
          <div className="flex items-center justify-between p-4 border-b border-white/20">
            <div className="flex items-center space-x-3">
              <img 
                src="/images/Logo.png" 
                alt="Logo Fiestas Patronales" 
                className="w-10 h-10 object-contain rounded-full"
              />
              <span className="text-white font-bold text-lg">Fiestas Patronales</span>
            </div>
            <button
              onClick={() => setMenuAbierto(false)}
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Items del menú */}
          <nav className="flex-1 flex flex-col justify-center px-8 space-y-2">
            {menuItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.ref)}
                className="text-white hover:text-[#D1A148] text-2xl font-bold py-4 text-left border-b border-white/10 hover:bg-white/5 rounded-lg px-4 transition-all transform hover:translate-x-2"
                style={{
                  animation: menuAbierto ? `slideIn 0.3s ease-out ${index * 0.1}s both` : 'none'
                }}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Footer del menú */}
          <div className="p-6 border-t border-white/20 text-center">
            <p className="text-white/80 text-sm">
              18, 25 y 26 de Octubre 2025
            </p>
          </div>
        </div>
      </div>

      {/* Estilos para la animación */}
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}
