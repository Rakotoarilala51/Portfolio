"use client";
import { useRef } from "react";
import { MdArrowOutward, MdOutlineMenu } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

export default function Navbar() {
  const sideMenuRef = useRef<HTMLUListElement>(null);
  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };
  return (
    <>
      <nav className="fixed top-0 w-full bg-[rgba(10,10,35,0.9)] backdrop-blur-[10px] z-[1000] px-5 lg:px-8 xl:px-[8%] py-4 border-b border-neon-cyan flex items-center justify-between">
        {/* Logo */}
        <div className="font-orbitron text-[1.5rem] font-black mr-14">
          <span className="glitch" data-text="RAMAITRE">
            RAMAITRE
          </span>
        </div>
        <ul className="hidden md:flex list-none gap-6 lg:gap-8 ">
          {["Home", "About", "Skills", "Projects"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-white no-underline font-medium relative transition-all duration-300 
                  hover:text-neon-cyan hover:drop-shadow-[0_0_10px_#00FFFF]
                  after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px]
                  after:bg-gradient-to-r after:from-neon-pink after:to-neon-cyan after:transition-all after:duration-300
                  hover:after:w-full"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-neon-cyan rounded-xl ml-4"
          >
            {" "}
            Contact Me <MdArrowOutward />
          </a>
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <MdOutlineMenu />
          </button>
        </div>

        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-[1000] h-screen bg-[rgba(10,10,35,0.9)] backdrop-blur-[10px]"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <RxCross1 className="cursor-pointer" />
          </div>
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                 onClick={closeMenu}
                className="text-white no-underline font-medium relative transition-all duration-300 
                  hover:text-neon-cyan hover:drop-shadow-[0_0_10px_#00FFFF]
                  after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px]
                  after:bg-gradient-to-r after:from-neon-pink after:to-neon-cyan after:transition-all after:duration-300
                  hover:after:w-full"
                 
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
