import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function GaleriaSection({ galeria, galeriaRef }) {
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

  const abrirImagen = (imagen) => {
    setImagenSeleccionada(imagen);
  };

  const cerrarImagen = () => {
    setImagenSeleccionada(null);
  };

  const imagenAnterior = () => {
    if (imagenSeleccionada) {
      const indexActual = galeria.findIndex(img => img.id === imagenSeleccionada.id);
      const indexAnterior = indexActual > 0 ? indexActual - 1 : galeria.length - 1;
      setImagenSeleccionada(galeria[indexAnterior]);
    }
  };

  const imagenSiguiente = () => {
    if (imagenSeleccionada) {
      const indexActual = galeria.findIndex(img => img.id === imagenSeleccionada.id);
      const indexSiguiente = indexActual < galeria.length - 1 ? indexActual + 1 : 0;
      setImagenSeleccionada(galeria[indexSiguiente]);
    }
  };

  // Manejar teclas del teclado
  React.useEffect(() => {
    const manejarTecla = (e) => {
      if (!imagenSeleccionada) return;
      
      if (e.key === 'Escape') cerrarImagen();
      if (e.key === 'ArrowLeft') imagenAnterior();
      if (e.key === 'ArrowRight') imagenSiguiente();
    };

    window.addEventListener('keydown', manejarTecla);
    return () => window.removeEventListener('keydown', manejarTecla);
  }, [imagenSeleccionada]);

  return (
    <section ref={galeriaRef} className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#A13E46]">
          Galería de Momentos
        </h2>
        <p className="text-center text-xl text-[#518488] mb-12">
          Revive los mejores momentos de nuestras celebraciones
        </p>

        {/* Mensaje Próximamente */}
        <div className="flex flex-col items-center justify-center py-16 md:py-24 overflow-hidden">
          <div className="relative max-w-2xl w-full mx-auto px-4">
            {/* Iconos decorativos - ajustados para mobile */}
            <div className="absolute top-0 left-4 md:-left-8 w-12 h-12 md:w-16 md:h-16 bg-[#D1A148]/20 rounded-full animate-pulse" />
            <div className="absolute bottom-0 right-4 md:-right-8 w-16 h-16 md:w-20 md:h-20 bg-[#518488]/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            
            {/* Contenido */}
            <div className="relative bg-[#F0E7D2] rounded-2xl md:rounded-3xl p-8 md:p-16 shadow-2xl text-center">
              <div className="mb-6">
                <svg className="w-16 h-16 md:w-20 md:h-20 mx-auto text-[#A13E46]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              
              <h3 className="text-2xl md:text-4xl font-bold text-[#3E2E1F] mb-4">
                Próximamente
              </h3>
              
              <p className="text-base md:text-xl text-[#518488] mb-6">
                Estamos preparando una galería especial con los mejores momentos de nuestras Fiestas Patronales
              </p>
              
              <div className="flex items-center justify-center space-x-2 text-[#A13E46]">
                <div className="w-2 h-2 bg-[#A13E46] rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-[#A13E46] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                <div className="w-2 h-2 bg-[#A13E46] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Bento Grid de Galería - OCULTO */}
        <div className="hidden grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
            
          {galeria.map((imagen, idx) => (
            <div
              key={imagen.id}
              className={`
                relative overflow-hidden rounded-2xl cursor-pointer group
                transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl
                ${idx === 0 ? 'col-span-2 row-span-2' : ''}
                ${idx === 3 ? 'md:col-span-2' : ''}
              `}
              onClick={() => abrirImagen(imagen)}
            >
              <img
                src={imagen.imagen}
                alt={imagen.titulo}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay con título */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <h3 className="text-white text-xl md:text-2xl font-bold">
                    {imagen.titulo}
                  </h3>
                  <p className="text-white/80 text-sm capitalize mt-1">
                    {imagen.categoria}
                  </p>
                </div>
              </div>

              {/* Indicador de click */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-5 h-5 text-[#A13E46]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de imagen completa */}
      {imagenSeleccionada && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={cerrarImagen}
        >
          {/* Botón cerrar */}
          <button
            onClick={cerrarImagen}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all hover:scale-110 z-10"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Botón anterior */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              imagenAnterior();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all hover:scale-110 z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Botón siguiente */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              imagenSiguiente();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all hover:scale-110 z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Imagen */}
          <div
            className="relative max-w-6xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={imagenSeleccionada.imagen}
              alt={imagenSeleccionada.titulo}
              className="w-full h-full object-contain rounded-lg animate-scaleIn"
            />
            
            {/* Info de la imagen */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
                {imagenSeleccionada.titulo}
              </h3>
              <p className="text-white/80 text-lg capitalize">
                {imagenSeleccionada.categoria}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Estilos para animaciones */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scaleIn {
          from { 
            opacity: 0;
            transform: scale(0.9);
          }
          to { 
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}
