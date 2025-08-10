"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
export default function Hero() {
  const titleRef = useRef<HTMLSpanElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLSpanElement>(null);
  const myJobs = [
    "Software Engineer student",
    "Full stack developer",
    "AI application developper",
    "Apprentice Data scientist",
  ];
  const typeWriter = (element: HTMLElement, text: string, speed = 100) => {
    let i = 0;
    element.textContent = "";

    const type = () => {
      if (i < text.length) {
        element.textContent = text.substring(0, i + 1);
        i++;
        setTimeout(type, speed);
      }
    };
    type();
  };
  const typeRemover = (element: HTMLElement, speed = 100) => {
    const txt: string = element.textContent ?? "";
    let i = txt.length;
    const erase = () => {
      if (i >= 0) {
        element.textContent = txt.substring(0, i - 1);
        i--;
        setTimeout(erase, speed);
      }
    };
    erase();
  };
  const loopJobs = (index: number) => {
    const typingSpeed = 100;
    const erasingSpeed = 100;

    typeWriter(subtitleRef.current, myJobs[index], typingSpeed);
    setTimeout(() => {
      typeRemover(subtitleRef.current, erasingSpeed);
      setTimeout(() => {
        loopJobs((index + 1) % myJobs.length);
      }, myJobs[index].length * erasingSpeed + 500);
    }, myJobs[index].length * typingSpeed + 1000);
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (titleRef.current) {
      const originalText = titleRef.current.getAttribute("data-text") || "";
      typeWriter(titleRef.current, originalText, 150);
    }
    loopJobs(0);
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      if (backgroundRef.current) {
        backgroundRef.current.style.transform = `translateY(${
          scrolled * 0.5
        }px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center relative bg-gradient-hero overflow-hidden"
    >
      {/* Background */}
      <div
        ref={backgroundRef}
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-80 z-[1]"
        style={{ backgroundImage: "url('/assets/images/hero_background.png')" }}
      />

      {/* Contenu centré verticalement */}
      <div className="flex flex-col items-center text-center z-[2] relative">
        {/* Image centrée */}
        <div className="mb-8">
          <Image
            src="/assets/images/developer_avatar.png"
            alt="Developer Avatar"
            width={200}
            height={200}
            className="rounded-full border-[3px] border-neon-cyan shadow-avatar animate-float"
          />
        </div>

        {/* Titre avec largeur fixe */}
        <h1 className="font-orbitron text-5xl font-black mb-4">
          <span
            ref={titleRef}
            className="glitch-main inline-block"
            style={{ minWidth: "32ch", display: "inline-block" }}
            data-text="Hello, I am Aina"
          >
            Hello, I am Aina
          </span>
        </h1>

        {/* Sous-titres */}
        <span
          ref={subtitleRef}
          className="text-2xl text-neon-cyan mb-2 drop-shadow-[0_0_10px_#00FFFF] h-6"
        ></span>

        <p className="text-xl text-white mb-8 opacity-80">
          Coding the Future with Retro Style
        </p>

        {/* Boutons */}
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="/lm-aina.docx"
            download
            className="inline-block py-3 px-8 bg-gradient-btn text-white no-underline border-none rounded-md 
              font-orbitron font-bold uppercase transition-all duration-300 shadow-neon-pink cursor-pointer bg-pink-500
              hover:-translate-y-0.5 hover:shadow-neon-pink-hover hover:drop-shadow-[0_0_10px_#FFFFFF]"
          >
            Download my CV
          </a>
          <a
            href="#contact"
            className="inline-block py-3 px-8 bg-transparent text-neon-cyan border-2 border-neon-cyan rounded-md font-orbitron 
              font-bold uppercase transition-all duration-300 shadow-neon-cyan
              hover:bg-neon-cyan hover:text-black hover:-translate-y-0.5 hover:shadow-neon-cyan-hover"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Floating Shapes */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-[1]">
        <div
          className="absolute top-[20%] left-[10%] animate-float-shapes"
          style={{
            width: 0,
            height: 0,
            borderLeft: "25px solid transparent",
            borderRight: "25px solid transparent",
            borderBottom: "43px solid #FF0080",
            filter: "drop-shadow(0 0 10px #FF0080)",
          }}
        />
        <div
          className="absolute top-[60%] right-[15%] w-[50px] h-[50px] border-[3px] border-neon-cyan rounded-full animate-float-shapes"
          style={{ filter: "drop-shadow(0 0 10px #00FFFF)" }}
        />
        <div
          className="absolute top-[30%] right-[20%] w-[40px] h-[40px] bg-magenta rotate-45 animate-float-shapes"
          style={{ filter: "drop-shadow(0 0 10px #FF00FF)" }}
        />
      </div>
    </section>
  );
}
