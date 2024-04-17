import React from "react";
import { useState, useEffect } from "react";
//logo
import logoWhite from "../assets/img/logo-white.svg";
import logoDark from "../assets/img/logo-dark.svg";

const Header = () => {
  const [header, setHeader] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY >50 ? setHeader(true):setHeader(false);
    })
  })
  return(
    <header className={
      `${
        header ? `bg-white py-6 shadow-lg`:`bg-transparent py-8`

      } fixed z-50 uppercase lg:gap-x-8 font-tertiary tracking-[3px] text-[15px] items-center  w-full transition-all duration-300`
    }
    >
      <div className="container mx-auto flex flex-col itmes-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0"> 
        {/* logo */}
        <a href="/">
          {header ? (
            <img className="w-[160px]" alt="logo" src="PretyHomes" />
          ):(
            <img className="w-[160px]" alt="logo" src="PretyHomes" />
          )}
        </a>
        {/* nav */}
        <nav className={`${header ?'text-primary': 'text-white'} flex gap-x-4 font-tertiary tracking-[3px] text-[15px] items-center uppercase lg:gap-x-8`}>
          <a href="/#" className="hover:text-accent transition">
            Home
          </a>
          <a href="/#" className="hover:text-accent transition">
            Projects
          </a>
          <a href="/#" className="hover:text-accent transition">
            Services
          </a>
          <a href="/#" className="hover:text-accent transition">
            About
          </a>
          <a href="/#" className="hover:text-accent transition">
            Contact
          </a>
        </nav>
      </div>
    </header>
    );
};

export default Header;
