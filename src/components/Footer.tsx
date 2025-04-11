
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-welder-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Edwin Rios</h3>
            <p className="text-gray-400 mb-6">
              Soluciones profesionales de soldadura industrial con más de 20 años de experiencia. Calidad, precisión y compromiso en cada proyecto.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-welder-yellow transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-welder-yellow transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Servicios</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-welder-yellow transition-colors">Acabados</a></li>
              <li><a href="#" className="text-gray-400 hover:text-welder-yellow transition-colors">Estructuras</a></li>
              <li><a href="#" className="text-gray-400 hover:text-welder-yellow transition-colors">Maquinaria Industrial</a></li>
              <li><a href="#" className="text-gray-400 hover:text-welder-yellow transition-colors">Proyectos Personalizados</a></li>
              <li><a href="#" className="text-gray-400 hover:text-welder-yellow transition-colors">Mantenimiento</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone size={20} className="text-welder-yellow flex-shrink-0 mt-1" />
                <span className="text-gray-400">+57 316 2433785</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={20} className="text-welder-yellow flex-shrink-0 mt-1" />
                <span className="text-gray-400">edwinrios@ejemplo.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-welder-yellow flex-shrink-0 mt-1" />
                <span className="text-gray-400">Bogotá, Colombia</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-welder-gray-dark pt-8 text-center text-gray-500">
          <p>&copy; {currentYear} Edwin Rios - Soldador Profesional. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
