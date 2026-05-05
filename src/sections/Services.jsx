import { motion } from 'framer-motion';
import { FaCode, FaServer, FaRobot, FaCameraRetro } from 'react-icons/fa6';

const Services = () => {
  const servicesData = [
    {
      id: 1,
      title: "Desarrollo Full-Stack",
      desc: "Creación de aplicaciones web robustas y escalables. Diseño arquitectónico desde la lógica del servidor (C#, Node.js) hasta interfaces modernas con React.",
      icon: <FaCode />
    },
    {
      id: 2,
      title: "Arquitectura y Bases de Datos",
      desc: "Modelado e implementación de bases de datos empresariales (SQL Server, MySQL, MongoDB). Soluciones SaaS multi-tenant y optimización de flujos de datos.",
      icon: <FaServer />
    },
    {
      id: 3,
      title: "Automatización y Chatbots",
      desc: "Optimización de procesos operativos mediante la integración de flujos automatizados con n8n, Telegram Bot API e Inteligencia Artificial.",
      icon: <FaRobot />
    },
    {
      id: 4,
      title: "Fotografía y Comunicación",
      desc: "Dirección visual y fotográfica. Retoque digital complejo con el ecosistema Adobe para consolidar la identidad gráfica y comercial de tu proyecto.",
      icon: <FaCameraRetro />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="servicios" className="py-5 min-vh-100 d-flex align-items-center">
      <div className="container-lg py-4">
        
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
              Soluciones integrales combinando ingeniería de sistemas y visión estratégica visual.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="row justify-content-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
        >
          {servicesData.map((service) => (
            <motion.div key={service.id} className="col-md-6 col-lg-5 mb-4" variants={cardVariants}>
              
              <motion.div 
                className="service-card p-4 rounded-4 h-100 d-flex flex-column align-items-center text-center"
                style={{
                  background: 'rgba(25, 25, 25, 0.4)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
                whileHover={{ 
                  y: -10,
                  boxShadow: '0 10px 30px rgba(35, 126, 235, 0.3)',
                  borderColor: 'rgba(35, 126, 235, 0.5)'
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="icon mb-3 text-primary d-flex align-items-center justify-content-center"
                  style={{ fontSize: '3rem' }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
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