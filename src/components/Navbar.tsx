
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-welder-black shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="text-xl md:text-2xl font-montserrat font-bold text-welder-yellow">
            Edwin Rios <span className="hidden sm:inline text-white">- Soldador Profesional</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-white hover:text-welder-yellow transition-colors">Inicio</a>
            <a href="#servicios" className="text-white hover:text-welder-yellow transition-colors">Servicios</a>
            <a href="#portafolio" className="text-white hover:text-welder-yellow transition-colors">Portafolio</a>
            <a href="#contacto" className="text-white hover:text-welder-yellow transition-colors">Contacto</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-welder-yellow"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-welder-black-light animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#inicio" 
              className="text-white hover:text-welder-yellow transition-colors py-2 border-b border-welder-gray-dark"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </a>
            <a 
              href="#servicios" 
              className="text-white hover:text-welder-yellow transition-colors py-2 border-b border-welder-gray-dark"
              onClick={() => setIsMenuOpen(false)}
            >
              Servicios
            </a>
            <a 
              href="#portafolio" 
              className="text-white hover:text-welder-yellow transition-colors py-2 border-b border-welder-gray-dark"
              onClick={() => setIsMenuOpen(false)}
            >
              Portafolio
            </a>
            <a 
              href="#contacto" 
              className="text-white hover:text-welder-yellow transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
