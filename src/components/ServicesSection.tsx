
import { Wrench, Building, Factory } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: "Acabados",
      description: "Finalizaciones de alta calidad y precisión para todo tipo de soldaduras, garantizando un resultado profesional y duradero.",
      icon: <Wrench size={48} className="text-welder-yellow group-hover:text-white transition-colors duration-300" />,
      delay: "0.1s"
    },
    {
      title: "Estructuras",
      description: "Diseño y construcción de estructuras metálicas sólidas para proyectos residenciales, comerciales e industriales.",
      icon: <Building size={48} className="text-welder-yellow group-hover:text-white transition-colors duration-300" />,
      delay: "0.3s"
    },
    {
      title: "Maquinaria Industrial",
      description: "Reparación, mantenimiento y fabricación de componentes para maquinaria industrial con altos estándares de calidad.",
      icon: <Factory size={48} className="text-welder-yellow group-hover:text-white transition-colors duration-300" />,
      delay: "0.5s"
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-welder-gray-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-welder-black mb-4">Nuestros Servicios</h2>
          <p className="text-welder-gray-dark max-w-3xl mx-auto">
            Ofrecemos soluciones completas de soldadura profesional para satisfacer las necesidades más exigentes en diversos sectores industriales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-8 shadow-md service-card group hover:bg-welder-black animate-fade-in-up"
              style={{ animationDelay: service.delay }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-welder-black group-hover:text-welder-yellow transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-welder-gray-dark group-hover:text-white transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
