import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFilePdf, FaInstagram, FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa6';

const About = () => {
  const [openPanel, setOpenPanel] = useState('panel1');

  const togglePanel = (panel) => {
    setOpenPanel(openPanel === panel ? null : panel);
  };

  const fadeUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
    viewport: { once: false, amount: 0.2 }
  };

  return (
    <section id="acercaDe" className="py-5 min-vh-100 d-flex align-items-center">
      <div className="container-lg py-4">
        
        <motion.div className="row justify-content-center mb-5" {...fadeUp}>
          <div className="col-lg-8 text-center">
            <h2 className="fw-bold text-white fs-1">Acerca de mi</h2>
            <hr className="w-25 mx-auto text-primary border-primary border-2 opacity-100" />
          </div>
        </motion.div>

        <div className="row mx-1">
          {/* Columna Izquierda: Texto y Redes (SIN estadísticas) */}
          <motion.div className="col-md-6 p-3" {...fadeUp}>
            <h3 className="fs-4 mb-3 text-primary">Transformando ideas en soluciones digitales</h3>
            <p className="text-white mb-4">
              Me apasiona resolver problemas complejos a través del código. Mi formación en Ingeniería en Sistemas me da una base sólida para entender cómo funciona el software desde sus cimientos, mientras que mi experiencia práctica me permite crear aplicaciones robustas, escalables y eficientes. Disfruto tanto del diseño de la interfaz como de la arquitectura de datos que la sostiene.
            </p>

            <div className="d-flex align-items-center flex-wrap gap-3 my-4">
              <a href="/tu-cv.pdf" target="_blank" className="btn btn-primary px-4 py-2 rounded-pill fw-bold shadow">
                <FaFilePdf className="me-2" /> Descargar CV
              </a>
              <div className="d-flex gap-3 ms-md-3">
                <a href="#" className="text-white fs-3"><FaGithub /></a>
                <a href="#" className="text-white fs-3"><FaLinkedin /></a>
                <a href="#" className="text-white fs-3"><FaInstagram /></a>
                <a href="#" className="text-white fs-3"><FaWhatsapp /></a>
              </div>
            </div>
          </motion.div> 

          {/* Columna Derecha: Acordeón Actualizado y Ampliado */}
          <motion.div className="col-md-6 mt-5 mt-md-0 p-3" {...fadeUp}>
            <div className="accordion accordion-flush">
              
              {/* PANEL 1: FRONT-END */}
              <div className="accordion-item bg-transparent border-bottom border-secondary">
                <h2 className="accordion-header">
                  <button 
                    className={`accordion-button ${openPanel === 'panel1' ? '' : 'collapsed'} bg-transparent text-white fw-bold fs-5 shadow-none`} 
                    type="button" 
                    onClick={() => togglePanel('panel1')}
                  >
                    Desarrollo Front-End
                  </button>
                </h2>
                <div className={`accordion-collapse collapse ${openPanel === 'panel1' ? 'show' : ''}`}>
                  <div className="accordion-body text-white">
                    Maquetado web responsivo y desarrollo de interfaces dinámicas. Experiencia sólida en <strong>React, HTML5, CSS3, Bootstrap 5 y Tailwind CSS</strong>. Enfoque en la experiencia de usuario (UX) y optimización de componentes visuales.
                  </div>
                </div>
              </div>

              {/* PANEL 2: BACK-END Y ARQUITECTURA */}
              <div className="accordion-item bg-transparent border-bottom border-secondary">
                <h2 className="accordion-header">
                  <button 
                    className={`accordion-button ${openPanel === 'panel2' ? '' : 'collapsed'} bg-transparent text-white fw-bold fs-5 shadow-none`} 
                    type="button" 
                    onClick={() => togglePanel('panel2')}
                  >
                    Back-End y Arquitectura
                  </button>
                </h2>
                <div className={`accordion-collapse collapse ${openPanel === 'panel2' ? 'show' : ''}`}>
                  <div className="accordion-body text-white">
                    Creación de APIs, lógica de servidor y diseño de sistemas escalables. Manejo de lenguajes como <strong>C#, Java, C++ y Node.js</strong>. Amplia experiencia trabajando con <strong>Visual Studio</strong>, aplicando estrictamente Patrones de Diseño y Arquitecturas de Software.
                  </div>
                </div>
              </div>

              {/* PANEL 3: BASES DE DATOS */}
              <div className="accordion-item bg-transparent border-bottom border-secondary">
                <h2 className="accordion-header">
                  <button 
                    className={`accordion-button ${openPanel === 'panel3' ? '' : 'collapsed'} bg-transparent text-white fw-bold fs-5 shadow-none`} 
                    type="button" 
                    onClick={() => togglePanel('panel3')}
                  >
                    Bases de Datos
                  </button>
                </h2>
                <div className={`accordion-collapse collapse ${openPanel === 'panel3' ? 'show' : ''}`}>
                  <div className="accordion-body text-white">
                    Modelado, administración y optimización de datos. Trabajo fluido con bases de datos relacionales usando <strong>SQL, MySQL, MySQL Workbench</strong>, así como motores de nivel empresarial (SQL Server / PostgreSQL). También poseo experiencia en bases de datos NoSQL como <strong>MongoDB</strong>.
                  </div>
                </div>
              </div>

              {/* PANEL 4: IA */}
              <div className="accordion-item bg-transparent border-bottom border-secondary">
                <h2 className="accordion-header">
                  <button 
                    className={`accordion-button ${openPanel === 'panel4' ? '' : 'collapsed'} bg-transparent text-white fw-bold fs-5 shadow-none`} 
                    type="button" 
                    onClick={() => togglePanel('panel4')}
                  >
                    Inteligencia Artificial
                  </button>
                </h2>
                <div className={`accordion-collapse collapse ${openPanel === 'panel4' ? 'show' : ''}`}>
                  <div className="accordion-body text-white">
                    Capacitación especializada en IA. Conocimiento sobre integración de modelos de lenguaje, automatización de procesos, y aplicación de herramientas de inteligencia artificial para potenciar soluciones de software.
                  </div>
                </div>
              </div>

              {/* PANEL 5: DISEÑO Y FOTO */}
              <div className="accordion-item bg-transparent border-secondary">
                <h2 className="accordion-header">
                  <button 
                    className={`accordion-button ${openPanel === 'panel5' ? '' : 'collapsed'} bg-transparent text-white fw-bold fs-5 shadow-none`} 
                    type="button" 
                    onClick={() => togglePanel('panel5')}
                  >
                    Diseño y Fotografía
                  </button>
                </h2>
                <div className={`accordion-collapse collapse ${openPanel === 'panel5' ? 'show' : ''}`}>
                  <div className="accordion-body text-white">
                    Cobertura profesional de eventos bajo el nombre de MS Fotografía Deportiva. Manejo avanzado de herramientas de diseño y edición fotográfica como <strong>Adobe Photoshop y Lightroom</strong>.
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;