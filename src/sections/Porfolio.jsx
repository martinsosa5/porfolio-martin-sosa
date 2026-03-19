import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLink, FaGithub } from 'react-icons/fa6';

const Portfolio = () => {
  // Sacamos "Diseño" de las categorías
  const [filter, setFilter] = useState('Todos');
  const categories = ['Todos', 'Desarrollo', 'Fotografía'];

  // Proyectos ordenados estratégicamente
  const projects = [
    {
      id: 1,
      title: "Sistema Web - Comuna Los Sosa",
      category: "Desarrollo",
      img: "/img/SOFT-GEST-COMUNAL.png", 
      desc: "Plataforma web integral desarrollada para la gestión institucional y comunicación de la comuna.",
      link: "#",
      github: ""
    },
    {
      id: 2,
      title: "Bot de Reservas para Gimnasio",
      category: "Desarrollo",
      img: "/img/bot-gym.png",
      desc: "Chatbot en Telegram integrado con n8n y MongoDB para automatizar la reserva de clases.",
      link: "https://drive.google.com/file/d/1Ey-HumZTb7jCF4OK4F-JA_ZpNJTauM63/view?usp=sharing",
      github: ""
    },
    /* {
      id: 3,
      title: "Sistema de Gestión Deportiva",
      category: "Desarrollo",
      img: "/img/3.jpg",
      desc: "Plataforma para el control de capacidad y gestión de cupos en clases especiales como CrossFit y Pilates.",
      link: "#",
      github: "#"
    },
    {
      id: 4,
      title: "Módulo E-commerce",
      category: "Desarrollo",
      img: "/img/4.jpg",
      desc: "Implementación de un sistema de ventas desarrollado como proyecto de software universitario.",
      link: "#",
      github: "#"
    }, */
    {
      id: 5,
      title: "MS Fotografía Deportiva",
      category: "Fotografía",
      img: "/img/ms-foto.png",
      desc: "Cobertura profesional de eventos deportivos locales. Captura de momentos clave y edición avanzada.",
      link: "https://www.instagram.com/ms_fotografiadeportiva?igsh=MWI5YzRkaTIxZDdhbw%3D%3D&utm_source=qr",
      github: null 
    }
  ];

  const filteredProjects = filter === 'Todos' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="porfolio" className="py-5 min-vh-100 d-flex align-items-center ">
      <div className="container-lg py-4 ">
        
        <motion.div 
          className="row justify-content-center mb-5"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="col-lg-8 text-center">
            <h2 className="fw-bold text-white fs-1">Mi Portfolio</h2>
            <hr className="w-25 mx-auto text-primary border-primary border-2 opacity-100" />
            <p className="text-light opacity-75 mt-3 fs-5">
              Una selección de mis últimos proyectos y trabajos destacados.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="row justify-content-center mb-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
        >
          <div className="col-12 d-flex justify-content-center flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`btn rounded-pill px-4 fw-bold transition-all ${
                  filter === cat 
                    ? 'btn-primary shadow' 
                    : 'btn-outline-light text-white opacity-75'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="row justify-content-center">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id} 
                className="col-md-6 col-lg-4 mb-4 "
                layout 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
              >
                <div 
                  className="portfolio-card p-3 rounded-4 h-100 d-flex flex-column"
                  style={{
                    background: 'rgba(25, 25, 25, 0.4)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <div className="overflow-hidden rounded-3 mb-3" style={{ height: '200px' }}>
                    <motion.img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-100 h-100 object-fit-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="badge bg-primary text-uppercase">{project.category}</span>
                    <div className="d-flex gap-2">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noreferrer" className="text-white fs-5 text-primary-hover transition-all">
                          <FaGithub />
                        </a>
                      )}
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noreferrer" className="text-white fs-5 text-primary-hover transition-all">
                          <FaLink />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="fs-5 fw-bold text-white mb-2">{project.title}</h3>
                  <p className="text-light opacity-75 fs-6 m-0 flex-grow-1">
                    {project.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Portfolio;