import { motion } from 'framer-motion';
import { FaCode, FaServer, FaRobot, FaCameraRetro } from 'react-icons/fa6';

const Services = () => {
  // Datos de tus servicios reales
  const servicesData = [
    {
      id: 1,
      title: "Desarrollo Full Stack",
      desc: "Creación de aplicaciones web modernas, escalables y responsivas. Desde e-commerce hasta landing pages, utilizando React, Node.js y las mejores prácticas de UX/UI.",
      icon: <FaCode />
    },
    {
      id: 2,
      title: "Sistemas y Bases de Datos",
      desc: "Software a medida para digitalizar negocios y gestionar capacidades. Arquitectura robusta, integración de bases de datos (SQL, MongoDB) y creación de APIs eficientes.",
      icon: <FaServer />
    },
    {
      id: 3,
      title: "Automatización y Chatbots",
      desc: "Optimización de procesos mediante bots interactivos en plataformas como Telegram. Integración fluida con herramientas como n8n y soluciones con Inteligencia Artificial.",
      icon: <FaRobot />
    },
    {
      id: 4,
      title: "Fotografía y Diseño",
      desc: "Cobertura profesional de eventos bajo MS Fotografía Deportiva y creación de identidad visual. Edición avanzada con Photoshop y Lightroom para destacar tu marca.",
      icon: <FaCameraRetro />
    }
  ];

  // Variante para el contenedor: hace que las tarjetas aparezcan en cascada (una tras otra)
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2 // Retraso entre cada tarjeta
      }
    }
  };

  // Variante individual para cada tarjeta
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="servicios" className="py-5 min-vh-100 d-flex align-items-center">
      <div className="container-lg py-4">
        
        {/* Título de la sección */}
        <motion.div 
          className="row justify-content-center mb-5"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="col-lg-8 text-center">
            <h2 className="fw-bold text-white fs-1">Mis Servicios</h2>
            <hr className="w-25 mx-auto text-primary border-primary border-2 opacity-100" />
            <p className="text-light opacity-75 mt-3 fs-5">
              Soluciones integrales combinando ingeniería de software y creatividad visual.
            </p>
          </div>
        </motion.div>

        {/* Grilla de Servicios */}
        <motion.div 
          className="row justify-content-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
        >
          {servicesData.map((service) => (
            <motion.div key={service.id} className="col-md-6 col-lg-5 mb-4" variants={cardVariants}>
              
              {/* Tarjeta con efecto Glassmorphism y Hover interactivo */}
              <motion.div 
                className="service-card p-4 rounded-4 h-100 d-flex flex-column align-items-center text-center"
                style={{
                  background: 'rgba(25, 25, 25, 0.4)', // Fondo semitransparente
                  backdropFilter: 'blur(10px)',        // Efecto cristal
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
                whileHover={{ 
                  y: -10, // Se eleva 10px
                  boxShadow: '0 10px 30px rgba(35, 126, 235, 0.3)', // Resplandor azul
                  borderColor: 'rgba(35, 126, 235, 0.5)' // El borde se pone azul
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Ícono animado */}
                <motion.div 
                  className="icon mb-3 text-primary d-flex align-items-center justify-content-center"
                  style={{ fontSize: '3rem' }}
                  whileHover={{ scale: 1.2, rotate: 5 }} // Crece y gira un poquito al pasar el mouse
                >
                  {service.icon}
                </motion.div>
                
                <h3 className="fs-4 fw-bold text-white py-2">{service.title}</h3>
                <p className="text-light opacity-75 flex-grow-1 m-0">
                  {service.desc}
                </p>
              </motion.div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;