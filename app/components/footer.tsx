"use client";

import { useRef } from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import gsap from "gsap";
import { useGsapScrollTrigger } from "../hooks/use-gsap-scroll-trigger";

const footerLinks = [
  { label: "Video",       href: "#video",       col: "1 / span 7", row: "1 / span 1" },
  { label: "Photography", href: "#photography", col: "8 / span 5", row: "1 / span 1" },
  { label: "GitHub",      href: "#github",      col: "1 / span 4", row: "2 / span 1" },
  { label: "Art",         href: "#art",          col: "5 / span 4", row: "2 / span 2" },
  { label: "Instagram",   href: "#instagram",   col: "1 / span 4", row: "3 / span 1" },
  { label: "LinkedIn",    href: "#linkedin",    col: "9 / span 4", row: "2 / span 2" },
];

export default function Footer() {
  const footerRef = useRef<HTMLDivElement | null>(null);

  useGsapScrollTrigger(footerRef, (element) =>
    gsap.from(element, {
      yPercent: 30,
      opacity: 0,
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        end: "bottom bottom",
        scrub: 1
      }
    })
  );

  return (
    <footer
      style={{
        width: "100%",
        padding: 0,
        marginTop: "auto",
        alignSelf: "stretch",
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif"
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          borderRadius: "2rem",
          background: "linear-gradient(to bottom, #0B0E16 0%, #2A4C4E 100%)",
          padding: "2rem",
          overflow: "hidden",
  		  minHeight: "100vh",
        }}
        ref={footerRef}
      >
        {/* MEOW KUN watermark */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
            zIndex: 1,
          }}
        >
          <div
            style={{
              textAlign: "center",
              color: "rgba(0, 0, 0, 0.6)",
              fontWeight: 900,
              letterSpacing: "0.55em",
              fontSize: "clamp(2rem, 5vw, 3.8rem)",
              lineHeight: 1.2,
              userSelect: "none",
              textTransform: "uppercase",
            }}
            data-parallax="22"
          >
            MEOW
            <br />
            KUN
          </div>
        </div>

        <div
          style={{
            position: "relative",
            zIndex: 2,
            overflow: "hidden",
            marginBottom: "1.5rem",
            color: "rgba(255, 255, 255, 0.65)",
            fontSize: "0.85rem",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            whiteSpace: "nowrap"
          }}
          data-marquee
        >
          <div
            style={{
              display: "inline-flex",
              gap: "3rem",
              paddingLeft: "1.5rem"
            }}
            data-marquee-track
          >
            <span>MeowKun • Creative Engineer • Visual Systems</span>
            <span aria-hidden="true">MeowKun • Creative Engineer • Visual Systems</span>
            <span aria-hidden="true">MeowKun • Creative Engineer • Visual Systems</span>
          </div>
        </div>

        {/* Grid */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gridTemplateRows: "300px 190px 190px",
            gap: "0.75rem",
          }}
          data-stagger
        >
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="bg-white/70 hover:bg-white/90 transition-colors"
              data-stagger-item
              style={{
                gridColumn: link.col,
                gridRow: link.row,
                borderRadius: "1.4rem",
                padding: "1.5rem 1.5rem 1.1rem",
                color: "rgba(0,0,0,0.86)",
                textDecoration: "none",
                display: "flex",
                alignItems: "flex-end",
                boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 10px 28px rgba(0,0,0,0.2)",
              }}
            >
              <span
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 900,
                  letterSpacing: "0.32em",
                  textTransform: "uppercase",
                  color: "#000000",
                }}
              >
                {link.label}
              </span>
            </a>
          ))}
        </div>

        <div
          style={{
            position: "relative",
            zIndex: 2,
            marginTop: "2rem",
            display: "grid",
            gridTemplateColumns: "120px 1fr auto",
            alignItems: "flex-start",
            color: "rgba(255, 255, 255, 0.85)",
            fontSize: "0.85rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          <div style={{ marginTop: "0.75rem", marginLeft: "0.5rem" }}>
            <Image src={logo} alt="MeowKun" width={96} height={96} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginLeft: "2.5rem" }}>
            <a
              href="mailto:sujal75.n@gmail.com"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              sujal75.n@gmail.com
            </a>
            <a
              href="tel:+97517313524"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              +975-17313524
            </a>
            <span>Thimphu, Bhutan</span>
          </div>
          <span style={{ justifySelf: "end" }}>© MeowKun</span>
        </div>
      </div>
    </footer>
  );
}