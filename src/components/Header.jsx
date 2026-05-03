import { useState } from "react";

const C = {
  bloom:   "#879b54",
  dark:    "#6a7a40",
  deeper:  "#4e5b2e",
  light:   "#a8bc72",
  pale:    "#f0f4e4",
  mist:    "#e4eccc",
  cream:   "#faf8f3",
  ink:     "#2a2e1e",
  soft:    "#5a6040",
  faint:   "#8a9170",
};

const FlowerIcon = () => (
  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path d="M12 3C8 3 5 6.5 5 10c0 2.5 1.5 4.5 3.5 5.5S12 21 12 21s1.5-3 3.5-5.5S19 12.5 19 10c0-3.5-3-7-7-7z"/>
    <line x1="12" y1="10" x2="12" y2="21"/>
  </svg>
);

function IconBtn({ children, title }) {
  return (
    <button
      title={title}
      className="relative w-[38px] h-[38px] flex items-center justify-center rounded-[10px] border transition-all duration-200 cursor-pointer"
      style={{ border: "1px solid transparent", background: "transparent", color: C.faint }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(135,155,84,0.3)"; e.currentTarget.style.background = C.pale; e.currentTarget.style.color = C.dark; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = "transparent"; e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = C.faint; }}
    >
      {children}
    </button>
  );
}

export default function Header() {
  const [rot, setRot] = useState(0);

  return (
    <header
      className="relative flex items-center justify-between px-7 h-[70px] gap-5 sticky top-0 z-50"
      style={{ background: C.cream, borderBottom: `1px solid rgba(135,155,84,0.2)` }}
    >
      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#879b54] via-[#879b54]/30 to-transparent" />

      {/* ── Brand ── */}
      <div className="flex items-center gap-3 flex-shrink-0">
        <div className="w-9 h-9 rounded-[11px] flex items-center justify-center relative overflow-hidden" style={{ background: C.bloom }}>
          <div className="absolute inset-0 bg-white/10" />
          <FlowerIcon />
        </div>
        <div>
          <p className="font-['Playfair_Display'] font-semibold text-[21px] leading-none tracking-[-0.01em]" style={{ color: C.deeper }}>
            Bloom<em className="not-italic font-['Playfair_Display'] italic font-medium" style={{ color: C.bloom }}>Bites</em>
          </p>
          <p className="text-[10px] font-medium uppercase tracking-[0.1em] mt-0.5" style={{ color: C.faint }}>
            Admin Panel
          </p>
        </div>
      </div>

      {/* ── Search ── */}
      <div className="relative flex-1 max-w-[420px] group">
        <svg
          className="absolute left-3.5 top-1/2 -translate-y-1/2 w-[14px] h-[14px] pointer-events-none transition-colors duration-200"
          style={{ color: C.faint }}
          fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <input
          type="text"
          placeholder="Search menu, orders, ingredients…"
          className="w-full h-10 pl-[38px] pr-[76px] rounded-[10px] text-[13px] outline-none transition-all duration-200"
          style={{ background: "#fff", border: "1px solid rgba(135,155,84,0.25)", color: C.ink, fontFamily: "inherit" }}
          onFocus={e => { e.target.style.borderColor = C.bloom; e.target.style.boxShadow = "0 0 0 3px rgba(135,155,84,0.1)"; }}
          onBlur={e => { e.target.style.borderColor = "rgba(135,155,84,0.25)"; e.target.style.boxShadow = "none"; }}
        />
        <div className="absolute right-2.5 top-1/2 -translate-y-1/2 hidden md:flex gap-1">
          {["⌘","K"].map(k => (
            <span key={k} className="px-1.5 py-0.5 rounded-[5px] text-[10px] font-semibold" style={{ background: C.pale, border: "1px solid rgba(135,155,84,0.3)", color: C.dark }}>
              {k}
            </span>
          ))}
        </div>
      </div>

      {/* ── Right ── */}
      <div className="flex items-center gap-1.5">

        {/* Live badge */}
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-[5px] rounded-full text-[11px] font-semibold mr-1" style={{ background: C.pale, border: "1px solid rgba(135,155,84,0.3)", color: C.deeper }}>
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: C.bloom }} />
          Live
        </div>

        <IconBtn title="Analytics">
          <svg className="w-[17px] h-[17px]" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
          </svg>
        </IconBtn>

        {/* Settings */}
        <button
          title="Settings"
          className="relative w-[38px] h-[38px] flex items-center justify-center rounded-[10px] transition-all duration-200"
          style={{ border: "1px solid transparent", background: "transparent", color: C.faint, cursor: "pointer" }}
          onMouseEnter={e => { setRot(r => r + 90); e.currentTarget.style.borderColor = "rgba(135,155,84,0.3)"; e.currentTarget.style.background = C.pale; e.currentTarget.style.color = C.dark; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = "transparent"; e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = C.faint; }}
        >
          <svg style={{ transform: `rotate(${rot}deg)`, transition: "transform 0.4s", width: 17, height: 17 }} fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="3"/>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
          </svg>
        </button>

        {/* Notifications */}
        <IconBtn title="Notifications">
          <svg className="w-[17px] h-[17px]" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
          </svg>
          <span className="absolute top-2 right-2 w-[7px] h-[7px] rounded-full bg-red-400" style={{ border: `1.5px solid ${C.cream}` }} />
        </IconBtn>

        {/* Divider */}
        <div className="hidden md:block w-px h-6 mx-2" style={{ background: "rgba(135,155,84,0.2)" }} />

        {/* Profile */}
        <button
          className="hidden md:flex items-center gap-2.5 p-[5px] pr-3 rounded-xl transition-all duration-200 select-none"
          style={{ border: "1px solid transparent", background: "transparent", cursor: "pointer" }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(135,155,84,0.3)"; e.currentTarget.style.background = C.pale; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = "transparent"; e.currentTarget.style.background = "transparent"; }}
        >
          <div className="w-9 h-9 rounded-[10px] flex items-center justify-center text-[12px] font-semibold text-white flex-shrink-0 relative" style={{ background: C.bloom }}>
            MR
            <div className="absolute inset-0 rounded-[10px] border border-white/25" />
          </div>
          <div className="flex flex-col items-start">
            <span className="text-[10px] font-medium uppercase tracking-[0.08em] leading-none mb-0.5" style={{ color: C.faint }}>Admin</span>
            <span className="text-[13.5px] font-semibold leading-tight" style={{ color: C.ink }}>Amel</span>
          </div>
          <svg className="w-3.5 h-3.5 ml-1" fill="none" stroke={C.faint} strokeWidth="2" viewBox="0 0 24 24">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </button>

        {/* Mobile avatar only */}
        <button className="md:hidden w-9 h-9 rounded-[10px] flex items-center justify-center text-[12px] font-semibold text-white" style={{ background: C.bloom }}>
          MR
        </button>

      </div>
    </header>
  );
}