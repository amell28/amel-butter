import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";

export default function ErrorPage({
  code = "404",
  description = "We couldn't find the page you're looking for. It might have been moved or deleted.",
  image,
}) {
  // Fungsi pembantu untuk mendapatkan judul yang rapi
  const getTitle = () => {
    switch (String(code)) {
      case "404": return "Page Not Found";
      case "400": return "Bad Request";
      case "401": return "Unauthorized Access";
      case "403": return "Access Forbidden";
      case "500": return "Internal Server Error";
      default: return "Something Went Wrong";
    }
  };

  return (
    <div className="flex relative items-center justify-center min-h-[80vh] px-6 overflow-hidden">
      
      {/* Efek Glow Latar Belakang */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#879b54]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative text-center max-w-md z-10 flex flex-col items-center">
        
        {/* Gambar Kustom (Opsional) */}
        {image && (
          <img
            src={image}
            alt={`error-${code}`}
            className="w-48 sm:w-56 object-contain drop-shadow-sm mb-8 animate-fade-in"
          />
        )}

        {/* Tipografi Kode Error yang Elegan */}
        {!image && (
          <div className="relative mb-4">
            <h1 className="text-[6rem] sm:text-[8rem] font-black text-[#879b54]/20 leading-none tracking-tighter select-none">
              {code}
            </h1>
            <div className="absolute inset-0 flex items-center justify-center text-4xl sm:text-5xl font-bold text-[#2c3619]">
              {code}
            </div>
          </div>
        )}

        {/* Judul & Deskripsi */}
        <h2 className="text-2xl font-bold text-[#2c3619] tracking-tight mt-2">
          {getTitle()}
        </h2>
        
        <p className="text-gray-500 mt-3 text-sm sm:text-base leading-relaxed">
          {description}
        </p>

        {/* Tombol Kembali ke Dashboard */}
        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 mt-8 bg-[#879b54] hover:bg-[#738645] text-white font-medium px-6 py-3 rounded-xl shadow-sm shadow-[#879b54]/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#879b54] transition-all duration-200 active:scale-[0.98]"
        >
          <FiHome className="text-lg" />
          Back to Dashboard
        </Link>
        
      </div>
    </div>
  );
}