import { NavLink } from "react-router-dom";

const C = {
  bloom:  "#879b54",
  dark:   "#6a7a40",
  deeper: "#2c3619",
  pale:   "#f0f4e4",
  faint:  "#8a9170",
  muted:  "#b8bfaa",
  bd:     "rgba(135,155,84,0.15)",
};

// ── Icon components ──────────────────────────────────────────
const FlowerIcon = () => (
  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path d="M12 3C8 3 5 6.5 5 10c0 2.5 1.5 4.5 3.5 5.5S12 21 12 21s1.5-3 3.5-5.5S19 12.5 19 10c0-3.5-3-7-7-7z"/>
    <line x1="12" y1="10" x2="12" y2="21"/>
  </svg>
);
const DashIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
    <rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/>
    <rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>
  </svg>
);
const OrderIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
    <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/>
    <rect x="9" y="3" width="6" height="4" rx="1"/>
    <line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="13" y2="16"/>
  </svg>
);
const CustomerIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const WarnIcon = ({ color }) => (
  <svg className="w-[15px] h-[15px] flex-shrink-0" fill="none" stroke={color} strokeWidth="1.7" viewBox="0 0 24 24">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
    <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
);
const LockIcon = ({ color }) => (
  <svg className="w-[15px] h-[15px] flex-shrink-0" fill="none" stroke={color} strokeWidth="1.7" viewBox="0 0 24 24">
    <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);
const BanIcon = ({ color }) => (
  <svg className="w-[15px] h-[15px] flex-shrink-0" fill="none" stroke={color} strokeWidth="1.7" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10"/>
    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
  </svg>
);
const PlusIcon = () => (
  <svg className="w-[14px] h-[14px]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
  </svg>
);

// ── Sub-components ────────────────────────────────────────────
function SectionLabel({ children }) {
  return (
    <p className="text-[10px] font-semibold uppercase tracking-[0.12em] px-3 mb-2" style={{ color: C.faint }}>
      {children}
    </p>
  );
}

function NavItem({ to, end, icon, label, badge }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `flex items-center gap-2.5 px-3 py-[9px] rounded-[10px] text-[13.5px] font-medium mb-0.5 border transition-all duration-200 no-underline
        ${isActive
          ? "text-white border-transparent"
          : "border-transparent hover:border-[rgba(135,155,84,0.2)]"
        }`
      }
      style={({ isActive }) => ({
        background: isActive ? C.bloom : "transparent",
        color: isActive ? "#fff" : C.faint,
      })}
      onMouseEnter={e => {
        if (!e.currentTarget.classList.contains("active")) {
          e.currentTarget.style.background = C.pale;
          e.currentTarget.style.color = C.dark;
        }
      }}
      onMouseLeave={e => {
        if (!e.currentTarget.classList.contains("active")) {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.color = C.faint;
        }
      }}
    >
      {({ isActive }) => (
        <>
          <span style={{ color: isActive ? "#fff" : C.faint }}>{icon}</span>
          <span className="flex-1">{label}</span>
          {badge && (
            <span
              className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
              style={{
                background: isActive ? "rgba(255,255,255,0.2)" : "rgba(135,155,84,0.15)",
                color: isActive ? "#fff" : C.dark,
              }}
            >
              {badge}
            </span>
          )}
        </>
      )}
    </NavLink>
  );
}

function StatusItem({ to, icon, label, code, dotColor }) {
  return (
    <NavLink
      to={to}
      className="flex items-center gap-2.5 px-3 py-[9px] rounded-[10px] text-[13px] font-medium mb-0.5 no-underline transition-all duration-200"
      style={{ color: C.faint }}
      onMouseEnter={e => { e.currentTarget.style.background = C.pale; e.currentTarget.style.color = C.dark; }}
      onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = C.faint; }}
    >
      {icon}
      <span className="flex-1">{label}</span>
      <span className="text-[11px] mr-2" style={{ color: C.muted }}>{code}</span>
      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: dotColor }} />
    </NavLink>
  );
}

// ── Main Sidebar ──────────────────────────────────────────────
export default function Sidebar() {
  return (
    <aside
      className="w-64 h-screen flex-shrink-0 flex flex-col justify-between px-4 py-6 sticky top-0 z-40 hidden lg:flex"
      style={{ background: "#fff", borderRight: `1px solid ${C.bd}` }}
    >
      <div>
        {/* Brand */}
        <div className="flex items-center gap-3 px-2 mb-7">
          <div
            className="w-[38px] h-[38px] rounded-[11px] flex items-center justify-center flex-shrink-0"
            style={{ background: C.bloom }}
          >
            <FlowerIcon />
          </div>
          <div>
            <p className="font-['Playfair_Display'] font-semibold text-[20px] leading-none tracking-[-0.01em]" style={{ color: C.deeper }}>
              Bloom<em className="not-italic font-['Playfair_Display'] italic font-medium" style={{ color: C.bloom }}>Bites</em>
            </p>
            <p className="text-[10px] font-medium uppercase tracking-[0.1em] mt-0.5" style={{ color: C.faint }}>
              Admin Portal
            </p>
          </div>
        </div>

        {/* Main Menu */}
        <div className="mb-6">
          <SectionLabel>Main Menu</SectionLabel>
          <NavItem to="/" end icon={<DashIcon />} label="Dashboard" badge="New" />
          <NavItem to="/orders" icon={<OrderIcon />} label="Orders" badge="12" />
          <NavItem to="/customers" icon={<CustomerIcon />} label="Customers" />
        </div>

        {/* Divider */}
        <div className="h-px mb-6 mx-1" style={{ background: C.bd }} />

        {/* System Status */}
        <div>
          <SectionLabel>System Status</SectionLabel>
          <StatusItem to="/400" icon={<WarnIcon color="#e8a838" />} label="Bad Request" code="400" dotColor="#e8a838" />
          <StatusItem to="/401" icon={<LockIcon color="#6b8fd4" />} label="Unauthorized" code="401" dotColor="#6b8fd4" />
          <StatusItem to="/403" icon={<BanIcon color="#d95f5f" />} label="Forbidden" code="403" dotColor="#d95f5f" />
        </div>
      </div>

      {/* Bottom */}
      <div>
        {/* CTA Card */}
        <div className="rounded-[14px] p-[18px] mb-4 relative overflow-hidden" style={{ background: C.deeper }}>
          <div className="absolute -top-5 -right-5 w-20 h-20 rounded-full opacity-30" style={{ background: C.bloom }} />
          <p className="text-[12.5px] leading-relaxed mb-[14px] relative z-10" style={{ color: "#d4dcb8" }}>
            Ready to update your seasonal menu offerings?
          </p>
          <button
            className="w-full flex items-center justify-center gap-1.5 rounded-[9px] py-[9px] text-[12.5px] font-semibold text-white transition-all duration-200 active:scale-[0.98] relative z-10"
            style={{ background: C.bloom }}
            onMouseEnter={e => e.currentTarget.style.background = C.dark}
            onMouseLeave={e => e.currentTarget.style.background = C.bloom}
          >
            <PlusIcon />
            Add Menu Item
          </button>
        </div>

        {/* Footer */}
        <div className="px-1">
          <p className="text-[11.5px] font-medium" style={{ color: C.faint }}>BloomBites Admin</p>
          <p className="text-[10px] mt-0.5" style={{ color: C.muted }}>© 2025 All Rights Reserved</p>
        </div>
      </div>
    </aside>
  );
}