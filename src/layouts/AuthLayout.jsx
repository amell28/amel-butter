import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E8EDDF] p-4 font-sans">
      
      {/* Container Card Lebar */}
      <div className="flex w-full max-w-5xl bg-white rounded-[2rem] shadow-2xl overflow-hidden min-h-[600px]">
        
        {/* =========================================
            LEFT SIDE: BRANDING (Murni CSS, Tanpa Foto Background)
            ========================================= */}
        <div className="hidden md:flex flex-col justify-between w-1/2 bg-[#2c3619] p-12 text-white relative overflow-hidden">
          {/* Aksen bulatan dekoratif (murni CSS) */}
          <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-[#364322] rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-80 h-80 bg-[#1f2612] rounded-full blur-3xl opacity-50"></div>

          {/* Logo & Brand Kiri Atas */}
          <div className="relative z-10 flex items-center gap-3">
            <img 
              src="/img/logo.png" 
              alt="BloomBites Logo" 
              className="w-20 h-20 object-contain" 
            />
            <h1 className="text-3xl font-extrabold tracking-tight">
              BloomBites<span className="text-[#879b54]"> Cafe</span>
            </h1>
          </div>
          
          {/* Teks Sambutan Tengah */}
          <div className="relative z-10 space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Welcome to <br/>
              <span className="text-[#879b54]">Admin Portal</span>
            </h2>
            <p className="text-[#c3ce9e] text-lg font-light max-w-sm leading-relaxed">
              Manage your orders, menu, and customers efficiently in one seamless dashboard.
            </p>
          </div>

          {/* Copyright Kiri Bawah */}
          <div className="relative z-10 text-sm text-[#879b54] font-medium tracking-wide">
            © 2025 BloomBites Cafe
          </div>
        </div>

        {/* =========================================
            RIGHT SIDE: FORM AREA (Outlet)
            ========================================= */}
        <div className="w-full md:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center bg-white">
          
          {/* Logo untuk Mobile (Hanya muncul jika di HP) */}
          <div className="md:hidden flex flex-col items-center justify-center mb-10 gap-3">
            <img 
              src="/img/logo.png" 
              alt="BloomBites Logo" 
              className="w-16 h-16 object-contain" 
            />
            <h1 className="text-3xl font-extrabold text-[#2c3619]">
              BloomBites<span className="text-[#879b54]"> Cafe</span>
            </h1>
          </div>

          {/* Area Render untuk Login / Register / Forgot */}
          <div className="w-full max-w-md mx-auto">
            <Outlet />
          </div>

        </div>
      </div>
    </div>
  );
}