
import { CheckCircle } from 'lucide-react';

const AboutSection = () => {
  const strengths = [
    "Más de 20 años de experiencia en el sector",
    "Especialización en acabados de alta calidad",
    "Expertos en estructuras metálicas",
    "Soluciones para maquinaria industrial",
    "Compromiso con la excelencia y puntualidad",
    "Atención personalizada en cada proyecto"
  ];

  return (
    <section className="py-20 bg-welder-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre <span className="text-welder-yellow">Edwin Rios</span></h2>
            <p className="text-gray-300 mb-6 text-lg">
              Con más de dos décadas de experiencia en soldadura profesional, me he especializado en ofrecer soluciones de alta calidad para proyectos industriales, comerciales y residenciales.
            </p>
            <p className="text-gray-300 mb-6 text-lg">
              Mi compromiso es brindar resultados excepcionales, combinando técnicas tradicionales con las últimas innovaciones en soldadura. Cada proyecto es abordado con dedicación, precisión y un enfoque personalizado que garantiza la satisfacción del cliente.
            </p>
            <a 
              href="#contacto" 
              className="bg-welder-yellow text-welder-black font-semibold py-3 px-8 rounded-md transition duration-300 hover:bg-welder-yellow-dark inline-block shadow-lg"
            >
              Contactar ahora
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {strengths.map((strength, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-welder-black-light rounded-lg">
                <CheckCircle className="text-welder-yellow flex-shrink-0 mt-1" />
                <span>{strength}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
