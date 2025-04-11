
import { Phone, MapPin, Clock } from 'lucide-react';

const ContactSection = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hola Edwin, estoy interesado en tus servicios de soldadura. ¿Podrías brindarme más información? ¡Gracias!");
  window.open(`https://wa.me/573162433785?text=${message}`, '_blank');
  };

  return (
    <section id="contacto" className="py-20 bg-welder-gray-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-welder-black mb-4">Contáctanos</h2>
          <p className="text-welder-gray-dark max-w-3xl mx-auto">
            Estamos listos para ayudarte con tu próximo proyecto. Contáctanos por teléfono o WhatsApp.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold text-welder-black mb-6">Información de Contacto</h3>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Phone className="text-welder-yellow mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-welder-black-light">Teléfono/WhatsApp</h4>
                <p className="text-welder-gray-dark">+57 316 2433785</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <MapPin className="text-welder-yellow mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-welder-black-light">Ubicación</h4>
                <p className="text-welder-gray-dark">Bogotá, Colombia</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Clock className="text-welder-yellow mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-welder-black-light">Horario de Atención</h4>
                <p className="text-welder-gray-dark">Lunes - Sábado: 8:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
          
          <button 
            onClick={handleWhatsAppClick}
            className="w-full mt-8 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold py-3 px-6 rounded-md transition duration-300 flex items-center justify-center space-x-2"
          >
            <Phone size={20} />
            <span>Contactar por WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
