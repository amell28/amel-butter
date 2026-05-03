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
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "https://dummyjson.com/user/login",
        {
          username: dataForm.email,
          password: dataForm.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      localStorage.setItem("user", JSON.stringify(response.data));
      navigate("/");
    } catch (err) {
      setError(
        err.response?.data?.message || "Username atau password salah"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full space-y-8">
      
      {/* Header Form (Tanpa Foto/Logo) */}
      <div className="text-center sm:text-left">
        <h2 className="text-3xl font-bold tracking-tight text-[#2c3619]">
          Welcome Back 👋
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          Please enter your details to sign in.
        </p>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50/80 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm shadow-sm flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Username Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Username
          </label>
          <input
            type="text"
            name="email"
            value={dataForm.email}
            onChange={handleChange}
            required
            className="appearance-none block w-full px-4 py-3.5 border border-gray-200 rounded-xl shadow-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#879b54] focus:border-transparent transition-all duration-200 bg-gray-50/50 focus:bg-white"
            placeholder="Enter username"
          />
        </div>

        {/* Password Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={dataForm.password}
            onChange={handleChange}
            required
            className="appearance-none block w-full px-4 py-3.5 border border-gray-200 rounded-xl shadow-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#879b54] focus:border-transparent transition-all duration-200 bg-gray-50/50 focus:bg-white"
            placeholder="••••••••"
          />
        </div>

        {/* Forgot Password Link */}
        <div className="flex items-center justify-end">
          <Link to="/forgot" className="text-sm font-medium text-[#879b54] hover:text-[#5c6b3e] transition-colors">
            Forgot your password?
          </Link>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            disabled={loading}
            type="submit"
            className={`w-full flex justify-center items-center py-3.5 px-4 border border-transparent rounded-xl shadow-sm text-base font-semibold text-white transition-all duration-200 
              ${loading 
                ? "bg-[#a2ad83] cursor-not-allowed" 
                : "bg-[#879b54] hover:bg-[#738645] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#879b54] active:scale-[0.98]"
              }`}
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : (
              "Login"
            )}
          </button>
        </div>
      </form>

      {/* Footer Text */}
      <div className="text-center text-sm text-gray-600 mt-8">
        Don't have an account?{" "}
        <Link 
          to="/register" 
          className="font-semibold text-[#879b54] hover:text-[#5c6b3e] transition-colors"
        >
          Sign up here
        </Link>
      </div>

    </div>
  );
}