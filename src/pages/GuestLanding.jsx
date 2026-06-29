import { useState } from "react";
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
  UserPlus
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

  // State untuk Menu yang Sedang Disimulasikan Diskonnya
  const [selectedSimulationMenu, setSelectedSimulationMenu] = useState(null);

  // Data Menu Favorit Matcha (Dengan Foto Real dari Folder Public)
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
            <a href="#loyalty" className="hover:text-[#3E2723] transition-colors">Loyalty Program</a>
            <a href="#claim-voucher" className="hover:text-[#3E2723] transition-colors">Kupon Diskon</a>
            <a href="#booking" className="hover:text-[#3E2723] transition-colors">Reservasi Meja</a>
            <a href="#reviews" className="hover:text-[#3E2723] transition-colors">Ulasan</a>
            <a href="#faq" className="hover:text-[#3E2723] transition-colors">FAQ</a>
          </div>

          {/* CTA & Staff Portal */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/login")}
              className="px-4 py-2 text-xs font-bold transition-all duration-200 border rounded-xl hover:bg-white cursor-pointer"
              style={{ borderColor: C.borderCream, color: C.coffee }}
            >
              Portal Staf
            </button>
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
            <div 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider"
              style={{ backgroundColor: `${C.matchaBright}1A`, color: C.matcha }}
            >
              <Sparkles size={12} />
              <span>Authentic Japanese Uji Matcha & Specialty Coffee</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black leading-[1.15]">
              Sentuhan Kelembutan <br />
              <span style={{ color: C.matcha }} className="italic font-normal">Matcha Kyoto</span> <br />
              di Setiap Gigitan.
            </h1>
            
            <p className="text-xs sm:text-sm leading-relaxed max-w-xl" style={{ color: C.softGray }}>
              Menghadirkan harmoni rasa otentik dari perkebunan teh Uji di Kyoto. Nikmati kesegaran racikan Matcha Latte, perpaduan unik Matcha Espresso, dan kelembutan lapisan kue Mille Crepes premium kami di ruang kafe ternyaman.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#booking"
                className="px-8 py-3.5 text-white font-bold rounded-xl text-xs shadow-lg hover:brightness-110 transition-all duration-200 text-center"
                style={{ backgroundColor: C.coffee }}
              >
                Reservasi Tempat Sekarang
              </a>
              <a
                href="#menu-favorites"
                className="px-8 py-3.5 bg-white border font-bold rounded-xl text-xs hover:bg-gray-50 transition-all duration-200 text-center"
                style={{ borderColor: C.borderCream }}
              >
                Jelajahi Menu Utama
              </a>
            </div>

            {/* Cafe Attributes */}
            <div className="pt-6 border-t border-dashed" style={{ borderColor: C.borderCream }}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-700">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-[10px] font-bold uppercase">100% Organik Uji Matcha</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-700">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-[10px] font-bold uppercase">Artisanal Bakery</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-700">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-[10px] font-bold uppercase">Cozy Dining Space</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-700">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-[10px] font-bold uppercase">Integrated Loyalty</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Featured Card (Kyoto Vibe) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div 
              className="w-full max-w-[350px] aspect-[4/5] rounded-[40px] rounded-tl-[100px] shadow-2xl relative overflow-hidden flex flex-col justify-end p-8 text-white group border border-[#EAE4D9]/20"
            >
              {/* Background Image of Matcha Mille Crepes */}
              <img 
                src="/matcha_mille_crepes.png" 
                alt="Matcha Mille Crepes"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Dark Gradient Overlay for optimal readability */}
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

      {/* 🧭 3. FEATURED GALLERY / INFO CARDS */}
      <section className="max-w-7xl mx-auto px-6 pb-20 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border flex gap-4 items-start shadow-sm" style={{ borderColor: C.borderCream }}>
          <div className="p-3 rounded-xl" style={{ backgroundColor: `${C.matcha}1A`, color: C.matcha }}>
            <Clock className="text-xl" size={20} />
          </div>
          <div>
            <h5 className="font-bold text-xs">Jam Operasional Kafe</h5>
            <p className="text-[11px] mt-1" style={{ color: C.softGray }}>
              Setiap Hari (Senin - Minggu)<br />Pukul 09:00 - 22:00 WIB
            </p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl border flex gap-4 items-start shadow-sm" style={{ borderColor: C.borderCream }}>
          <div className="p-3 rounded-xl" style={{ backgroundColor: `${C.matcha}1A`, color: C.matcha }}>
            <Compass className="text-xl" size={20} />
          </div>
          <div>
            <h5 className="font-bold text-xs">Lokasi House Matcha</h5>
            <p className="text-[11px] mt-1" style={{ color: C.softGray }}>
              Jl. Matcha Raya No. 28, Jakarta<br />(Tersedia Parkir Luas & Wi-Fi)
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border flex gap-4 items-start shadow-sm" style={{ borderColor: C.borderCream }}>
          <div className="p-3 rounded-xl" style={{ backgroundColor: `${C.matcha}1A`, color: C.matcha }}>
            <Smartphone className="text-xl" size={20} />
          </div>
          <div>
            <h5 className="font-bold text-xs">Ikuti Media Sosial Kami</h5>
            <p className="text-[11px] mt-1" style={{ color: C.softGray }}>
              Instagram: @bloombites.matcha<br />Dapatkan info promo mingguan
            </p>
          </div>
        </div>
      </section>

      {/* 🍵 4. FAVORIT MENU SECTION WITH REAL IMAGES & LOYALTY PRICING */}
      <section id="menu-favorites" className="py-20 bg-white border-y" style={{ borderColor: C.borderCream }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#6A7A40]" style={{ color: C.matcha }}>
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
                    {/* Real Generated Image */}
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
              className="bg-[#FAF7F2] rounded-[32px] p-6 md:p-8 border-2 shadow-lg max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
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

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Silver */}
                  <div className="bg-white p-4 rounded-2xl border" style={{ borderColor: C.borderCream }}>
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] font-bold text-slate-500 uppercase">🥈 Silver Member</span>
                      <span className="text-[8px] bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded font-bold">Diskon 5%</span>
                    </div>
                    <p className="text-sm font-black mt-2 text-slate-800">
                      {new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(selectedSimulationMenu.price * 0.95)}
                    </p>
                    <p className="text-[9px] text-slate-500 mt-1">Dapatkan {Math.floor(selectedSimulationMenu.price * 0.95 / 1000)} Poin</p>
                  </div>

                  {/* Gold */}
                  <div className="bg-white p-4 rounded-2xl border-2" style={{ borderColor: C.matchaBright }}>
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] font-bold text-amber-700 uppercase">🥇 Gold Member</span>
                      <span className="text-[8px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded font-bold">Diskon 10%</span>
                    </div>
                    <p className="text-sm font-black mt-2 text-amber-950">
                      {new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(selectedSimulationMenu.price * 0.90)}
                    </p>
                    <p className="text-[9px] text-amber-700 mt-1">Dapatkan {Math.floor(selectedSimulationMenu.price * 0.90 / 1000)} Poin</p>
                  </div>

                  {/* Platinum */}
                  <div className="bg-white p-4 rounded-2xl border" style={{ borderColor: C.borderCream }}>
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] font-bold text-purple-700 uppercase">💎 Platinum VIP</span>
                      <span className="text-[8px] bg-purple-100 text-purple-800 px-1.5 py-0.5 rounded font-bold">Diskon 15%</span>
                    </div>
                    <p className="text-sm font-black mt-2 text-purple-950">
                      {new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(selectedSimulationMenu.price * 0.85)}
                    </p>
                    <p className="text-[9px] text-purple-700 mt-1">Dapatkan {Math.floor(selectedSimulationMenu.price * 0.85 / 1000)} Poin</p>
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

      {/* 🏅 5. CRM LOYALTY BENEFIT CARD GRID */}
      <section id="loyalty" className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: C.matcha }}>
            Program Keanggotaan
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-black">
            Kumpulkan Poin, Dapatkan Keuntungan Eksklusif
          </h2>
          <p className="text-sm" style={{ color: C.softGray }}>
            Setiap pembelian kelipatan Rp 1.000 akan mendapatkan 1 Poin. Tukarkan poin Anda dengan menu favorit gratis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Silver */}
          <div className="bg-white p-8 rounded-3xl border border-t-4 space-y-4 shadow-sm" style={{ borderColor: C.borderCream, borderTopColor: C.softGray }}>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#7D746F]">🥈 Tier Awal</span>
            <h3 className="text-lg font-bold">Silver Member</h3>
            <p className="text-xs leading-relaxed" style={{ color: C.softGray }}>
              Daftarkan email Anda dan dapatkan potongan harga tetap 5% untuk setiap transaksi menu makanan dan minuman.
            </p>
            <ul className="text-xs space-y-2 pt-2 text-[#7D746F]">
              <li className="flex items-center gap-2">✓ Potongan harga 5%</li>
              <li className="flex items-center gap-2">✓ Akumulasi 1 poin per Rp 1.000</li>
              <li className="flex items-center gap-2">✓ Struk digital terkirim ke email</li>
            </ul>
          </div>

          {/* Gold */}
          <div className="bg-white p-8 rounded-3xl border-2 space-y-4 shadow-md relative" style={{ borderColor: C.matchaBright }}>
            <span className="absolute -top-3 right-6 bg-[#879B54] text-white px-3 py-1 rounded-full text-[9px] font-extrabold uppercase tracking-wide">Terpopuler</span>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-700">🥇 Tier Menengah</span>
            <h3 className="text-lg font-bold">Gold Member</h3>
            <p className="text-xs leading-relaxed" style={{ color: C.softGray }}>
              Naik tingkat secara otomatis setelah mengumpulkan 200 poin. Nikmati potongan harga 10% dan antrean prioritas.
            </p>
            <ul className="text-xs space-y-2 pt-2 text-[#7D746F]">
              <li className="flex items-center gap-2">✓ Potongan harga 10%</li>
              <li className="flex items-center gap-2">✓ Voucher gratis croissant saat ultah</li>
              <li className="flex items-center gap-2">✓ Info promo eksklusif lebih awal</li>
            </ul>
          </div>

          {/* Platinum */}
          <div className="bg-white p-8 rounded-3xl border border-t-4 space-y-4 shadow-sm" style={{ borderColor: C.borderCream, borderTopColor: C.coffee }}>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple-700">💎 Tier Tertinggi</span>
            <h3 className="text-lg font-bold">Platinum VIP</h3>
            <p className="text-xs leading-relaxed" style={{ color: C.softGray }}>
              Batas kenyamanan maksimal setelah mengumpulkan 500 poin. Potongan harga 15% dan prioritas reservasi meja VIP.
            </p>
            <ul className="text-xs space-y-2 pt-2 text-[#7D746F]">
              <li className="flex items-center gap-2">✓ Potongan harga 15%</li>
              <li className="flex items-center gap-2">✓ Reservasi area VIP prioritas</li>
              <li className="flex items-center gap-2">✓ Undangan sesi matcha tasting gratis</li>
            </ul>
          </div>

        </div>
      </section>

      {/* 🎫 6. LEAD CAPTURE - REGISTER / CLAIM WELCOME COUPON */}
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
                Dapatkan Voucher Diskon 15% Anda
              </h2>
              <p className="text-xs md:text-sm text-white/80 max-w-md mx-auto leading-relaxed">
                Klaim kode promosi instan untuk kunjungan pertama Anda sekaligus daftarkan diri sebagai member loyal BloomBites Matcha House.
              </p>
            </div>

            {!isClaimed ? (
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

      {/* 📅 7. TABLE RESERVATION / BOOKING TEMPAT (CRM Touchpoint) */}
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
                    <h5 className="font-bold text-xs">Prioritas Loyalty Gold & Platinum</h5>
                    <p className="text-[11px] text-gray-500">Member dengan tier Gold dan Platinum VIP berhak memilih posisi meja prioritas (dekat jendela/taman).</p>
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
                  Data Anda otomatis tercatat dalam sistem CRM kafe kami.
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

      {/* 💬 8. CUSTOMER REVIEWS (Voice of Customer) */}
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

      {/* 🙋‍♂️ 9. FAQ PORTAL (10 PERTANYAAN KONSUMEN KAFE) */}
      <section id="faq" className="py-20 bg-white border-t" style={{ borderColor: C.borderCream }}>
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B07A65]">
              FAQ Portal
            </span>
            <h3 className="text-3xl font-serif font-black">
              Pertanyaan yang Sering Diajukan
            </h3>
            <p className="text-sm" style={{ color: C.softGray }}>
              Informasi lengkap seputar menu matcha, proses reservasi meja, dan keanggotaan loyalty program kafe kami.
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "Bagaimana cara melakukan reservasi meja di BloomBites Matcha House?",
                a: "Anda cukup mengisi formulir di bagian 'Reservasi Meja' di atas dengan mengisi nama, nomor WhatsApp, email, tanggal kedatangan, jam, serta area meja pilihan Anda. Sistem reservasi kami akan langsung mengamankan meja dan mengirimkan konfirmasi instan."
              },
              {
                q: "Apakah reservasi meja dikenakan biaya tambahan?",
                a: "Tidak ada biaya tambahan untuk reservasi area Indoor (AC) maupun Outdoor (Garden). Namun, untuk pemesanan VIP Room, terdapat ketentuan minimum pembelanjaan makanan dan minuman yang akan dikonfirmasikan oleh tim kami."
              },
              {
                q: "Bagaimana cara menjadi member dan mengumpulkan poin loyalitas?",
                a: "Sangat mudah! Anda otomatis terdaftar sebagai member setelah melakukan reservasi online atau mengklaim voucher selamat datang di atas. Saat bertransaksi di kasir, sebutkan alamat email atau nomor HP terdaftar untuk mendapatkan poin belanja."
              },
              {
                q: "Bagaimana perhitungan pengumpulan poin reward?",
                a: "Setiap nominal pembelanjaan kelipatan Rp 1.000 di BloomBites Matcha House akan dikonversikan menjadi 1 Poin Reward CRM. Poin ini dapat dikumpulkan untuk menaikkan tier membership atau ditukarkan gratis dengan menu pilihan."
              },
              {
                q: "Bagaimana cara menukarkan poin reward dengan menu gratis?",
                a: "Anda dapat menukarkan poin saat melakukan pemesanan langsung di kasir outlet kami. Cukup beri tahu staf kasir bahwa Anda ingin menukarkan poin reward (misal: 50 poin untuk gratis 1 Signature Matcha Latte)."
              },
              {
                q: "Apakah bubuk matcha yang digunakan asli dari Jepang?",
                a: "Ya. Kami menggunakan 100% bubuk matcha organik kelas premium (ceremonial grade) yang diimpor langsung dari perkebunan teh tradisional di Uji, Kyoto, Jepang untuk memastikan rasa otentik yang khas."
              },
              {
                q: "Apakah tersedia opsi susu nabati untuk menu minuman?",
                a: "Tentu. Kami menyediakan opsi susu nabati (Oat Milk atau Almond Milk) sebagai alternatif susu sapi untuk seluruh varian minuman matcha latte kami. Cukup informasikan preferensi Anda ke kasir."
              },
              {
                q: "Berapa lama masa berlaku kupon selamat datang 15%?",
                a: "Kupon diskon 15% (WELCOME-MATCHA) untuk member baru berlaku selama 30 hari sejak tanggal klaim dilakukan dan dapat digunakan untuk satu kali transaksi di kasir."
              },
              {
                q: "Apakah satu nomor HP/email bisa mendaftarkan beberapa member?",
                a: "Satu nomor HP dan alamat email aktif hanya dapat terdaftar untuk satu profil member unik di sistem database CRM kafe kami."
              },
              {
                q: "Bagaimana jika saya ingin membatalkan atau mengubah jadwal reservasi meja?",
                a: "Anda dapat membatalkan atau mengubah jadwal reservasi dengan mengklik tautan konfirmasi di email Anda, atau menghubungi nomor layanan WhatsApp kami di +62 812-3456-7890 minimal 2 jam sebelum waktu kedatangan."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="border rounded-2xl overflow-hidden transition-colors"
                style={{ borderColor: C.borderCream }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 bg-[#FAF7F2]/50 hover:bg-[#FAF7F2] text-left flex justify-between items-center transition-colors group cursor-pointer border-0"
                >
                  <span className="text-xs font-bold group-hover:text-amber-900 transition-colors">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={16}
                    className="transition-transform duration-300"
                    style={{ 
                      color: C.softGray,
                      transform: activeFaq === index ? "rotate(180deg)" : "rotate(0)" 
                    }}
                  />
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    activeFaq === index ? "max-h-[250px] border-t" : "max-h-0"
                  }`}
                  style={{ borderColor: C.borderCream }}
                >
                  <div className="p-6 text-xs leading-relaxed bg-white" style={{ color: C.softGray }}>
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
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
              &copy; {new Date().getFullYear()} BloomBites Matcha House. All Rights Reserved.
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
              <span>Kapasitas Meja VIP (Min. Spend)</span>
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
