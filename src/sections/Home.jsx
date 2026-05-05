import { FaBriefcase } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section id="home" className="min-vh-100 d-flex align-items-center pt-5">
      <div className="container-lg">
        <div className="row align-items-center">
          
          {/* Columna de Texto - Entra desde la izquierda */}
<motion.div 
  className="col-md-6 order-2 order-md-1 mt-5 mt-md-0 text-center text-md-start"
  initial={{ opacity: 0, x: -100 }}        
  whileInView={{ opacity: 1, x: 0 }}       
  transition={{ duration: 0.8 }}           
  viewport={{ once: false, amount: 0.3 }}  
>
  <p className="text-light mb-2 fs-5">¡Hola! Soy Leandro Martín Sosa</p>
  
  <h1 className="text-primary text-uppercase fs-1 fw-bold mb-3">
    Desarrollador Full-Stack y Estudiante de Ing. en Sistemas
  </h1>
  
  <p className="text-light fs-6 mb-4">
    Soy Desarrollador Full-Stack certificado por <strong>RollingCode School</strong> y estudiante de cuarto año de Ingeniería en Sistemas de Informacion. Me especializo en el diseño de arquitecturas escalables, automatización de procesos y desarrollo de software potenciado con Inteligencia Artificial. Orientado a la resolución de problemas complejos mediante soluciones tecnológicas eficientes e innovadoras.
  </p>
  
  <a href="#porfolio" className="btn btn-primary px-4 py-2 rounded-pill fw-bold shadow">
    Mis trabajos <FaBriefcase className="ms-2" />
  </a>
</motion.div>

          {/* Columna de Imagen - Efecto de Zoom */}
          <motion.div 
            className="col-md-6 order-1 order-md-2 d-flex justify-content-center"
            initial={{ opacity: 0, scale: 0.5 }}     
            whileInView={{ opacity: 1, scale: 1 }}   
            transition={{ duration: 0.8, delay: 0.2 }} 
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="home-img-container">
              <img 
                src="/img/FOTO-PERFIL.jpeg" 
                alt="Foto perfil Martín Sosa" 
                className="img-fluid rounded-circle border border-light border-4 shadow-lg"
                style={{ 
                  width: '350px', 
                  height: '350px', 
                  objectFit: 'cover',
                  boxShadow: '0 0 25px rgba(35, 126, 235, 0.5)'
                }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Home;