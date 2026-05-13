"use client";

import { useEffect, useRef, useState } from "react";

// ─── Grain overlay ───────────────────────────────────────────────────────────
function GrainOverlay() {
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

// ─── Fade-in on scroll hook ───────────────────────────────────────────────────
function useFadeIn(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

// ─── Section wrapper with fade ───────────────────────────────────────────────
function FadeSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
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
function SectionLabel({ n, text }: { n: string; text: string }) {
  return (
    <div className="flex items-center gap-4 mb-16">
      <span className="font-montserrat text-[10px] tracking-[0.45em] text-neutral-500 uppercase font-semibold">{n}</span>
      <div className="h-px flex-1 bg-neutral-800" />
      <span className="font-montserrat text-[10px] tracking-[0.4em] text-neutral-500 uppercase font-semibold">{text}</span>
    </div>
  );
}

// ─── Logo mark (rendered in CSS) ─────────────────────────────────────────────
function LogoMark({
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
function LogoCard({
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
function ColorSwatch({ hex, name, role, light = false }: { hex: string; name: string; role: string; light?: boolean }) {
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
function TypeSpecimen({ label, style, text }: { label: string; style: React.CSSProperties; text: string }) {
  return (
    <div className="py-8 border-b border-neutral-900">
      <div className="font-montserrat text-[9px] tracking-[0.35em] uppercase text-neutral-600 mb-5 font-semibold">{label}</div>
      <div className="font-montserrat text-white" style={style}>{text}</div>
    </div>
  );
}

// ─── Application mockup card ──────────────────────────────────────────────────
function BusinessCard() {
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

function PosterMockup() {
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

function FilmSlate() {
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

function PatternCard() {
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

function SocialCard() {
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
function DontCard({ label, children }: { label: string; children: React.ReactNode }) {
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

// ─── Main component ───────────────────────────────────────────────────────────
export default function MeowKunBrandBook() {
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => { clearTimeout(t); window.removeEventListener("scroll", handleScroll); };
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0E16] text-white font-montserrat overflow-x-hidden">
      <GrainOverlay />

      {/* ── NAV ────────────────────────────────────────────────────────────── */}
      <nav
        className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-8 py-5 transition-all duration-500"
        style={{
          background: scrollY > 60 ? "rgba(11,14,22,0.92)" : "transparent",
          backdropFilter: scrollY > 60 ? "blur(12px)" : "none",
          borderBottom: scrollY > 60 ? "0.5px solid rgba(255,255,255,0.06)" : "none",
        }}
      >
        <div className="font-montserrat text-[10px] tracking-[0.45em] uppercase text-neutral-500 font-semibold">
          Brand Book — 2026
        </div>
      </nav>

      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Ambient glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(42,76,78,0.12) 0%, transparent 70%)" }}
        />
        {/* Horizontal rule */}
        <div
          className="absolute top-1/2 left-0 right-0 h-px pointer-events-none"
          style={{ background: "linear-gradient(90deg, transparent, rgba(42,76,78,0.3) 30%, rgba(42,76,78,0.3) 70%, transparent)", opacity: 0.4 }}
        />

        <div
          className="relative z-10 flex flex-col items-center text-center px-6"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 1.2s ease, transform 1.2s ease",
          }}
        >
          {/* Eyebrow */}
          <div className="font-montserrat text-[10px] tracking-[0.6em] uppercase text-neutral-600 font-semibold mb-16">
            Personal Brand Identity System
          </div>

          {/* Hero logo */}
          <div
            className="mb-16"
            style={{
              transform: `translateY(${scrollY * 0.15}px)`,
              transition: "transform 0.1s linear",
            }}
          >
            <div
              className="font-montserrat font-black leading-none text-white select-none"
              style={{ fontSize: "clamp(5rem, 18vw, 14rem)", letterSpacing: "0.08em" }}
            >
              MEOW
            </div>
            <div
              className="font-montserrat font-black leading-none select-none"
              style={{ fontSize: "clamp(5rem, 18vw, 14rem)", letterSpacing: "0.42em", color: "#2A4C4E", marginLeft: "0.02em" }}
            >
              KUN
            </div>
          </div>

          {/* Tagline */}
          <div
            className="max-w-xl"
            style={{
              opacity: loaded ? 1 : 0,
              transition: "opacity 1.4s ease 0.4s",
            }}
          >
            <p className="font-montserrat font-light text-neutral-500 text-sm tracking-[0.15em] leading-loose uppercase">
              Creative Engineer · AI · Cinema · Art · Animation · Design
            </p>
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          style={{ opacity: loaded ? 0.4 : 0, transition: "opacity 1s ease 1s" }}
        >
          <div className="font-montserrat text-[8px] tracking-[0.4em] uppercase text-neutral-600">Scroll</div>
          <div className="w-px h-12 bg-gradient-to-b from-neutral-600 to-transparent" />
        </div>
      </section>

      {/* ── WHO AM I ────────────────────────────────────────────────────────── */}
      <section className="px-8 md:px-20 py-32 border-t border-neutral-900">
        <FadeSection>
          <SectionLabel n="01" text="Who Am I" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <h2
                className="font-montserrat font-black text-white leading-none mb-8"
                style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", letterSpacing: "-0.01em" }}
              >
                Sujal.<br />
                <span style={{ color: "#2A4C4E" }}>Artist.</span><br />
                Builder.<br />
                Filmmaker.
              </h2>
            </div>
            <div className="space-y-6 pt-2">
              <p className="font-montserrat font-light text-neutral-400 text-sm leading-loose tracking-wide">
                I'm Sujal Nepal — a Creative Engineer living at the crossroads of artificial intelligence, cinema, art, and design. I paint landscapes in acrylic and pixels. I build software that feels like something. I film. I animate. What connects it all is a single obsession: making technology feel human.
              </p>
              <p className="font-montserrat font-light text-neutral-600 text-sm leading-loose tracking-wide">
                My work spans full-stack engineering, AI experimentation, cinematography, digital and acrylic painting, and animation. I'm drawn to the horizon — literally in my landscapes, and figuratively in every discipline I push into.
              </p>
              <div className="pt-4 grid grid-cols-3 gap-4">
                {[
                  { label: "Passion", val: "Painting landscapes — in acrylic, in pixels, in code" },
                  { label: "Strength", val: "Bridging physical craft and digital engineering" },
                  { label: "Edge", val: "An artist who builds the tools artists use" },
                ].map((s) => (
                  <div key={s.label} className="border border-neutral-900 p-4">
                    <div className="font-montserrat text-[9px] tracking-[0.3em] uppercase font-semibold mb-2" style={{ color: "#2A4C4E" }}>{s.label}</div>
                    <div className="font-montserrat font-light text-neutral-600 text-xs leading-loose">{s.val}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeSection>
      </section>

      {/* ── VISION & MISSION ────────────────────────────────────────────────── */}
      <section className="px-8 md:px-20 py-32 border-t border-neutral-900">
        <FadeSection>
          <SectionLabel n="02" text="Vision & Mission" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-neutral-800 p-10 relative overflow-hidden group hover:border-neutral-700 transition-colors duration-500">
              <div className="absolute top-0 left-0 w-1 h-full" style={{ background: "#2A4C4E" }} />
              <div className="font-montserrat text-[9px] tracking-[0.5em] uppercase text-neutral-600 font-semibold mb-6">Vision</div>
              <p className="font-montserrat font-black text-white leading-tight mb-6" style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", letterSpacing: "-0.01em" }}>
                A world where technology doesn't replace human expression — it amplifies it.
              </p>
              <p className="font-montserrat font-light text-neutral-600 text-sm leading-loose">
                To become a leading voice at the intersection of AI and creative industries — proving that the most powerful tools are built by people who also understand beauty, narrative, and feeling.
              </p>
            </div>
            <div className="border border-neutral-800 p-10 relative overflow-hidden group hover:border-neutral-700 transition-colors duration-500">
              <div className="absolute top-0 left-0 w-1 h-full bg-neutral-700" />
              <div className="font-montserrat text-[9px] tracking-[0.5em] uppercase text-neutral-600 font-semibold mb-6">Mission</div>
              <p className="font-montserrat font-black text-white leading-tight mb-6" style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", letterSpacing: "-0.01em" }}>
                To build, paint, film, animate, and design at the edges of what technology and art can become together.
              </p>
              <p className="font-montserrat font-light text-neutral-600 text-sm leading-loose">
                Through open-source tools, cinematic projects, and published thinking, I create work that helps others see the creative potential in emerging technology — and the engineering rigour behind great art.
              </p>
            </div>
          </div>
        </FadeSection>
      </section>

      {/* ── BRAND STORY ─────────────────────────────────────────────────────── */}
      <section className="px-8 md:px-20 py-32 border-t border-neutral-900">
        <FadeSection>
          <SectionLabel n="03" text="Brand Story" />
          <div className="max-w-3xl">
            <h3 className="font-montserrat font-black text-white mb-12 leading-tight" style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", letterSpacing: "-0.01em" }}>
              The Frame Before<br /><span style={{ color: "#2A4C4E" }}>the Cut.</span>
            </h3>
            <div className="space-y-0">
              {[
                {
                  period: "The Beginning",
                  body: "It started with three separate loves: the blank canvas, the blank terminal, and the blank frame. Acrylic on paper — slow, committed, impossible to undo. Code — precise, logical, satisfying. Cinema — atmospheric, emotional, alive. For a long time these lived in separate rooms.",
                },
                {
                  period: "The Collision",
                  body: "Then came AI — and suddenly the wall between the rooms dissolved. Generative models, creative pipelines, tools that could render mood and generate imagery from language. Engineering and art weren't opposites anymore. They were the same discipline, seen from different angles.",
                },
                {
                  period: "Meow Kun",
                  body: "The brand became the entity that holds it all. Meow Kun is the creative studio — the painter, the filmmaker, the animator, the engineer. Sujal is the person behind it: curious, precise, warm. The landscapes on canvas and the landscapes rendered in code are the same impulse: find the horizon, paint toward it.",
                },
                {
                  period: "Now",
                  body: "The work continues to evolve — each painting a new study in light, each project a new scene, each animation a new language being learned. The through-line is always the same: make technology feel like it has a soul.",
                },
              ].map((ch, i) => (
                <div key={ch.period} className="flex gap-8 py-8 border-b border-neutral-900 group">
                  <div className="flex flex-col items-center">
                    <div className="w-2 h-2 rounded-full border border-neutral-700 mt-1 group-hover:border-neutral-500 transition-colors duration-500" style={{ minWidth: "8px" }} />
                    {i < 3 && <div className="w-px flex-1 bg-neutral-900 mt-2" />}
                  </div>
                  <div className="pb-2">
                    <div className="font-montserrat text-[9px] tracking-[0.4em] uppercase font-semibold mb-3" style={{ color: "#2A4C4E" }}>{ch.period}</div>
                    <p className="font-montserrat font-light text-neutral-500 text-sm leading-loose">{ch.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeSection>
      </section>

      {/* ── CORE VALUES ─────────────────────────────────────────────────────── */}
      <section className="px-8 md:px-20 py-32 border-t border-neutral-900">
        <FadeSection>
          <SectionLabel n="04" text="Core Values" />
          <p className="font-montserrat font-light text-neutral-600 text-sm leading-loose tracking-wide max-w-lg mb-16">
            Six principles that shape every decision — from how a function is named to how a frame is composed.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { n: "01", title: "Intentionality", body: "Nothing is accidental. Every design choice, every line of code, every cut in the edit carries deliberate meaning. Ask why before asking how." },
              { n: "02", title: "Craft Over Speed", body: "Acrylic paint cannot be undone. That physical truth shapes everything — every line of code, every cut in the edit. Quality is respect: for the audience, for the collaborator, for the work itself." },
              { n: "03", title: "Curiosity Without Borders", body: "The best ideas live at the edges of disciplines. Stay perpetually in-between: too technical for the artists, too artistic for the engineers." },
              { n: "04", title: "Warmth in Precision", body: "Rigour without empathy is cold. The most precise systems should still feel human. Technical excellence is a form of care." },
              { n: "05", title: "Restraint as Strength", body: "A landscape is mostly sky and silence. What you leave out — the unseen horizon, the empty canvas — defines the work as much as what you put in. Negative space is an active decision." },
              { n: "06", title: "Open by Default", body: "Share the process. Publish the thinking. Build in public. Generosity with knowledge compounds." },
            ].map((v) => (
              <div key={v.n} className="border border-neutral-900 p-7 group hover:border-neutral-800 transition-all duration-500 hover:bg-neutral-900/20">
                <div className="font-montserrat font-black text-neutral-800 text-3xl mb-4 group-hover:text-neutral-700 transition-colors duration-500">{v.n}</div>
                <div className="font-montserrat font-semibold text-white text-sm tracking-[0.12em] uppercase mb-3">{v.title}</div>
                <p className="font-montserrat font-light text-neutral-600 text-sm leading-loose">{v.body}</p>
              </div>
            ))}
          </div>
        </FadeSection>
      </section>

      {/* ── CONTENT STRATEGY + CONTACT ──────────────────────────────────────── */}
      <section className="px-8 md:px-20 py-32 border-t border-neutral-900">
        <FadeSection>
          <SectionLabel n="05" text="Content Strategy & Networking" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
            <div>
              <div className="font-montserrat text-[9px] tracking-[0.4em] uppercase font-semibold mb-6" style={{ color: "#2A4C4E" }}>Target Audience</div>
              <div className="space-y-4">
                {[
                  { who: "Creative Technologists", desc: "Builders who move between disciplines. Engineers who design. Designers who code." },
                  { who: "AI & Design Community", desc: "Practitioners exploring the creative frontier of generative tools and visual AI." },
                  { who: "Art & Animation Community", desc: "Digital and traditional artists, animators, and illustrators navigating the evolving creative landscape." },
                  { who: "Filmmakers & Cinematographers", desc: "Visual storytellers who are curious about technology as a creative partner." },
                  { who: "Studio & Agency Creative Leads", desc: "Decision-makers looking for collaborators who understand both craft and code." },
                ].map((a) => (
                  <div key={a.who} className="flex gap-4 py-4 border-b border-neutral-900">
                    <div className="w-1 h-full" style={{ background: "#2A4C4E", minWidth: "2px", alignSelf: "stretch" }} />
                    <div>
                      <div className="font-montserrat font-semibold text-white text-xs tracking-[0.1em] uppercase mb-1">{a.who}</div>
                      <div className="font-montserrat font-light text-neutral-600 text-sm leading-loose">{a.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="font-montserrat text-[9px] tracking-[0.4em] uppercase font-semibold mb-6" style={{ color: "#2A4C4E" }}>Content Pillars</div>
              <div className="space-y-3 mb-10">
                {[
                  { platform: "Portfolio / meowkun.art", type: "Primary canvas. Full case studies, project deep-dives, brand expression." },
                  { platform: "LinkedIn (Sujal Nepal)", type: "Thought leadership essays. Lessons from building at the AI-creative intersection." },
                  { platform: "GitHub (MeowKun)", type: "Open source tools, creative engineering experiments, public repositories." },
                  { platform: "Instagram / Socials", type: "Art portfolio. Acrylic landscapes. Digital paintings. Animation experiments. Film stills. AI outputs. Process." },
                ].map((p) => (
                  <div key={p.platform} className="flex gap-4 items-start group py-3 border-b border-neutral-900">
                    <div className="font-montserrat font-semibold text-xs tracking-[0.1em] uppercase text-neutral-500 min-w-[140px] pt-0.5 group-hover:text-neutral-400 transition-colors duration-300">{p.platform}</div>
                    <div className="font-montserrat font-light text-neutral-700 text-sm leading-loose">{p.type}</div>
                  </div>
                ))}
              </div>
              <div className="font-montserrat text-[9px] tracking-[0.4em] uppercase font-semibold mb-5" style={{ color: "#2A4C4E" }}>Contact & Networking</div>
              <div className="border border-neutral-900 p-6 space-y-4">
                {[
                  { label: "Web", val: "meowkun.art" },
                  { label: "Email", val: "via sujal75.n@gmail.com" },
                  { label: "Handle", val: "@meowkun" },
                  { label: "Network", val: "LinkedIn — Sujal Nepal" },
                ].map((c) => (
                  <div key={c.label} className="flex items-center gap-6">
                    <div className="font-montserrat text-[9px] tracking-[0.3em] uppercase text-neutral-600 font-semibold min-w-[60px]">{c.label}</div>
                    <div className="h-px flex-1 bg-neutral-900" />
                    <div className="font-montserrat font-light text-neutral-400 text-sm">{c.val}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeSection>
      </section>

      {/* ── BRAND PHILOSOPHY ────────────────────────────────────────────────── */}
      <section className="px-8 md:px-20 py-32 border-t border-neutral-900">
        <FadeSection>
          <SectionLabel n="06" text="Brand Philosophy" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <h2
                className="font-montserrat font-black text-white leading-none mb-8"
                style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.01em" }}
              >
                Technology<br />
                <span style={{ color: "#2A4C4E" }}>with</span><br />
                Soul.
              </h2>
              <p className="font-montserrat font-light text-neutral-500 text-sm leading-loose tracking-wide max-w-xs">
                Every frame, every function, every pixel carries intention. Meow Kun exists at the rare intersection where engineering becomes art — and art becomes immersive experience.
              </p>
            </div>
            <div className="space-y-8 pt-2">
              {[
                { n: "I", title: "Cinematic First", body: "Design and build like a director — with intention, atmosphere, and a clear point of view. Every output tells a story." },
                { n: "II", title: "Precision Over Noise", body: "Restraint is the highest form of craft. Wide tracking, deliberate spacing, silence between the elements." },
                { n: "III", title: "Human at the Core", body: "Technology in service of stories. AI, cinema, and code are all tools for connection — not performance." },
              ].map((p) => (
                <div key={p.n} className="flex gap-6 group">
                  <div className="font-montserrat font-black text-neutral-800 text-2xl pt-1 group-hover:text-neutral-700 transition-colors duration-500" style={{ minWidth: "2rem" }}>{p.n}</div>
                  <div>
                    <div className="font-montserrat font-semibold text-white text-sm tracking-[0.15em] uppercase mb-2">{p.title}</div>
                    <div className="font-montserrat font-light text-neutral-600 text-sm leading-loose">{p.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeSection>
      </section>

      {/* ── LOGO SYSTEM ─────────────────────────────────────────────────────── */}
      <section className="px-8 md:px-20 py-32 border-t border-neutral-900">
        <FadeSection>
          <SectionLabel n="07" text="Logo System" />

          {/* Primary logo explanation */}
          <div className="mb-16">
            <p className="font-montserrat font-light text-neutral-600 text-sm leading-loose tracking-wide max-w-lg mb-12">
              The wordmark uses a deliberate typographic tension: MEOW carries tighter tracking for density and weight, while KUN breathes wider — edge-to-edge alignment creates balance. Both lines optically match in total width.
            </p>

            {/* Clear space diagram */}
            <div className="border border-neutral-900 p-12 inline-block relative">
              <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-neutral-800" />
              <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-neutral-800" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-neutral-800" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-neutral-800" />
              <LogoMark size="lg" meowColor="#ffffff" kunColor="#2A4C4E" />
            </div>
          </div>

          {/* Logo grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            <LogoCard bg="#0B0E16" meow="#ffffff" kun="#2A4C4E" label="Primary Dark" border />
            <LogoCard bg="#ffffff" meow="#0B0E16" kun="#2A4C4E" label="Primary Light" />
            <LogoCard bg="#0B0E16" meow="#ffffff" kun="#ffffff" label="Mono White" border />
            <LogoCard bg="#ffffff" meow="#0B0E16" kun="#0B0E16" label="Mono Black" />
            <LogoCard bg="#0B0E16" meow="#ffffff" kun="#ffffff" label="Outline" outline border />
            <LogoCard bg="#2A4C4E" meow="#ffffff" kun="#ffffff" label="Teal Ground" />
            <div
              className="group relative overflow-hidden border border-neutral-800 col-span-2"
              style={{ background: "#0B0E16" }}
            >
              <div className="p-10 flex items-center justify-center gap-8 min-h-[200px] transition-transform duration-700 group-hover:scale-[1.01]">
                <div className="font-montserrat font-black text-white leading-none" style={{ fontSize: "2.5rem", letterSpacing: "0.12em" }}>
                  MEOW KUN
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 px-5 py-3 flex items-center justify-between border-t border-neutral-800/50">
                <span className="font-montserrat text-[9px] tracking-[0.3em] uppercase text-neutral-600 font-semibold">Horizontal Cinematic</span>
                <span className="font-montserrat text-[9px] text-neutral-700">MK</span>
              </div>
            </div>
          </div>
        </FadeSection>
      </section>

      {/* ── COLOR SYSTEM ────────────────────────────────────────────────────── */}
      <section className="px-8 md:px-20 py-32 border-t border-neutral-900">
        <FadeSection>
          <SectionLabel n="08" text="Color System" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
            <ColorSwatch hex="#0B0E16" name="Void" role="Primary background. Cinematic deep black. The empty frame before creation." />
            <ColorSwatch hex="#2A4C4E" name="Deep Teal" role="The creative pulse. Used sparingly as accent, hover, and secondary logo element." />
            <ColorSwatch hex="#FFFFFF" name="Frame" role="Primary text and logo. Maximum contrast. The subject against darkness." light />
          </div>

          {/* Tonal scale */}
          <div className="mb-6">
            <div className="font-montserrat text-[9px] tracking-[0.4em] uppercase text-neutral-600 font-semibold mb-5">Tonal Scale</div>
            <div className="flex gap-1">
              {["#0B0E16","#111520","#181d2a","#1f2535","#252d42","#2e384f","#404d61","#697485","#8d98a8","#b2bbc6","#d4d9e0","#ffffff"].map((c, i) => (
                <div key={i} className="flex-1 h-10 transition-transform duration-300 hover:scale-y-110 origin-bottom" style={{ background: c }} title={c} />
              ))}
            </div>
          </div>

          <div className="border border-neutral-900 p-6 mt-8">
            <div className="font-montserrat text-[9px] tracking-[0.3em] uppercase text-neutral-600 font-semibold mb-3">Usage Principle</div>
            <p className="font-montserrat font-light text-neutral-600 text-sm leading-loose">
              Void is the dominant field — the canvas. Frame (white) carries the message, the text, the mark. Deep Teal is the rarest element; it appears only to accent and never competes. Apply like a color grade in post-production: purposeful, subtle, transformative.
            </p>
          </div>
        </FadeSection>
      </section>

      {/* ── TYPOGRAPHY ──────────────────────────────────────────────────────── */}
      <section className="px-8 md:px-20 py-32 border-t border-neutral-900">
        <FadeSection>
          <SectionLabel n="09" text="Typography System" />

          <div className="mb-10">
            <div className="font-montserrat text-[9px] tracking-[0.4em] uppercase text-neutral-600 font-semibold mb-3">Typeface</div>
            <div className="font-montserrat font-black text-white" style={{ fontSize: "clamp(2rem, 4vw, 4rem)", letterSpacing: "0.12em" }}>
              Montserrat
            </div>
            <p className="font-montserrat font-light text-neutral-600 text-sm tracking-wide mt-3">
              Used exclusively. Geometric sans-serif with cinematic authority. Weights 300–900 in active rotation.
            </p>
          </div>

          <div className="space-y-0">
            <TypeSpecimen
              label="Display / Hero — Black 900 · tracking 0.08em · uppercase"
              style={{ fontSize: "clamp(3rem, 8vw, 7rem)", fontWeight: 900, letterSpacing: "0.08em", textTransform: "uppercase", lineHeight: 0.9 }}
              text="MEOW KUN"
            />
            <TypeSpecimen
              label="H1 / Section — Bold 700 · tracking -0.01em"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 700, letterSpacing: "-0.01em", lineHeight: 1 }}
              text="Creative Direction"
            />
            <TypeSpecimen
              label="H2 / Headline — Semibold 600 · tracking 0.05em"
              style={{ fontSize: "clamp(1.25rem, 2.5vw, 2rem)", fontWeight: 600, letterSpacing: "0.05em" }}
              text="Visual Identity System"
            />
            <TypeSpecimen
              label="Label — Semibold 600 · tracking 0.45rem · uppercase · teal"
              style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.45rem", textTransform: "uppercase", color: "#2A4C4E" }}
              text="01 — Brand Philosophy"
            />
            <TypeSpecimen
              label="Body — Light 300 · tracking 0.05em · leading loose"
              style={{ fontSize: "14px", fontWeight: 300, letterSpacing: "0.05em", lineHeight: 1.8, color: "rgba(255,255,255,0.5)", maxWidth: "480px" }}
              text="Every frame carries intention. Technology in service of stories, where engineering becomes emotional experience."
            />
          </div>
        </FadeSection>
      </section>

      {/* ── CLEAR SPACE + DON'TS ────────────────────────────────────────────── */}
      <section className="px-8 md:px-20 py-32 border-t border-neutral-900">
        <FadeSection>
          <SectionLabel n="10" text="Logo Usage" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
            <div>
              <div className="font-montserrat text-[9px] tracking-[0.4em] uppercase text-neutral-600 font-semibold mb-6">Clear Space Rule</div>
              <div className="relative border border-dashed border-neutral-800 p-16 flex items-center justify-center mb-6">
                {/* Clear space indicators */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 font-montserrat text-[8px] text-neutral-700 tracking-wider">≥ 1× K height</div>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-montserrat text-[8px] text-neutral-700 tracking-wider">≥ 1× K height</div>
                <div className="absolute left-4 top-1/2 -translate-y-1/2 font-montserrat text-[8px] text-neutral-700 tracking-wider" style={{ writingMode: "vertical-rl" }}>≥ 1× K height</div>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 font-montserrat text-[8px] text-neutral-700 tracking-wider" style={{ writingMode: "vertical-rl" }}>≥ 1× K height</div>
                <LogoMark size="md" meowColor="#ffffff" kunColor="#2A4C4E" />
              </div>
              <p className="font-montserrat font-light text-neutral-600 text-xs leading-loose">
                Maintain minimum clear space equal to the cap-height of "K" on all sides. The mark must breathe.
              </p>
            </div>
            <div>
              <div className="font-montserrat text-[9px] tracking-[0.4em] uppercase text-neutral-600 font-semibold mb-6">Minimum Size</div>
              <div className="space-y-6 pt-2">
                {[
                  { size: "sm", label: "48px — Minimum digital" },
                  { size: "md" as const, label: "96px — Standard" },
                ].map((s) => (
                  <div key={s.label} className="flex items-end gap-6">
                    <LogoMark size={s.size as "sm" | "md"} meowColor="#ffffff" kunColor="#2A4C4E" />
                    <div className="font-montserrat text-[9px] tracking-[0.2em] text-neutral-700 pb-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Don'ts */}
          <div className="font-montserrat text-[9px] tracking-[0.4em] uppercase text-neutral-600 font-semibold mb-6">Incorrect Usage</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <DontCard label="Do not rotate">
              <div style={{ transform: "rotate(-15deg)", display: "inline-block" }}>
                <LogoMark size="sm" meowColor="#ffffff" kunColor="#2A4C4E" />
              </div>
            </DontCard>
            <DontCard label="Do not stretch">
              <div style={{ transform: "scaleX(1.4)", display: "inline-block", transformOrigin: "left" }}>
                <LogoMark size="sm" meowColor="#ffffff" kunColor="#2A4C4E" />
              </div>
            </DontCard>
            <DontCard label="Do not alter color hierarchy">
              <LogoMark size="sm" meowColor="#2A4C4E" kunColor="#ffffff" />
            </DontCard>
            <DontCard label="Do not add effects">
              <div style={{ filter: "blur(2px)" }}>
                <LogoMark size="sm" meowColor="#ffffff" kunColor="#2A4C4E" />
              </div>
            </DontCard>
          </div>
        </FadeSection>
      </section>

      {/* ── MOTION LANGUAGE ─────────────────────────────────────────────────── */}
      <section className="px-8 md:px-20 py-32 border-t border-neutral-900">
        <FadeSection>
          <SectionLabel n="11" text="Motion & Visual Language" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Fade",
                desc: "Elements enter on opacity. No bounce. No spring. Pure dissolve — like a cut between film frames.",
                detail: "duration: 900ms · ease: easeOut",
              },
              {
                title: "Drift",
                desc: "Subtle vertical translation of 24–32px on entrance. Cinematic reveal from below, never above.",
                detail: "translateY: 32px → 0 · timing: 900ms",
              },
              {
                title: "Hover",
                desc: "Scale 1.02–1.03. Micro-lifts that suggest depth without theatrics. Borders softly illuminate.",
                detail: "scale: 1.02 · duration: 500–700ms",
              },
            ].map((m) => (
              <div key={m.title} className="border border-neutral-900 p-8 group hover:border-neutral-800 transition-colors duration-500">
                <div className="font-montserrat font-black text-white text-2xl mb-4 group-hover:translate-x-1 transition-transform duration-500">{m.title}</div>
                <p className="font-montserrat font-light text-neutral-600 text-sm leading-loose mb-6">{m.desc}</p>
                <div className="font-montserrat text-[9px] tracking-[0.3em] uppercase text-neutral-700 font-semibold">{m.detail}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 border border-neutral-900 p-8">
            <div className="font-montserrat text-[9px] tracking-[0.4em] uppercase text-neutral-600 font-semibold mb-4">Motion Principles</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <p className="font-montserrat font-light text-neutral-600 text-sm leading-loose">
                Animation is not decoration — it is direction. Every motion should feel like it has a narrative reason. Staggered reveals create visual rhythm. Nothing enters all at once.
              </p>
              <p className="font-montserrat font-light text-neutral-600 text-sm leading-loose">
                Avoid: bouncing, spinning, parallax excess, loading skeletons that feel mechanical. Embrace: slow fades, intentional pauses, cinematic easing curves.
              </p>
            </div>
          </div>
        </FadeSection>
      </section>

      {/* ── CREATIVE DIRECTION ──────────────────────────────────────────────── */}
      <section className="px-8 md:px-20 py-32 border-t border-neutral-900">
        <FadeSection>
          <SectionLabel n="12" text="Creative Direction" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center mb-20">
            <div>
              <h3 className="font-montserrat font-black text-white mb-6" style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", lineHeight: 1.05, letterSpacing: "-0.01em" }}>
                A24<br />
                <span className="text-neutral-600">meets</span><br />
                Apple.
              </h3>
              <p className="font-montserrat font-light text-neutral-500 text-sm leading-loose tracking-wide">
                The brand inhabits the space between cinematic storytelling and precision engineering. The aesthetic of an indie film production house, refined to the tolerances of a tech company. Emotion, discipline, atmosphere.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { key: "Imagery", val: "High contrast. Monochrome leading. Deep blacks, singular white subjects. Landscape-informed compositions: wide, atmospheric, horizon-anchored." },
                { key: "Atmosphere", val: "Dark by default. The void is home. Teal appears like a light source in the dark — the way golden hour breaks over a painted horizon." },
                { key: "Space", val: "Generous. Asymmetric. Like a landscape — mostly sky, mostly silence. Typography bleeds. Grids break intentionally." },
                { key: "Texture", val: "Subtle film grain on all surfaces — a nod to both acrylic brush texture and analog film. Never smooth to the point of sterility." },
                { key: "Motion", val: "Animation informed by landscape: slow pans, atmospheric dissolves, unhurried transitions. Movement as mood, not mechanics." },
              ].map((r) => (
                <div key={r.key} className="flex gap-4 py-4 border-b border-neutral-900 group">
                  <div className="font-montserrat font-semibold text-xs tracking-[0.2em] uppercase text-neutral-600 min-w-[90px] pt-0.5 group-hover:text-neutral-400 transition-colors duration-300">{r.key}</div>
                  <div className="font-montserrat font-light text-sm text-neutral-500 leading-loose">{r.val}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeSection>
      </section>

      {/* ── APPLICATION MOCKUPS ─────────────────────────────────────────────── */}
      <section className="px-8 md:px-20 py-32 border-t border-neutral-900">
        <FadeSection>
          <SectionLabel n="13" text="Application Mockups" />
          <p className="font-montserrat font-light text-neutral-600 text-sm leading-loose tracking-wide max-w-lg mb-16">
            Brand applications across physical and digital formats. Every surface is an opportunity to extend the identity with consistency and restraint.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            <div className="lg:col-span-2">
              <div className="font-montserrat text-[9px] tracking-[0.3em] uppercase text-neutral-700 mb-3 font-semibold">Film Slate</div>
              <FilmSlate />
            </div>
            <div>
              <div className="font-montserrat text-[9px] tracking-[0.3em] uppercase text-neutral-700 mb-3 font-semibold">Social Square</div>
              <SocialCard />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2">
              <div className="font-montserrat text-[9px] tracking-[0.3em] uppercase text-neutral-700 mb-3 font-semibold">Business Card</div>
              <BusinessCard />
            </div>
            <div>
              <div className="font-montserrat text-[9px] tracking-[0.3em] uppercase text-neutral-700 mb-3 font-semibold">Poster</div>
              <PosterMockup />
            </div>
          </div>

          <div className="mt-4">
            <div className="font-montserrat text-[9px] tracking-[0.3em] uppercase text-neutral-700 mb-3 font-semibold">Pattern / Brand Mark Repetition</div>
            <PatternCard />
          </div>
        </FadeSection>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────────────── */}
      <footer className="px-8 md:px-20 py-20 border-t border-neutral-900">
        <FadeSection>
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
            <div>
              <LogoMark size="lg" meowColor="#ffffff" kunColor="#2A4C4E" />
              <div className="mt-6 font-montserrat font-light text-neutral-700 text-xs tracking-[0.2em] leading-loose">
                Sujal Nepal · Creative Engineer · Artist · Animator<br />
                meowkun.art
              </div>
            </div>
            <div className="text-right">
              <div className="font-montserrat text-[9px] tracking-[0.4em] uppercase text-neutral-700 font-semibold mb-2">Brand Book</div>
              <div className="font-montserrat text-[9px] tracking-[0.2em] text-neutral-800">Version 1.0 · 2026</div>
              <div className="h-px w-full bg-neutral-900 my-6" />
              <div className="font-montserrat text-[9px] tracking-[0.2em] text-neutral-800">
                © 2026 Meow Kun. All rights reserved.
              </div>
            </div>
          </div>
        </FadeSection>
      </footer>
    </div>
  );
}
