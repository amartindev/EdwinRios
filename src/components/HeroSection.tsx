
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hola Edwin, estoy interesado en tus servicios de soldadura. ¿Podrías brindarme más información? ¡Gracias!");
  window.open(`https://wa.me/573162433785?text=${message}`, '_blank');
  };
  return (
    <section 
      id="inicio" 
      className="relative h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" 
      }}
    >
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Calidad y Precisión en <span className="text-welder-yellow">Servicios de Soldadura</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Con más de 20 años de experiencia especializada en acabados, estructuras y maquinaria industrial.
        </p>
        <a 
           
          className="bg-welder-yellow text-welder-black font-semibold py-3 px-8 rounded-md transition duration-300 hover:bg-welder-yellow-dark inline-block animate-fade-in-up shadow-lg cursor-pointer" 
          onClick={handleWhatsAppClick}
        >
          Solicita tu presupuesto
        </a>
      </div>
      <a 
        href="#servicios" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white hover:text-welder-yellow transition-colors animate-bounce"
        style={{ animationDuration: '2s' }}
      >
        <ArrowDown size={32} />
      </a>
    </section>
  );
};

export default HeroSection;
