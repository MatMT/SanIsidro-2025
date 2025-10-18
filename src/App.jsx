import React, { useState, useEffect, useRef } from 'react';

// Componentes
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import BentoGrid from './components/BentoGrid';
import CandidatasSection from './components/CandidatasSection';
import ProgramacionSection from './components/ProgramacionSection';
import GaleriaSection from './components/GaleriaSection';
import InformacionSection from './components/InformacionSection';
import Footer from './components/Footer';

// Datos
import { slidesData, candidatasData, galeriaData } from './data/fiestasData';
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
  const galeriaRef = useRef(null);
  const informacionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const candidateTimer = setInterval(() => {
      setCurrentCandidate((prev) => (prev + 1) % candidatasData.length);
    }, 4000);
    return () => clearInterval(candidateTimer);
  }, []);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const refs = {
    inicioRef,
    candidatasRef,
    programacionRef,
    galeriaRef,
    informacionRef
  };

  return (
    <div className="min-h-screen bg-[#F0E7D2]">
      <style>{globalStyles}</style>

      <Header 
        scrollY={scrollY} 
        scrollToSection={scrollToSection} 
        refs={refs} 
      />

      <HeroSlider 
        slides={slidesData} 
        currentSlide={currentSlide} 
        setCurrentSlide={setCurrentSlide}
        inicioRef={inicioRef}
      />

      <BentoGrid />

      <CandidatasSection 
        candidatas={candidatasData}
        currentCandidate={currentCandidate}
        setCurrentCandidate={setCurrentCandidate}
        candidatasRef={candidatasRef}
      />

      <ProgramacionSection 
        programacion={programacionData}
        programacionRef={programacionRef}
      />

      <GaleriaSection 
        galeria={galeriaData}
        galeriaRef={galeriaRef}
      />

      <InformacionSection informacionRef={informacionRef} />

      <Footer />
    </div>
  );
}
