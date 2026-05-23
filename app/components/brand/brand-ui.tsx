"use client";

import type { CSSProperties, ReactNode } from "react";
import { useFadeIn } from "../../hooks/use-fade-in";
export function GrainOverlay() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 opacity-[0.035] mix-blend-overlay"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "128px 128px",
      }}
    />
  );
}

// ─── Section wrapper with fade ───────────────────────────────────────────────
export function FadeSection({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useFadeIn();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.9s ease ${delay}ms, transform 0.9s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ─── Section label ────────────────────────────────────────────────────────────
export function SectionLabel({ n, text }: { n: string; text: string }) {
  return (
    <div className="flex items-center gap-4 mb-16">
      <span className="font-montserrat text-[10px] tracking-[0.45em] text-neutral-500 uppercase font-semibold">{n}</span>
      <div className="h-px flex-1 bg-neutral-800" />
      <span className="font-montserrat text-[10px] tracking-[0.4em] text-neutral-500 uppercase font-semibold">{text}</span>
    </div>
  );
}

// ─── Logo mark (rendered in CSS) ─────────────────────────────────────────────
export function LogoMark({
  meowColor = "#ffffff",
  kunColor = "#2A4C4E",
  size = "lg",
  outline = false,
}: {
  meowColor?: string;
  kunColor?: string;
  size?: "sm" | "md" | "lg" | "xl";
  outline?: boolean;
}) {
  const sizes = { sm: "text-3xl", md: "text-5xl", lg: "text-7xl", xl: "text-9xl" };
  return (
    <div className={`font-montserrat font-black leading-none tracking-[-0.01em] ${sizes[size]} select-none`}>
      <div
        style={{
          color: outline ? "transparent" : meowColor,
          WebkitTextStroke: outline ? `1px ${meowColor}` : "none",
          letterSpacing: "0.08em",
        }}
      >
        MEOW
      </div>
      <div
        style={{
          color: outline ? "transparent" : kunColor,
          WebkitTextStroke: outline ? `1px ${kunColor}` : "none",
          letterSpacing: "0.38em",
          marginLeft: "-0.01em",
        }}
      >
        KUN
      </div>
    </div>
  );
}

// ─── Logo variation card ──────────────────────────────────────────────────────
export function LogoCard({
  bg,
  meow,
  kun,
  label,
  outline = false,
  border = false,
}: {
  bg: string;
  meow: string;
  kun: string;
  label: string;
  outline?: boolean;
  border?: boolean;
}) {
  return (
    <div
      className="group relative overflow-hidden"
      style={{ background: bg, border: border ? "1px solid rgba(255,255,255,0.12)" : "none" }}
    >
      <div className="p-10 flex flex-col items-center justify-center min-h-[200px] transition-transform duration-700 group-hover:scale-[1.02]">
        <LogoMark meowColor={meow} kunColor={kun} size="md" outline={outline} />
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 px-5 py-3 flex items-center justify-between"
        style={{ borderTop: "0.5px solid rgba(128,128,128,0.2)" }}
      >
        <span className="font-montserrat text-[9px] tracking-[0.3em] uppercase font-semibold" style={{ color: meow === "#ffffff" || meow === "#fff" ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)" }}>
          {label}
        </span>

      </div>
    </div>
  );
}

// ─── Color swatch ─────────────────────────────────────────────────────────────
export function ColorSwatch({ hex, name, role, light = false }: { hex: string; name: string; role: string; light?: boolean }) {
  return (
    <div className="group">
      <div
        className="h-32 mb-4 transition-transform duration-500 group-hover:scale-[1.02]"
        style={{ background: hex, border: light ? "0.5px solid rgba(0,0,0,0.08)" : "none" }}
      />
      <div className="font-montserrat text-[10px] tracking-[0.3em] uppercase text-neutral-400 mb-1 font-semibold">{name}</div>
      <div className="font-montserrat text-xs text-neutral-600 font-mono mb-1">{hex}</div>
      <div className="font-montserrat text-[11px] text-neutral-600 font-light">{role}</div>
    </div>
  );
}

// ─── Type specimen ────────────────────────────────────────────────────────────
export function TypeSpecimen({ label, style, text }: { label: string; style: CSSProperties; text: string }) {
  return (
    <div className="py-8 border-b border-neutral-900">
      <div className="font-montserrat text-[9px] tracking-[0.35em] uppercase text-neutral-600 mb-5 font-semibold">{label}</div>
      <div className="font-montserrat text-white" style={style}>{text}</div>
    </div>
  );
}

// ─── Application mockup card ──────────────────────────────────────────────────
export function BusinessCard() {
  return (
    <div className="group relative w-full aspect-[1.75/1] bg-[#0B0E16] overflow-hidden border border-neutral-800 transition-all duration-700 hover:border-neutral-700">
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Logo background watermark */}
      <div className="absolute -bottom-8 -right-4 opacity-[0.06] font-montserrat font-black text-white leading-none select-none" style={{ fontSize: "7rem", letterSpacing: "0.08em" }}>
        MEOW
      </div>
      {/* Content */}
      <div className="absolute inset-0 p-7 flex flex-col justify-between">
        <div>
          <LogoMark size="sm" meowColor="#ffffff" kunColor="#2A4C4E" />
        </div>
        <div>
          <div className="font-montserrat text-[10px] tracking-[0.3em] uppercase text-neutral-400 mb-1 font-semibold">Sujal</div>
          <div className="font-montserrat text-[9px] tracking-[0.2em] uppercase text-neutral-600">Creative Engineer · AI · Cinema · Design</div>
        </div>
      </div>
      <div className="absolute bottom-7 right-7 font-montserrat text-[9px] tracking-[0.2em] text-neutral-600 text-right">
        <div>meowkun.art</div>
      </div>
    </div>
  );
}

export function PosterMockup() {
  return (
    <div className="group relative w-full aspect-[3/4] bg-[#0a0a0a] overflow-hidden border border-neutral-800 transition-all duration-700 hover:border-neutral-700">
      {/* Diagonal accent line */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 300 400" preserveAspectRatio="none">
          <line x1="0" y1="400" x2="300" y2="0" stroke="#2A4C4E" strokeWidth="0.5" opacity="0.3" />
          <line x1="-20" y1="400" x2="280" y2="0" stroke="#2A4C4E" strokeWidth="0.5" opacity="0.15" />
        </svg>
      </div>
      {/* Top bar */}
      <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
        <span className="font-montserrat text-[8px] tracking-[0.4em] uppercase text-neutral-600 font-semibold">Vol. I</span>
        <span className="font-montserrat text-[8px] tracking-[0.4em] uppercase text-neutral-600">2026</span>
      </div>
      {/* Center logo */}
      <div className="absolute inset-0 flex items-center justify-center">
        <LogoMark size="md" meowColor="#ffffff" kunColor="#2A4C4E" />
      </div>
      {/* Bottom text */}
      <div className="absolute bottom-6 left-6 right-6">
        <div className="h-px bg-neutral-800 mb-4" />
        <div className="flex items-end justify-between">
          <div>
            <div className="font-montserrat text-[8px] tracking-[0.3em] uppercase text-neutral-600 font-semibold mb-1">Creative Direction</div>
            <div className="font-montserrat text-[8px] tracking-[0.2em] text-neutral-700">meowkun.art</div>
          </div>
          <div className="font-montserrat text-[8px] tracking-[0.2em] text-neutral-700 text-right">
            AI · Film · Design
          </div>
        </div>
      </div>
    </div>
  );
}

export function FilmSlate() {
  return (
    <div className="group relative w-full aspect-[16/9] bg-[#0B0E16] overflow-hidden border border-neutral-800 transition-all duration-700 hover:border-neutral-700">
      {/* Clapper top */}
      <div className="absolute top-0 left-0 right-0 h-[28%] bg-neutral-900 border-b border-neutral-800">
        {/* Clapper stripes */}
        <div className="h-full flex">
          {[0,1,2,3,4,5,6,7,8,9,10,11].map((i) => (
            <div
              key={i}
              className="flex-1 h-full"
              style={{ background: i % 2 === 0 ? "#0a0a0a" : "#1a1a1a" }}
            />
          ))}
        </div>
      </div>
      {/* Slate content */}
      <div className="absolute inset-0 pt-[30%] px-6 pb-5 flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <div>
            <div className="font-montserrat text-[8px] tracking-[0.3em] uppercase text-neutral-600 mb-1">Production</div>
            <div className="font-montserrat text-white text-sm font-semibold tracking-wider">MEOW KUN STUDIO</div>
          </div>
          <div className="text-right">
            <div className="font-montserrat text-[8px] tracking-[0.3em] uppercase text-neutral-600 mb-1">Scene</div>
            <div className="font-montserrat text-white text-sm font-semibold">001</div>
          </div>
        </div>
        <div className="flex items-end justify-between">
          <div>
            <div className="font-montserrat text-[8px] tracking-[0.3em] uppercase text-neutral-600 mb-1">Director</div>
            <div className="font-montserrat text-white text-xs font-light tracking-wider">Sujal</div>
          </div>
          <LogoMark size="sm" meowColor="#ffffff" kunColor="#2A4C4E" />
        </div>
      </div>
    </div>
  );
}

export function PatternCard() {
  return (
    <div className="group relative w-full aspect-[1.4/1] overflow-hidden border border-neutral-800 transition-all duration-700 hover:border-neutral-700" style={{ background: "#0e0e0e" }}>
      {/* Repeating logo pattern */}
      <div className="absolute inset-0 flex flex-wrap content-start gap-0 opacity-[0.07] select-none overflow-hidden">
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={i} className="font-montserrat font-black text-white leading-none px-3 py-2" style={{ fontSize: "14px", letterSpacing: "0.12em" }}>
            MEOW KUN
          </div>
        ))}
      </div>
      {/* Center card */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="bg-[#0B0E16]/90 backdrop-blur-sm border border-neutral-700/50 p-6 flex flex-col items-center gap-3 transition-transform duration-700 group-hover:scale-[1.03]"
        >
          <LogoMark size="sm" meowColor="#ffffff" kunColor="#2A4C4E" />
          <div className="h-px w-full bg-neutral-800" />
          <div className="font-montserrat text-[8px] tracking-[0.4em] uppercase text-neutral-500 font-semibold">Creative Studio</div>
        </div>
      </div>
    </div>
  );
}

export function SocialCard() {
  return (
    <div className="group relative w-full aspect-square bg-[#0B0E16] overflow-hidden border border-neutral-800 transition-all duration-700 hover:border-neutral-700">
      {/* Background teal accent */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-[0.06]" style={{ background: "#2A4C4E" }} />
      {/* Corner marks */}
      <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-neutral-700" />
      <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-neutral-700" />
      <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-neutral-700" />
      <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-neutral-700" />
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8">
        <div className="font-montserrat text-[8px] tracking-[0.45em] uppercase text-neutral-600 font-semibold">@meowkun</div>
        <LogoMark size="md" meowColor="#ffffff" kunColor="#2A4C4E" />
        <div className="font-montserrat text-[8px] tracking-[0.2em] uppercase text-neutral-700">AI · Cinema · Design</div>
      </div>
    </div>
  );
}

// ─── Don'ts rule card ─────────────────────────────────────────────────────────
export function DontCard({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="border border-neutral-900 p-6 relative">
      <div className="absolute top-3 right-3 w-5 h-5 flex items-center justify-center">
        <svg viewBox="0 0 20 20" className="w-4 h-4 text-red-900" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="10" cy="10" r="8" />
          <line x1="6" y1="6" x2="14" y2="14" />
        </svg>
      </div>
      {children}
      <div className="mt-4 font-montserrat text-[9px] tracking-[0.3em] uppercase text-red-900/60 font-semibold">{label}</div>
    </div>
  );
}
