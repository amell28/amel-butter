import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Users,
  Award,
  ShoppingCart,
  Coffee,
  HelpCircle,
  ArrowRight,
  Star,
  CheckCircle2,
  ChevronDown,
  ArrowUpRight,
  MessageSquare,
  Smartphone,
  Mail,
  Shield,
  Check,
  Zap,
  Play,
  Heart,
  Clock,
  Sparkles,
  Calendar,
  Compass,
  Phone,
  Gift,
  UserPlus,
  LogOut,
  User,
  Percent,
  Receipt,
  Tag,
  Copy
} from "lucide-react";

// 🎨 Theme Colors aligned with Matcha House & Dessert Cafe
const C = {
  coffee: "#3E2723",       // Primary Coffee Brown
  coffeeLight: "#5D4037",  // Light Coffee Brown
  matcha: "#6A7A40",       // Primary Matcha Green
  matchaBright: "#879B54", // Bright Matcha Green
  cream: "#FAF7F2",        // Background Soft Beige
  white: "#FFFFFF",        // White
  darkInk: "#271B15",      // Text primary color
  softGray: "#7D746F",     // Subtext
  borderCream: "#EAE4D9",  // Subtle border lines
  success: "#4CAF50",      // Success Green
  warning: "#FFC107",      // Warning Amber
};

export default function GuestLanding() {
  const navigate = useNavigate();

  // --- LOGIC AUTH MEMBER & CRM ---
  const [member, setMember] = useState(null);
  const [copiedCode, setCopiedCode] = useState("");

  // Data Dummy Riwayat Pesanan (Spesifik per member)
  const [orderHistory, setOrderHistory] = useState([
    {
      id: "TX-998231",
      date: "14 Juli 2026",
      items: "1x Signature Uji Matcha Latte, 1x Matcha Mille Crepes",
      total: 77000,
      pointsEarned: 77,
      status: "Selesai",
    },
    {
      id: "TX-995412",
      date: "08 Juli 2026",
      items: "2x Matcha Espresso Fusion",
      total: 76000,
      pointsEarned: 76,
      status: "Selesai",
    },
    {
      id: "TX-100412",
      date: "Hari Ini (Baru saja)",
      items: "1x Uji Matcha Tiramisu",
      total: 45000,
      pointsEarned: 45,
      status: "Sedang Disiapkan 🍵",
    }
  ]);

  // Data Promo Eksklusif Member
  const exclusivePromos = [
    {
      code: "MATCHA-MONDAY",
      title: "Matcha Monday Mania",
      desc: "Diskon 25% khusus hari Senin untuk semua varian Matcha Latte.",
      tag: "Diskon 25%"
    },
    {
      code: "BOGO-CREPES",
      title: "Buy 1 Get 1 Crepes",
      desc: "Beli 1 Matcha Mille Crepes dapat gratis 1 Cup Ice Cream Matcha.",
      tag: "Buy 1 Get 1"
    },
    {
      code: "VIP-ESCAPE",
      title: "VIP Room Bundle Deal",
      desc: "Reservasi area VIP Room minimal 4 Pax gratis 1 teko Genmaicha Tea.",
      tag: "Free Genmaicha"
    }
  ];

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        if (parsedUser && parsedUser.role === "member") {
          setMember(parsedUser);
          setBookingName(parsedUser.username || "");
          setBookingEmail(parsedUser.email || "");
        }
      } catch (e) {
        console.error("Gagal membaca session user", e);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setMember(null);
    window.location.reload(); 
  };

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(""), 2000);
  };
  // -------------------------

  // State CRM - Simulasi Kalkulator Poin Mandiri
  const [inputBelanja, setInputBelanja] = useState(150000);

  // State CRM - Reservasi Meja (Table Booking)
  const [bookingName, setBookingName] = useState("");
  const [bookingEmail, setBookingEmail] = useState("");
  const [bookingPhone, setBookingPhone] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const [bookingPax, setBookingPax] = useState("2");
  const [bookingArea, setBookingArea] = useState("Indoor (AC)");
  const [bookingNotes, setBookingNotes] = useState("");
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // State CRM - Klaim Voucher Diskon 15% (Lead Capture)
  const [claimName, setClaimName] = useState("");
  const [claimEmail, setClaimEmail] = useState("");
  const [claimPhone, setClaimPhone] = useState("");
  const [isClaimed, setIsClaimed] = useState(false);

  // State CRM - Ulasan Pelanggan (Feedback Hub)
  const [reviewName, setReviewName] = useState("");
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewText, setReviewText] = useState("");
  const [reviews, setReviews] = useState([
    {
      name: "Siti Rahma",
      rating: 5,
      text: "Matcha Mille Crepes-nya juara banget! Nggak terlalu manis, rasa otentik pahit khas Uji Matcha Kyoto-nya dapet banget.",
      date: "Baru saja",
    },
    {
      name: "Dimas Pratama",
      rating: 5,
      text: "Klaim voucher diskon 15% lewat web ini pas mau bayar di kasir, langsung dapet potongan. CRM-nya mantap bener!",
      date: "Kemarin",
    },
    {
      name: "Citra Ayu",
      rating: 4,
      text: "Es Matcha Latte-nya creamy abis. Tempatnya juga estetik parah, figma-able buat foto-foto.",
      date: "2 hari lalu",
    },
  ]);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  // State untuk FAQ Accordion
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // State untuk Menu yang Sedang Disimulasikan Diskonnya
  const [selectedSimulationMenu, setSelectedSimulationMenu] = useState(null);

  // Data Menu Favorit Matcha
  const matchaFavorites = [
    {
      id: "uji-latte",
      name: "Signature Uji Matcha Latte",
      price: 35000,
      desc: "Kombinasi seimbang susu segar creamy dengan kemurnian bubuk matcha organik premium langsung dari perkebunan Uji, Kyoto.",
      image: "/signature_matcha_latte.png",
      pointsRequired: 50,
      badge: "Terlaris 🍃"
    },
    {
      id: "espresso-fusion",
      name: "Matcha Espresso Fusion",
      price: 38000,
      desc: "Perpaduan estetik 3 lapisan rasa: sirup matcha murni, susu segar, dan shot espresso arabika dengan rasa nutty.",
      image: "/matcha_espresso_fusion.png",
      pointsRequired: 60,
      badge: "Rekomendasi Barista ☕"
    },
    {
      id: "matcha-tiramisu",
      name: "Uji Matcha Tiramisu",
      price: 45000,
      desc: "Modifikasi kue tiramisu klasik Italia dengan siraman espresso matcha, keju mascarpone lembut, dan taburan bubuk matcha pekat.",
      image: "/matcha_tiramisu.png",
      pointsRequired: 80,
      badge: "Kue Premium 🍰"
    },
    {
      id: "mille-crepes",
      name: "Matcha Mille Crepes",
      price: 42000,
      desc: "20 lapisan crepes super tipis dan lembut berbalut krim matcha artisanal impor Jepang yang meleleh di setiap suapan.",
      image: "/matcha_mille_crepes.png",
      pointsRequired: 70,
      badge: "Terfavorit ⭐"
    }
  ];

  const handleBookTable = (e) => {
    e.preventDefault();
    if (!bookingName || !bookingEmail || !bookingPhone || !bookingDate || !bookingTime) return;
    setBookingSuccess(true);
  };

  const handleClaimVoucher = (e) => {
    e.preventDefault();
    if (!claimName || !claimEmail || !claimPhone) return;
    setIsClaimed(true);
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!reviewName || !reviewText) return;
    const newRev = {
      name: reviewName,
      rating: reviewRating,
      text: reviewText,
      date: "Baru saja"
    };
    setReviews([newRev, ...reviews]);
    setReviewSubmitted(true);
    setReviewText("");
  };

  return (
    <div 
      className="min-h-screen font-sans antialiased text-[#271B15]"
      style={{ backgroundColor: C.cream, color: C.darkInk }}
    >
      
      {/* 🧭 1. STICKY NAVBAR */}
      <nav 
        className="sticky top-0 z-50 backdrop-blur-md border-b"
        style={{ backgroundColor: `${C.cream}E6`, borderColor: C.borderCream }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo Brand */}
          <div className="flex items-center gap-3">
            <div 
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md"
              style={{ background: `linear-gradient(135deg, ${C.coffee}, ${C.matcha})` }}
            >
              B
            </div>
            <div className="flex flex-col">
              <span className="text-base font-black tracking-wider uppercase leading-none">
                Bloom<span style={{ color: C.matchaBright }}>Bites</span>
              </span>
              <span className="text-[9px] font-bold uppercase tracking-widest text-[#7D746F]">
                Matcha House
              </span>
            </div>
          </div>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-8 text-xs font-bold text-[#7D746F]">
            <a href="#menu-favorites" className="hover:text-[#3E2723] transition-colors">Menu Favorit</a>
            {member && <a href="#member-promos" className="hover:text-[#3E2723] text-emerald-700 transition-colors">🎁 Promo Spesial</a>}
            <a href="#loyalty" className="hover:text-[#3E2723] transition-colors">Loyalty Program</a>
            {member && <a href="#order-history" className="hover:text-[#3E2723] transition-colors">Riwayat Pesanan</a>}
            <a href="#booking" className="hover:text-[#3E2723] transition-colors">Reservasi Meja</a>
            <a href="#reviews" className="hover:text-[#3E2723] transition-colors">Ulasan</a>
          </div>

          {/* Dinamis Login Section */}
          <div className="flex items-center gap-3">
            {member ? (
              <div className="flex items-center gap-3 bg-white/80 p-1.5 pr-3 rounded-2xl border shadow-sm" style={{ borderColor: C.borderCream }}>
                <div className="w-8 h-8 rounded-xl bg-[#6A7A40]/10 flex items-center justify-center text-[#6A7A40]">
                  <User size={16} />
                </div>
                <div className="hidden sm:flex flex-col text-left">
                  <span className="text-xs font-bold text-[#271B15]">{member.username}</span>
                  <span className="text-[9px] font-semibold text-[#879B54] uppercase tracking-wider">
                    🥉 Silver Member • 35 Pts
                  </span>
                </div>
                <button
                  onClick={handleLogout}
                  title="Logout"
                  className="p-1.5 rounded-lg text-red-500 hover:bg-red-50 transition-colors border-0 cursor-pointer"
                >
                  <LogOut size={14} />
                </button>
              </div>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="px-4 py-2 text-xs font-bold transition-all duration-200 border rounded-xl hover:bg-white cursor-pointer"
                style={{ borderColor: C.borderCream, color: C.coffee }}
              >
                Sign In
              </button>
            )}

            <a
              href="#booking"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-xl text-white shadow-md hover:brightness-110 transition-all duration-200"
              style={{ backgroundColor: C.matcha }}
            >
              <span>Booking Meja</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </nav>

      {/* 🌿 2. HERO SECTION */}
      <section className="relative overflow-hidden py-16 lg:py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Content */}
          <div className="space-y-6 lg:col-span-7">
            {member ? (
              <div 
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-100"
              >
                <Sparkles size={12} className="text-emerald-600" />
                <span>Selamat Datang Kembali, {member.username}! 🌿</span>
              </div>
            ) : (
              <div 
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider"
                style={{ backgroundColor: `${C.matchaBright}1A`, color: C.matcha }}
              >
                <Sparkles size={12} />
                <span>Authentic Japanese Uji Matcha & Specialty Coffee</span>
              </div>
            )}
            
            {member ? (
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black leading-[1.15]">
                Hai, <span style={{ color: C.matcha }} className="italic font-normal">{member.username}</span> <br />
                Poin & Promo Spesial <br />Siap Digunakan!
              </h1>
            ) : (
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black leading-[1.15]">
                Sentuhan Kelembutan <br />
                <span style={{ color: C.matcha }} className="italic font-normal">Matcha Kyoto</span> <br />
                di Setiap Gigitan.
              </h1>
            )}
            
            <p className="text-xs sm:text-sm leading-relaxed max-w-xl" style={{ color: C.softGray }}>
              {member ? (
                `Ayo kumpulkan terus poin transaksimu untuk naik tingkat! Kamu sekarang punya 35 Poin. Nikmati berbagai promo eksklusif gratis khusus member di bawah ini.`
              ) : (
                `Menghadirkan harmoni rasa otentik dari perkebunan teh Uji di Kyoto. Nikmati kesegaran racikan Matcha Latte, perpaduan unik Matcha Espresso, dan kelembutan lapisan kue Mille Crepes premium kami di ruang kafe.`
              )}
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#booking"
                className="px-8 py-3.5 text-white font-bold rounded-xl text-xs shadow-lg hover:brightness-110 transition-all duration-200 text-center"
                style={{ backgroundColor: C.coffee }}
              >
                {member ? "Pesan Meja Favoritmu" : "Reservasi Tempat Sekarang"}
              </a>
              {member ? (
                <a
                  href="#member-promos"
                  className="px-8 py-3.5 bg-emerald-600 border border-emerald-500 text-white font-bold rounded-xl text-xs hover:bg-emerald-700 transition-all duration-200 text-center shadow-md"
                >
                  Gunakan Promo Member
                </a>
              ) : (
                <a
                  href="#loyalty"
                  className="px-8 py-3.5 bg-white border font-bold rounded-xl text-xs hover:bg-gray-50 transition-all duration-200 text-center"
                  style={{ borderColor: C.borderCream }}
                >
                  Lihat Skema Poin & Member
                </a>
              )}
            </div>
          </div>

          {/* Hero Featured Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div 
              className="w-full max-w-[350px] aspect-[4/5] rounded-[40px] rounded-tl-[100px] shadow-2xl relative overflow-hidden flex flex-col justify-end p-8 text-white group border border-[#EAE4D9]/20"
            >
              <img 
                src="/matcha_mille_crepes.png" 
                alt="Matcha Mille Crepes"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10"></div>
              
              <div className="absolute top-6 left-6 bg-black/40 backdrop-blur-md rounded-2xl p-4 border border-white/10 text-white w-48 space-y-1 z-10">
                <div className="flex items-center gap-1.5">
                  <Clock size={12} className="text-amber-300" />
                  <span className="text-[9px] font-bold uppercase tracking-wider text-white/80">Jam Buka</span>
                </div>
                <div className="text-sm font-bold">Setiap Hari</div>
                <p className="text-[10px] text-white/70">09:00 - 22:00 WIB</p>
              </div>

              <div className="z-10 space-y-2">
                <span className="text-[9px] bg-white/20 backdrop-blur-md text-white font-extrabold px-3 py-1 rounded-full uppercase tracking-wide">
                  Signature Dessert
                </span>
                <h4 className="text-lg font-bold font-serif text-white">
                  Matcha Mille Crepes
                </h4>
                <p className="text-xs text-white/85 font-light leading-relaxed">
                  20 lembar crepes tipis berbalut krim kocok rasa matcha organik segar dari Uji, Kyoto.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 🎁 3. PROMO EKSKLUSIF MEMBER (HANYA MUNCUL JIKA SUDAH LOGIN) */}
      {member && (
        <section id="member-promos" className="py-16 bg-emerald-50/50 border-y border-emerald-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-emerald-800">
                  <Tag size={14} />
                  <span>Exclusive Member Rewards</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-black text-emerald-950">
                  Promo Spesial Menantimu, {member.username}!
                </h2>
              </div>
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-100/70 px-4 py-1.5 rounded-full">
                Tier: 🥉 Silver Member Benefit
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {exclusivePromos.map((promo, idx) => (
                <div 
                  key={idx} 
                  className="bg-white p-6 rounded-3xl border border-emerald-100 shadow-sm relative overflow-hidden flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full">
                        {promo.tag}
                      </span>
                      <span className="text-[10px] text-gray-400 font-mono">Exp: 30 Des 2026</span>
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="font-serif font-bold text-base text-emerald-950">{promo.title}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">{promo.desc}</p>
                    </div>
                  </div>

                  <div className="pt-5 mt-5 border-t border-dashed border-gray-100 flex items-center justify-between">
                    <div className="bg-[#FAF7F2] border border-[#EAE4D9] px-3 py-2 rounded-xl font-mono text-xs font-bold text-gray-800">
                      {promo.code}
                    </div>
                    <button
                      onClick={() => copyToClipboard(promo.code)}
                      className="inline-flex items-center gap-1.5 px-3 py-2 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl text-[10px] font-bold transition-all cursor-pointer border-0"
                    >
                      {copiedCode === promo.code ? (
                        <>
                          <Check size={12} />
                          <span>Tersalin!</span>
                        </>
                      ) : (
                        <>
                          <Copy size={12} />
                          <span>Salin Kode</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 🍵 4. FAVORIT MENU SECTION */}
      <section id="menu-favorites" className="py-20 bg-white border-y" style={{ borderColor: C.borderCream }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: C.matcha }}>
              Menu Matcha Terlaris
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-black">
              Eksplorasi Cita Rasa Premium Kyoto
            </h2>
            <p className="text-sm" style={{ color: C.softGray }}>
              Dibuat menggunakan bahan-bahan organik segar untuk menghasilkan kualitas rasa matcha terbaik. Klik menu untuk menghitung simulasi potongan harga khusus member.
            </p>
          </div>

          {/* Menu Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {matchaFavorites.map((item) => {
              const isSelected = selectedSimulationMenu?.id === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedSimulationMenu(item)}
                  className={`bg-[#FAF7F2]/40 rounded-[32px] p-5 border-2 transition-all duration-300 cursor-pointer flex flex-col justify-between group hover:bg-white hover:shadow-xl ${
                    isSelected ? "scale-[1.02]" : "hover:border-[#6A7A40]/50"
                  }`}
                  style={{ 
                    borderColor: isSelected ? C.matcha : C.borderCream,
                    boxShadow: isSelected ? "0 10px 25px -5px rgba(106, 122, 64, 0.15)" : "none"
                  }}
                >
                  <div className="space-y-4">
                    <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden relative shadow-sm border" style={{ borderColor: C.borderCream }}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <span className="absolute top-3 left-3 text-white font-extrabold px-3 py-1 rounded-full text-[9px] uppercase tracking-wide" style={{ backgroundColor: C.coffee }}>
                        {item.badge}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-serif font-bold text-sm text-[#271B15] group-hover:text-[#6A7A40] transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-[11px] leading-relaxed line-clamp-3" style={{ color: C.softGray }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-dashed mt-4 flex justify-between items-center" style={{ borderColor: C.borderCream }}>
                    <span className="font-mono font-bold text-[#3E2723] text-xs">
                      {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        minimumFractionDigits: 0
                      }).format(item.price)}
                    </span>
                    <button
                      className="px-3 py-1.5 rounded-xl text-[10px] font-bold transition-all border cursor-pointer"
                      style={{
                        backgroundColor: isSelected ? C.matcha : "transparent",
                        color: isSelected ? "#FFFFFF" : C.matcha,
                        borderColor: C.matcha
                      }}
                    >
                      {isSelected ? "Diskon Member" : "Lihat Diskon"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive CRM Loyalty Calculator Panel */}
          {selectedSimulationMenu && (
            <div 
              className="bg-[#FAF7F2] rounded-[32px] p-6 md:p-8 border-2 shadow-lg max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
              style={{ borderColor: C.borderCream }}
            >
              {/* Product Info Thumbnail */}
              <div className="md:col-span-4 space-y-4 text-center md:text-left">
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md border" style={{ borderColor: C.borderCream }}>
                  <img
                    src={selectedSimulationMenu.image}
                    alt={selectedSimulationMenu.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="text-[9px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider" style={{ backgroundColor: `${C.matchaBright}1A`, color: C.matcha }}>
                    Menu Terpilih
                  </span>
                  <h3 className="font-serif font-bold text-base mt-2">{selectedSimulationMenu.name}</h3>
                  <p className="text-xs mt-1" style={{ color: C.softGray }}>
                    Harga Reguler: <strong className="font-mono text-[#3E2723]">{new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(selectedSimulationMenu.price)}</strong>
                  </p>
                </div>
              </div>

              {/* Calculator Cards */}
              <div className="md:col-span-8 space-y-4">
                <div className="flex items-center gap-2 pb-3 border-b border-dashed" style={{ borderColor: C.borderCream }}>
                  <Award size={18} className="text-[#6A7A40]" style={{ color: C.matcha }} />
                  <p className="text-xs font-bold uppercase tracking-wider font-sans" style={{ color: C.matcha }}>
                    Keuntungan Harga dengan Keanggotaan CRM
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                  {/* Silver */}
                  <div className="bg-white p-3 rounded-2xl border" style={{ borderColor: C.borderCream }}>
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] font-bold text-slate-500 uppercase">🥈 Silver</span>
                      <span className="text-[8px] bg-slate-100 text-slate-700 px-1 py-0.5 rounded font-bold">5%</span>
                    </div>
                    <p className="text-xs font-black mt-2 text-slate-850">
                      {new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(selectedSimulationMenu.price * 0.95)}
                    </p>
                    <p className="text-[9px] text-slate-500 mt-1">+{Math.floor(selectedSimulationMenu.price * 0.95 / 1000)} Pts</p>
                  </div>

                  {/* Gold */}
                  <div className="bg-white p-3 rounded-2xl border" style={{ borderColor: C.borderCream }}>
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] font-bold text-amber-700 uppercase">🥇 Gold</span>
                      <span className="text-[8px] bg-amber-100 text-amber-800 px-1 py-0.5 rounded font-bold">10%</span>
                    </div>
                    <p className="text-xs font-black mt-2 text-amber-950">
                      {new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(selectedSimulationMenu.price * 0.90)}
                    </p>
                    <p className="text-[9px] text-amber-700 mt-1">+{Math.floor(selectedSimulationMenu.price * 0.90 / 1000)} Pts</p>
                  </div>

                  {/* Platinum */}
                  <div className="bg-white p-3 rounded-2xl border" style={{ borderColor: C.borderCream }}>
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] font-bold text-purple-700 uppercase">💎 Plat.</span>
                      <span className="text-[8px] bg-purple-100 text-purple-800 px-1 py-0.5 rounded font-bold">15%</span>
                    </div>
                    <p className="text-xs font-black mt-2 text-purple-950">
                      {new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(selectedSimulationMenu.price * 0.85)}
                    </p>
                    <p className="text-[9px] text-purple-700 mt-1">+{Math.floor(selectedSimulationMenu.price * 0.85 / 1000)} Pts</p>
                  </div>

                  {/* Diamond Black Card */}
                  <div className="bg-neutral-900 p-3 rounded-2xl border-2 border-amber-400 text-white">
                    <div className="flex justify-between items-center">
                      <span className="text-[8px] font-black text-amber-400 uppercase tracking-widest">👑 Diamond</span>
                      <span className="text-[8px] bg-amber-400 text-neutral-900 px-1 py-0.5 rounded font-bold">20%</span>
                    </div>
                    <p className="text-xs font-black mt-2 text-amber-300">
                      {new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(selectedSimulationMenu.price * 0.80)}
                    </p>
                    <p className="text-[8px] text-amber-400/80 mt-1">+{Math.floor(selectedSimulationMenu.price * 0.80 / 1000)} Pts</p>
                  </div>
                </div>

                {/* Redeem Poin Section */}
                <div className="p-4 rounded-2xl border bg-emerald-50/50 border-emerald-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-emerald-950 flex items-center gap-1.5">
                      <CheckCircle2 size={14} className="text-emerald-700" />
                      <span>Klaim Gratis Lewat Poin Reward</span>
                    </p>
                    <p className="text-[9px] text-emerald-800">
                      Tukarkan akumulasi poin Anda dari transaksi sebelumnya untuk menikmati menu ini secara cuma-cuma.
                    </p>
                  </div>
                  <div className="bg-emerald-100 text-emerald-900 px-4 py-2 rounded-xl text-center shadow-sm">
                    <span className="block text-xs font-black">{selectedSimulationMenu.pointsRequired} Pts</span>
                    <span className="text-[8px] font-bold uppercase tracking-wider text-emerald-800">Tukar Poin</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 🏅 5. TINGKATAN MEMBER / TIER DETAIL */}
      <section id="loyalty" className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: C.matcha }}>
            Program Keanggotaan Baru
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-black">
            Kumpulkan Poin, Tingkatkan Keuntungan Anda
          </h2>
          <p className="text-sm" style={{ color: C.softGray }}>
            Setiap pembelanjaan senilai Rp 1.000 setara dengan 1 Poin. Semakin banyak poin terkumpul, semakin tinggi tier keanggotaan dan keuntungan yang didapat.
          </p>
        </div>

        {/* 4 Tier Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Silver */}
          <div className="bg-white p-6 rounded-3xl border border-t-4 space-y-4 shadow-sm flex flex-col justify-between" style={{ borderColor: C.borderCream, borderTopColor: C.softGray }}>
            <div className="space-y-3">
              <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#7D746F]">🥈 Tier 1 (0 - 199 Pts)</span>
              <h3 className="text-base font-bold text-gray-800">Silver Member</h3>
              <p className="text-[11px] leading-relaxed" style={{ color: C.softGray }}>
                Dapatkan otomatis setelah mendaftar. Keuntungan dasar yang ramah untuk mengawali petualangan matcha-mu.
              </p>
              <ul className="text-[10px] space-y-2 pt-2 text-[#7D746F] border-t border-dashed" style={{ borderColor: C.borderCream }}>
                <li className="flex items-center gap-1.5">✓ Diskon flat <strong>5%</strong></li>
                <li className="flex items-center gap-1.5">✓ Reward Spesial Ulang Tahun</li>
                <li className="flex items-center gap-1.5">✓ 1 Poin per Rp 1.000 belanja</li>
              </ul>
            </div>
            <div className="pt-4 text-center">
              <span className="text-[9px] font-black uppercase text-slate-500 bg-slate-50 px-3 py-1 rounded-full">Member Baru</span>
            </div>
          </div>

          {/* Gold */}
          <div className="bg-white p-6 rounded-3xl border border-t-4 space-y-4 shadow-sm flex flex-col justify-between" style={{ borderColor: C.borderCream, borderTopColor: C.matcha }}>
            <div className="space-y-3">
              <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#879B54]">🥇 Tier 2 (200 - 499 Pts)</span>
              <h3 className="text-base font-bold text-gray-800">Gold Member</h3>
              <p className="text-[11px] leading-relaxed" style={{ color: C.softGray }}>
                Batas kenyamanan baru bagi penikmat matcha rutin. Keuntungan diskon yang terasa lebih hemat di dompet.
              </p>
              <ul className="text-[10px] space-y-2 pt-2 text-[#7D746F] border-t border-dashed" style={{ borderColor: C.borderCream }}>
                <li className="flex items-center gap-1.5">✓ Diskon flat <strong>10%</strong></li>
                <li className="flex items-center gap-1.5">✓ Prioritas antrean reservasi meja</li>
                <li className="flex items-center gap-1.5">✓ Akses promo <i>Pre-Sale</i> mingguan</li>
              </ul>
            </div>
            <div className="pt-4 text-center">
              <span className="text-[9px] font-black uppercase text-amber-700 bg-amber-50 px-3 py-1 rounded-full">Upgrade 200 Pts</span>
            </div>
          </div>

          {/* Platinum */}
          <div className="bg-white p-6 rounded-3xl border border-t-4 space-y-4 shadow-sm flex flex-col justify-between" style={{ borderColor: C.borderCream, borderTopColor: C.coffee }}>
            <div className="space-y-3">
              <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#5D4037]">💎 Tier 3 (500 - 999 Pts)</span>
              <h3 className="text-base font-bold text-gray-800">Platinum VIP</h3>
              <p className="text-[11px] leading-relaxed" style={{ color: C.softGray }}>
                Apresiasi terbaik bagi pelanggan loyal yang mencintai dedikasi rasa artisanal kami.
              </p>
              <ul className="text-[10px] space-y-2 pt-2 text-[#7D746F] border-t border-dashed" style={{ borderColor: C.borderCream }}>
                <li className="flex items-center gap-1.5">✓ Diskon flat <strong>15%</strong></li>
                <li className="flex items-center gap-1.5">✓ Prioritas pemilihan area meja (window/VIP)</li>
                <li className="flex items-center gap-1.5">✓ Gratis Upsize seluruh menu minuman</li>
              </ul>
            </div>
            <div className="pt-4 text-center">
              <span className="text-[9px] font-black uppercase text-purple-800 bg-purple-50 px-3 py-1 rounded-full">Upgrade 500 Pts</span>
            </div>
          </div>

          {/* Diamond Black Card */}
          <div className="bg-neutral-950 text-white p-6 rounded-3xl border-2 border-amber-400 space-y-4 shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-[8px] font-extrabold uppercase tracking-widest text-amber-400">👑 Tier VIP (1000+ Pts)</span>
                <span className="text-[8px] bg-amber-400 text-neutral-900 font-extrabold px-1.5 py-0.5 rounded">ULTIMATE</span>
              </div>
              <h3 className="text-base font-serif font-bold text-amber-300">Diamond Black</h3>
              <p className="text-[11px] text-white/70 leading-relaxed">
                Tingkat kemewahan paling tinggi. Layanan personal khusus dan keistimewaan tanpa batas di setiap gerai.
              </p>
              <ul className="text-[10px] space-y-2 pt-2 text-white/80 border-t border-dashed border-white/20">
                <li className="flex items-center gap-1.5">✓ Diskon tertinggi flat <strong>20%</strong></li>
                <li className="flex items-center gap-1.5">✓ Undangan event <i>exclusive private tasting</i></li>
                <li className="flex items-center gap-1.5">✓ Gratis 1 Cup Matcha sebulan sekali</li>
              </ul>
            </div>
            <div className="pt-4 text-center">
              <span className="text-[9px] font-black uppercase text-amber-300 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-300/30">Upgrade 1000 Pts</span>
            </div>
          </div>

        </div>

        {/* 🧮 KALKULATOR POIN INTERAKTIF */}
        <div className="mt-12 bg-white rounded-3xl border p-8 shadow-md max-w-3xl mx-auto" style={{ borderColor: C.borderCream }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6A7A40]" style={{ color: C.matcha }}>
                <Percent size={14} />
                <span>Kalkulator Poin Mandiri</span>
              </div>
              <h4 className="text-xl font-serif font-black">Hitung Poin Belanjamu</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Rencanakan pembelianmu di BloomBites hari ini dan ketahui seberapa dekat langkahmu untuk naik ke tingkatan tier berikutnya.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-[10px] font-extrabold uppercase tracking-wider text-gray-400 mb-1">
                  Nominal Rencana Belanja (Rupiah)
                </label>
                <input
                  type="number"
                  min="1000"
                  step="1000"
                  value={inputBelanja}
                  onChange={(e) => setInputBelanja(Number(e.target.value))}
                  className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#EAE4D9] rounded-xl outline-none font-mono font-bold text-sm text-gray-800 focus:ring-1 focus:ring-amber-800"
                />
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100 flex justify-between items-center">
                <div>
                  <span className="text-[9px] font-bold text-emerald-800 uppercase block">Estimasi Poin yang Didapat:</span>
                  <span className="text-xs text-emerald-950 font-medium">Berdasarkan rasio Rp 1.000 = 1 Poin</span>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-emerald-800 font-mono">
                    +{Math.floor(inputBelanja / 1000)}
                  </span>
                  <span className="block text-[9px] font-black uppercase text-emerald-700 tracking-wider">Poin</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 📜 6. RIWAYAT PESANAN MEMBER (HANYA MUNCUL JIKA SUDAH LOGIN) */}
      {member && (
        <section id="order-history" className="py-16 bg-white border-y" style={{ borderColor: C.borderCream }}>
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex items-center gap-2.5 mb-8">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-800">
                <Receipt size={20} />
              </div>
              <div>
                <h2 className="text-2xl font-serif font-black">Riwayat Transaksi & Poin</h2>
                <p className="text-xs text-gray-400">Daftar transaksi pesanan dan perolehan poin loyalitas Anda.</p>
              </div>
            </div>

            <div className="bg-[#FAF7F2]/50 border rounded-3xl overflow-hidden shadow-sm" style={{ borderColor: C.borderCream }}>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b bg-[#FAF7F2] text-[10px] font-extrabold uppercase tracking-wider text-gray-500" style={{ borderColor: C.borderCream }}>
                      <th className="py-4 px-6">ID Transaksi</th>
                      <th className="py-4 px-6">Tanggal</th>
                      <th className="py-4 px-6">Detail Pesanan</th>
                      <th className="py-4 px-6 text-right">Poin</th>
                      <th className="py-4 px-6 text-right">Total</th>
                      <th className="py-4 px-6 text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs divide-y divide-[#EAE4D9]" style={{ borderColor: C.borderCream }}>
                    {orderHistory.map((order, idx) => (
                      <tr key={idx} className="hover:bg-white/80 transition-colors">
                        <td className="py-4 px-6 font-mono font-bold text-gray-700">{order.id}</td>
                        <td className="py-4 px-6 text-gray-500 whitespace-nowrap">{order.date}</td>
                        <td className="py-4 px-6 text-gray-600 font-medium max-w-xs truncate">{order.items}</td>
                        <td className="py-4 px-6 text-right font-bold text-emerald-700">+{order.pointsEarned} Pts</td>
                        <td className="py-4 px-6 text-right font-mono font-bold text-gray-800">
                          {new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(order.total)}
                        </td>
                        <td className="py-4 px-6 text-center">
                          <span className={`px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider ${
                            order.status.includes("Sedang") 
                              ? "bg-amber-100 text-amber-800 border border-amber-200" 
                              : "bg-emerald-100 text-emerald-800 border border-emerald-200"
                          }`}>
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 🎫 7. LEAD CAPTURE - REGISTER / CLAIM WELCOME COUPON */}
      <section id="claim-voucher" className="max-w-7xl mx-auto px-6 py-12">
        <div 
          className="rounded-[40px] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl"
          style={{ background: `linear-gradient(135deg, ${C.coffee}, ${C.coffeeLight})` }}
        >
          <div className="max-w-2xl mx-auto text-center space-y-6 relative z-10">
            <div className="mx-auto w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-amber-300 shadow-inner">
              <Gift size={20} />
            </div>
            
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight">
                Voucher Diskon Spesial Anda
              </h2>
              <p className="text-xs md:text-sm text-white/80 max-w-md mx-auto leading-relaxed">
                {member ? "Sebagai member terdaftar, berikut adalah kupon aktif yang siap kamu klaim saat bertransaksi di kasir." : "Klaim kode promosi instan untuk kunjungan pertama Anda sekaligus daftarkan diri sebagai member loyal BloomBites Matcha House."}
              </p>
            </div>

            {/* TAMPILAN BERBEDA JIKA MEMBER SUDAH LOGIN */}
            {member ? (
              <div className="max-w-md mx-auto p-6 bg-white/15 backdrop-blur-md border border-white/20 text-white rounded-2xl text-xs font-medium space-y-3">
                <p className="font-bold text-amber-300">🎉 Kupon Member Aktif</p>
                <p>
                  Halo <strong>{member.username}</strong>, kamu mendapatkan diskon 15% member baru. Gunakan kode berikut:
                </p>
                <div className="bg-white/20 py-2.5 rounded-xl font-mono text-lg font-bold tracking-widest text-white border border-white/30">
                  MEMBER-BLOOM-15
                </div>
                <p className="text-[10px] text-white/70">
                  Tunjukkan layar ini kepada kasir kami untuk memotong tagihan belanja Anda.
                </p>
              </div>
            ) : !isClaimed ? (
              <form onSubmit={handleClaimVoucher} className="max-w-md mx-auto flex flex-col gap-3 pt-4">
                <input
                  type="text"
                  required
                  placeholder="Nama Lengkap Anda"
                  value={claimName}
                  onChange={(e) => setClaimName(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl outline-none text-xs text-white placeholder-white/50"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="email"
                    required
                    placeholder="Alamat Email Aktif"
                    value={claimEmail}
                    onChange={(e) => setClaimEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl outline-none text-xs text-white placeholder-white/50"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Nomor WhatsApp"
                    value={claimPhone}
                    onChange={(e) => setClaimPhone(e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl outline-none text-xs text-white placeholder-white/50"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-bold text-xs transition-all duration-200 shadow-md hover:bg-white hover:text-brown-900 cursor-pointer text-center"
                  style={{ backgroundColor: C.matchaBright, color: "#FFFFFF" }}
                >
                  Klaim Kupon Selamat Datang
                </button>
              </form>
            ) : (
              <div className="max-w-md mx-auto p-6 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl text-xs font-medium space-y-2">
                <p className="font-bold text-emerald-300">✨ Kupon Berhasil Diklaim!</p>
                <p>
                  Halo <strong>{claimName}</strong>, kode kupon diskon unik Anda adalah:
                </p>
                <div className="bg-white/20 py-2.5 rounded-xl font-mono text-base font-bold tracking-widest text-amber-300">
                  WELCOME-MATCHA
                </div>
                <p className="text-[10px] text-white/70">
                  Kode kupon ini sudah tersimpan ke email <code>{claimEmail}</code>. Tunjukkan kode ini atau sebutkan nomor HP Anda <code>{claimPhone}</code> ke kasir saat memesan di outlet.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 📅 8. TABLE RESERVATION / BOOKING TEMPAT */}
      <section id="booking" className="py-20 bg-white border-y" style={{ borderColor: C.borderCream }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Reservation Info */}
            <div className="space-y-6 lg:col-span-6">
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: C.matcha }}>
                Reservasi Tempat
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-black">
                Amankan Meja Terbaik untuk Menikmati Matcha
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: C.softGray }}>
                Hindari antrean panjang di akhir pekan. Lakukan reservasi meja Anda secara online. Data reservasi akan otomatis tersinkronisasi dengan profil loyalitas member Anda untuk pelayanan prioritas.
              </p>

              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <div className="p-2 bg-emerald-50 text-emerald-700 rounded-lg">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs">Pilihan Area Fleksibel</h5>
                    <p className="text-[11px] text-gray-500">Pilih area Indoor AC yang tenang, Outdoor Garden yang sejuk, atau VIP Room untuk rapat pribadi.</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="p-2 bg-emerald-50 text-emerald-700 rounded-lg">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs">Prioritas Loyalty Member</h5>
                    <p className="text-[11px] text-gray-500">Member dengan tier Gold, Platinum, dan Diamond berhak memilih posisi meja prioritas (dekat jendela/taman).</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Form Container */}
            <div className="lg:col-span-6 bg-[#FAF7F2] p-8 rounded-[32px] border shadow-xl" style={{ borderColor: C.borderCream }}>
              <div className="mb-6 space-y-1">
                <h3 className="text-xl font-serif font-black" style={{ color: C.coffee }}>
                  Formulir Reservasi Meja
                </h3>
                <p className="text-[11px] text-gray-500">
                  {member ? "Data profil member Anda telah dimasukkan secara otomatis." : "Data Anda otomatis tercatat dalam sistem CRM kafe kami."}
                </p>
              </div>

              {!bookingSuccess ? (
                <form onSubmit={handleBookTable} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-extrabold uppercase tracking-wider text-gray-500 mb-1">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Nama Anda"
                        value={bookingName}
                        onChange={(e) => setBookingName(e.target.value)}
                        className="w-full px-4 py-3 bg-white border border-[#EAE4D9] rounded-xl outline-none text-xs text-gray-800 focus:ring-1 focus:ring-amber-800"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-extrabold uppercase tracking-wider text-gray-500 mb-1">
                        Nomor WhatsApp
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: 0812345678"
                        value={bookingPhone}
                        onChange={(e) => setBookingPhone(e.target.value)}
                        className="w-full px-4 py-3 bg-white border border-[#EAE4D9] rounded-xl outline-none text-xs text-gray-800 focus:ring-1 focus:ring-amber-800"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-extrabold uppercase tracking-wider text-gray-500 mb-1">
                      Alamat Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Masukkan alamat email Anda"
                      value={bookingEmail}
                      onChange={(e) => setBookingEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-[#EAE4D9] rounded-xl outline-none text-xs text-gray-800 focus:ring-1 focus:ring-amber-800"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-extrabold uppercase tracking-wider text-gray-500 mb-1">
                        Tanggal Reservasi
                      </label>
                      <input
                        type="date"
                        required
                        value={bookingDate}
                        onChange={(e) => setBookingDate(e.target.value)}
                        className="w-full px-4 py-3 bg-white border border-[#EAE4D9] rounded-xl outline-none text-xs text-gray-800 focus:ring-1 focus:ring-amber-800"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-extrabold uppercase tracking-wider text-gray-500 mb-1">
                        Waktu Datang
                      </label>
                      <input
                        type="time"
                        required
                        value={bookingTime}
                        onChange={(e) => setBookingTime(e.target.value)}
                        className="w-full px-4 py-3 bg-white border border-[#EAE4D9] rounded-xl outline-none text-xs text-gray-800 focus:ring-1 focus:ring-amber-800"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-extrabold uppercase tracking-wider text-gray-500 mb-1">
                        Jumlah Pengunjung (Pax)
                      </label>
                      <select
                        value={bookingPax}
                        onChange={(e) => setBookingPax(e.target.value)}
                        className="w-full px-4 py-3 bg-white border border-[#EAE4D9] rounded-xl outline-none text-xs text-gray-800 focus:ring-1 focus:ring-amber-800"
                      >
                        <option value="1">1 Orang</option>
                        <option value="2">2 Orang</option>
                        <option value="4">4 Orang</option>
                        <option value="6">6 Orang</option>
                        <option value="8">Lebih dari 6 Orang</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-extrabold uppercase tracking-wider text-gray-500 mb-1">
                        Pilihan Area Meja
                      </label>
                      <select
                        value={bookingArea}
                        onChange={(e) => setBookingArea(e.target.value)}
                        className="w-full px-4 py-3 bg-white border border-[#EAE4D9] rounded-xl outline-none text-xs text-gray-800 focus:ring-1 focus:ring-amber-800"
                      >
                        <option value="Indoor (AC)">Indoor (AC)</option>
                        <option value="Outdoor (Garden)">Outdoor (Garden)</option>
                        <option value="VIP Room">VIP Room (Min. Pembelian)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-extrabold uppercase tracking-wider text-gray-500 mb-1">
                      Catatan Tambahan (Opsional)
                    </label>
                    <textarea
                      rows="2"
                      placeholder="Contoh: Meja di sudut dekat taman, perayaan ulang tahun..."
                      value={bookingNotes}
                      onChange={(e) => setBookingNotes(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-[#EAE4D9] rounded-xl outline-none text-xs text-gray-800 focus:ring-1 focus:ring-amber-800"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 text-white font-bold text-xs rounded-xl hover:brightness-110 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md border-0"
                    style={{ backgroundColor: C.coffee }}
                  >
                    <span>Kirim Reservasi & Hubungkan Member</span>
                    <ArrowRight size={14} />
                  </button>
                </form>
              ) : (
                <div className="p-6 bg-emerald-50 rounded-2xl text-center space-y-4 border border-emerald-100">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 mx-auto">
                    <CheckCircle2 size={24} />
                  </div>
                  <h4 className="text-base font-bold text-emerald-950">
                    🎉 Reservasi Berhasil Diterima!
                  </h4>
                  <p className="text-[11px] text-emerald-800 leading-relaxed">
                    Halo <strong>{bookingName}</strong>, reservasi meja Anda di area <strong>{bookingArea}</strong> untuk tanggal <strong>{bookingDate}</strong> pukul <strong>{bookingTime}</strong> WIB ({bookingPax} Orang) telah kami amankan.
                  </p>
                  <p className="text-[10px] text-emerald-700">
                    Notifikasi konfirmasi & struk digital booking telah dikirim ke WhatsApp <code>{bookingPhone}</code> dan email Anda.
                  </p>
                  <button
                    onClick={() => setBookingSuccess(false)}
                    className="text-[10px] font-bold text-emerald-900 underline hover:text-emerald-750"
                  >
                    Buat Reservasi Baru
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 💬 9. CUSTOMER REVIEWS */}
      <section id="reviews" className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Review Form */}
          <div className="lg:col-span-5 bg-white p-8 rounded-[32px] border shadow-md space-y-6" style={{ borderColor: C.borderCream }}>
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#6A7A40]" style={{ color: C.matcha }}>
                Suara Pelanggan
              </span>
              <h3 className="text-2xl font-serif font-black">
                Bagikan Pengalaman Anda
              </h3>
              <p className="text-xs text-gray-400">
                Kritik, ulasan rasa menu, dan tingkat kenyamanan Anda membantu kami meningkatkan kualitas penyajian matcha.
              </p>
            </div>

            {!reviewSubmitted ? (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div>
                  <label className="block text-[10px] font-extrabold uppercase tracking-wider text-gray-500 mb-1">
                    Nama Kamu
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Risa Lestari"
                    value={reviewName}
                    onChange={(e) => setReviewName(e.target.value)}
                    className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#EAE4D9] rounded-xl outline-none text-xs text-gray-800 focus:ring-1 focus:ring-amber-800"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-extrabold uppercase tracking-wider text-gray-500 mb-1">
                    Rating Menu & Pelayanan
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setReviewRating(star)}
                        className="text-xl transition-transform active:scale-90 cursor-pointer"
                      >
                        <Star
                          size={18}
                          fill={star <= reviewRating ? "#FFC107" : "none"}
                          color={star <= reviewRating ? "#FFC107" : "#EAE4D9"}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-extrabold uppercase tracking-wider text-gray-500 mb-1">
                    Ulasan Rasa atau Suasana Kafe
                  </label>
                  <textarea
                    rows="3"
                    required
                    placeholder="Bagaimana ulasan rasa minuman matcha latte, cake tiramisu, atau suasana kafe?"
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#EAE4D9] rounded-xl outline-none text-xs text-gray-800 focus:ring-1 focus:ring-amber-800"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 text-white font-bold text-xs rounded-xl hover:brightness-110 transition-all duration-200 flex items-center justify-center border-0 cursor-pointer"
                  style={{ backgroundColor: C.matcha }}
                >
                  Kirim Ulasan Anda
                </button>
              </form>
            ) : (
              <div className="p-6 bg-emerald-50 rounded-2xl text-center space-y-3 border border-emerald-100">
                <p className="text-xs font-bold text-emerald-950">
                  ✨ Terima kasih atas ulasan berharganya!
                </p>
                <p className="text-[10px] text-emerald-800 leading-relaxed">
                  Ulasan Anda telah tersimpan ke sistem database kafe kami.
                </p>
                <button
                  onClick={() => setReviewSubmitted(false)}
                  className="text-[10px] font-bold text-[#6A7A40] underline"
                >
                  Kirim Ulasan Baru
                </button>
              </div>
            )}
          </div>

          {/* Reviews List Feed */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: C.matcha }}>
              Real-time Feedback Feed
            </span>
            <h3 className="text-2xl font-serif font-black">
              Apa Kata Sahabat BloomBites?
            </h3>
            
            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
              {reviews.map((rev, i) => (
                <div
                  key={i}
                  className="bg-white p-5 rounded-2xl border shadow-sm space-y-2.5 transition-all duration-300 hover:shadow-md"
                  style={{ borderColor: C.borderCream }}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-bold text-xs text-[#271B15]">
                        {rev.name}
                      </h4>
                      <div className="flex gap-0.5 mt-0.5">
                        {Array.from({ length: rev.rating }).map((_, s) => (
                          <Star key={s} size={12} fill="#FFC107" color="#FFC107" />
                        ))}
                      </div>
                    </div>
                    <span className="text-[9px] text-[#7D746F] font-mono">
                      {rev.date}
                    </span>
                  </div>
                  <p className="text-xs text-[#7D746F] leading-relaxed italic">
                    "{rev.text}"
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 🗺️ 10. FOOTER */}
      <footer 
        className="text-[#FAF7F2] text-xs py-16 px-6 border-t" 
        style={{ backgroundColor: C.coffee, borderColor: `${C.borderCream}1A` }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div 
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                style={{ background: `linear-gradient(135deg, ${C.coffeeLight}, ${C.matchaBright})` }}
              >
                B
              </div>
              <span className="text-sm font-extrabold tracking-wider uppercase">
                Bloom<span style={{ color: C.matchaBright }}>Bites</span>
              </span>
            </div>
            <p className="text-[11px] text-white/60 leading-relaxed">
              BloomBites Matcha House adalah kafe bertema Uji Matcha premium yang menghadirkan racikan teh artisanal tradisional Jepang dengan kenyamanan kafe modern.
            </p>
            <p className="text-[10px] text-white/40">
              &copy; 2026 BloomBites Matcha House. All Rights Reserved.
            </p>
          </div>

          <div className="space-y-3">
            <h5 className="font-extrabold text-[10px] uppercase tracking-widest text-white/40 font-sans">Menu Terlaris</h5>
            <div className="flex flex-col gap-2 text-white/70">
              <a href="#menu-favorites" className="hover:text-white transition-colors">Signature Uji Matcha Latte</a>
              <a href="#menu-favorites" className="hover:text-white transition-colors">Matcha Espresso Fusion</a>
              <a href="#menu-favorites" className="hover:text-white transition-colors">Uji Matcha Tiramisu</a>
              <a href="#menu-favorites" className="hover:text-white transition-colors">Matcha Mille Crepes</a>
            </div>
          </div>

          <div className="space-y-3">
            <h5 className="font-extrabold text-[10px] uppercase tracking-widest text-white/40 font-sans">Reservasi & Jam</h5>
            <div className="flex flex-col gap-2 text-white/60 leading-relaxed">
              <span>Buka: 09:00 - 22:00 WIB</span>
              <span>Layanan Reservasi Meja (Gratis)</span>
              <span>Pilihan Area: Indoor AC / Outdoor Garden</span>
            </div>
          </div>

          <div className="space-y-4">
            <h5 className="font-extrabold text-[10px] uppercase tracking-widest text-white/40 font-sans">Kontak & Alamat</h5>
            <p className="text-[11px] text-white/60 leading-relaxed">
              Butuh panduan arah jalan atau bantuan khusus saat kedatangan?
            </p>
            <div className="flex flex-col gap-1.5 text-white/70 font-mono text-[11px]">
              <span>Email: hello@bloombitesmatcha.com</span>
              <span>WhatsApp: +62 812-3456-7890</span>
              <span>Alamat: Jl. Matcha Raya No. 28, Jakarta</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}