import React from 'react';
import { MapPin, Church, Heart } from 'lucide-react';

export default function InformacionSection({ informacionRef }) {
  return (
    <section ref={informacionRef} className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#A13E46]">
          Información General
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-[#518488] text-white rounded-3xl p-8 shadow-2xl bento-card">
            <MapPin className="w-12 h-12 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Ubicación</h3>
            <p className="text-lg mb-2">Parroquia Santa María Madre de América</p>
            <p className="text-lg mb-2">Sector "San Isidro"</p>
            <p className="text-lg">Soyapango, San Salvador</p>
          </div>

          <div className="bg-[#D1A148] text-white rounded-3xl p-8 shadow-2xl bento-card">
            <Church className="w-12 h-12 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Santo Niño de Atocha</h3>
            <p className="text-lg">
              Protector de viajeros, prisioneros y quienes están en peligro. 
              Celebremos con devoción y alegría.
            </p>
          </div>
        </div>

        <div className="bg-[#A13E46] text-white rounded-3xl p-12 shadow-2xl text-center">
          <Heart className="w-16 h-16 mx-auto mb-6 animate-pulse-slow" />
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            ¡Te esperamos con los brazos abiertos!
          </h3>
          <p className="text-xl md:text-2xl">
            Ven y sé parte de esta hermosa celebración
          </p>
        </div>
      </div>
    </section>
  );
}
