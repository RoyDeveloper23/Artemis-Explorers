"use client";

// import { useRef } from "react";

// import { useEffect } from "react";
// import { PictureApi } from "../services/PictureApi";

export const NavBar = () => {
  // const { getAsteroids } = PictureApi();

  // const getAteroidsData = async () => {
  //   const data = await getAsteroids();
  //   console.log("ATEROIDES", data);
  // };
  // useEffect(() => {
  //   getAteroidsData();
  // }, []);

  return (
      <nav
        aria-label="Global"
        className="absolute w-full bg-white shadow p-0.5 lg:px-8 flex items-center place-content-between gap-x-5  bg-gradient-to-r  via-black to-transparent"
      >
        <div className="flex ">
          <img alt="AREX logo" src="./ArEx.png" className="h-12 w-14 " />
        </div>
        {/* <div className="flex place-items-between gap-x-12 "> */}
        <a
          href="#"
          className="text-sm font-bold leading-6  font-serif  transition-transform duration-500 transform hover:scale-110 hover:text-black hover:border-b hover:border-black"
        >
          Home
        </a>
        <a
          href="#"
          className="text-sm font-bold leading-6  font-serif transition-transform duration-500 transform hover:scale-110 hover:text-black hover:border-b hover:border-black "
        >
          Artemis Mission
        </a>
        <a
          href="#"
          className="text-sm font-bold leading-6  font-serif transition-transform duration-500 transform hover:scale-110 hover:text-black hover:border-b hover:border-black"
        >
          Exoplanets
        </a>
        <a
          href="https://www.instagram.com/nasa_es?igsh=MW5pMmV4Z3h4ZjEyYg%3D%3D"
          className="text-sm font-bold leading-6  font-serif transition-transform duration-500 transform hover:scale-110 hover:text-black hover:border-b hover:border-black"
          target="_blank"
        >
          Instagram
        </a>
        {/* </div> */}
      </nav>

  );
};
