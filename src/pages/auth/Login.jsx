import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();

  const [dataForm, setDataForm] = useState({
    email: "emilys",
    password: "emilyspass",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm({ ...dataForm, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await axios.post(
        "https://dummyjson.com/user/login",
        { username: dataForm.email, password: dataForm.password },
        { headers: { "Content-Type": "application/json" } }
      );
      localStorage.setItem("user", JSON.stringify(response.data));
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[400px] mx-auto font-roboto antialiased">
      
      {/* Header Section */}
      <div className="mb-10 flex flex-col items-center sm:items-start">
        <h2 className="text-[32px] font-bold text-[#0C1421] flex items-center gap-2">
          Welcome Back 👋
        </h2>
        <p className="text-[#313957] text-[15px] mt-4 leading-relaxed text-center sm:text-left">
          Today is a new day. It's your day. You shape it. <br />
          Sign in to start managing your projects.
        </p>
      </div>

      {/* Error Message */}
      {error && (
        <div className="mb-4 text-red-500 text-sm font-medium animate-pulse">
          {error}
        </div>
      )}

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Email/Username Field */}
        <div className="space-y-2">
          <label className="text-[14px] font-medium text-[#4A5568]">Email</label>
          <input
            type="text"
            name="email"
            value={dataForm.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-[14px] bg-[#F7FAFC] border border-[#E2E8F0] rounded-xl text-[#1A202C] placeholder-[#A0AEC0] focus:ring-2 focus:ring-[#1A202C]/5 focus:border-[#1A202C] transition-all outline-none"
            placeholder="Example@email.com"
          />
        </div>

        {/* Password Field */}
        <div className="space-y-2">
          <label className="text-[14px] font-medium text-[#4A5568]">Password</label>
          <input
            type="password"
            name="password"
            value={dataForm.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-[14px] bg-[#F7FAFC] border border-[#E2E8F0] rounded-xl text-[#1A202C] placeholder-[#A0AEC0] focus:ring-2 focus:ring-[#1A202C]/5 focus:border-[#1A202C] transition-all outline-none"
            placeholder="at least 8 characters"
          />
        </div>

        {/* Forgot Password */}
        <div className="flex justify-end">
          <Link to="/forgot" className="text-[13px] text-[#2D3748] font-medium hover:text-[#4A90E2] transition-colors">
            Forgot Password?
          </Link>
        </div>

        {/* Sign In Button: Warna Navy Gelap sesuai Gambar */}
        <button
          disabled={loading}
          type="submit"
          className={`w-full py-[14px] rounded-xl font-bold text-white transition-all shadow-md
            ${loading ? "bg-[#2D3748]/70 cursor-not-allowed" : "bg-[#1A202C] hover:bg-[#2D3748] active:scale-[0.99]"}`}
        >
          {loading ? "Processing..." : "Sign in"}
        </button>
      </form>

      {/* Divider "Or" */}
      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-[#EDF2F7]"></div>
        </div>
        <div className="relative flex justify-center text-[14px]">
          <span className="px-3 bg-white text-[#A0AEC0]">Or</span>
        </div>
      </div>

      {/* Social Login Buttons */}
      <div className="space-y-3">
        <button className="w-full flex items-center justify-center gap-3 py-[12px] bg-[#F7FAFC] border border-[#EDF2F7] rounded-xl text-[14px] font-medium text-[#4A5568] hover:bg-[#EDF2F7] transition-all">
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-5 h-5" alt="Google" />
          Sign in with Google
        </button>
        <button className="w-full flex items-center justify-center gap-3 py-[12px] bg-[#F7FAFC] border border-[#EDF2F7] rounded-xl text-[14px] font-medium text-[#4A5568] hover:bg-[#EDF2F7] transition-all">
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" className="w-5 h-5" alt="Facebook" />
          Sign in with Facebook
        </button>
      </div>

      {/* Sign Up Link */}
      <div className="mt-10 text-center">
        <p className="text-[#4A5568] text-[14px]">
          Don't you have an account?{" "}
          <Link to="/register" className="text-[#1E4AE9] font-bold hover:underline">
            Sign up
          </Link>
        </p>
      </div>
      
    </div>
  );
}