import { useState } from "react";
import {
  AiOutlineGift,
  AiOutlineArrowRight,
  AiOutlineInstagram,
  AiOutlineClockCircle,
  AiOutlineCompass,
  AiFillStar,
  AiOutlineMessage,
  AiOutlineQuestionCircle,
  AiOutlineDown,
} from "react-icons/ai";

export default function GuestLanding() {
  const [emailInput, setEmailInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [claimed, setClaimed] = useState(false);

  // State CRM & Interaktivitas
  const [activeFaq, setActiveFaq] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [reviewName, setReviewName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [reviewRating, setReviewRating] = useState(5);

  const [reviews, setReviews] = useState([
    {
      name: "Siti Rahma",
      rating: 5,
      text: "Matcha Mille Crepes-nya juara banget! Nggak terlalu manis, rasa otentik pahit khas Uji Matcha-nya dapet banget.",
      date: "Baru saja",
    },
    {
      name: "Dimas Pratama",
      rating: 5,
      text: "Nyoba klaim voucher diskon 15% lewat web ini pas mau bayar di kasir, langsung dapet potongan. CRM-nya mantap bener!",
      date: "Kemarin",
    },
    {
      name: "Citra Ayu",
      rating: 4,
      text: "Es Matcha Latte-nya creamy abis. Tempatnya juga estetik parah buat foto figma-able.",
      date: "2 hari lalu",
    },
  ]);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  // Data Menu Premium Lengkap
  const menuItems = [
    {
      name: "Matcha Latte Ice",
      desc: "Kombinasi seimbang susu segar creamy dengan kemurnian bubuk matcha organik tanpa pemanis buatan.",
      price: "Rp 28.000",
      tag: "Fresh Drink",
      category: "Drinks",
      isBestSeller: true,
    },
    {
      name: "Matcha Mille Crepes",
      desc: "Lapisan crepes super lembut berlapis krim matcha artisanal yang meleleh sempurna di setiap suapan.",
      price: "Rp 38.000",
      tag: "Signature Cake",
      category: "Cakes",
      isBestSeller: true,
    },
    {
      name: "Artisanal Butter Croissant",
      desc: "Pastry renyah berongga cantik dengan aroma mentega premium asal Prancis yang kaya rasa.",
      price: "Rp 22.000",
      tag: "Warm Bakery",
      category: "Cakes",
      isBestSeller: true,
    },
    {
      name: "Houjicha Latte Premium",
      desc: "Teh hijau panggang Jepang yang menghasilkan aroma nutty dan smoky yang menenangkan, dipadukan susu premium.",
      price: "Rp 30.000",
      tag: "Fresh Drink",
      category: "Drinks",
      isBestSeller: false,
    },
    {
      name: "Matcha Espresso Fusion",
      desc: "Perpaduan estetik 3 lapisan: sirup matcha murni, susu segar, dan shot espresso arabika pilihan.",
      price: "Rp 34.000",
      tag: "Specialty Coffee",
      category: "Drinks",
      isBestSeller: false,
    },
    {
      name: "Genmaicha Cold Brew",
      desc: "Seduhan dingin teh hijau beraroma beras panggang (popcorn tea) yang super light dan menyegarkan dahaga.",
      price: "Rp 26.000",
      tag: "Clear Tea",
      category: "Drinks",
      isBestSeller: false,
    },
    {
      name: "Uji Matcha Tiramisu",
      desc: "Kue klasik Italia yang dimodifikasi dengan siraman espresso matcha, keju mascarpone, dan taburan bubuk matcha pekat.",
      price: "Rp 42.000",
      tag: "Premium Dessert",
      category: "Cakes",
      isBestSeller: true,
    },
    {
      name: "Matcha Pain au Chocolat",
      desc: "Pastry berlapis khas Prancis dengan isian cokelat batangan premium dan sentuhan glaze matcha di atasnya.",
      price: "Rp 26.000",
      tag: "Warm Bakery",
      category: "Cakes",
      isBestSeller: false,
    },
    {
      name: "Kyoto Matcha Brownies",
      desc: "Brownies panggang bertekstur fudgy dengan white chocolate dan bubuk matcha premium, disajikan dengan kenari renyah.",
      price: "Rp 24.000",
      tag: "Sweet Treats",
      category: "Cakes",
      isBestSeller: false,
    },
  ];

  // Filter menu berdasarkan kategori aktif
  const filteredMenu =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  const handleClaimVoucher = (e) => {
    e.preventDefault();
    setClaimed(true);
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!reviewName || !reviewText) return;
    setReviews([
      {
        name: reviewName,
        rating: reviewRating,
        text: reviewText,
        date: "Baru saja",
      },
      ...reviews,
    ]);
    setReviewSubmitted(true);
    setReviewText("");
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#F9F8F3] text-[#3C4A22] font-sans antialiased selection:bg-[#879B54]/20">
      {/* 📋 TOP BAR */}
      <div className="bg-[#3C4A22] text-[#F9F8F3] text-xs py-2 px-4 text-center font-medium tracking-wide">
        ✨ Nikmati Diskon 15% Untuk Semua Pengunjung Baru BloomBites!
      </div>

      {/* 🧭 NAVIGATION BAR */}
      <nav className="sticky top-0 z-50 bg-[#F9F8F3]/90 backdrop-blur-md border-b border-[#3C4A22]/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#3C4A22] rounded-full flex items-center justify-center text-[#F9F8F3] font-bold text-sm">
              B
            </div>
            <span className="text-xl font-extrabold tracking-tight uppercase text-[#3C4A22]">
              Bloom<span className="text-[#879B54]">Bites</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#3C4A22]/80">
            <a href="#menu" className="hover:text-[#3C4A22] transition-colors">
              Signature Menu
            </a>
            <a href="#promo" className="hover:text-[#3C4A22] transition-colors">
              Guest Voucher
            </a>
            <a
              href="#reviews"
              className="hover:text-[#3C4A22] transition-colors"
            >
              Suara Pelanggan
            </a>
            <a href="#faq" className="hover:text-[#3C4A22] transition-colors">
              Tanya Jawab
            </a>
          </div>

          <a
            href="/login"
            className="inline-flex items-center gap-1.5 text-xs font-bold px-5 py-2.5 border-2 border-[#3C4A22] text-[#3C4A22] rounded-full hover:bg-[#3C4A22] hover:text-[#F9F8F3] transition-all duration-300 transform active:scale-95"
          >
            <span>Login</span>
          </a>
        </div>
      </nav>

      {/* 🌿 HERO SECTION */}
      <header className="max-w-6xl mx-auto px-6 pt-16 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="space-y-6 lg:col-span-7">
          <div className="inline-flex items-center gap-2 bg-[#879B54]/10 text-[#4C5E2D] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            🍃 Authentic Japanese Uji Matcha
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black text-[#3C4A22] leading-[1.15]">
            Sentuhan Kelembutan <br />
            <span className="text-[#879B54] italic font-normal">
              Matcha Pilihan
            </span>{" "}
            <br />
            di Setiap Gigitan.
          </h1>
          
          <p className="text-[#3C4A22]/70 text-sm md:text-base max-w-lg leading-relaxed">
            Menghadirkan harmoni rasa otentik dari perkebunan teh Uji, Kyoto.
            Nikmati kesegaran Matcha Latte dan kelembutan lapisan premium Mille
            Crepes kami.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#menu"
              className="px-8 py-3.5 bg-[#3C4A22] text-[#F9F8F3] font-bold rounded-xl text-sm shadow-lg shadow-[#3C4A22]/20 hover:bg-[#4C5E2D] hover:-translate-y-0.5 transition-all duration-200"
            >
              Jelajahi Menu Utama
            </a>
            <a
              href="#promo"
              className="px-8 py-3.5 bg-white border border-[#3C4A22]/10 text-[#3C4A22] font-bold rounded-xl text-sm hover:bg-gray-50 transition-all duration-200"
            >
              Ambil Voucher Diskon
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 relative flex justify-center">
          <div className="w-full max-w-[340px] aspect-[4/5] bg-gradient-to-tr from-[#3C4A22] to-[#879B54] rounded-[40px] rounded-tl-[120px] shadow-2xl relative overflow-hidden flex flex-col justify-end p-8 text-[#F9F8F3]">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
            <div className="z-10 space-y-2">
              
              <span className="text-[10px] bg-white/20 backdrop-blur-md text-white font-bold px-2.5 py-1 rounded-full uppercase">
                Best Seller
              </span>
              <h4 className="text-xl font-bold font-serif">
                Matcha Mille Crepes
              </h4>
              <p className="text-xs text-white/80 font-light leading-relaxed">
                20 lapisan crepes tipis dengan balutan krim matcha segar impor
                Jepang.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* 🍦 FEATURED GALLERY */}
      <section className="max-w-6xl mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-2xl border border-[#3C4A22]/5 shadow-sm flex gap-4 items-start">
          <div className="p-3 bg-[#879B54]/10 text-[#3C4A22] rounded-xl">
            <AiOutlineClockCircle className="text-xl" />
          </div>
          <div>
            <h5 className="font-bold text-sm">Jam Operasional</h5>
            <p className="text-xs text-[#3C4A22]/60 mt-1">
              Setiap Hari (09:00 - 22:00 WIB)
            </p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-[#3C4A22]/5 shadow-sm flex gap-4 items-start">
          <div className="p-3 bg-[#879B54]/10 text-[#3C4A22] rounded-xl">
            <AiOutlineCompass className="text-xl" />
          </div>
          <div>
            <h5 className="font-bold text-sm">Lokasi Kafe</h5>
            <p className="text-xs text-[#3C4A22]/60 mt-1">
              Jl. Matcha Raya No. 28, Jakarta
            </p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-[#3C4A22]/5 shadow-sm flex gap-4 items-start">
          <div className="p-3 bg-[#879B54]/10 text-[#3C4A22] rounded-xl">
            <AiOutlineInstagram className="text-xl" />
          </div>
          <div>
            <h5 className="font-bold text-sm">Ikuti Media Sosial</h5>
            <p className="text-xs text-[#3C4A22]/60 mt-1">
              @bloombites.matchahouse
            </p>
          </div>
        </div>
      </section>

      {/* 🍰 SIGNATURE CATALOG MENU */}
      <section id="menu" className="bg-white border-y border-[#3C4A22]/5 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold text-[#879B54] uppercase tracking-widest">
              Our Favorites
            </span>
            <h3 className="text-3xl font-serif font-black text-[#3C4A22]">
              Eksplorasi Menu Terlaris
            </h3>
            <p className="text-sm text-[#3C4A22]/60">
              Dibuat menggunakan bahan-bahan organik pilihan untuk menghasilkan
              kualitas tekstur terbaik.
            </p>
          </div>

          {/* Tab Filter Kategori */}
          <div className="flex justify-center items-center gap-3 mb-12">
            {["All", "Drinks", "Cakes"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-[#3C4A22] text-[#F9F8F3] shadow-md shadow-[#3C4A22]/10"
                    : "bg-[#F9F8F3] text-[#3C4A22] hover:bg-[#3C4A22]/5"
                }`}
              >
                {cat === "All"
                  ? "Semua Menu"
                  : cat === "Drinks"
                    ? "Minuman Segar"
                    : "Kue & Pastry"}
              </button>
            ))}
          </div>

          {/* Grid Menu Dinamis */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMenu.map((item, index) => (
              <div
                key={index}
                className="bg-[#F9F8F3]/40 border border-[#3C4A22]/5 rounded-3xl p-6 space-y-4 hover:bg-white hover:shadow-xl hover:shadow-[#3C4A22]/5 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-full aspect-[4/3] bg-[#3C4A22]/5 rounded-2xl flex items-center justify-center text-[#3C4A22]/40 font-bold text-xs group-hover:bg-[#879B54]/10 group-hover:text-[#4C5E2D] transition-colors">
                    [ 🍵 Foto {item.name} ]
                  </div>
                  <div className="space-y-1.5">
                    <span className="text-[10px] bg-[#3C4A22]/5 text-[#4C5E2D] font-bold px-2 py-0.5 rounded-md">
                      {item.tag}
                    </span>
                    <h4 className="font-serif font-bold text-lg text-[#3C4A22]">
                      {item.name}
                    </h4>
                    <p className="text-xs text-[#3C4A22]/60 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
                <div className="pt-4 flex justify-between items-center border-t border-[#3C4A22]/5 mt-4">
                  <span className="font-mono font-bold text-[#3C4A22] text-sm">
                    {item.price}
                  </span>
                  {item.isBestSeller && (
                    <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded-md font-bold">
                      Terlaris 🔥
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✉️ PROMO SECTION */}
      <section id="promo" className="max-w-6xl mx-auto px-6 py-24">
        <div className="bg-[#3C4A22] rounded-[40px] p-8 md:p-16 text-[#F9F8F3] relative overflow-hidden shadow-2xl">
          <div className="max-w-2xl mx-auto text-center space-y-6 relative z-10">
            <div className="mx-auto w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-amber-300 shadow-inner">
              <AiOutlineGift className="text-xl" />
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight">
                Dapatkan Voucher Member Pertama Anda
              </h2>
              <p className="text-sm text-[#F9F8F3]/70 max-w-md mx-auto leading-relaxed">
                Klaim kode promosi instan potongan harga 15% sekaligus daftarkan
                email Anda sebagai tamu eksklusif di ekosistem CRM BloomBites.
              </p>
            </div>

            {!claimed ? (
              <form
                onSubmit={handleClaimVoucher}
                className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 pt-4"
              >
                <input
                  type="text"
                  required
                  placeholder="Nama lengkap Anda"
                  value={nameInput}
                  onChange={(e) => {
                    setNameInput(e.target.value);
                    setReviewName(e.target.value);
                  }}
                  className="w-full px-5 py-3.5 bg-white text-[#3C4A22] rounded-xl outline-none text-sm border-none"
                />
                <input
                  type="email"
                  required
                  placeholder="Alamat email aktif"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="w-full px-5 py-3.5 bg-white text-[#3C4A22] rounded-xl outline-none text-sm border-none"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 bg-[#879B54] text-white font-bold text-sm rounded-xl whitespace-nowrap hover:bg-[#9cb363] transition-all duration-200 shadow-md flex items-center justify-center gap-2 active:scale-95"
                >
                  <span>Klaim Kode</span>
                  <AiOutlineArrowRight />
                </button>
              </form>
            ) : (
              <div className="max-w-md mx-auto p-5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl text-sm font-medium">
                ✨ Selamat <strong>{nameInput}</strong>! Kode kupon unik{" "}
                <span className="underline font-bold text-amber-300">
                  WELCOME-MATCHA
                </span>{" "}
                berhasil dicatat ke email <code>{emailInput}</code>. Gunakan
                saat bertransaksi di kasir!
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 🌟 CRM REVIEWS SECTION */}
      <section
        id="reviews"
        className="bg-[#3C4A22]/5 py-24 border-t border-[#3C4A22]/5"
      >
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 bg-white p-8 rounded-[32px] border border-[#3C4A22]/5 shadow-xl space-y-6">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#879B54] uppercase tracking-wider">
                <AiOutlineMessage className="text-sm" /> CRM Feedback Hub
              </div>
              <h3 className="text-2xl font-serif font-black text-[#3C4A22]">
                Bagikan Pengalaman Anda
              </h3>
              <p className="text-xs text-[#3C4A22]/60 leading-relaxed">
                Kritik dan saran Anda langsung masuk ke sistem dashboard
                manajemen kami untuk peningkatan kualitas layanan menu.
              </p>
            </div>

            {!reviewSubmitted ? (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#3C4A22]/70 mb-1.5">
                    Nama Kamu
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Amel Matcha"
                    value={reviewName}
                    onChange={(e) => setReviewName(e.target.value)}
                    className="w-full px-4 py-3 bg-[#F9F8F3] border border-[#3C4A22]/10 rounded-xl outline-none text-sm focus:ring-2 focus:ring-[#879B54] text-[#3C4A22]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#3C4A22]/70 mb-1.5">
                    Rating Menu
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setReviewRating(star)}
                        className="text-xl transition-transform active:scale-90"
                      >
                        <AiFillStar
                          className={
                            star <= reviewRating
                              ? "text-amber-400"
                              : "text-gray-200"
                          }
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#3C4A22]/70 mb-1.5">
                    Ulasan / Cerita
                  </label>
                  <textarea
                    rows="3"
                    required
                    placeholder="Bagaimana rasa minuman atau cake yang kamu pesan?"
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    className="w-full px-4 py-3 bg-[#F9F8F3] border border-[#3C4A22]/10 rounded-xl outline-none text-sm focus:ring-2 focus:ring-[#879B54] text-[#3C4A22] placeholder:text-gray-400"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#3C4A22] text-[#F9F8F3] font-bold text-sm rounded-xl hover:bg-[#4C5E2D] transition-all duration-200 flex items-center justify-center gap-2"
                >
                  Kirim Ulasan Premium
                </button>
              </form>
            ) : (
              <div className="p-6 bg-[#879B54]/10 rounded-2xl text-center space-y-3">
                <p className="text-sm font-bold text-[#3C4A22]">
                  ✨ Terima kasih atas ulasan berharganya!
                </p>
                <p className="text-xs text-[#3C4A22]/70">
                  Feedback berhasil direkam ke dalam basis data analitik
                  kepuasan CRM BloomBites.
                </p>
                <button
                  onClick={() => setReviewSubmitted(false)}
                  className="text-xs font-bold text-[#879B54] underline hover:text-[#3C4A22]"
                >
                  Kirim Ulasan Lain
                </button>
              </div>
            )}
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold text-[#879B54] uppercase tracking-widest">
              Real-time Feed
            </span>
            <h3 className="text-2xl font-serif font-black text-[#3C4A22]">
              Apa Kata Sahabat BloomBites?
            </h3>
            <div className="space-y-4 max-h-[420px] overflow-y-auto pr-2">
              {reviews.map((rev, i) => (
                <div
                  key={i}
                  className="bg-white p-5 rounded-2xl border border-[#3C4A22]/5 shadow-sm space-y-2.5 transition-all duration-300 hover:shadow-md"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-bold text-sm text-[#3C4A22]">
                        {rev.name}
                      </h4>
                      <div className="flex gap-0.5 text-xs text-amber-400 mt-0.5">
                        {Array.from({ length: rev.rating }).map((_, s) => (
                          <AiFillStar key={s} />
                        ))}
                      </div>
                    </div>
                    <span className="text-[10px] text-gray-400 font-mono">
                      {rev.date}
                    </span>
                  </div>
                  <p className="text-xs text-[#3C4A22]/70 leading-relaxed italic">
                    "{rev.text}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 🙋‍♂️ INTERACTIVE FAQ SECTION (LENGKAP 4 PERTANYAAN) */}
      <section id="faq" className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#879B54] uppercase tracking-wider">
              <AiOutlineQuestionCircle className="text-sm" /> FAQ Portal
            </div>
            <h3 className="text-3xl font-serif font-black text-[#3C4A22]">
              Pertanyaan Yang Sering Diajukan
            </h3>
            <p className="text-sm text-[#3C4A22]/60">
              Semua informasi seputar kupon member dan ekosistem data digital
              kafe kami.
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "Bagaimana cara menukarkan Voucher Diskon 15%?",
                a: "Sangat mudah! Kamu hanya perlu memasukkan nama dan email aktif di bagian 'Klaim Voucher' di atas. Setelah kode kupon muncul, tunjukkan layar smartphone kamu atau sebutkan email terdaftar kepada kasir BloomBites saat melakukan transaksi pembayaran.",
              },
              {
                q: "Apakah data email saya aman di ekosistem CRM BloomBites?",
                a: "Keamanan privasi Anda adalah prioritas kami. Data nama dan email yang didaftarkan murni digunakan untuk enkripsi pelacakan poin rewards belanja kebaikan Anda, penawaran promo ulang tahun otomatis, serta tidak akan pernah dibagikan ke pihak ketiga.",
              },
              {
                q: "Apakah satu email bisa digunakan untuk klaim beberapa kupon?",
                a: "Kupon promo sambutan pengunjung baru (WELCOME-MATCHA) dibatasi sekali klaim per satu alamat email pengguna unik yang divalidasi oleh sistem administrasi kasir terpusat kami.",
              },
              {
                q: "Di mana saya bisa melihat riwayat transaksi keanggotaan saya?",
                a: "Untuk saat ini, sistem riwayat belanja tercatat penuh secara internal pada aplikasi admin kasir kami. Staf kasir kami dengan senang hati dapat mencetakkan atau mengirimkan rangkuman poin loyalitas bulanan langsung ke email terdaftar Anda.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="border border-[#3C4A22]/10 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 bg-[#F9F8F3]/50 hover:bg-[#F9F8F3] text-left flex justify-between items-center transition-colors group"
                >
                  <span className="text-sm font-bold text-[#3C4A22] group-hover:text-[#879B54] transition-colors">
                    {faq.q}
                  </span>
                  <AiOutlineDown
                    className={`text-xs text-[#3C4A22]/60 transition-transform duration-300 ${activeFaq === index ? "transform rotate-180 text-[#879B54]" : ""}`}
                  />
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${activeFaq === index ? "max-h-[200px] border-t border-[#3C4A22]/5" : "max-h-0"}`}
                >
                  <div className="p-6 text-xs text-[#3C4A22]/75 leading-relaxed bg-white">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🗺️ FOOTER */}
      <footer className="bg-[#3C4A22] text-[#F9F8F3]/60 text-xs py-12 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div>
            <p className="font-bold text-sm text-[#F9F8F3] uppercase tracking-wider mb-1">
              BloomBites
            </p>
            <p>
              &copy; {new Date().getFullYear()} BloomBites Matcha House. All
              rights reserved.
            </p>
          </div>

          <div className="flex gap-6 text-[#F9F8F3]/80 font-medium">
            <a href="#menu" className="hover:text-white transition-colors">
              Menu
            </a>
            <a href="#promo" className="hover:text-white transition-colors">
              Kupon Guest
            </a>
            <a href="#reviews" className="hover:text-white transition-colors">
              Ulasan
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
              FAQ
            </a>
            <a
              href="/login"
              className="text-amber-300 font-bold hover:text-amber-200 transition-colors flex items-center gap-1"
            >
              <span>Portal Staf</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
