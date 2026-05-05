import { useNavigate } from "react-router-dom";
import {
  LineChart, Line, BarChart, Bar,
  XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer,
} from "recharts";

// ─── Design tokens ──────────────────────────────────────────
const C = {
  bloom:   "#879b54",
  dark:    "#6a7a40",
  deeper:  "#2c3619",
  pale:    "#f0f4e4",
  mist:    "#e4eccc",
  cream:   "#F3EBD8",
  ink:     "#2a2e1e",
  soft:    "#5a6040",
  faint:   "#8a9170",
  muted:   "#B6BB79",
};

// ─── Data ───────────────────────────────────────────────────
const chartData = [
  { name: "Jan", orders: 120, revenue: 3500 },
  { name: "Feb", orders: 150, revenue: 4200 },
  { name: "Mar", orders: 140, revenue: 3800 },
  { name: "Apr", orders: 180, revenue: 5100 },
  { name: "May", orders: 210, revenue: 6000 },
  { name: "Jun", orders: 250, revenue: 7500 },
];

const topProducts = [
  { id: 1, name: "Signature Matcha Latte",   sales: 428, price: "Rp 35.000", pct: 85 },
  { id: 2, name: "Matcha Mille Crepes",       sales: 315, price: "Rp 45.000", pct: 63 },
  { id: 3, name: "Iced Strawberry Matcha",    sales: 284, price: "Rp 40.000", pct: 57 },
  { id: 4, name: "Classic Matcha Cookies",    sales: 196, price: "Rp 25.000", pct: 39 },
];

const recentOrders = [
  { id: "#BB-1042", customer: "Ayu Lestari",    item: "Matcha Latte ×2",        status: "done",    total: "Rp 70.000" },
  { id: "#BB-1041", customer: "Reza Firmansyah", item: "Mille Crepes ×1",        status: "process", total: "Rp 45.000" },
  { id: "#BB-1040", customer: "Sinta Maharani",  item: "Strawberry Matcha ×3",   status: "done",    total: "Rp 120.000" },
  { id: "#BB-1039", customer: "Dika Pratama",    item: "Matcha Cookies ×4",       status: "cancel",  total: "Rp 100.000" },
  { id: "#BB-1038", customer: "Nisa Rahayu",     item: "Matcha Latte ×1",         status: "done",    total: "Rp 35.000" },
];

// ─── Custom Tooltip ─────────────────────────────────────────
function CustomTooltip({ active, payload, label, prefix = "" }) {
  if (!active || !payload?.length) return null;
  return (
    <div style={{
      background: "#fff", border: `1px solid ${C.mist}`,
      borderRadius: 10, padding: "10px 14px", fontSize: 13,
    }}>
      <p style={{ color: C.faint, marginBottom: 4, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.06em" }}>{label}</p>
      <p style={{ color: C.deeper, fontWeight: 700, fontSize: 15 }}>
        {prefix}{payload[0].value.toLocaleString("id-ID")}
      </p>
    </div>
  );
}

// ─── KPI Card ───────────────────────────────────────────────
function KpiCard({ icon, value, label, delta, iconBg, iconColor }) {
  return (
    <div style={{
      background: "#fff", borderRadius: 16, padding: "22px 24px",
      border: `1px solid ${C.mist}`, display: "flex", alignItems: "center", gap: 16,
      transition: "transform 0.2s",
    }}
      onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px)"}
      onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
    >
      <div style={{
        width: 52, height: 52, borderRadius: 14,
        background: iconBg, display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0,
      }}>
        {icon(iconColor)}
      </div>
      <div style={{ flex: 1 }}>
        <p style={{ fontSize: 22, fontWeight: 700, color: C.ink, lineHeight: 1 }}>{value}</p>
        <p style={{ fontSize: 12.5, color: C.faint, marginTop: 4, fontWeight: 500 }}>{label}</p>
      </div>
      {delta && (
        <span style={{
          fontSize: 11, fontWeight: 600, padding: "3px 8px", borderRadius: 20,
          background: delta > 0 ? "#edf7ee" : "#fdf0f0",
          color: delta > 0 ? "#3a8a3a" : "#cc4444",
        }}>
          {delta > 0 ? "↑" : "↓"} {Math.abs(delta)}%
        </span>
      )}
    </div>
  );
}

// ─── Status badge ────────────────────────────────────────────
function StatusBadge({ status }) {
  const map = {
    done:    { label: "Completed", bg: "#edf7ee", color: "#3a8a3a" },
    process: { label: "On Process", bg: "#fff8e1", color: "#b07800" },
    cancel:  { label: "Cancelled",  bg: "#fdf0f0", color: "#cc4444" },
  };
  const s = map[status] || map.done;
  return (
    <span style={{
      fontSize: 11, fontWeight: 600, padding: "3px 9px", borderRadius: 20,
      background: s.bg, color: s.color,
    }}>{s.label}</span>
  );
}

// ─── Section wrapper ─────────────────────────────────────────
function Card({ children, style = {} }) {
  return (
    <div style={{
      background: "#fff", borderRadius: 16,
      border: `1px solid ${C.mist}`,
      overflow: "hidden", ...style,
    }}>
      {children}
    </div>
  );
}

function CardHeader({ title, action }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "20px 24px 0",
    }}>
      <p style={{ fontSize: 15, fontWeight: 700, color: C.deeper }}>{title}</p>
      {action}
    </div>
  );
}

// ─── SVG Icons (no external deps) ────────────────────────────
const icons = {
  cart:    (c) => <svg width="22" height="22" fill="none" stroke={c} strokeWidth="1.8" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>,
  check:   (c) => <svg width="22" height="22" fill="none" stroke={c} strokeWidth="1.8" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
  x:       (c) => <svg width="22" height="22" fill="none" stroke={c} strokeWidth="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>,
  trend:   (c) => <svg width="22" height="22" fill="none" stroke={c} strokeWidth="1.8" viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
  userPlus:(c) => <svg width="17" height="17" fill="none" stroke={c} strokeWidth="1.8" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>,
  plus:    (c) => <svg width="17" height="17" fill="none" stroke={c} strokeWidth="2.2" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>,
  leaf:    (c) => <svg width="14" height="14" fill="none" stroke={c} strokeWidth="1.8" viewBox="0 0 24 24"><path d="M12 3C8 3 5 6.5 5 10c0 2.5 1.5 4.5 3.5 5.5S12 21 12 21s1.5-3 3.5-5.5S19 12.5 19 10c0-3.5-3-7-7-7z"/><line x1="12" y1="10" x2="12" y2="21"/></svg>,
};

// ─── Main Dashboard ──────────────────────────────────────────
export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div style={{
      padding: "32px 36px", maxWidth: 1280, margin: "0 auto",
      background: C.cream, minHeight: "100vh",
      fontFamily: "'Outfit', 'DM Sans', sans-serif",
    }}>

      {/* ── Page header ── */}
      <div style={{fontFamily: "Oswald", display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 32, flexWrap: "wrap", gap: 16 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
            {icons.leaf(C.bloom)}
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: C.bloom }}>
              BloomBites Admin
            </span>
          </div>
          <h1 style={{ fontSize: 28, fontWeight: 700, color: C.ink, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
            Dashboard Overview
          </h1>
          <p style={{ fontFamily: "Aldarich", fontSize: 13.5, color: C.faint, marginTop: 6 }}>
            Welcome back — here's what's happening at BloomBites today.
          </p>
        </div>

        <div style={{ display: "flex", gap: 10 }}>
          <button
            onClick={() => navigate("/customers/add")}
            style={{
              display: "flex", alignItems: "center", gap: 7,
              background: "#fff", border: `1px solid ${C.mist}`,
              color: C.soft, padding: "9px 18px", borderRadius: 10,
              fontSize: 13.5, fontWeight: 600, cursor: "pointer",
              transition: "all 0.18s",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = C.bloom; e.currentTarget.style.color = C.bloom; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = C.mist; e.currentTarget.style.color = C.soft; }}
          >
            {icons.userPlus(C.bloom)} Add Customer
          </button>

          <button
            onClick={() => navigate("/orders/add")}
            style={{
              display: "flex", alignItems: "center", gap: 7,
              background: C.bloom, border: "none",
              color: "#fff", padding: "9px 20px", borderRadius: 10,
              fontSize: 13.5, fontWeight: 600, cursor: "pointer",
              transition: "all 0.18s",
            }}
            onMouseEnter={e => e.currentTarget.style.background = C.dark}
            onMouseLeave={e => e.currentTarget.style.background = C.bloom}
          >
            {icons.plus("#fff")} New Order
          </button>
        </div>
      </div>

      {/* ── KPI Row ── */}
      <div style={{ fontFamily: "Oswald", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 28 }}>
        <KpiCard icon={icons.cart}  value="1,050"    label="Total Orders"   delta={8}   iconBg="#e8f0fb" iconColor="#4a7fd4" />
        <KpiCard icon={icons.check} value="985"      label="Completed"      delta={12}  iconBg="#edf7ee" iconColor="#3a8a3a" />
        <KpiCard icon={icons.x}     value="65"       label="Cancelled"      delta={-3}  iconBg="#fdf0f0" iconColor="#cc4444" />
        <KpiCard icon={icons.trend} value="Rp 30.1M" label="Total Revenue"  delta={18}  iconBg={C.pale}  iconColor={C.bloom} />
      </div>

      {/* ── Charts + Bestsellers ── */}
      <div style={{ fontFamily: "Oswald", display: "grid", gridTemplateColumns: "1fr 1fr 340px", gap: 20, marginBottom: 24 }}>

        {/* Line chart */}
        <Card>
          <CardHeader
            title="Revenue Trends"
            action={
              <span style={{ fontSize: 11, fontWeight: 600, color: C.bloom, letterSpacing: "0.04em", textTransform: "uppercase" }}>
                Jan – Jun 2025
              </span>
            }
          />
          <div style={{ padding: "20px 20px 16px" }}>
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={chartData} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={C.mist} />
                <XAxis dataKey="name" axisLine={false} tickLine={false}
                  tick={{ fill: C.faint, fontSize: 12 }} dy={8} />
                <YAxis axisLine={false} tickLine={false}
                  tick={{ fill: C.faint, fontSize: 11 }} />
                <Tooltip content={<CustomTooltip prefix="Rp " />} />
                <Line
                  type="monotone" dataKey="revenue" stroke={C.bloom}
                  strokeWidth={3} dot={{ r: 4, fill: "#fff", stroke: C.bloom, strokeWidth: 2 }}
                  activeDot={{ r: 6, fill: C.bloom }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Bar chart */}
        <Card>
          <CardHeader
            title="Orders Volume"
            action={
              <span style={{ fontSize: 11, fontWeight: 600, color: C.faint, letterSpacing: "0.04em", textTransform: "uppercase" }}>
                Monthly
              </span>
            }
          />
          <div style={{ padding: "20px 20px 16px" }}>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={chartData} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={C.mist} />
                <XAxis dataKey="name" axisLine={false} tickLine={false}
                  tick={{ fill: C.faint, fontSize: 12 }} dy={8} />
                <YAxis axisLine={false} tickLine={false}
                  tick={{ fill: C.faint, fontSize: 11 }} />
                <Tooltip cursor={{ fill: C.pale }} content={<CustomTooltip />} />
                <Bar dataKey="orders" fill={C.deeper} radius={[6, 6, 0, 0]} barSize={28} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Best sellers */}
        <Card>
          <CardHeader
            title="Best Sellers"
            action={
              <button style={{ fontFamily: "Oswald", fontSize: 12.5, fontWeight: 600, color: C.bloom, background: "none", border: "none", cursor: "pointer" }}>
                View All
              </button>
            }
          />
          <div style={{ padding: "18px 24px 20px" }}>
            {topProducts.map((p, i) => (
              <div key={p.id} style={{ marginBottom: i < topProducts.length - 1 ? 18 : 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 7 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: C.muted, width: 14, textAlign: "center" }}>
                    {i + 1}
                  </span>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: 13, fontWeight: 600, color: C.ink, marginBottom: 1,
                      whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: 180 }}>
                      {p.name}
                    </p>
                    <p style={{ fontSize: 11, color: C.faint }}>{p.price} · {p.sales} sold</p>
                  </div>
                </div>
                {/* Progress bar */}
                <div style={{ marginLeft: 24, height: 4, background: C.mist, borderRadius: 99 }}>
                  <div style={{
                    height: "100%", borderRadius: 99,
                    background: i === 0 ? C.bloom : i === 1 ? C.dark : C.faint,
                    width: `${p.pct}%`,
                    transition: "width 0.6s",
                  }} />
                </div>
              </div>
            ))}

            {/* Tip */}
            <div style={{
              marginTop: 22, background: C.pale, borderRadius: 12,
              padding: "14px 16px", border: `1px solid ${C.mist}`,
            }}>
              <p style={{ fontSize: 12, fontWeight: 700, color: C.deeper, marginBottom: 5 }}>
                Insight
              </p>
              <p style={{ fontSize: 11.5, color: C.soft, lineHeight: 1.6 }}>
                Matcha Latte sales up <strong style={{ color: C.bloom }}>24%</strong> this week. Try a weekend promo to push further!
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* ── Recent Orders Table ── */}
      <Card>
        <CardHeader
          title="Recent Orders"
          action={
            <button style={{ fontFamily: "Oswald", fontSize: 12.5, fontWeight: 600, color: C.bloom, background: "none", border: "none", cursor: "pointer" }}>
              View All Orders
            </button>
          }
        />
        <div style={{ fontFamily: "Oswald", padding: "16px 0 0" }}>
          {/* Table head */}
          <div style={{
            display: "grid", gridTemplateColumns: "110px 1fr 1.4fr 120px 110px",
            padding: "0 24px 10px",
            borderBottom: `1px solid ${C.mist}`,
          }}>
            {["Order ID","Customer","Item","Status","Total"].map(h => (
              <p key={h} style={{ fontSize: 10.5, fontWeight: 600, color: C.faint, letterSpacing: "0.08em", textTransform: "uppercase" }}>{h}</p>
            ))}
          </div>

          {recentOrders.map((o, i) => (
            <div key={o.id}
              style={{
                display: "grid", gridTemplateColumns: "110px 1fr 1.4fr 120px 110px",
                padding: "14px 24px", alignItems: "center",
                borderBottom: i < recentOrders.length - 1 ? `1px solid ${C.mist}` : "none",
                transition: "background 0.15s", cursor: "pointer",
              }}
              onMouseEnter={e => e.currentTarget.style.background = C.pale}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            >
              <p style={{ fontSize: 13, fontWeight: 700, color: C.bloom }}>{o.id}</p>
              <p style={{ fontSize: 13.5, fontWeight: 600, color: C.ink }}>{o.customer}</p>
              <p style={{ fontSize: 13, color: C.soft }}>{o.item}</p>
              <StatusBadge status={o.status} />
              <p style={{ fontSize: 13.5, fontWeight: 700, color: C.deeper }}>{o.total}</p>
            </div>
          ))}
        </div>
      </Card>

    </div>
  );
}