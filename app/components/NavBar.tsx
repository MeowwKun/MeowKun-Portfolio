'use client';

import Image from "next/image";
import logo from "../../public/logo.png";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCreativesOpen, setIsCreativesOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);
  const closeTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isMenuOpen || !menuRef.current) return;

    const menu = menuRef.current;
    const items = menu.querySelectorAll<HTMLElement>("[data-menu-item]");

    gsap.killTweensOf([menu, items]);

    gsap.fromTo(
      menu,
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 0.4, ease: "power3.out" }
    );

    gsap.fromTo(
      items,
      { autoAlpha: 0, y: 22 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.55,
        ease: "power3.out",
        stagger: 0.07,
        delay: 0.1,
      }
    );
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
      duration: 0.25,
      ease: "power2.in",
      stagger: 0.03,
    });

    gsap.to(menu, {
      autoAlpha: 0,
      duration: 0.35,
      ease: "power2.in",
      onComplete: () => setIsMenuOpen(false),
    });

    closeTimeoutRef.current = window.setTimeout(() => {
      setIsMenuOpen(false);
    }, 450);
  };

  const HamburgerBtn = ({
    onClick,
    isClose,
  }: {
    onClick: () => void;
    isClose?: boolean;
  }) => (
    <button
      onClick={onClick}
      className="flex flex-col items-end gap-[5px] group cursor-pointer"
      aria-label={isClose ? "Close menu" : "Open menu"}
    >
      {["ham", "buh", isClose ? "close" : "guh"].map((text) => (
        <span
          key={text}
          className="block w-[52px] text-right text-[9px] uppercase tracking-[0.28em] text-[#2A4C4E] font-black leading-none transition-colors group-hover:text-white select-none"
        >
          {text}
        </span>
      ))}
    </button>
  );

  return (
    <>
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-[60] px-6 py-4">
        <div className="flex justify-between items-center">
          <Image src={logo} alt="Logo" width={70} height={700} />

          <HamburgerBtn onClick={() => setIsMenuOpen(true)} />
        </div>
      </div>

      {/* Spacer */}
      <div className="h-[110px]" />

      {/* Fullscreen Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 z-50 flex flex-col overflow-hidden"
          style={{ backgroundColor: "#0B0E16" }}
        >
          {/* Top bar */}
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <Image src={logo} alt="Logo" width={70} height={700} />

              <HamburgerBtn onClick={closeMenu} isClose />
            </div>
          </div>

          {/* Divider */}
          <div className="mx-10 h-px bg-[#2A4C4E]/30" />

          {/* Main Layout */}
          <div className="flex-1 flex px-10 py-10 min-h-0">
            {/* Left rail */}
            <div
              className="w-[60px] flex flex-col justify-between mr-10"
              data-menu-item
            >
              <span
                className="text-[10px] uppercase tracking-[0.25em] text-[#2A4C4E]/60"
                style={{ writingMode: "vertical-rl" }}
              >
                nav
              </span>

              <span className="text-[10px] uppercase tracking-[0.25em] text-[#2A4C4E]/40">
                ©{new Date().getFullYear()}
              </span>
            </div>

            {/* Navigation */}
            <nav
              className="flex flex-col justify-center w-full max-w-3xl"
              data-menu-item
            >
              {[
                { href: "/", label: "Home", num: "01" },
                { href: "/#projects", label: "Projects", num: "02" },
                { href: "/#about", label: "About", num: "03" },
                { href: "/#journey", label: "Journey", num: "04" },
                {
                  href: "/#creative-tech",
                  label: "Creative Tech",
                  num: "05",
                },
                {
                  href: "/#exploring",
                  label: "Exploring",
                  num: "06",
                },
              ].map(({ href, label, num }) => (
                <a
                  key={label}
                  href={href}
                  onClick={closeMenu}
                  data-menu-item
                  className="group flex items-baseline gap-5 py-3 border-b border-[#2A4C4E]/20 hover:border-[#2A4C4E] transition-all duration-300"
                >
                  <span className="text-[10px] text-[#2A4C4E]/50 font-mono w-8 shrink-0 group-hover:text-[#2A4C4E] transition-colors">
                    {num}
                  </span>

                  <span className="text-5xl font-medium text-white/90 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 leading-tight">
                    {label}
                  </span>
                </a>
              ))}

              {/* Creatives */}
              <div data-menu-item>
                <button
                  onClick={() => setIsCreativesOpen(!isCreativesOpen)}
                  className="group flex items-baseline gap-5 py-3 border-b border-[#2A4C4E]/20 hover:border-[#2A4C4E] transition-all duration-300 w-full text-left"
                >
                  <span className="text-[10px] text-[#2A4C4E]/50 font-mono w-8 shrink-0 group-hover:text-[#2A4C4E] transition-colors">
                    07
                  </span>

                  <span className="text-5xl font-medium text-white/90 group-hover:text-white transition-colors leading-tight flex-1">
                    Creatives
                  </span>

                  <span
                    className={`text-[#2A4C4E] text-lg transition-transform duration-300 ${
                      isCreativesOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {isCreativesOpen && (
                  <div className="pl-14 mt-4 flex flex-col gap-2">
                    {[
                      { href: "/photography", label: "Photography" },
                      { href: "/video", label: "Video" },
                      { href: "/art", label: "Art" },
                    ].map(({ href, label }) => (
                      <a
                        key={label}
                        href={href}
                        onClick={closeMenu}
                        className="text-2xl font-light text-white/50 hover:text-white hover:translate-x-1 transition-all duration-200 py-1"
                      >
                        — {label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              <p className="mt-16 text-[11px] uppercase tracking-[0.3em] text-[#2A4C4E]/40">
                built with intention
              </p>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}