import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authAPI } from "../../services/authAPI";

export default function Register() {
  const navigate = useNavigate();
  const [dataForm, setDataForm] = useState({ username: "", email: "", password: "", confirmPassword: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" }); // Notifikasi State

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm({ ...dataForm, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    if (dataForm.password !== dataForm.confirmPassword) {
      setMessage({ type: "error", text: "Passwords do not match!" });
      setLoading(false);
      return;
    }

    try {
      await authAPI.register(dataForm.email, dataForm.password, dataForm.username);
      setMessage({ type: "success", text: "Akun berhasil dibuat! Mengalihkan... 🥳" });
      
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (err) {
      setMessage({ type: "error", text: err.response?.data?.message || "Gagal membuat akun." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full space-y-8">
      <div className="text-center sm:text-left">
        <h2 className="text-3xl font-bold tracking-tight text-[#2c3619]">Create an account</h2>
        <p className="mt-2 text-sm text-gray-500">Join us to start your premium matcha experience today.</p>
      </div>

      {/* Alert Box */}
      {message.text && (
        <div className={`p-3.5 rounded-xl text-sm font-medium text-center ${
          message.type === "success" ? "bg-green-50 text-green-700 border border-green-100" : "bg-red-50 text-red-700 border border-red-100"
        }`}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
          <input
            type="text"
            name="username"
            value={dataForm.username}
            onChange={handleChange}
            required
            className="block w-full px-4 py-3.5 border border-gray-200 rounded-xl bg-gray-50/50 text-gray-800 focus:outline-none"
            placeholder="johndoe"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email address</label>
          <input
            type="email"
            name="email"
            value={dataForm.email}
            onChange={handleChange}
            required
            className="block w-full px-4 py-3.5 border border-gray-200 rounded-xl bg-gray-50/50 text-gray-800 focus:outline-none"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
          <input
            type="password"
            name="password"
            value={dataForm.password}
            onChange={handleChange}
            required
            className="block w-full px-4 py-3.5 border border-gray-200 rounded-xl bg-gray-50/50 text-gray-800 focus:outline-none"
            placeholder="••••••••"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={dataForm.confirmPassword}
            onChange={handleChange}
            required
            className="block w-full px-4 py-3.5 border border-gray-200 rounded-xl bg-gray-50/50 text-gray-800 focus:outline-none"
            placeholder="••••••••"
          />
        </div>

        <div className="pt-2">
          <button
            disabled={loading}
            type="submit"
            className="w-full flex justify-center py-3.5 px-4 rounded-xl text-base font-semibold text-white bg-[#879b54] hover:bg-[#738645] disabled:opacity-50"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </div>
      </form>

      <div className="text-center text-sm text-gray-600">
        Already have an account?{' '}
        <Link to="/login" className="font-semibold text-[#879b54] hover:text-[#5c6b3e]">Log in here</Link>
      </div>
    </div>
  );
}