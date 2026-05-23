"use client";

import { useEffect, useRef, useState } from "react";
import {
  CosmosFlower,
  DaisyFlower,
  Divider,
  SceneRow,
  DateStepDots,
  Btn,
  spawnConfetti,
  pseudoRandom,
  floating,
  LoadingScreen,
} from "../components/date/date-ui";

export default function DateItinerary() {
  const [loaded, setLoaded] = useState(false);
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
    "No", "Are you sure?", "I'll behave", "Pleaseee",
    "Really sure?", "Come on 😭", "Last chance...", "Okay fine... yes?",
  ];
  const hints = [
    "it's running away 🙈", "it really doesn't want to be pressed...",
    "more yes buttons appearing...", "getting smaller 👀",
    "basically microscopic now", "just press yes lol", "last chance (not really)",
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

  return (
    <>
      {!loaded && <LoadingScreen onDone={() => setLoaded(true)} />}

      <div
        className="date-page"
        style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.4s ease" }}
      >

        {/* Floating flowers */}
        <div style={{ position:"fixed", inset:0, pointerEvents:"none", zIndex:1 }}>
          {floating.map((f, i) => (
            <div key={i} className="di-float" style={{
              left: f.x, top: f.y,
              animationDelay: `${f.delay}s`,
              "--float-x": `${(f.dx ?? 10) * (0.7 + pseudoRandom(floatSeed, i, 1) * 0.9)}px`,
              "--float-y": `${(f.dy ?? -12) * (0.7 + pseudoRandom(floatSeed, i, 2) * 0.9)}px`,
              "--float-r": `${(f.rot ?? 8) * (0.7 + pseudoRandom(floatSeed, i, 3) * 0.9)}deg`,
              "--float-d": `${(f.dur ?? 7) * 1.2}s`,
            } as React.CSSProperties}>
              {f.kind === "daisy"
                ? <DaisyFlower size={f.size} opacity={0.7} petalColor={f.color} centerColor={f.centerColor} />
                : <CosmosFlower size={f.size} opacity={0.32} color={f.color} />}
            </div>
          ))}
        </div>

        {/* Blobs */}
        <div style={{ position:"fixed", inset:0, pointerEvents:"none", zIndex:0, overflow:"hidden" }}>
          <div style={{ position:"absolute", width:500, height:500, borderRadius:"50%", background:"radial-gradient(circle,rgba(91,184,212,0.18) 0%,transparent 70%)", top:"-10%", right:"-8%", filter:"blur(40px)" }} />
          <div style={{ position:"absolute", width:400, height:400, borderRadius:"50%", background:"radial-gradient(circle,rgba(147,213,232,0.14) 0%,transparent 70%)", bottom:"5%", left:"-6%", filter:"blur(40px)" }} />
        </div>

        <div ref={confettiRef} style={{ position:"fixed", inset:0, pointerEvents:"none", overflow:"hidden", zIndex:10 }} />

        {/* ── Page 0: I want to tell you something ── */}
        {page === 0 && (
          <div className="date-screen di-screen">
            <img src="/gifpuk_files/200(30).webp" alt="" className="di-sticker"
              style={{ width:140, height:"auto", marginBottom:"1.3rem" }} />
            <div className="date-eyebrow">hey</div>
            <div className="date-big">I want to tell<br />you something.</div>
            <Btn onClick={() => goTo(1)} label="tell me ↓" />
            <DateStepDots total={TOTAL} current={page} goTo={goTo} />
          </div>
        )}

        {/* ── Page 1: I think you're really cute ── */}
        {page === 1 && (
          <div className="date-screen di-screen">
            <div style={{ marginBottom:"1.8rem" }}>
              <CosmosFlower size={56} opacity={0.6} />
            </div>
            <img src="/gifpuk_files/200(5).webp" alt="" className="di-sticker"
              style={{ width:120, height:"auto", marginBottom:"1.2rem" }} />
            <div className="date-eyebrow">okay so</div>
            <div className="date-big">I think you're<br />really cute.</div>
            <div style={{ display:"flex", gap:"0.8rem", marginBottom:"2rem", opacity:0.5 }}>
              <CosmosFlower size={22} /><CosmosFlower size={16} opacity={0.35} /><CosmosFlower size={22} />
            </div>
            <Btn onClick={() => goTo(2)} label="okay... 🙈" />
            <DateStepDots total={TOTAL} current={page} goTo={goTo} />
          </div>
        )}

        {/* ── Page 2: I'd like to take you out ── */}
        {page === 2 && (
          <div className="date-screen di-screen">
            <div style={{ marginBottom:"1.8rem", opacity:0.55 }}>
              <CosmosFlower size={48} />
            </div>
            <img src="/gifpuk_files/200(15).webp" alt="" className="di-sticker"
              style={{ width:120, height:"auto", marginBottom:"1.2rem" }} />
            <div className="date-eyebrow">and also</div>
            <div className="date-big">I'd like to<br />take you out<br />sometime.</div>
            <div className="date-sub">An actual date.</div>
            <Btn onClick={() => goTo(3)} label="keep going ↓" />
            <DateStepDots total={TOTAL} current={page} goTo={goTo} />
          </div>
        )}

        {/* ── Page 3: Buildup ── */}
        {page === 3 && (
          <div className="date-screen di-screen">
            <img src="/gifpuk_files/200(7).webp" alt="" className="di-sticker"
              style={{ width:140, height:"auto", marginBottom:"1.4rem" }} />
            <Btn onClick={() => goTo(4)} label="so the question is... ↓" />
            <DateStepDots total={TOTAL} current={page} goTo={goTo} />
          </div>
        )}

        {/* ── Page 4: The Ask ── */}
        {page === 4 && (
          <div className="date-screen di-screen">
            <div style={{ marginBottom:"1.6rem", opacity:0.5 }}>
              <CosmosFlower size={52} />
            </div>
            <div className="date-eyebrow">so, the question is</div>
            <div className="date-big">Will you go on<br />a date with me?</div>

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
                }}>yes 💙</button>
              ))}

              <button onClick={handleYes} style={{
                fontFamily:"'Josefin Sans',sans-serif", fontSize:"0.65rem", letterSpacing:"0.22em",
                textTransform:"uppercase", fontWeight:400, color:"#fff",
                background:"linear-gradient(135deg,#5bb8d4,#3da0c0)",
                border:"none", padding:"13px 36px", borderRadius:99, cursor:"pointer",
                boxShadow:"0 4px 20px rgba(91,184,212,0.4)", position:"relative", zIndex:2,
              }}>Yes!! 🌸</button>

              {!noGone && (
                <button
                  onMouseEnter={dodgeNo} onTouchStart={dodgeNo} onClick={dodgeNo}
                  style={{
                    position:"absolute", left:"50%", top:"50%",
                    transform:`translate(calc(-50% + ${noDx}px), calc(30px + ${noDy}px))`,
                    fontFamily:"'Josefin Sans',sans-serif", fontSize:"0.58rem", letterSpacing:"0.18em",
                    textTransform:"uppercase", fontWeight:300,
                    color:"rgba(30,77,94,0.95)",
                    background:"rgba(255,255,255,0.4)", border:"1px solid rgba(91,184,212,0.3)",
                    padding:"8px 20px", borderRadius:99, cursor:"pointer",
                    opacity: 0.9,
                    scale:`${Math.max(0.5, 1 - noCount * 0.04)}`,
                    transition:"transform 0.18s cubic-bezier(0.34,1.56,0.64,1), opacity 0.25s",
                    backdropFilter:"blur(4px)", whiteSpace:"nowrap",
                  }}
                >{noLabels[Math.min(noCount, noLabels.length - 1)]}</button>
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
            <DateStepDots total={TOTAL} current={page} goTo={goTo} />
          </div>
        )}

        {/* ── Page 5: Friday Evening ── */}
        {page === 5 && (
          <div className="date-screen di-screen">
            <div className="date-eyebrow">friday · 15 may</div>
            <div style={{ fontFamily:"'DM Serif Display',serif", fontStyle:"italic", fontSize:"1.9rem", color:"#1e4d5e", lineHeight:1.25, marginBottom:"1.4rem" }}>The evening.</div>
            <SceneRow time="afternoon" title="Head into town" note="" />
            <SceneRow time="evening" title="Dinner" note="Somewhere with good light and better food." />
            <SceneRow time="maybe" title="VAST Bhutan" note="If the timing lines up." optional />
            <SceneRow time="after" title="Walk around" note="" />
            <SceneRow time="later" title="Drinks" note="Naughty Pigs, Lassi, or Blackout." accent />
            <Btn onClick={() => goTo(6)} label="and then ↓" />
            <DateStepDots total={TOTAL} current={page} goTo={goTo} />
          </div>
        )}

        {/* ── Page 6: Night ── */}
        {page === 6 && (
          <div className="date-screen di-screen">
            <div className="date-eyebrow">back at the room</div>
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
            <DateStepDots total={TOTAL} current={page} goTo={goTo} />
          </div>
        )}

        {/* ── Page 7: Calligraphy Workshop ── */}
        {page === 7 && (
          <div className="date-screen di-screen">
            <div className="date-eyebrow">day two · saturday potentially</div>
            <div style={{ fontFamily:"'DM Serif Display',serif", fontStyle:"italic", fontSize:"1.9rem", color:"#1e4d5e", lineHeight:1.25, marginBottom:"1.4rem" }}>
              Calligraphy workshop.
            </div>
            <SceneRow time="3 – 6 PM" title="VAST Bhutan" note="Slow, deliberate marks." accent />
            <SceneRow time="after" title="Back to college" note="" />
            <Btn onClick={() => goTo(8)} label="and finally ↓" />
            <DateStepDots total={TOTAL} current={page} goTo={goTo} />
          </div>
        )}

        {/* ── Page 8: Closing ── */}
        {page === 8 && (
          <div className="date-screen di-screen">
            <div style={{ display:"flex", gap:"1.4rem", marginBottom:"1.8rem", opacity:0.55 }}>
              <CosmosFlower size={44} /><CosmosFlower size={28} opacity={0.35} /><CosmosFlower size={44} />
            </div>
            <div className="date-eyebrow">so yeah</div>
            <img src="/gifpuk_files/200.webp" alt="" className="di-sticker"
              style={{ width:120, height:"auto", marginBottom:"1rem" }} />
            <div style={{ fontFamily:"'DM Serif Display',serif", fontStyle:"italic", fontSize:"2rem", color:"#1e4d5e", lineHeight:1.3, marginBottom:"0.8rem" }}>
              cant wait
            </div>
            <Divider />
            <div style={{ fontFamily:"'Lato',sans-serif", fontStyle:"italic", fontSize:"0.95rem", color:"#5a8a9a", lineHeight:1.7, maxWidth:260, marginBottom:"2rem" }}>
              Let me know what you think. 🌸
            </div>
            <Btn onClick={() => goTo(0)} label="start over" />
            <DateStepDots total={TOTAL} current={page} goTo={goTo} />
          </div>
        )}

      </div>
    </>
  );
}