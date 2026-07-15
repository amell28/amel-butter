import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authAPI } from "../../services/authAPI"; 

export default function Login() {
  const navigate = useNavigate();
  const [dataForm, setDataForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" }); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm({ ...dataForm, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });
    
    try {
      const user = await authAPI.login(dataForm.email, dataForm.password);
      localStorage.setItem("user", JSON.stringify(user));
      
      setMessage({ type: "success", text: `Selamat datang kembali, ${user.username || 'User'}! 👋` });
      
      // Pembagian rute langsung berdasarkan role admin dan member
      setTimeout(() => {
        if (user.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/"); // Ke halaman utama jika rolenya member
        }
      }, 1000);
    } catch (err) {
      setMessage({ type: "error", text: err.message || "Email atau password salah!" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[400px] mx-auto font-roboto antialiased">
      <div className="mb-10 flex flex-col items-center sm:items-start">
        <h2 className="text-[32px] font-bold text-[#0C1421]">Welcome Back 👋</h2>
        <p className="text-[#313957] text-[15px] mt-4 leading-relaxed">Sign in to start managing your projects.</p>
      </div>

      {/* Alert Box */}
      {message.text && (
        <div className={`mb-4 p-3 rounded-xl text-sm font-medium text-center ${
          message.type === "success" ? "bg-green-50 text-green-700 border border-green-100" : "bg-red-50 text-red-700 border border-red-100"
        }`}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="text-[14px] font-medium text-[#4A5568]">Email</label>
          <input
            type="email"
            name="email"
            value={dataForm.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-[14px] bg-[#F7FAFC] border border-[#E2E8F0] rounded-xl outline-none"
            placeholder="Example@email.com"
          />
        </div>

        <div className="space-y-2">
          <label className="text-[14px] font-medium text-[#4A5568]">Password</label>
          <input
            type="password"
            name="password"
            value={dataForm.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-[14px] bg-[#F7FAFC] border border-[#E2E8F0] rounded-xl outline-none"
            placeholder="at least 8 characters"
          />
        </div>

        <button
          disabled={loading}
          type="submit"
          className={`w-full py-[14px] rounded-xl font-bold text-white transition-all
            ${loading ? "bg-[#2D3748]/70 cursor-not-allowed" : "bg-[#1A202C] hover:bg-[#2D3748]"}`}
        >
          {loading ? "Processing..." : "Sign in"}
        </button>
      </form>

      <div className="mt-10 text-center">
        <p className="text-[#4A5568] text-[14px]">
          Don't you have an account?{" "}
          <Link to="/register" className="text-[#1E4AE9] font-bold hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
}