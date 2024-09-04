import { Slider } from "../components/Slider";
import { motion, useAnimation } from "framer-motion";
import { ISlide } from "../domain/slider";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export const Carousel = () => {
  const slides: ISlide[] = [
    { image: "/img1.jpg", description: "VISITA AL COLEGIO GREGORIANO" },
    { image: "/img2.jpg", description: "VISITA AL COLEGIO AMERICANO" },
    { image: "/img3.jpg", description: "VISITA AL CEN" },
  ];

  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, scale: 1 });
    } else {
      controls.start({ opacity: 0, y: 30, scale: 0.9 });
    }
  }, [inView, controls]);

  return (
    <>
      <div ref={ref} className=" w-full h-screen pt-3  ">
        <motion.h3
          initial={{ opacity: 0, y: -50 }}
          animate={controls}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-3 text-center bg-clip-text t bg-gradient-to-r  "
        >
          Visitas y Conexiones
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={controls}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative"
        >
          <Slider slides={slides} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          transition={{ duration: 1, delay: 0.2 }}
          className="grid place-items-center grid-cols-1 text-sm mb-6  space-y-1 px-4 pb-8"
        >
          <i className="bi bi-rocket text-xl text-blue-400 animate-pulse mt-2  "></i>
          <p>
            "Estamos emocionados de compartir nuestra pasión por la exploración
            espacial con la próxima generación. Durante nuestras visitas a
            colegios y centros de estudios, inspiramos y educamos a los
            estudiantes sobre el fascinante mundo del espacio."
          </p>
        </motion.div>
      </div>
      <br />
    </>
  );
};
