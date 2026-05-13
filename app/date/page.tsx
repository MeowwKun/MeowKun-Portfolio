"use client";

import { useState, useRef, useEffect } from "react";

const CosmosFlower = ({ size = 36, opacity = 0.5, color = "#5bb8d4" }: { size?: number; opacity?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 60 60" fill="none" style={{ opacity }}>
    {[0,45,90,135,180,225,270,315].map((deg, i) => (
      <ellipse key={i} cx="30" cy="30" rx="5" ry="13" fill={color} opacity="0.55"
        transform={`rotate(${deg} 30 30) translate(0 -10)`} />
    ))}
    <circle cx="30" cy="30" r="5" fill={color} opacity="0.9" />
  </svg>
);

const DaisyFlower = ({ size = 34, opacity = 0.55, petalColor = "#ffffff", centerColor = "#ffd166" }: {
  size?: number; opacity?: number; petalColor?: string; centerColor?: string;
}) => (
  <svg width={size} height={size} viewBox="0 0 60 60" fill="none" style={{ opacity }}>
    {[0,45,90,135,180,225,270,315].map((deg, i) => (
      <ellipse key={i} cx="30" cy="30" rx="6" ry="14" fill={petalColor} opacity="0.85"
        stroke="rgba(0,0,0,0.45)" strokeWidth="1.2"
        transform={`rotate(${deg} 30 30) translate(0 -10)`} />
    ))}
    <circle cx="30" cy="30" r="6" fill={centerColor} opacity="0.95" stroke="rgba(0,0,0,0.3)" strokeWidth="0.8"
 />
  </svg>
);

const Divider = () => (
  <div style={{ display:"flex", alignItems:"center", gap:"0.8rem", width:"100%", maxWidth:300, margin:"1.2rem 0", opacity:0.5 }}>
    <div style={{ flex:1, height:"0.5px", background:"linear-gradient(to right, transparent, #93d5e8, transparent)" }} />
    <span style={{ color:"#93d5e8", fontSize:"0.85rem" }}>✿</span>
    <div style={{ flex:1, height:"0.5px", background:"linear-gradient(to right, transparent, #93d5e8, transparent)" }} />
  </div>
);

const SceneRow = ({ time, title, note, optional, accent }: {
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

const PageDots = ({ total, current, goTo }: { total: number; current: number; goTo: (n: number) => void }) => (
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

const Btn = ({ onClick, label, primary }: { onClick: () => void; label: string; primary?: boolean }) => (
  <button
    type="button"
    onClick={onClick}
    onTouchStart={onClick}
    onPointerUp={onClick}
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
    transition:"all 0.2s",
  }}>
    {label}
  </button>
);

function spawnConfetti(container: HTMLDivElement) {
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

export default function DateItinerary() {
  const [page, setPage] = useState(0);
  const [noCount, setNoCount] = useState(0);
  const [noDx, setNoDx] = useState(0);
  const [noDy, setNoDy] = useState(0);
  const [noGone, setNoGone] = useState(false);
  const [drink, setDrink] = useState<string | null>(null);
  const [extraYes, setExtraYes] = useState<{id:number,x:number,y:number}[]>([]);
  const [floatSeed, setFloatSeed] = useState(0);
  const confettiRef = useRef<HTMLDivElement>(null);
  const TOTAL = 9;
  const goTo = (n: number) => setPage(n);

  useEffect(() => {
    const id = setInterval(() => setFloatSeed((s) => s + 1), 7000);
    return () => clearInterval(id);
  }, []);

  const handleYes = () => {
    if (confettiRef.current) spawnConfetti(confettiRef.current);
    setTimeout(() => goTo(5), 800);
  };

  const noLabels = [
    "No",
    "Are you sure?",
    "I'll behave",
    "Pleaseee",
    "Really sure?",
    "Come on 😭",
    "Last chance...",
    "Okay fine... yes?",
  ];
  const hints = [
    "it's running away 🙈","it really doesn't want to be pressed...",
    "more yes buttons appearing...","getting smaller 👀",
    "basically microscopic now","just press yes lol","last chance (not really)",
  ];

  const dodgeNo = () => {
    const next = noCount + 1;
    setNoCount(next);
    const spread = 120 + next * 20;
    setNoDx(p => Math.max(-200, Math.min(200, p + (Math.random()-0.5)*spread*2)));
    setNoDy(p => Math.max(0, Math.min(180, p + Math.random()*60 + 20)));
    if (next >= 3 && extraYes.length < 3) {
      setExtraYes(prev => [...prev, {
        id: Date.now(),
        x: (Math.random()-0.5)*180,
        y: -(Math.random()*80+30),
      }]);
    }
    if (next >= noLabels.length + 2) setNoGone(true);
  };

  const bg: React.CSSProperties = {
    minHeight:"100vh",
    background:"linear-gradient(160deg,#e8f7fc 0%,#d0eef8 40%,#e4f5fb 70%,#f0faff 100%)",
    fontFamily:"'Lato',sans-serif",
    color:"#2c5f70",
    overflowX:"hidden",
    position:"relative",
  };

  const screen: React.CSSProperties = {
    display:"flex", flexDirection:"column", alignItems:"center",
    justifyContent:"center", minHeight:"100vh",
    padding:"3rem 2rem 5rem", textAlign:"center", position:"relative", zIndex:2,
  };

  const eyebrow: React.CSSProperties = {
    fontFamily:"'Josefin Sans',sans-serif", fontSize:"0.58rem",
    letterSpacing:"0.28em", color:"#2f6f84", fontWeight:300,
    textTransform:"uppercase", marginBottom:"1rem", opacity:0.9,
  };

  const big: React.CSSProperties = {
    fontFamily:"'DM Serif Display',serif", fontStyle:"italic",
    fontSize:"2.3rem", color:"#163a46", lineHeight:1.25, marginBottom:"0.9rem",
  };

  const sub: React.CSSProperties = {
    fontFamily:"'Lato',sans-serif", fontSize:"0.95rem",
    color:"#3e5f6b", lineHeight:1.65, maxWidth:290, marginBottom:"1.8rem",
    fontStyle:"italic",
  };
const pseudoRandom = (seed: number, index: number, offset = 0) => {
  const x = Math.sin(seed * 12.9898 + index * 78.233 + offset * 37.719) * 43758.5453;
  return x - Math.floor(x);
};
const floating = [
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

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Josefin+Sans:wght@200;300;400&family=Lato:ital,wght@0,300;0,400;1,300;1,400&display=swap');
        * { box-sizing: border-box; }
        button:focus { outline: none; }
        @keyframes diFloat {
          0%,100%{ transform: translateY(0) translateX(0) rotate(0deg); }
          50%{ transform: translateY(var(--float-y, -12px)) translateX(var(--float-x, 8px)) rotate(var(--float-r, 8deg)); }
        }
        @keyframes diFade { from{ opacity:0; transform: translateY(10px); } to{ opacity:1; transform: translateY(0); } }
        @keyframes diPop { from{ opacity:0; transform: scale(0.9); } to{ opacity:1; transform: scale(1); } }
        .di-screen { animation: diFade 0.45s ease; }
        .di-float { position: absolute; animation: diFloat var(--float-d, 7s) ease-in-out infinite; opacity: 0.7; pointer-events: none; }
        .di-sticker { animation: diPop 0.35s ease; }
      `}</style>

      <div style={bg}>
        <div style={{ position:"fixed", inset:0, pointerEvents:"none", zIndex:1 }}>
          {floating.map((f, i) => (
            <div
              key={i}
              className="di-float"
              style={{
                left: f.x,
                top: f.y,
                animationDelay: `${f.delay}s`,
                "--float-x": `${(f.dx ?? 10) * (0.7 + pseudoRandom(floatSeed, i, 1) * 0.9)}px`,
                "--float-y": `${(f.dy ?? -12) * (0.7 + pseudoRandom(floatSeed, i, 2) * 0.9)}px`,
                "--float-r": `${(f.rot ?? 8) * (0.7 + pseudoRandom(floatSeed, i, 3) * 0.9)}deg`,
                "--float-d": `${(f.dur ?? 7) * 1.2}s`,
              } as React.CSSProperties}
            >
              {f.kind === "daisy" ? (
                <DaisyFlower size={f.size} opacity={0.7} petalColor={f.color} centerColor={f.centerColor} />
              ) : (
                <CosmosFlower size={f.size} opacity={0.5} color={f.color} />
              )}
            </div>
          ))}
        </div>
        {/* Soft blobs */}
        <div style={{ position:"fixed", inset:0, pointerEvents:"none", zIndex:0, overflow:"hidden" }}>
          <div style={{ position:"absolute", width:500, height:500, borderRadius:"50%", background:"radial-gradient(circle,rgba(91,184,212,0.18) 0%,transparent 70%)", top:"-10%", right:"-8%", filter:"blur(40px)" }} />
          <div style={{ position:"absolute", width:400, height:400, borderRadius:"50%", background:"radial-gradient(circle,rgba(147,213,232,0.14) 0%,transparent 70%)", bottom:"5%", left:"-6%", filter:"blur(40px)" }} />
        </div>

        <div ref={confettiRef} style={{ position:"fixed", inset:0, pointerEvents:"none", overflow:"hidden", zIndex:10 }} />

        {/* ── Page 0: I want to tell you something ── */}
        {page === 0 && (
          <div style={screen} className="di-screen">
            <img
              src="/gifpuk_files/200(30).webp"
              alt="gifpuk sticker"
              className="di-sticker"
              style={{ width:140, height:"auto", marginBottom:"1.3rem" }}
            />
            <div style={eyebrow}>hey</div>
            <div style={big}>I want to tell<br />you something.</div>
            <Btn onClick={() => goTo(1)} label="tell me ↓" />
            <PageDots total={TOTAL} current={page} goTo={goTo} />
          </div>
        )}

        {/* ── Page 1: I think you're really cute ── */}
        {page === 1 && (
          <div style={screen} className="di-screen">
            <div style={{ marginBottom:"1.8rem" }}>
              <CosmosFlower size={56} opacity={0.6} />
            </div>
            <img
              src="/gifpuk_files/200(5).webp"
              alt="gifpuk sticker"
              className="di-sticker"
              style={{ width:120, height:"auto", marginBottom:"1.2rem" }}
            />
            <div style={eyebrow}>okay so</div>
            <div style={big}>I think you're<br />really cute.</div>
            <div style={{ display:"flex", gap:"0.8rem", marginBottom:"2rem", opacity:0.5 }}>
              <CosmosFlower size={22} /><CosmosFlower size={16} opacity={0.35} /><CosmosFlower size={22} />
            </div>
            <Btn onClick={() => goTo(2)} label="okay... 🙈" />
            <PageDots total={TOTAL} current={page} goTo={goTo} />
          </div>
        )}

        {/* ── Page 2: I'd like to take you out ── */}
        {page === 2 && (
          <div style={screen} className="di-screen">
            <div style={{ marginBottom:"1.8rem", opacity:0.55 }}>
              <CosmosFlower size={48} />
            </div>
            <img
              src="/gifpuk_files/200(15).webp"
              alt="gifpuk sticker"
              className="di-sticker"
              style={{ width:120, height:"auto", marginBottom:"1.2rem" }}
            />
            <div style={eyebrow}>and also</div>
            <div style={big}>I'd like to<br />take you out<br />sometime.</div>
            <div style={sub}>An actual date</div>
            <Btn onClick={() => goTo(3)} label="keep going ↓" />
            <PageDots total={TOTAL} current={page} goTo={goTo} />
          </div>
        )}

        {/* ── Page 3: The buildup ── */}
        {page === 3 && (
          <div style={screen} className="di-screen">
            <img
              src="/gifpuk_files/200(7).webp"
              alt="gifpuk sticker"
              className="di-sticker"
              style={{ width:140, height:"auto", marginBottom:"1.4rem" }}
            />
            <Btn onClick={() => goTo(4)} label="so the question is... ↓" />
            <PageDots total={TOTAL} current={page} goTo={goTo} />
          </div>
        )}

        {/* ── Page 4: The Ask ── */}
        {page === 4 && (
          <div style={screen} className="di-screen">
            <div style={{ marginBottom:"1.6rem", opacity:0.5 }}>
              <CosmosFlower size={52} />
            </div>
            <div style={eyebrow}>so, the question is</div>
            <div style={big}>Will you go on<br />a date with me?</div>

            {/* extra yes buttons that spawn */}
            <div style={{ position:"relative", width:"100%", maxWidth:340, height:160, display:"flex", alignItems:"center", justifyContent:"center" }}>
              {extraYes.map((ey) => (
                <button key={ey.id} onClick={handleYes} style={{
                  position:"absolute",
                  transform:`translate(calc(-50% + ${ey.x}px), calc(0px + ${ey.y}px))`,
                  fontFamily:"'Josefin Sans',sans-serif", fontSize:"0.58rem", letterSpacing:"0.18em",
                  textTransform:"uppercase", fontWeight:400, color:"#fff",
                  background:"rgba(91,184,212,0.75)", border:"none",
                  padding:"8px 22px", borderRadius:99, cursor:"pointer",
                  boxShadow:"0 2px 12px rgba(91,184,212,0.3)",
                  left:"50%", top:"50%",
                }}>
                  yes 💙
                </button>
              ))}

              {/* Main yes */}
              <button onClick={handleYes} style={{
                fontFamily:"'Josefin Sans',sans-serif", fontSize:"0.65rem", letterSpacing:"0.22em",
                textTransform:"uppercase", fontWeight:400, color:"#fff",
                background:"linear-gradient(135deg,#5bb8d4,#3da0c0)",
                border:"none", padding:"13px 36px", borderRadius:99, cursor:"pointer",
                boxShadow:"0 4px 20px rgba(91,184,212,0.4)", position:"relative", zIndex:2,
              }}>
                Yes!! 🌸
              </button>

              {/* No button — runs away */}
              {!noGone && (
                <button
                  onMouseEnter={dodgeNo}
                  onTouchStart={dodgeNo}
                  onClick={dodgeNo}
                  style={{
                    position:"absolute", left:"50%", top:"50%",
                    transform:`translate(calc(-50% + ${noDx}px), calc(30px + ${noDy}px))`,
                    fontFamily:"'Josefin Sans',sans-serif", fontSize:"0.58rem", letterSpacing:"0.18em",
                    textTransform:"uppercase", fontWeight:300,
                    color:"rgba(90,138,154,0.8)",
                    background:"rgba(255,255,255,0.4)", border:"1px solid rgba(91,184,212,0.3)",
                    padding:"8px 20px", borderRadius:99, cursor:"pointer",
                    opacity: 0.9,
                    scale: `${Math.max(0.5, 1 - noCount * 0.04)}`,
                    transition:"transform 0.18s cubic-bezier(0.34,1.56,0.64,1), opacity 0.25s",
                    backdropFilter:"blur(4px)",
                    whiteSpace:"nowrap",
                  }}
                >
                  {noLabels[Math.min(noCount, noLabels.length - 1)]}
                </button>
              )}
            </div>

            {noGone && (
              <div style={{ fontFamily:"'Lato',sans-serif", fontStyle:"italic", fontSize:"0.8rem", color:"#93c5d4", marginTop:"-0.5rem", marginBottom:"0.5rem" }}>
                the No button has left the chat 😔
              </div>
            )}
            {noCount > 0 && noCount <= 7 && !noGone && (
              <div style={{ fontFamily:"'Lato',sans-serif", fontStyle:"italic", fontSize:"0.78rem", color:"#93c5d4", marginTop:"-0.5rem" }}>
                {hints[Math.min(noCount - 1, hints.length - 1)]}
              </div>
            )}

            <PageDots total={TOTAL} current={page} goTo={goTo} />
          </div>
        )}

        {/* ── Page 5: Friday Evening ── */}
        {page === 5 && (
          <div style={screen} className="di-screen">
            <div style={eyebrow}>friday · 15 may</div>
            <div style={{ fontFamily:"'DM Serif Display',serif", fontStyle:"italic", fontSize:"1.9rem", color:"#1e4d5e", lineHeight:1.25, marginBottom:"1.4rem" }}>The evening.</div>
            <SceneRow time="afternoon" title="Head into town" note="" />
            <SceneRow time="evening" title="Dinner" note="Somewhere with good light and better food." />
            <SceneRow time="maybe" title="VAST Bhutan" note="If the timing lines up." optional />
            <SceneRow time="after" title="Walk around" note="" />
            <SceneRow time="later" title="Drinks" note="Naughty Pigs, Lassi, or Blackout." accent />
            <Btn onClick={() => goTo(6)} label="and then ↓" />
            <PageDots total={TOTAL} current={page} goTo={goTo} />
          </div>
        )}

        {/* ── Page 6: Night ── */}
        {page === 6 && (
          <div style={screen} className="di-screen">
            <div style={eyebrow}>back at the room</div>
            <div style={{ fontFamily:"'DM Serif Display',serif", fontStyle:"italic", fontSize:"1.9rem", color:"#1e4d5e", lineHeight:1.25, marginBottom:"1.4rem" }}>The night.</div>

            <div style={{ display:"grid", gridTemplateColumns:"72px 1fr", gap:"0 1rem", width:"100%", maxWidth:380, textAlign:"left", marginBottom:"1.6rem", alignItems:"start" }}>
              <div style={{ fontFamily:"'Josefin Sans',sans-serif", fontSize:"0.56rem", letterSpacing:"0.16em", color:"#5bb8d4", fontWeight:300, textTransform:"uppercase", textAlign:"right", paddingTop:"0.2rem", opacity:0.8 }}>drinks</div>
              <div>
                <div style={{ fontFamily:"'DM Serif Display',serif", fontSize:"1.05rem", color:"#2c5f70", lineHeight:1.35, marginBottom:"0.5rem" }}>Pick our spot</div>
                <div style={{ display:"flex", flexWrap:"wrap", gap:"0.5rem" }}>
                  {["Lassi","Naughty Pigs","Blackout"].map(d => (
                    <button key={d} onClick={() => setDrink(p => p === d ? null : d)} style={{
                      fontFamily:"'Josefin Sans',sans-serif", fontSize:"0.56rem", letterSpacing:"0.16em",
                      textTransform:"uppercase", fontWeight:300,
                      color: drink === d ? "#fff" : "#5bb8d4",
                      background: drink === d ? "linear-gradient(135deg,#5bb8d4,#3da0c0)" : "rgba(255,255,255,0.4)",
                      border:"1px solid rgba(91,184,212,0.4)", padding:"6px 14px", borderRadius:99,
                      cursor:"pointer", backdropFilter:"blur(4px)", transition:"all 0.2s",
                      boxShadow: drink === d ? "0 2px 12px rgba(91,184,212,0.3)" : "none",
                    }}>{d}</button>
                  ))}
                </div>
                {drink && <div style={{ fontFamily:"'Lato',sans-serif", fontStyle:"italic", fontSize:"0.8rem", color:"#5bb8d4", marginTop:"0.4rem" }}>{drink} it is. ✓</div>}
              </div>
            </div>

            <SceneRow time="late" title="Mini paint date" note="No skill required." accent />
            <SceneRow time="wind down" title="Movie night" note="Something good, or something scary." />
            <SceneRow time="even later" title="Drinks + talk + just exist" note="" />
            <Btn onClick={() => goTo(7)} label="one more thing ↓" />
            <PageDots total={TOTAL} current={page} goTo={goTo} />
          </div>
        )}

        {/* ── Page 7: Calligraphy Workshop ── */}
        {page === 7 && (
          <div style={screen} className="di-screen">
            <div style={eyebrow}>day two · saturday potentially</div>
            <div style={{ fontFamily:"'DM Serif Display',serif", fontStyle:"italic", fontSize:"1.9rem", color:"#1e4d5e", lineHeight:1.25, marginBottom:"1.4rem" }}>
              Calligraphy workshop.
            </div>
            <SceneRow
              time="3 – 6 PM"
              title="VAST Bhutan"
              note="Slow, deliberate marks."
              accent
            />
            <SceneRow time="after" title="Back to college" note="" />
            <Btn onClick={() => goTo(8)} label="end" />
            <PageDots total={TOTAL} current={page} goTo={goTo} />
          </div>
        )}

        {/* ── Page 8: Closing ── */}
        {page === 8 && (
          <div style={screen} className="di-screen">
            <div style={{ display:"flex", gap:"1.4rem", marginBottom:"1.8rem", opacity:0.55 }}>
              <CosmosFlower size={44} /><CosmosFlower size={28} opacity={0.35} /><CosmosFlower size={44} />
            </div>
            <div style={eyebrow}>so yeah</div>
            <img
              src="/gifpuk_files/200.webp"
              alt="gifpuk sticker"
              className="di-sticker"
              style={{ width:120, height:"auto", marginBottom:"1rem" }}
            />
            <div style={{ fontFamily:"'DM Serif Display',serif", fontStyle:"italic", fontSize:"2rem", color:"#1e4d5e", lineHeight:1.3, marginBottom:"0.8rem" }}>
              cant wait
            </div>
            <Divider />
            <div style={{ fontFamily:"'Lato',sans-serif", fontStyle:"italic", fontSize:"0.95rem", color:"#5a8a9a", lineHeight:1.7, maxWidth:260, marginBottom:"2rem" }}>
              <br />
              Let me know what you think. 🌸
            </div>
            <Btn onClick={() => goTo(0)} label="start over" />
            <PageDots total={TOTAL} current={page} goTo={goTo} />
          </div>
        )}
      </div>
    </>
  );
}