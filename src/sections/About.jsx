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
            <h2 className="fw-bold text-white fs-1">Acerca de mí</h2>
            <hr className="w-25 mx-auto text-primary border-primary border-2 opacity-100" />
          </div>
        </motion.div>

        <div className="row mx-1">
          {/* Columna Izquierda: Texto y Redes */}
          <motion.div className="col-md-6 p-3" {...fadeUp}>
            <h3 className="fs-4 mb-3 text-primary">Transformando ideas en arquitecturas digitales</h3>
           <p className="text-white mb-4">
  Mi formación como Desarrollador Full-Stack (RollingCode) y mis estudios avanzados en Ingeniería en Sistemas me proporcionan una base analítica sólida para diseñar software escalable desde sus cimientos. Disfruto creando soluciones robustas, desde la lógica del servidor y el modelado de datos complejos, hasta la experiencia de usuario final, asegurando rendimiento, seguridad y eficiencia en cada despliegue.
</p>

            <div className="d-flex align-items-center flex-wrap gap-3 my-4">
              <a href="/tu-cv.pdf" target="_blank" className="btn btn-primary px-4 py-2 rounded-pill fw-bold shadow">
                <FaFilePdf className="me-2" /> Descargar CV
              </a>
              <div className="d-flex gap-3 ms-md-3">
                <a href="#" className="text-white fs-3 text-primary-hover"><FaGithub /></a>
                <a href="www.linkedin.com/in/martin-sosa-3996883b8" className="text-white fs-3 text-primary-hover"><FaLinkedin /></a>
                <a href="https://www.instagram.com/martiin_sosa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-white fs-3 text-primary-hover"><FaInstagram /></a>
                <a href="#" className="text-white fs-3 text-primary-hover"><FaWhatsapp /></a>
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
                    Desarrollo de interfaces dinámicas y responsivas con un fuerte enfoque en la experiencia de usuario (UX). Experiencia sólida construyendo Single Page Applications (SPAs) con <strong>React, HTML5, CSS3, Bootstrap 5 y Tailwind CSS</strong>.
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
                    Diseño de sistemas escalables y arquitecturas SaaS Multi-tenant. Manejo avanzado de <strong>C#, .NET y Node.js</strong>. Integración de Patrones de Diseño, control de versiones con Git/GitHub y modelado UML avanzado, incluyendo la definición precisa de flujos de actores.
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
                    Bases de Datos y Modelado
                  </button>
                </h2>
                <div className={`accordion-collapse collapse ${openPanel === 'panel3' ? 'show' : ''}`}>
                  <div className="accordion-body text-white">
                    Diseño arquitectónico de esquemas, optimización de consultas y creación de Diagramas de Entidad-Relación (DER). Dominio de bases de datos relacionales empresariales como <strong>Microsoft SQL Server (SSMS) y MySQL (Workbench)</strong>, además de bases de datos NoSQL como <strong>MongoDB</strong>.
                  </div>
                </div>
              </div>

              {/* PANEL 4: AUTOMATIZACIÓN E IA */}
              <div className="accordion-item bg-transparent border-bottom border-secondary">
                <h2 className="accordion-header">
                  <button 
                    className={`accordion-button ${openPanel === 'panel4' ? '' : 'collapsed'} bg-transparent text-white fw-bold fs-5 shadow-none`} 
                    type="button" 
                    onClick={() => togglePanel('panel4')}
                  >
                    Automatización e Inteligencia Artificial
                  </button>
                </h2>
                <div className={`accordion-collapse collapse ${openPanel === 'panel4' ? 'show' : ''}`}>
                  <div className="accordion-body text-white">
                    Certificado en IA aplicada al desarrollo a través del programa <strong>Codeboost de RollingCode</strong>. Implementación de flujos de trabajo sin fricción mediante <strong>n8n y Telegram Bot API</strong>, y aplicación de metodologías de desarrollo asistido por IA para la refactorización de código y optimización de integraciones.
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
                    Diseño, Fotografía y Soporte Técnico
                  </button>
                </h2>
                <div className={`accordion-collapse collapse ${openPanel === 'panel5' ? 'show' : ''}`}>
                  <div className="accordion-body text-white">
                    Director de MS Fotografía Deportiva, orientada a la captura estratégica de momentos de alto valor. Dominio de <strong>Adobe Photoshop y Lightroom</strong> para retoques complejos y recursos gráficos. Además, poseo sólidos conocimientos aplicados como técnico en refrigeración, demostrando gran capacidad de resolución técnica.
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