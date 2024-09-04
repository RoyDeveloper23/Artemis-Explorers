import { Instagram } from "./helpers/Instagram";
("use client");

export const NavBar = () => {
  return (
    <nav
      aria-label="Global"
      className="absolute w-full bg-white shadow p-0.5 lg:px-8 flex items-center place-content-between gap-x-5  bg-gradient-to-r  via-black to-transparent z-20"
    >
      <div className="flex ">
        <img alt="AREX logo" src="./ArEx.png" className="h-12 w-14 " />
      </div>
      <a
        href="#School Students"
        className="text-sm font-bold leading-6  font-rubik  transition-transform duration-500 transform hover:scale-110 hover:text-black hover:border-b hover:border-black"
      >
        School Students
      </a>
      <a
        href="#University Students"
        className="text-sm font-bold leading-6  font-rubik transition-transform duration-500 transform hover:scale-110 hover:text-black hover:border-b hover:border-black "
      >
        University Students
      </a>
      <a
        href="#Researches"
        className="text-sm font-bold leading-6  font-rubik transition-transform duration-500 transform hover:scale-110 hover:text-black hover:border-b hover:border-black "
      >
        Researches
      </a>
      <a
        href="https://www.instagram.com/nasa_es?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
        target="blank"
      >
        <Instagram />
      </a>
    </nav>
  );
};
