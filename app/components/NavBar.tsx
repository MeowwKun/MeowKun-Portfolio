'use client';

import Image from "next/image";
import logo from "../../public/logo.png";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCreativesOpen, setIsCreativesOpen] = useState(false);
  const [menuLabel, setMenuLabel] = useState("ham-buh-guh");
  const menuRef = useRef<HTMLDivElement | null>(null);
  const closeTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isMenuOpen || !menuRef.current) {
      return;
    }

    const menu = menuRef.current;
    const items = menu.querySelectorAll<HTMLElement>("[data-menu-item]");

    gsap.killTweensOf([menu, items]);
    gsap.fromTo(
      menu,
      { autoAlpha: 0, y: 24 },
      { autoAlpha: 1, y: 0, duration: 0.5, ease: "power3.out" }
    );
    gsap.fromTo(
      items,
      { autoAlpha: 0, y: 18 },
      { autoAlpha: 1, y: 0, duration: 0.5, ease: "power3.out", stagger: 0.06 }
    );
  }, [isMenuOpen]);

  useEffect(() => {
    const toggles = document.querySelectorAll<HTMLElement>("[data-menu-toggle]");
    if (!toggles.length) {
      return;
    }

    const nextLabel = isMenuOpen ? "ham-buh-close" : "ham-buh-guh";
    const tl = gsap.timeline();
    tl.to(toggles, {
      rotation: isMenuOpen ? 14 : -14,
      skewX: isMenuOpen ? 6 : -6,
      scale: 0.96,
      autoAlpha: 0,
      duration: 0.18,
      ease: "power2.in",
      transformOrigin: "50% 50%"
    })
      .add(() => setMenuLabel(nextLabel))
      .to(toggles, {
        rotation: 0,
        skewX: 0,
        scale: 1,
        autoAlpha: 1,
        duration: 0.24,
        ease: "power2.out",
        transformOrigin: "50% 50%"
      });
  }, [isMenuOpen]);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        window.clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const closeMenu = () => {
    if (!menuRef.current) {
      setIsMenuOpen(false);
      return;
    }

    const menu = menuRef.current;
    const items = menu.querySelectorAll<HTMLElement>("[data-menu-item]");

    gsap.killTweensOf([menu, items]);
    gsap.to(items, {
      autoAlpha: 0,
      y: 12,
      duration: 0.3,
      ease: "power2.in",
      stagger: 0.03
    });
    gsap.to(menu, {
      autoAlpha: 0,
      y: 20,
      duration: 0.35,
      ease: "power2.in",
      onComplete: () => setIsMenuOpen(false)
    });

    closeTimeoutRef.current = window.setTimeout(() => {
      setIsMenuOpen(false);
    }, 450);
  };

  return (
    <>
      {/* Navbar */}
    
        
        <div className="w-full sticky top-0 z-40 bg-background/80 backdrop-blur-md flex justify-between items-center mb-8 py-4">
          
        <div className="">
          <Image src={logo} alt="Logo" width={70} height={700} />
        </div>

        <div className="flex space-x-4">
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="text-[#2A4C4E] hover:text-white transition-opacity text-lg font-medium cursor-pointer"
          >
            <span data-menu-toggle>{menuLabel}</span>
          </button>
        </div>
      </div>

      

{/* Full Screen Menu */}

      

      {isMenuOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 bg-[#0B0E16] z-50 flex flex-col items-end justify-center pr-16"
        >
          <div className="absolute top-0 left-0 right-0 p-15 flex items-center justify-between">
            <div>
              <Image src={logo} alt="Logo" width={70} height={700} />
            </div>
            <button
              onClick={closeMenu}
              className="text-[#2A4C4E] text-lg font-medium hover:text-white cursor-pointer transition-opacity"
            >
              <span data-menu-toggle>{menuLabel}</span>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col items-end space-y-8 text-foreground">
            
            <a 
              href="#home" 
              className="text-5xl font-medium hover:text-[#2A4C4E] transition-opacity"
              data-menu-item
              onClick={closeMenu}
            >
              Home
            </a>

            <a 
              href="#projects" 
              className="text-5xl font-medium hover:text-[#2A4C4E] transition-opacity"
              data-menu-item
              onClick={closeMenu}
            >
              Projects
            </a>

            <a 
              href="#about" 
              className="text-5xl font-medium hover:text-[#2A4C4E] transition-opacity"
              data-menu-item
              onClick={closeMenu}
            >
              About
            </a>

            <a 
              href="#contact" 
              className="text-5xl font-medium hover:text-[#2A4C4E] transition-opacity"
              data-menu-item
              onClick={closeMenu}
            >
              Contact
            </a>

            {/* Creatives with Dropdown */}
            <div className="flex flex-col items-end">
              <button
                onClick={() => setIsCreativesOpen(!isCreativesOpen)}
                className="text-5xl font-medium hover:text-[#2A4C4E] transition-opacity flex items-center gap-3"
                data-menu-item
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
                    data-menu-item
                    onClick={closeMenu}
                  >
                    Photography
                  </a>
                  <a 
                    href="#video" 
                    className="text-3xl font-light hover:text-[#2A4C4E] transition-opacity"
                    data-menu-item
                    onClick={closeMenu}
                  >
                    Video
                  </a>
                  <a 
                    href="#art" 
                    className="text-3xl font-light hover:text-[#2A4C4E] transition-opacity"
                    data-menu-item
                    onClick={closeMenu}
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
