"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  MapPin,
  UtensilsCrossed,
  Wine,
  Footprints,
  Palette,
  Film,
  Coffee,
  Sparkles,
  Clock,
  ChevronDown,
  Star,
  Compass,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { PanInfo } from "framer-motion";

// ── Cosmos flower SVG accent ──────────────────────────────────────────────────
const CosmosPetal = ({ className = "", style = {} }) => (
  <svg
    viewBox="0 0 60 60"
    className={className}
    style={style}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
      <ellipse
        key={i}
        cx="30"
        cy="30"
        rx="5"
        ry="13"
        fill="currentColor"
        opacity="0.55"
        transform={`rotate(${deg} 30 30) translate(0 -10)`}
      />
    ))}
    <circle cx="30" cy="30" r="5" fill="currentColor" opacity="0.8" />
  </svg>
);

// ── Floating cosmos decorators ────────────────────────────────────────────────
const FloatingCosmos = () => {
  const flowers = [
    { size: 80, x: "8%", y: "12%", delay: 0, color: "#ff5f7e" },
    { size: 54, x: "88%", y: "8%", delay: 0.8, color: "#5dd6ff" },
    { size: 66, x: "5%", y: "55%", delay: 1.4, color: "#8aff6f" },
    { size: 48, x: "93%", y: "42%", delay: 0.4, color: "#b57bff" },
    { size: 62, x: "82%", y: "78%", delay: 1.1, color: "#ffb347" },
    { size: 50, x: "15%", y: "88%", delay: 1.9, color: "#ffd36e" },
    { size: 72, x: "50%", y: "5%", delay: 0.6, color: "#7afcff" },
  ];

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {flowers.map((f, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: f.x, top: f.y, color: f.color, width: f.size, height: f.size }}
          animate={{ y: [0, -12, 0], rotate: [0, 15, -8, 0], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 6 + i * 0.7, delay: f.delay, repeat: Infinity, ease: "easeInOut" }}
        >
          <CosmosPetal />
        </motion.div>
      ))}
    </div>
  );
};

// ── Staggered card wrapper ────────────────────────────────────────────────────
const FadeCard = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

// ── Timeline dot ─────────────────────────────────────────────────────────────
const Dot = ({ active }: { active: boolean }) => (
  <div className="relative flex-shrink-0 w-10 h-10 flex items-center justify-center">
    <div
      className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
        active
          ? "bg-sky-400 border-sky-300 shadow-[0_0_12px_rgba(56,189,248,0.7)]"
          : "bg-sky-200/60 border-sky-300/50"
      }`}
    />
    {active && (
      <motion.div
        className="absolute w-5 h-5 rounded-full border border-sky-300/40"
        animate={{ scale: [1, 1.7, 1], opacity: [0.6, 0, 0.6] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    )}
  </div>
);

// ── Activity card ─────────────────────────────────────────────────────────────
type ActivityCardProps = {
  icon: LucideIcon;
  time?: string;
  title: string;
  note?: string;
  tag?: string;
  delay?: number;
  isLast: boolean;
};

const ActivityCard = ({ icon: Icon, time, title, note, tag, delay = 0, isLast }: ActivityCardProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <FadeCard delay={delay}>
      <div className="flex gap-3 group">
        {/* Timeline spine */}
        <div className="flex flex-col items-center">
          <Dot active={hovered} />
          {!isLast && <div className="w-px flex-1 bg-gradient-to-b from-sky-300/40 to-transparent mt-1" />}
        </div>

        {/* Card body */}
        <motion.div
          className="mb-6 flex-1 cursor-default"
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          whileHover={{ scale: 1.015 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
        >
          <div
            className={`relative overflow-hidden rounded-2xl border transition-all duration-300 p-5
              backdrop-blur-md bg-white/25
              ${hovered
                ? "border-sky-300/70 shadow-[0_4px_32px_rgba(56,189,248,0.18)] bg-white/35"
                : "border-white/30 shadow-[0_2px_16px_rgba(56,189,248,0.08)]"
              }`}
          >
            {/* Subtle inner glow on hover */}
            <AnimatePresence>
              {hovered && (
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-200/20 to-transparent pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                />
              )}
            </AnimatePresence>

            <div className="relative z-10 flex items-start gap-4">
              {/* Icon bubble */}
              <div
                className={`mt-0.5 flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300
                  ${hovered ? "bg-sky-400/25 text-sky-600" : "bg-sky-200/40 text-sky-500"}`}
              >
                <Icon size={16} strokeWidth={2} />
              </div>

              <div className="flex-1 min-w-0">
                {/* Time + Tag row */}
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  {time && (
                    <span className="flex items-center gap-1 text-[10px] font-medium text-sky-500/80 tracking-wide uppercase">
                      <Clock size={9} />
                      {time}
                    </span>
                  )}
                  {tag && (
                    <span className="text-[9px] font-semibold tracking-widest uppercase px-2 py-0.5 rounded-full bg-sky-300/20 text-sky-600 border border-sky-300/30">
                      {tag}
                    </span>
                  )}
                </div>

                <h3 className="text-sm font-semibold text-slate-700 leading-snug">{title}</h3>
                {note && <p className="text-[11px] text-slate-500/80 mt-1 leading-relaxed">{note}</p>}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </FadeCard>
  );
};

// ── Drink option pill ─────────────────────────────────────────────────────────
const DrinkPill = ({ name, delay }: { name: string; delay: number }) => {
  const [picked, setPicked] = useState(false);
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, type: "spring", stiffness: 280, damping: 20 }}
      whileTap={{ scale: 0.93 }}
      onClick={() => setPicked((p) => !p)}
      className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-200 select-none
        ${picked
          ? "bg-sky-400 text-white border-sky-400 shadow-[0_2px_14px_rgba(56,189,248,0.4)]"
          : "bg-white/30 text-sky-700 border-sky-200/60 hover:bg-sky-100/50 hover:border-sky-300"
        }`}
    >
      {picked ? "✓ " : ""}{name}
    </motion.button>
  );
};

// ── Section heading ───────────────────────────────────────────────────────────
const SectionTitle = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <FadeCard delay={delay}>
    <div className="flex items-center gap-3 mb-5 mt-2">
      <div className="h-px flex-1 bg-gradient-to-r from-sky-200/80 to-transparent" />
      <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-sky-400/90 px-3">{children}</span>
      <div className="h-px flex-1 bg-gradient-to-l from-sky-200/80 to-transparent" />
    </div>
  </FadeCard>
);

// ── Main component ────────────────────────────────────────────────────────────
export default function DateItinerary() {
  const [loaded, setLoaded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 380);
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => { clearTimeout(t); window.removeEventListener("scroll", onScroll); };
  }, []);

  const eveningItems = [
    { icon: MapPin, time: "Afternoon", title: "Head into town", note: "Start easy — no agenda, just vibes.", delay: 0.05 },
    { icon: UtensilsCrossed, time: "Evening", title: "Dinner together", note: "Pick somewhere with good light and better food.", delay: 0.1 },
    { icon: Compass, time: "Optional", title: "VAST Bhutan", note: "Stop by if the timing lines up.", tag: "optional side quest", delay: 0.15 },
    { icon: Footprints, time: "After dinner", title: "Walk around town", note: "No destination required.", delay: 0.2 },
    { icon: Wine, time: "Later", title: "Drinks", note: "One of: Naughty Pigs, Lassi, or Blackout — your call.", delay: 0.25 },
  ];

  const nightItems = [
    { icon: Palette, title: "Mini paint date", note: "No skill required. Chaos encouraged.", delay: 0.05 },
    { icon: Film, title: "Movie night", note: "Something good, or something terrible. Both work.", delay: 0.1 },
    { icon: Coffee, title: "Drinks + talk + relax", note: "The kind of night that goes later than planned.", delay: 0.15 },
  ];


  const steps = [
    { id: "intro", label: "Intro" },
    { id: "evening", label: "Evening" },
    { id: "drinks", label: "Drinks" },
    { id: "night", label: "Night" },
    { id: "next", label: "Next Day" },
    { id: "closing", label: "Closing" },
  ];

  const goNext = () => setStepIndex((i) => Math.min(i + 1, steps.length - 1));
  const goPrev = () => setStepIndex((i) => Math.max(i - 1, 0));
  const onDragEnd = (_: PointerEvent, info: PanInfo) => {
    if (info.offset.x < -80) {
      goNext();
      return;
    }
    if (info.offset.x > 80) {
      goPrev();
    }
  };

  return (
    <div className="relative min-h-screen font-[system-ui] overflow-x-hidden"
      style={{ fontFamily: "'DM Sans', 'Nunito', sans-serif" }}>

      {/* ── Animated background ── */}
      <div className="fixed inset-0 -z-10">
        <motion.div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #e0f3fc 0%, #cce8f8 30%, #ddf0fb 60%, #eaf6ff 100%)",
          }}
          animate={{
            background: [
              "linear-gradient(135deg, #e0f3fc 0%, #cce8f8 30%, #ddf0fb 60%, #eaf6ff 100%)",
              "linear-gradient(160deg, #d6eefa 0%, #c4e4f7 35%, #e2f4fc 65%, #f0f9ff 100%)",
              "linear-gradient(120deg, #e8f5fd 0%, #d0ecfb 25%, #daf2fc 60%, #e8f7ff 100%)",
              "linear-gradient(135deg, #e0f3fc 0%, #cce8f8 30%, #ddf0fb 60%, #eaf6ff 100%)",
            ],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        {/* Mesh blobs */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, #93d5f0 0%, transparent 70%)", top: "-10%", right: "-10%" }}
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full opacity-25 blur-3xl"
          style={{ background: "radial-gradient(circle, #b8e4f7 0%, transparent 70%)", bottom: "5%", left: "-8%" }}
          animate={{ x: [0, -20, 0], y: [0, -25, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <FloatingCosmos />

      {/* ── Intro fade ── */}
      <AnimatePresence>
        {!loaded && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-sky-50"
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              className="text-sky-300 w-8 h-8"
            >
              <CosmosPetal />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-md mx-auto px-5 pb-24">
        <div className="flex items-center justify-between text-[10px] font-semibold tracking-widest uppercase text-sky-400/80 mb-4">
          <span>{steps[stepIndex].label}</span>
          <span>{stepIndex + 1}/{steps.length}</span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={steps[stepIndex].id}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.08}
            dragMomentum={false}
            onDragEnd={onDragEnd}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="min-h-[70vh]"
            style={{ touchAction: "pan-y" }}
          >
            {stepIndex === 0 && (
              <motion.section
                className="min-h-[92vh] flex flex-col items-center justify-center text-center pt-16 pb-8"
                initial={{ opacity: 0 }}
                animate={loaded ? { opacity: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <motion.div
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/40 border border-sky-200/60 backdrop-blur-sm text-[10px] font-semibold tracking-widest uppercase text-sky-600 mb-6"
                  initial={{ opacity: 0, y: -16 }}
                  animate={loaded ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <Sparkles size={9} />
                  Friday, 15 May
                  <Sparkles size={9} />
                </motion.div>

                <motion.h1
                  className="text-5xl sm:text-6xl font-black text-slate-800 tracking-tight leading-none mb-4"
                  style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "-0.03em" }}
                  initial={{ opacity: 0, y: 24 }}
                  animate={loaded ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                >
                  Friday
                  <br />
                  <span className="text-sky-400">Plans?</span>
                </motion.h1>

                <motion.p
                  className="text-sm text-slate-500 max-w-xs leading-relaxed mt-2"
                  initial={{ opacity: 0 }}
                  animate={loaded ? { opacity: 1 } : {}}
                  transition={{ delay: 0.85, duration: 0.5 }}
                >
                  Just a decent evening, some good food,
                  and a memory or two.
                </motion.p>


                <motion.div
                  className="flex items-center gap-3 mt-8 text-sky-300/70"
                  initial={{ opacity: 0 }}
                  animate={loaded ? { opacity: 1 } : {}}
                  transition={{ delay: 1.1 }}
                >
                  {[36, 29, 36].map((s, i) => (
                    <motion.div key={i} className="w-auto" style={{ width: s, height: s }}
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 18 + i * 4, repeat: Infinity, ease: "linear" }}
                    >
                      <CosmosPetal />
                    </motion.div>
                  ))}
                </motion.div>

                <button
                  type="button"
                  onClick={goNext}
                  className="mt-6 px-4 py-2 text-[10px] font-semibold tracking-widest uppercase rounded-full border border-sky-200/60 text-sky-600 bg-white/50 backdrop-blur-sm hover:bg-white/70"
                >
                  Tap to Continue
                </button>
              </motion.section>
            )}

            {stepIndex === 1 && (
              <section>
                <SectionTitle delay={0}>The Evening</SectionTitle>
                {eveningItems.map((item, i) => (
                  <ActivityCard key={i} {...item} isLast={i === eveningItems.length - 1} />
                ))}
                <div className="flex justify-center mt-2">
                  <button
                    type="button"
                    onClick={goNext}
                    className="px-4 py-2 text-[10px] font-semibold tracking-widest uppercase rounded-full border border-sky-200/60 text-sky-600 bg-white/50 backdrop-blur-sm hover:bg-white/70"
                  >
                    Tap to Continue
                  </button>
                </div>
              </section>
            )}

            {stepIndex === 2 && (
              <FadeCard delay={0.1}>
                <div className="rounded-2xl border border-sky-200/50 bg-white/25 backdrop-blur-md p-5 mb-7 shadow-[0_2px_16px_rgba(56,189,248,0.08)]">
                  <p className="text-[10px] font-bold tracking-widest uppercase text-sky-400 mb-3">Pick your poison</p>
                  <div className="flex flex-wrap gap-2">
                    {["Naughty Pigs", "Lassi", "Blackout"].map((d, i) => (
                      <DrinkPill key={d} name={d} delay={0.12 + i * 0.06} />
                    ))}
                  </div>
                  <p className="text-[10px] text-slate-400 mt-3">tap to vote (no commitment required)</p>
                </div>
                <div className="flex justify-center">
                  <button
                    type="button"
                    onClick={goNext}
                    className="px-4 py-2 text-[10px] font-semibold tracking-widest uppercase rounded-full border border-sky-200/60 text-sky-600 bg-white/50 backdrop-blur-sm hover:bg-white/70"
                  >
                    Tap to Continue
                  </button>
                </div>
              </FadeCard>
            )}

            {stepIndex === 3 && (
              <section>
                <SectionTitle delay={0}>Back at the Room</SectionTitle>
                {nightItems.map((item, i) => (
                  <ActivityCard key={i} {...item} isLast={i === nightItems.length - 1} />
                ))}
                <div className="flex justify-center mt-2">
                  <button
                    type="button"
                    onClick={goNext}
                    className="px-4 py-2 text-[10px] font-semibold tracking-widest uppercase rounded-full border border-sky-200/60 text-sky-600 bg-white/50 backdrop-blur-sm hover:bg-white/70"
                  >
                    Tap to Continue
                  </button>
                </div>
              </section>
            )}

            {stepIndex === 4 && (
              <FadeCard delay={0.1}>
                <div className="rounded-2xl border border-dashed border-sky-300/50 bg-white/20 backdrop-blur-sm p-5 mb-7">
                  <div className="flex items-center gap-2 mb-2">
                    <Star size={11} className="text-sky-400" />
                    <span className="text-[9px] font-bold tracking-widest uppercase text-sky-500">Saturday — Optional Side Quest</span>
                  </div>
                  <h3 className="text-sm font-semibold text-slate-700 mb-1">Calligraphy Workshop · VAST Bhutan</h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    3 PM – 6 PM · Then head back to college. Probably a good story either way.
                  </p>
                </div>
                <div className="flex justify-center">
                  <button
                    type="button"
                    onClick={goNext}
                    className="px-4 py-2 text-[10px] font-semibold tracking-widest uppercase rounded-full border border-sky-200/60 text-sky-600 bg-white/50 backdrop-blur-sm hover:bg-white/70"
                  >
                    Tap to Continue
                  </button>
                </div>
              </FadeCard>
            )}

            {stepIndex === 5 && (
              <FadeCard delay={0.15}>
                <div className="text-center py-12">
                  <div className="flex justify-center gap-4 mb-6 text-sky-300/60">
                    {[47, 36, 47].map((s, i) => (
                      <motion.div key={i} style={{ width: s, height: s }}
                        animate={{ rotate: i % 2 === 0 ? [0, 360] : [360, 0] }}
                        transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear" }}
                      >
                        <CosmosPetal />
                      </motion.div>
                    ))}
                  </div>
                  <motion.h2
                    className="text-3xl font-black text-slate-700 tracking-tight mb-2"
                    style={{ letterSpacing: "-0.02em" }}
                    whileHover={{ scale: 1.03 }}
                  >
                    Could be fun.
                  </motion.h2>
                  <p className="text-sm text-slate-400 font-medium">Might make a good memory.</p>
                  <div className="mt-6 inline-flex items-center gap-1 text-[10px] text-sky-400/70 font-medium tracking-wider">
                    <Sparkles size={9} />
                    <span>Let me know what you think</span>
                    <Sparkles size={9} />
                  </div>
                  <div className="mt-6 flex justify-center">
                    <button
                      type="button"
                      onClick={() => setStepIndex(0)}
                      className="px-4 py-2 text-[10px] font-semibold tracking-widest uppercase rounded-full border border-sky-200/60 text-sky-600 bg-white/50 backdrop-blur-sm hover:bg-white/70"
                    >
                      Start Over
                    </button>
                  </div>
                </div>
              </FadeCard>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex items-center justify-center">
          <div className="flex items-center gap-2">
            {steps.map((step, i) => (
              <button
                key={step.id}
                type="button"
                onClick={() => setStepIndex(i)}
                aria-label={`Go to ${step.label}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  stepIndex === i ? "w-6 bg-sky-400" : "w-2.5 bg-sky-200/70"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
