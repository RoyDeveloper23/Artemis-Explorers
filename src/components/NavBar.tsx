"use client";

export const NavBar = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <nav
        aria-label="Global"
        className="w-full bg-white shadow p-3 lg:px-8 flex items-center place-content-between gap-x-5"
      >
        <div className="flex ">
          <img alt="AREX logo" src="./ArEx.png" className="h-12 w-14 " />
        </div>
        <a
          href="#"
          className="text-sm font-bold leading-6 text-blue-900 font-serif transition-transform duration-500 transform hover:scale-110 hover:text-black hover:border-b hover:border-black "
        >
          school students
        </a>
        <a
          href="#"
          className="text-sm font-bold leading-6 text-blue-900 font-serif transition-transform duration-500 transform hover:scale-110 hover:text-black hover:border-b hover:border-black"
        >
          university students
        </a>
        <a
          href="#"
          className="text-sm font-bold leading-6 text-blue-900 font-serif transition-transform duration-500 transform hover:scale-110 hover:text-black hover:border-b hover:border-black"
        >
          Researches
        </a>
        <a
          href="https://www.instagram.com/nasa_es?igsh=MW5pMmV4Z3h4ZjEyYg%3D%3D"
          className="text-sm font-bold leading-6 text-blue-900 font-serif transition-transform duration-500 transform hover:scale-110 hover:text-black hover:border-b hover:border-black"
          target="_blank"
        >
          Instagram
        </a>
        {/* </div> */}
      </nav>
      <div className="grid grid-cols-2 gap-4">
        <div className="m-7 place-content-center">
          <h1 className="text-6xl font-black text-black font-mono  ">
            Artemis <span className="text-blue-900 font-mono">Explorers</span>
          </h1>

          <p className="mt-8 text-sm text-black-900 leading-8 text-justify font-serif ">
            ¿Te apasiona el espacio y la exploración del cosmos? Únete al club
            AREX y embárcate en un viaje fascinante más allá de las estrellas.
            Descubre los últimos avances en la ciencia espacial. Nuestra
            comunidad se dedica a la divulgación y exploración. El espacio no
            tiene límites, y tu capacidad para aprender tampoco.
          </p>
          <div className="mt-3">
            <button className="bg-blue-900 text-white text-x  p-2 rounded-lg m-1 transition-transform duration-300 transform hover:scale-105 hover:bg-blue-800 hover:shadow-xl">
              Explorar más
            </button>
          </div>
        </div>
        <div className="flex p-7 lg:px-7 max-h-full w-full items-center justify-center transition-transform duration-500 transform ">
          <img
            src="https://images-assets.nasa.gov/image/Artemis%20II%20second%20poster_11x17_300ppi_CMYK_Right/Artemis%20II%20second%20poster_11x17_300ppi_CMYK_Right~thumb.jpg?as=web"
            alt="xd"
            className=" lg:max-h-128  w-4/5 rounded object-fill shadow-2xl mb-10"
          />
        </div>
      </div>
    </div>
  );
};
