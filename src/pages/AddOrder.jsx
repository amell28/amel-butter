import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiUser, FiCalendar, FiActivity, FiAlertCircle, FiTag } from "react-icons/fi";

export default function AddOrder() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    customer: "",
    total: "",
    status: "Pending",
    date: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // VALIDASI SEDERHANA
    if (!form.customer || !form.total || !form.date) {
      setError("Please fill in all required fields.");
      return;
    }

    console.log("DATA ORDER:", form);

    // Kembali ke halaman orders
    navigate("/orders");
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 sm:p-10 rounded-[2rem] shadow-sm border border-gray-100">
      
      {/* Header Form */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#2c3619] tracking-tight">
          Create New Order
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Input the transaction details below to record a new order.
        </p>
      </div>

      {/* Error Alert */}
      {error && (
        <div className="mb-6 flex items-center gap-2 bg-red-50 border border-red-100 text-red-600 px-4 py-3 rounded-xl text-sm font-medium animate-fade-in">
          <FiAlertCircle className="text-lg" />
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* =========================================
            CUSTOMER NAME
            ========================================= */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Customer Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <FiUser className="text-gray-400 text-lg" />
            </div>
            <input
              type="text"
              name="customer"
              value={form.customer}
              onChange={handleChange}
              placeholder="e.g. Jane Doe"
              className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#879b54]/30 focus:border-[#879b54] transition-all duration-200"
            />
          </div>
        </div>

        {/* =========================================
            TOTAL PRICE
            ========================================= */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Total Price <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <span className="text-gray-500 font-semibold text-sm">Rp</span>
            </div>
            <input
              type="number"
              name="total"
              value={form.total}
              onChange={handleChange}
              placeholder="100000"
              className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#879b54]/30 focus:border-[#879b54] transition-all duration-200"
            />
          </div>
        </div>

        {/* =========================================
            STATUS SELECT
            ========================================= */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Order Status
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <FiActivity className="text-gray-400 text-lg" />
            </div>
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#879b54]/30 focus:border-[#879b54] transition-all duration-200 appearance-none cursor-pointer"
            >
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
            {/* Custom dropdown arrow */}
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>
        </div>

        {/* =========================================
            ORDER DATE
            ========================================= */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Order Date <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <FiCalendar className="text-gray-400 text-lg" />
            </div>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#879b54]/30 focus:border-[#879b54] transition-all duration-200"
            />
          </div>
        </div>

        {/* =========================================
            ACTION BUTTONS
            ========================================= */}
        <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 pt-6 border-t border-gray-100 mt-8">
          <button
            type="button"
            onClick={() => navigate("/orders")}
            className="w-full sm:w-auto px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-xl transition-colors duration-200"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-2.5 bg-[#879b54] hover:bg-[#738645] text-white font-medium rounded-xl shadow-sm shadow-[#879b54]/30 transition-all duration-200 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#879b54]"
          >
            Save Order
          </button>
        </div>

      </form>
    </div>
  );
}