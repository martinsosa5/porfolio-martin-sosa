import { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';



function App() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  // 2do EFECTO: SOLO PARA VANTA
  useEffect(() => {
    if (!vantaEffect && window.VANTA) {
      setVantaEffect(
        window.VANTA.NET({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x74acf5,
          backgroundColor: 0x0,
          points: 9.00,
          maxDistance: 28.00,
          spacing: 16.00
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <>
      {/* EL FONDO VANTA:
        Le cambiamos zIndex a 0 para que no se esconda detrás del body.
      */}
      <div 
        ref={vantaRef} 
        style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          width: '100vw', 
          height: '100vh', 
          zIndex: 0 ,
          opacity: 0.3
        }}
      ></div>

      {/* CONTENEDOR PRINCIPAL:
        Le ponemos position 'relative' y zIndex 1 para obligarlo a estar 
        SIEMPRE por encima del fondo de Vanta.
      */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        
        <Navbar />
        
        <div style={{ paddingTop: '30px' }}>
          
          <Home />

         <About />

          <section id="servicios" className="min-vh-100 d-flex align-items-center justify-content-center">
            <h1 className="text-white">Sección Servicios</h1>
          </section>

          <section id="porfolio" className="min-vh-100 d-flex align-items-center justify-content-center">
            <h1 className="text-white">Sección Portfolio</h1>
          </section>

          <section id="reseñas" className="min-vh-100 d-flex align-items-center justify-content-center">
            <h1 className="text-white">Sección Reseñas</h1>
          </section>

          <section id="contacto" className="min-vh-100 d-flex align-items-center justify-content-center">
            <h1 className="text-white">Sección Contacto</h1>
          </section>

        </div>
      </div>
    </>
  )
}

export default App;