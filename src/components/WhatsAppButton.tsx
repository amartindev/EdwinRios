
import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hola Edwin, estoy interesado en tus servicios de soldadura. ¿Podrías brindarme más información? ¡Gracias!");
    window.open(`https://wa.me/573162433785?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className={`fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] p-4 rounded-full shadow-lg transition-all duration-300 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      } whatsapp-button`}
      aria-label="Contactar por WhatsApp"
    >
      <Phone size={24} className="text-white" />
    </button>
  );
};

export default WhatsAppButton;
