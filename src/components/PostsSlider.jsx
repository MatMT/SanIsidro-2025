import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function PostsSlider({ posts, postsRef }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(2);
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

  // Detectar tamaño de pantalla para slides visibles
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1); // Mobile: 1 slide
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2); // Tablet: 2 slides
      } 
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-slide cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      siguiente();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex, slidesToShow]);

  const siguiente = () => {
    setCurrentIndex((prev) => {
      const maxIndex = posts.length - slidesToShow;
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  const anterior = () => {
    setCurrentIndex((prev) => {
      const maxIndex = posts.length - slidesToShow;
      return prev <= 0 ? maxIndex : prev - 1;
    });
  };

  const irASlide = (index) => {
    setCurrentIndex(index);
  };

  const abrirImagen = (post) => {
    setImagenSeleccionada(post);
  };

  const cerrarImagen = () => {
    setImagenSeleccionada(null);
  };

  const imagenAnterior = () => {
    if (imagenSeleccionada) {
      const indexActual = posts.findIndex(p => p.id === imagenSeleccionada.id);
      const indexAnterior = indexActual > 0 ? indexActual - 1 : posts.length - 1;
      setImagenSeleccionada(posts[indexAnterior]);
    }
  };

  const imagenSiguiente = () => {
    if (imagenSeleccionada) {
      const indexActual = posts.findIndex(p => p.id === imagenSeleccionada.id);
      const indexSiguiente = indexActual < posts.length - 1 ? indexActual + 1 : 0;
      setImagenSeleccionada(posts[indexSiguiente]);
    }
  };

  // Manejar teclas del teclado para el modal
  useEffect(() => {
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
    <section ref={postsRef} className="py-20 px-4 bg-[#F0E7D2]">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#A13E46]">
          Publicaciones
        </h2>
        <p className="text-center text-xl text-[#518488] mb-12">
          Mantente informado de todas nuestras actividades
        </p>

        <div className="relative max-w-7xl mx-auto">
          {/* Contenedor del slider */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`
              }}
            >
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="flex-shrink-0 px-2 md:px-4"
                  style={{ width: `${100 / slidesToShow}%` }}
                >
                  <div 
                    className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer bg-white"
                    onClick={() => abrirImagen(post)}
                  >
                    {/* Imagen */}
                    <div className="relative aspect-[2/1] overflow-hidden">
                      <img
                        src={post.imagen}
                        alt={post.titulo}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                      
                      {/* Contenido sobre la imagen */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-white text-xl md:text-2xl font-bold mb-2 transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                          {post.titulo}
                        </h3>
                        <p className="text-white/90 text-sm md:text-base">
                          {post.descripcion}
                        </p>
                      </div>

                      {/* Indicador de click */}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg className="w-5 h-5 text-[#A13E46]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Botones de navegación */}
          <button
            onClick={anterior}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white hover:bg-[#A13E46] text-[#A13E46] hover:text-white p-3 md:p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 z-10"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <button
            onClick={siguiente}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white hover:bg-[#A13E46] text-[#A13E46] hover:text-white p-3 md:p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 z-10"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Indicadores */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: posts.length - slidesToShow + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => irASlide(idx)}
                className={`transition-all rounded-full ${
                  idx === currentIndex
                    ? 'w-8 h-3 bg-[#A13E46]'
                    : 'w-3 h-3 bg-[#518488] hover:bg-[#A13E46]'
                }`}
                aria-label={`Ir al slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal de imagen completa */}
      {imagenSeleccionada && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center animate-fadeIn"
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

          {/* Contenedor de imagen con padding para botones */}
          <div
            className="relative w-full h-full flex flex-col items-center justify-center px-4 py-20 md:px-20 md:py-24"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Imagen */}
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={imagenSeleccionada.imagen}
                alt={imagenSeleccionada.titulo}
                className="max-w-full max-h-full object-contain rounded-lg animate-scaleIn"
              />
            </div>
            
            {/* Info de la imagen */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 md:p-6">
              <div className="max-w-6xl mx-auto">
                <h3 className="text-white text-xl md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2">
                  {imagenSeleccionada.titulo}
                </h3>
                <p className="text-white/80 text-sm md:text-base lg:text-lg">
                  {imagenSeleccionada.descripcion}
                </p>
              </div>
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
