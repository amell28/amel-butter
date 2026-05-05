import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4 sm:p-8 font-sans antialiased">
      
      {/* Container Utama: Menggunakan Flexbox untuk membagi Form dan Gambar */}
      <div className="flex w-full max-w-[1200px] gap-12 items-center">
        
        {/* =========================================
            LEFT SIDE: FORM AREA (Outlet)
            ========================================= */}
        <div className="flex-1 flex flex-col justify-center py-10">
          <div className="w-full max-w-[420px] mx-auto lg:ml-auto lg:mr-0">
            <Outlet />
          </div>
          
          {/* Footer Copyright di bawah Form sesuai Figma */}
          <div className="mt-20 text-center lg:text-left lg:ml-auto lg:mr-0 w-full max-w-[420px]">
             <p className="text-[11px] text-gray-300 font-medium tracking-widest uppercase">
               © 2023 ALL RIGHTS RESERVED
             </p>
          </div>
        </div>

        {/* =========================================
            RIGHT SIDE: IMAGE AREA (Art.jpg)
            ========================================= */}
        <div className="hidden lg:block w-1/2 h-[85vh] sticky top-10">
          <div 
            className="w-full h-full rounded-[0px] shadow-2xl bg-cover bg-center overflow-hidden"
            style={{ 
              backgroundImage: "url('/img/Art.png')",
              // Jika file-nya PNG, ganti jadi Art.png
            }}
          >
            {/* Overlay halus opsional jika ingin sedikit efek kedalaman */}
            <div className="w-full h-full bg-black/5"></div>
          </div>
        </div>

      </div>
    </div>
  );
}