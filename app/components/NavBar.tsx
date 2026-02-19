'use client';

import Image from "next/image";
import logo from "../../public/logo.png";
import { useState } from "react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCreativesOpen, setIsCreativesOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
    
        
        <div className="w-full flex justify-between items-center mb-8">
          
        <div className="">
          <Image src={logo} alt="Logo" width={70} height={700} />
        </div>

        <div className="flex space-x-4">
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="text-[#2A4C4E] hover:text-white transition-opacity text-lg font-medium cursor-pointer"
          >
            ham-buh-guh
          </button>
        </div>
      </div>

      

{/* Full Screen Menu */}

      

      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#0B0E16] z-50 flex flex-col items-end justify-center pr-16">
          
          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-8 right-8 text-[#2A4C4E] text-4xl hover:text-white cursor-pointer transition-opacity"
          >
            ×
          </button>

          {/* Navigation Links */}
          <nav className="flex flex-col items-end space-y-8 text-foreground">
            
            <a 
              href="#home" 
              className="text-5xl font-medium hover:text-[#2A4C4E] transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>

            <a 
              href="#projects" 
              className="text-5xl font-medium hover:text-[#2A4C4E] transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>

            <a 
              href="#about" 
              className="text-5xl font-medium hover:text-[#2A4C4E] transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>

            <a 
              href="#contact" 
              className="text-5xl font-medium hover:text-[#2A4C4E] transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>

            {/* Creatives with Dropdown */}
            <div className="flex flex-col items-end">
              <button
                onClick={() => setIsCreativesOpen(!isCreativesOpen)}
                className="text-5xl font-medium hover:text-[#2A4C4E] transition-opacity flex items-center gap-3"
              >
                Creatives
                <span className={`text-3xl transition-transform ${isCreativesOpen ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>

              {/* Dropdown Menu */}
              {isCreativesOpen && (
                <div className="mt-6 flex flex-col items-end space-y-4">
                  <a 
                    href="#photography" 
                    className="text-3xl font-light hover:text-[#2A4C4E] transition-opacity"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Photography
                  </a>
                  <a 
                    href="#video" 
                    className="text-3xl font-light hover:text-[#2A4C4E] transition-opacity"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Video
                  </a>
                  <a 
                    href="#art" 
                    className="text-3xl font-light hover:text-[#2A4C4E] transition-opacity"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Art
                  </a>
                </div>
              )}
            </div>

          </nav>

        </div>
      )}

      

    </>
  );
}
