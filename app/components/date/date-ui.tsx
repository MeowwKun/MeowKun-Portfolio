"use client";

import { useEffect, useRef, useState } from "react";
export const CosmosFlower = ({ size = 36, opacity = 0.5, color = "#5bb8d4" }: { size?: number; opacity?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 60 60" fill="none" style={{ opacity }}>
    {[0,45,90,135,180,225,270,315].map((deg, i) => (
      <ellipse key={i} cx="30" cy="30" rx="5" ry="13" fill={color} opacity="0.55"
        transform={`rotate(${deg} 30 30) translate(0 -10)`} />
    ))}
    <circle cx="30" cy="30" r="5" fill={color} opacity="0.9" />
  </svg>
);

export const DaisyFlower = ({ size = 34, opacity = 0.55, petalColor = "#ffffff", centerColor = "#ffd166" }: {
  size?: number; opacity?: number; petalColor?: string; centerColor?: string;
}) => (
  <svg width={size} height={size} viewBox="0 0 60 60" fill="none" style={{ opacity }}>
    {[0,45,90,135,180,225,270,315].map((deg, i) => (
      <ellipse key={i} cx="30" cy="30" rx="6" ry="14" fill={petalColor} opacity="0.85"
        stroke="rgba(0,0,0,0.45)" strokeWidth="1.2"
        transform={`rotate(${deg} 30 30) translate(0 -10)`} />
    ))}
    <circle cx="30" cy="30" r="6" fill={centerColor} opacity="0.95" stroke="rgba(0,0,0,0.3)" strokeWidth="0.8" />
  </svg>
);

export const Divider = () => (
  <div style={{ display:"flex", alignItems:"center", gap:"0.8rem", width:"100%", maxWidth:300, margin:"1.2rem 0", opacity:0.5 }}>
    <div style={{ flex:1, height:"0.5px", background:"linear-gradient(to right, transparent, #93d5e8, transparent)" }} />
    <span style={{ color:"#93d5e8", fontSize:"0.85rem" }}>✿</span>
    <div style={{ flex:1, height:"0.5px", background:"linear-gradient(to right, transparent, #93d5e8, transparent)" }} />
  </div>
);

export const SceneRow = ({ time, title, note, optional, accent }: {
  time: string; title: string; note?: string; optional?: boolean; accent?: boolean;
}) => (
  <div style={{ display:"grid", gridTemplateColumns:"72px 1fr", gap:"0 1rem", width:"100%", maxWidth:380, textAlign:"left", marginBottom:"1.6rem", alignItems:"start" }}>
    <div style={{ fontFamily:"'Josefin Sans',sans-serif", fontSize:"0.56rem", letterSpacing:"0.16em", color:"#2f6f84", fontWeight:300, textTransform:"uppercase", textAlign:"right", paddingTop:"0.2rem", lineHeight:1.6, opacity:0.9 }}>{time}</div>
    <div style={accent ? { borderLeft:"1px solid rgba(91,184,212,0.3)", paddingLeft:"0.9rem" } : {}}>
      <div style={{ fontFamily:"'DM Serif Display',serif", fontSize:"1.05rem", color:"#1f4653", lineHeight:1.35, marginBottom:"0.18rem" }}>
        {title}
        {optional && (
          <span style={{ fontFamily:"'Josefin Sans',sans-serif", fontSize:"0.5rem", letterSpacing:"0.15em", color:"#2f6f84", border:"0.5px solid rgba(47,111,132,0.45)", borderRadius:99, padding:"1px 7px", marginLeft:8, verticalAlign:"middle", fontWeight:300, textTransform:"uppercase" }}>
            maybe
          </span>
        )}
      </div>
      {note && <div style={{ fontFamily:"'Lato',sans-serif", fontStyle:"italic", fontSize:"0.82rem", color:"#476b78", lineHeight:1.55 }}>{note}</div>}
    </div>
  </div>
);

export const DateStepDots = ({ total, current, goTo }: { total: number; current: number; goTo: (n: number) => void }) => (
  <div style={{ display:"flex", gap:7, justifyContent:"center", marginTop:"2rem" }}>
    {Array.from({ length: total }, (_, i) => (
      <button key={i} onClick={() => goTo(i)} style={{
        width: i === current ? 20 : 6, height:6,
        borderRadius: i === current ? 3 : "50%",
        background: i === current ? "#2f6f84" : "rgba(47,111,132,0.25)",
        border:"none", cursor:"pointer", padding:0, transition:"all 0.3s"
      }} />
    ))}
  </div>
);

export const Btn = ({ onClick, label, primary }: { onClick: () => void; label: string; primary?: boolean }) => {
  const ref = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    const el = ref.current;
    if (el) {
      el.style.transform = "scale(0.94)";
      el.style.opacity = "0.8";
      setTimeout(() => {
        if (el) { el.style.transform = ""; el.style.opacity = ""; }
        onClick();
      }, 130);
    } else {
      onClick();
    }
  };

  return (
    <button
      ref={ref}
      type="button"
      onClick={handleClick}
      style={{
        fontFamily:"'Josefin Sans',sans-serif", fontSize:"0.62rem", letterSpacing:"0.22em",
        textTransform:"uppercase", fontWeight:400,
        color: primary ? "#fff" : "#2c7a94",
        background: primary ? "linear-gradient(135deg,#5bb8d4,#3da0c0)" : "rgba(255,255,255,0.55)",
        border: primary ? "none" : "1px solid rgba(91,184,212,0.5)",
        padding: primary ? "12px 34px" : "10px 26px",
        borderRadius:99, cursor:"pointer",
        boxShadow: primary ? "0 4px 20px rgba(91,184,212,0.35)" : "none",
        backdropFilter:"blur(6px)",
        transition:"transform 0.15s cubic-bezier(0.34,1.56,0.64,1), opacity 0.15s, box-shadow 0.2s",
      }}
    >
      {label}
    </button>
  );
};

export function spawnConfetti(container: HTMLDivElement) {
  const colors = ["#5bb8d4","#93d5e8","#b8ecf5","#ffd6e0","#ffe8a3","#c8f0c8"];
  for (let i = 0; i < 32; i++) {
    const el = document.createElement("div");
    const size = Math.random() * 8 + 4;
    const tx = (Math.random() - 0.5) * 380;
    const ty = -(Math.random() * 300 + 80);
    const rot = Math.random() * 540;
    const color = colors[Math.floor(Math.random() * colors.length)];
    el.style.cssText = `position:absolute;top:50%;left:50%;width:${size}px;height:${size*0.6}px;background:${color};border-radius:99px;pointer-events:none;`;
    el.animate([
      { transform:"translate(-50%,-50%) rotate(0deg)", opacity:1 },
      { transform:`translate(calc(-50% + ${tx}px),calc(-50% + ${ty}px)) rotate(${rot}deg)`, opacity:0 }
    ], { duration:1000 + Math.random()*600, easing:"cubic-bezier(0,0.9,0.57,1)", fill:"forwards" });
    container.appendChild(el);
  }
  setTimeout(() => { container.innerHTML = ""; }, 1800);
}

export const pseudoRandom = (seed: number, index: number, offset = 0) => {
  const x = Math.sin(seed * 12.9898 + index * 78.233 + offset * 37.719) * 43758.5453;
  return x - Math.floor(x);
};

export const floating = [
  { kind: "cosmos", size: 72, x: "3%",  y: "8%",  delay: 0.1, color: "#991b1b", dy: -24, rot: 14,  dur: 8.2, dx: 14 },
  { kind: "daisy",  size: 44, x: "12%", y: "26%", delay: 1.1, color: "#fef2f2", centerColor: "#b45309", dy: -16, rot: -12, dur: 7.4, dx: 10 },
  { kind: "cosmos", size: 78, x: "9%",  y: "68%", delay: 0.6, color: "#0e7490", dy: -28, rot: 16,  dur: 9.1, dx: 16 },
  { kind: "daisy",  size: 40, x: "24%", y: "84%", delay: 1.5, color: "#ede9fe", centerColor: "#9f1239", dy: -14, rot: 10,  dur: 7.6, dx: 11 },
  { kind: "daisy",  size: 38, x: "74%", y: "30%", delay: 1.7, color: "#f8fafc", centerColor: "#b91c1c", dy: -12, rot: -10, dur: 7.2, dx: 10 },
  { kind: "cosmos", size: 64, x: "86%", y: "9%",  delay: 0.4, color: "#c2410c", dy: -26, rot: 18,  dur: 9.0, dx: 16 },
  { kind: "cosmos", size: 48, x: "90%", y: "48%", delay: 1.3, color: "#1e3a8a", dy: -18, rot: -10, dur: 7.8, dx: 12 },
  { kind: "daisy",  size: 42, x: "80%", y: "72%", delay: 1.6, color: "#fef9c3", centerColor: "#a16207", dy: -15, rot: 12,  dur: 7.6, dx: 11 },
  { kind: "cosmos", size: 60, x: "58%", y: "86%", delay: 0.8, color: "#9f1239", dy: -24, rot: -14, dur: 8.6, dx: 14 },
  { kind: "daisy",  size: 36, x: "34%", y: "56%", delay: 1.9, color: "#fefefe", centerColor: "#5b21b6", dy: -13, rot: 9,   dur: 7.1, dx: 10 },
  { kind: "daisy",  size: 34, x: "6%",  y: "40%", delay: 0.7, color: "#fff7ed", centerColor: "#9f1239", dy: -14, rot: -11, dur: 7.3, dx: 10 },
];

export const LoadingScreen = ({ onDone }: { onDone: () => void }) => {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setFading(true), 2400);
    const t2 = setTimeout(() => onDone(), 3000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onDone]);

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 100,
      background: "linear-gradient(160deg,#e8f7fc 0%,#d0eef8 40%,#e4f5fb 70%,#f0faff 100%)",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1.4rem",
      transition: "opacity 0.6s ease",
      opacity: fading ? 0 : 1,
      pointerEvents: fading ? "none" : "all",
    }}>
      <style>{`
        @keyframes diSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes diPulse { 0%,100% { opacity: 0.5; transform: scale(1); } 50% { opacity: 0.9; transform: scale(1.08); } }
      `}</style>
      <div style={{ animation: "diSpin 1.6s linear infinite" }}>
        <CosmosFlower size={62} opacity={0.8} color="#3da0c0" />
      </div>
      <div style={{
        fontFamily: "'Josefin Sans', sans-serif",
        fontSize: "0.58rem", letterSpacing: "0.3em",
        textTransform: "uppercase", color: "#2f6f84",
        fontWeight: 300, opacity: 0.7,
        animation: "diPulse 1.8s ease-in-out infinite",
      }}>
        loading...
      </div>
    </div>
  );
};
