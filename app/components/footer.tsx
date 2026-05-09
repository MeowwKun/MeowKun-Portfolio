const footerLinks = [
  { label: "Video",       href: "#video",       col: "1 / span 7", row: "1 / span 1" },
  { label: "Photography", href: "#photography", col: "8 / span 5", row: "1 / span 1" },
  { label: "GitHub",      href: "#github",      col: "1 / span 4", row: "2 / span 1" },
  { label: "Art",         href: "#art",          col: "5 / span 4", row: "2 / span 2" },
  { label: "Instagram",   href: "#instagram",   col: "1 / span 4", row: "3 / span 1" },
  { label: "LinkedIn",    href: "#linkedin",    col: "9 / span 4", row: "2 / span 2" },
];

export default function Footer() {
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
          minHeight: "380px",
        }}
        data-reveal
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

        {/* Grid */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gridTemplateRows: "260px 160px 160px",
            gap: "0.75rem",
          }}
          data-stagger
        >
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="bg-white/80"
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
                boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0), 0 10px 28px rgba(0,0,0,0.25), 0 0 32px rgba(255, 255, 255, 0.96)",
                transition: "background 0.22s ease",
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
            marginTop: "1.75rem",
            display: "flex",
            flexWrap: "wrap",
            gap: "1.5rem",
            alignItems: "center",
            justifyContent: "space-between",
            color: "rgba(255, 255, 255, 0.85)",
            fontSize: "0.85rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", alignItems: "center" }}>
            <a
              href="mailto:sujal75.n@gmail.com"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              sujal75.n@gmail.com
            </a>
            <span>•</span>
            <a
              href="tel:+97517313524"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              +975-17313524
            </a>
            <span>•</span>
            <span>Thimphu, Bhutan</span>
          </div>
          <span>© MeowKun</span>
        </div>
      </div>
    </footer>
  );
}