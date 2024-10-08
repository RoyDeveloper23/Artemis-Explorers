"use client";

// import { motion, useAnimation } from "framer-motion";
import { NavBar } from "../components/NavBar";
// import { Slider } from "../components/Slider";
// import { ISlide } from "../domain/slider";
// import { useInView } from "react-intersection-observer";
// import { useEffect } from "react";
import { PictureDay } from "../components/PictureDay";
import { ArticleStudents } from "../components/Articles/ArticleStudents";
import { ArticlesUniversity } from "../components/Articles/ArticlesUniversity";
import { ArticlesResearches } from "../components/Articles/ArticlesResearches";
import { Creators } from "../components/Creators";
import { Carousel } from "../components/Carousel";

export const Home = () => {
  // const slides: ISlide[] = [
  //   { image: "/img1.jpg", description: "VISITA AL COLEGIO GREGORIANO" },
  //   { image: "/img2.jpg", description: "VISITA AL COLEGIO AMERICANO" },
  //   { image: "/img3.jpg", description: "VISITA AL CEN" },
  // ];

  // const controls = useAnimation();
  // const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

  // useEffect(() => {
  //   if (inView) {
  //     controls.start({ opacity: 1, y: 0, scale: 1 });
  //   } else {
  //     controls.start({ opacity: 0, y: 30, scale: 0.9 });
  //   }
  // }, [inView, controls]);
  return (
    <>
      <NavBar />
      <div className="w-full bg-black h-screen bg-[url('/img-home.jpg')] bg-cover bg-center">
        <div className=" text-white flex items-center h-full justify-around absolute right-[4%]">
          <div className=" w-[400px] ">
            <span className="text-[46px] leading-[50px] font-normal font-sans mx-auto">
              Artemis Explorers
            </span>
            <p className="mt-5 leading-6 text-sm">
              ¿Te apasiona el espacio y la exploración del cosmos? Únete al club
              AREX y embárcate en un viaje fascinante más allá de las estrellas.
              Descubre los últimos avances en la ciencia espacial. Nuestra
              comunidad se dedica a la divulgación y exploración. El espacio no
              tiene límites, y tu capacidad para aprender tampoco.
            </p>
          </div>
        </div>
      </div>
      <br />
      <PictureDay />
      <ArticleStudents />
      <ArticlesUniversity />
      <ArticlesResearches />
      <Carousel />

      <br />
      <br />
      {/* <div ref={ref} className=" w-full h-screen pt-5">
        <motion.h3
          initial={{ opacity: 0, y: -50 }}
          animate={controls}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-8 text-center bg-clip-text t bg-gradient-to-r mt-5 "
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
          className="text-sm mb-6 flex flex-col items-center space-y-4 px-48 pb-10"
        >
          <i className="bi bi-rocket text-xl text-blue-400 animate-pulse mt-5"></i>
          <p>
            "Estamos emocionados de compartir nuestra pasión por la exploración
            espacial con la próxima generación. Durante nuestras visitas a
            colegios y centros de estudios, inspiramos y educamos a los
            estudiantes sobre el fascinante mundo del espacio."
          </p>
        </motion.div>
      </div> */}

      <div>
        <Creators />
      </div>
    </>
  );
};
