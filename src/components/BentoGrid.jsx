import React from 'react';
import { Sparkles, Music, PartyPopper, Church, Star } from 'lucide-react';

export default function BentoGrid() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#A13E46] animate-slideIn">
          ¡Únete a la Celebración!
        </h2>
        
          {/* Vista Desktop - Bento Grid */}
          <div className="hidden md:grid grid-cols-4 gap-6 auto-rows-[200px]">
            {/* Card grande - Coronación */}
            <div className="col-span-2 row-span-2 bg-[#A13E46] rounded-3xl p-8 text-white shadow-2xl bento-card relative overflow-hidden">
              <Sparkles className="w-16 h-16 mb-4 animate-pulse-slow" />
              <h3 className="text-3xl font-bold mb-3">Coronación de la Reina</h3>
              <p className="text-xl mb-2">Sábado 18 de Octubre</p>
              <p className="text-lg opacity-90">5:00 PM - Shows y sorpresas</p>
            </div>

            {/* Card mediana - Desfile */}
            <div className="col-span-2 bg-[#518488] rounded-3xl p-6 text-white shadow-2xl bento-card">
              <Music className="w-12 h-12 mb-3 animate-pulse-slow" />
              <h3 className="text-2xl font-bold mb-2">Gran Desfile</h3>
              <p className="text-lg">Con banda musical y Los Viejos</p>
              <p className="text-sm opacity-90 mt-1">2:30 PM - 18 de Octubre</p>
            </div>

            {/* Card pequeña - Actividades infantiles */}
            <div className="bg-[#D1A148] rounded-3xl p-6 text-white shadow-2xl bento-card">
              <PartyPopper className="w-10 h-10 mb-2" />
              <h3 className="text-xl font-bold">Piñata</h3>
              <p className="text-sm">25 Oct - 3:00 PM</p>
            </div>

            {/* Card pequeña - Procesión */}
            <div className="bg-[#D1A148] rounded-3xl p-6 text-white shadow-2xl bento-card">
              <Church className="w-10 h-10 mb-2" />
              <h3 className="text-xl font-bold">Procesión</h3>
              <p className="text-sm">25 Oct - 5:00 PM</p>
            </div>

            {/* Card mediana - Orquesta */}
            <div className="col-span-2 row-span-2 bg-[#518488] rounded-3xl p-6 text-white shadow-2xl bento-card">
              <Music className="w-12 h-12 mb-3" />
              <h3 className="text-2xl font-bold mb-2">Orquesta San Salvador Este</h3>
              <p className="text-lg">25 de Octubre - 8:00 PM</p>
            </div>

            {/* Card grande - Misa */}
            <div className="col-span-2 row-span-2 bg-[#D1A148] rounded-3xl p-8 text-white shadow-2xl bento-card">
              <Church className="w-16 h-16 mb-4 animate-pulse-slow" />
              <h3 className="text-3xl font-bold mb-3">Santa Misa Solemne</h3>
              <p className="text-xl mb-2">Domingo 26 de Octubre</p>
              <p className="text-lg opacity-90">10:00 AM</p>
              <p className="text-lg mt-4">En honor al Santo Niño de Atocha</p>
            </div>
          </div>        {/* Vista Mobile - Slider */}
        <div className="md:hidden space-y-6">
          <div className="bg-[#A13E46] rounded-3xl p-8 text-white shadow-2xl">
            <Sparkles className="w-12 h-12 mb-3" />
            <h3 className="text-2xl font-bold mb-2">Coronación de la Reina</h3>
            <p className="text-lg mb-1">Sábado 18 de Octubre</p>
            <p className="opacity-90">5:00 PM - Shows y sorpresas</p>
          </div>
          
          <div className="bg-[#518488] rounded-3xl p-8 text-white shadow-2xl">
            <Music className="w-12 h-12 mb-3" />
            <h3 className="text-2xl font-bold mb-2">Gran Desfile</h3>
            <p className="text-lg">Con banda musical y Los Viejos</p>
            <p className="text-sm opacity-90 mt-1">2:30 PM - 18 de Octubre</p>
          </div>

          <div className="bg-[#D1A148] rounded-3xl p-8 text-white shadow-2xl">
            <PartyPopper className="w-12 h-12 mb-3" />
            <h3 className="text-2xl font-bold mb-2">Piñata</h3>
            <p className="text-lg">25 Oct - 3:00 PM</p>
          </div>

          <div className="bg-[#518488] rounded-3xl p-8 text-white shadow-2xl">
            <Church className="w-12 h-12 mb-3" />
            <h3 className="text-2xl font-bold mb-2">Procesión</h3>
            <p className="text-lg">25 Oct - 5:00 PM</p>
          </div>

          <div className="bg-[#A13E46] rounded-3xl p-8 text-white shadow-2xl">
            <Music className="w-12 h-12 mb-3" />
            <h3 className="text-2xl font-bold mb-2">Orquesta San Salvador Este</h3>
            <p className="text-lg">25 de Octubre - 8:00 PM</p>
          </div>

          <div className="bg-[#D1A148] rounded-3xl p-8 text-white shadow-2xl">
            <Church className="w-12 h-12 mb-3" />
            <h3 className="text-2xl font-bold mb-2">Santa Misa Solemne</h3>
            <p className="text-lg mb-1">Domingo 26 de Octubre - 10:00 AM</p>
            <p className="opacity-90">En honor al Santo Niño de Atocha</p>
          </div>
        </div>
      </div>
    </section>
  );
}
