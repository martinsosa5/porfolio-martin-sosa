import { useState, useEffect } from 'react';
// Importamos el ícono de FontAwesome 6 desde la librería de react-icons
import { FaBars } from 'react-icons/fa6'; 

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'acercaDe', 'servicios', 'porfolio', 'reseñas', 'contacto'];
      let current = 'home';

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            current = section;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'acercaDe', label: 'Acerca de' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'porfolio', label: 'Portfolio' },
    { id: 'contacto', label: 'Contacto' }
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black bg-opacity-75 fixed-top shadow-sm">
      <div className="container-lg">
        
        <a href="#home" className="navbar-brand text-primary fw-bold fs-4">
          Sosa Leandro Martin
        </a>
        
        <button 
          className="navbar-toggler px-3 border-0" 
          type="button" 
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
        >
          {/* Reemplazamos la etiqueta <i> por el componente de React Icons */}
          <FaBars className="fs-2 text-white" />
        </button>

        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
            {navItems.map((item) => (
              <li className="nav-item mx-2" key={item.id}>
                <a 
                  href={`#${item.id}`} 
                  className={`nav-link text-capitalize pb-1 ${
                    activeSection === item.id 
                      ? 'active text-primary fw-bold border-bottom border-primary border-3' 
                      : 'text-white' 
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;