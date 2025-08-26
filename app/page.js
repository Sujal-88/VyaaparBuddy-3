"use client"
import Image from "next/image";
import { useRef,useEffect } from "react";
import React from "react";

export default function Home() {
  const containerRef = useRef(null);

  // This useEffect hook sets up the mouse move event listener.
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;

      const { clientX, clientY } = e;
      const { offsetWidth, offsetHeight } = containerRef.current;

      // Calculate mouse position relative to the center of the container
      const xPos = (clientX / offsetWidth) - 0.5;
      const yPos = (clientY / offsetHeight) - 0.5;

      // Select all images and apply a transform based on their data-speed attribute
      const images = containerRef.current.querySelectorAll('.parallax-img');
      images.forEach(img => {
        const speed = img.getAttribute('data-speed');
        const x = xPos * speed;
        const y = yPos * speed;
        img.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup function to remove the event listener when the component unmounts.
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <main ref={containerRef} className="bg-slate-50 min-h-screen flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* --- Left Side: Text Content --- */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
              Vyapaar<span className="text-orange-500">Buddy</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-lg mx-auto md:mx-0">
              Welcome to Vyaapar Buddy, your trusted partner in navigating the digital marketplace. We craft bespoke strategies that drive growth, engagement, and success for businesses of all sizes.
            </p>
            <div className="mt-8 flex justify-center md:justify-start gap-4">
              <a href="services" className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-orange-600 transition-all duration-300">
                Our Services
              </a>
              <a href="contact" className="bg-white text-slate-700 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-slate-100 ring-1 ring-slate-200 transition-all duration-300">
                Get in Touch
              </a>
            </div>
          </div>

          {/* --- Right Side: Parallax Images --- */}
          <div className="relative h-96 hidden md:block">
            <img
              src="/assets/grow.png"
              alt="Business Growth Chart"
              className="parallax-img absolute top-0 left-10 w-60 rounded-xl shadow-2xl transition-transform duration-300 ease-out"
              data-speed="-40" // Moves more and in the opposite direction
            />
            <img
              src="/assets/strategy.png"
              alt="Strategy Meeting"
              className="parallax-img absolute bottom-10 right-5 w-52 h-52 object-cover rounded-full shadow-2xl transition-transform duration-300 ease-out"
              data-speed="20" // Moves less and in the same direction
            />
            <img
              src="/assets/success.png"
              alt="Successful Team"
              className="parallax-img absolute top-1/4 left-1/2 -translate-x-1/2 w-48 rounded-xl shadow-2xl transition-transform duration-300 ease-out"
              data-speed="-15" // Moves subtly
            />
          </div>
        </div>
      </div>
    </main>
  );
}
