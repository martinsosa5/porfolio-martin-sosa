import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa6';

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/5493863447601"
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-success shadow-lg d-flex align-items-center justify-content-center text-decoration-none"
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        zIndex: 1000,
        borderRadius: '50px',
        padding: '12px 16px', // Ajuste para que quede bien el círculo/óvalo
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <FaWhatsapp style={{ fontSize: '1.8rem' }} />
      {/* El texto se oculta en móviles (d-none) y aparece en pantallas medianas/grandes (d-md-block) */}
      <span className="d-none d-md-block ms-2 fw-bold fs-6 pe-1">
        Enviar WhatsApp
      </span>
    </motion.a>
  );
};

export default FloatingWhatsApp;