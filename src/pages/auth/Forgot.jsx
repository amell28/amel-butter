import { Link } from "react-router-dom";

export default function Forgot() {
  return (
    <div className="w-full space-y-8">
      
      {/* Header Form (Tanpa Foto/Logo) */}
      <div className="text-center sm:text-left">
        <h2 className="text-3xl font-bold tracking-tight text-[#2c3619]">
          Forgot Password?
        </h2>
        <p className="mt-2 text-sm text-gray-500 leading-relaxed">
          No worries! Enter your email address below and we'll send you a link to reset your password.
        </p>
      </div>

      {/* Form */}
      <form className="space-y-6">
        
        {/* Email Input */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            required
            className="appearance-none block w-full px-4 py-3.5 border border-gray-200 rounded-xl shadow-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#879b54] focus:border-transparent transition-all duration-200 bg-gray-50/50 focus:bg-white"
            placeholder="you@example.com"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-sm text-base font-semibold text-white bg-[#879b54] hover:bg-[#738645] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#879b54] transition-all duration-200 active:scale-[0.98]"
          >
            Send Reset Link
          </button>
        </div>
      </form>

      {/* Footer Text */}
      <div className="text-center text-sm text-gray-600 mt-8">
        Remember your password?{" "}
        <Link 
          to="/login" 
          className="font-semibold text-[#879b54] hover:text-[#5c6b3e] transition-colors"
        >
          Back to login
        </Link>
      </div>

    </div>
  );
}