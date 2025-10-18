import React from 'react';
import { Star } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#3E2E1F] text-white py-12">
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
  );
}
