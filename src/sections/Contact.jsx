import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLocationDot, FaPaperPlane, FaCircleCheck, FaCircleXmark } from 'react-icons/fa6';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  
  // Nuevo estado para nuestra notificación personalizada
  const [toast, setToast] = useState({ show: false, message: '', type: '' });

  // Función para mostrar la notificación y ocultarla a los 4 segundos
  const showToast = (message, type) => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: '', type: '' });
    }, 4000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const nameRegex = /^[a-zA-ZÀ-ÿ\s]{3,40}$/;
    if (!nameRegex.test(formData.name)) {
      newErrors.name = 'El nombre solo debe contener letras (mín. 3).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Por favor, ingresa un email válido.';
    }
    if (formData.subject.trim().length < 5 || formData.subject.length > 50) {
      newErrors.subject = 'El asunto debe tener entre 5 y 50 caracteres.';
    }
    if (formData.message.trim().length < 10 || formData.message.length > 500) {
      newErrors.message = 'El mensaje debe tener entre 10 y 500 caracteres.';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        const response = await fetch("https://formspree.io/f/mnjgwwlq", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          // Reemplazamos el alert() por nuestra notificación de éxito
          showToast("¡Mensaje enviado con éxito! Te responderé pronto.", "success");
          setFormData({ name: '', email: '', subject: '', message: '' }); 
          setErrors({});
        } else {
          // Notificación de error si Formspree falla
          showToast("Hubo un problema al enviar. Intentá de nuevo.", "error");
        }
      } catch (error) {
        // Notificación de error si no hay internet
        showToast("Error de conexión. Revisá tu internet.", "error");
      }
    }
  };

  const fadeUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
    viewport: { once: false, amount: 0.2 }
  };

  return (
    <section id="contacto" className="py-5 min-vh-100 d-flex flex-column justify-content-center position-relative">
      
      <motion.div className="container-lg mb-5" {...fadeUp}>
        <div 
          className="row justify-content-center text-center p-5 rounded-4 mx-1 mx-md-0"
          style={{
            background: 'linear-gradient(135deg, rgba(35, 126, 235, 0.2) 0%, rgba(25, 25, 25, 0.6) 100%)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(35, 126, 235, 0.3)'
          }}
        >
          <div className="col-lg-8">
            <h2 className="text-white fs-2 fw-bold mb-3">¿Tenés un proyecto en mente?</h2>
            <p className="text-light opacity-75 fs-5 mb-0">
              Ya sea un sistema a medida, una página web o cobertura fotográfica, estoy disponible para ayudarte a hacerlo realidad.
            </p>
          </div>
        </div>
      </motion.div>

      <div className="container-lg">
        <motion.div className="row justify-content-center mb-5" {...fadeUp}>
          <div className="col-lg-8 text-center">
            <h2 className="fw-bold text-white fs-1">Contacta Conmigo</h2>
            <hr className="w-25 mx-auto text-primary border-primary border-2 opacity-100" />
          </div>
        </motion.div>

        <div className="row justify-content-center gap-5 gap-lg-0 mx-1 mx-md-0">
          
          <motion.div className="col-lg-5" {...fadeUp}>
            <div className="d-flex flex-column gap-4">
              
              <div className="d-flex align-items-center">
                <div className="icon-box bg-primary bg-opacity-10 text-primary rounded-circle d-flex justify-content-center align-items-center" style={{ width: '60px', height: '60px', fontSize: '1.5rem', minWidth: '60px' }}>
                  <FaEnvelope />
                </div>
                <div className="ms-3">
                  <h3 className="fs-5 text-white mb-1">Email</h3>
                  <p className="text-light opacity-75 m-0">martinsoosaa31@gmail.com</p>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <div className="icon-box bg-primary bg-opacity-10 text-primary rounded-circle d-flex justify-content-center align-items-center" style={{ width: '60px', height: '60px', fontSize: '1.5rem', minWidth: '60px' }}>
                  <FaPhone />
                </div>
                <div className="ms-3">
                  <h3 className="fs-5 text-white mb-1">Teléfono</h3>
                  {/* Sacamos el botón feo, queda solo la info limpia */}
                  <p className="text-light opacity-75 m-0">+54 3863 447601</p>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <div className="icon-box bg-primary bg-opacity-10 text-primary rounded-circle d-flex justify-content-center align-items-center" style={{ width: '60px', height: '60px', fontSize: '1.5rem', minWidth: '60px' }}>
                  <FaLocationDot />
                </div>
                <div className="ms-3">
                  <h3 className="fs-5 text-white mb-1">Ubicación</h3>
                  <p className="text-light opacity-75 m-0">Tucumán, Argentina</p>
                </div>
              </div>

            </div>
          </motion.div>

          <motion.div className="col-lg-7" {...fadeUp}>
            <form 
              onSubmit={handleSubmit}
              className="p-4 rounded-4"
              style={{
                background: 'rgba(25, 25, 25, 0.4)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
              noValidate
            >
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Tu nombre" className={`form-control bg-transparent text-white shadow-none px-3 py-2 ${errors.name ? 'border-danger' : 'border-secondary'}`} />
                  {errors.name && <small className="text-danger mt-1 d-block">{errors.name}</small>}
                </div>
                <div className="col-md-6 mb-3">
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Tu email" className={`form-control bg-transparent text-white shadow-none px-3 py-2 ${errors.email ? 'border-danger' : 'border-secondary'}`} />
                  {errors.email && <small className="text-danger mt-1 d-block">{errors.email}</small>}
                </div>
              </div>
              <div className="mb-3">
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Asunto" className={`form-control bg-transparent text-white shadow-none px-3 py-2 ${errors.subject ? 'border-danger' : 'border-secondary'}`} />
                {errors.subject && <small className="text-danger mt-1 d-block">{errors.subject}</small>}
              </div>
              <div className="mb-4">
                <textarea name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Escribe tu mensaje..." className={`form-control bg-transparent text-white shadow-none px-3 py-2 ${errors.message ? 'border-danger' : 'border-secondary'}`}></textarea>
                {errors.message && <small className="text-danger mt-1 d-block">{errors.message}</small>}
              </div>
              <button type="submit" className="btn btn-primary px-4 py-2 rounded-pill fw-bold shadow w-100">
                Enviar Mensaje <FaPaperPlane className="ms-2" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>

      {/* CONTENEDOR DE LA NOTIFICACIÓN (TOAST) */}
      <div className="position-fixed bottom-0 start-50 translate-middle-x w-100 d-flex justify-content-center" style={{ zIndex: 1050, paddingBottom: '30px', pointerEvents: 'none' }}>
        <AnimatePresence>
          {toast.show && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="px-4 py-3 rounded-pill shadow-lg d-flex align-items-center gap-3"
              style={{
                background: toast.type === 'success' ? 'rgba(40, 167, 69, 0.85)' : 'rgba(220, 53, 69, 0.85)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'white',
              }}
            >
              {toast.type === 'success' ? <FaCircleCheck className="fs-4" /> : <FaCircleXmark className="fs-4" />}
              <span className="fw-bold m-0">{toast.message}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </section>
  );
};

export default Contact;