import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiSearch,
  FiUserPlus,
  FiChevronLeft,
  FiChevronRight,
  FiEye,
  FiTrash2,
} from "react-icons/fi";

const ITEMS_PER_PAGE = 5;

// =========================================
// LOYALTY BADGE COMPONENT
// =========================================
function LoyaltyBadge({ loyalty }) {
  const styles =
    loyalty === "Gold"
      ? "bg-amber-50 text-amber-700 border-amber-200/60"
      : loyalty === "Silver"
      ? "bg-slate-50 text-slate-700 border-slate-200"
      : "bg-orange-50 text-orange-700 border-orange-200/60";

  return (
    <span className={`px-2.5 py-1 rounded-md text-xs font-semibold border ${styles} shadow-sm`}>
      {loyalty}
    </span>
  );
}

// =========================================
// TABLE ROW COMPONENT
// =========================================
function TableRow({ id, name, email, phone, loyalty }) {
  return (
    <tr className="border-b border-gray-50 hover:bg-gray-50/80 transition-colors group">
      <td className="px-6 py-4 text-sm text-gray-500 font-medium">
        #{String(id).padStart(3, "0")}
      </td>

      <td className="px-6 py-4">
        <div className="text-sm font-semibold text-gray-800">{name}</div>
      </td>

      <td className="px-6 py-4 text-sm text-gray-500">{email}</td>

      <td className="px-6 py-4 text-sm text-gray-500">{phone}</td>

      <td className="px-6 py-4">
        <LoyaltyBadge loyalty={loyalty} />
      </td>

      <td className="px-6 py-4">
        <div className="flex items-center gap-2 opacity-70 group-hover:opacity-100 transition-opacity">
          <button 
            title="View Details"
            className="p-2 text-gray-400 hover:text-[#879b54] hover:bg-[#879b54]/10 rounded-lg transition-all"
          >
            <FiEye className="text-lg" />
          </button>
          <button 
            title="Delete Customer"
            className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
          >
            <FiTrash2 className="text-lg" />
          </button>
        </div>
      </td>
    </tr>
  );
}

// =========================================
// MAIN PAGE COMPONENT
// =========================================
export default function Customers() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Generate Dummy Data
  const data = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i + 1,
      name: ["Amel", "Oza", "Rafif", "Aji"][i % 4] + " " + (i + 1),
      email: `user${i + 1}@Gmail.com`,
      phone: `08123${100000 + i}`,
      loyalty: ["Bronze", "Silver", "Gold"][i % 3],
    }));
  }, []);

  const filtered = data.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentData = filtered.slice(start, start + ITEMS_PER_PAGE);

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto">

      {/* =========================================
          HEADER SECTION
          ========================================= */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-[#2c3619] tracking-tight">
            Customers
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage your loyal BloomBites customers and their tiers.
          </p>
        </div>

        <button
          onClick={() => navigate("/customers/add")}
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#879b54] hover:bg-[#738645] text-white px-5 py-2.5 rounded-xl shadow-sm shadow-[#879b54]/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#879b54] transition-all duration-200 active:scale-[0.98] font-medium text-sm"
        >
          <FiUserPlus className="text-base" /> Add Customer
        </button>
      </div>

      {/* =========================================
          SEARCH & FILTER BAR
          ========================================= */}
      <div className="flex items-center justify-between mb-6">
        <div className="relative w-full sm:w-80">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
            <FiSearch className="text-gray-400 text-lg" />
          </div>
          <input
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#879b54]/30 focus:border-[#879b54] transition-all duration-200 shadow-sm"
          />
        </div>
      </div>

      {/* =========================================
          DATA TABLE
          ========================================= */}
      <div className="bg-white rounded-[1.5rem] shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50/50 border-b border-gray-100 text-gray-500 text-xs uppercase tracking-wider font-semibold">
              <tr>
                <th className="px-6 py-4">ID</th>
                <th className="px-6 py-4">Customer Name</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Phone</th>
                <th className="px-6 py-4">Loyalty Tier</th>
                <th className="px-6 py-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {currentData.map((c) => (
                <TableRow key={c.id} {...c} />
              ))}

              {currentData.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center py-12">
                    <div className="flex flex-col items-center justify-center text-gray-400">
                      <FiSearch className="text-4xl mb-3 opacity-20" />
                      <p className="text-sm font-medium">No customers found</p>
                      <p className="text-xs mt-1">Try adjusting your search keyword</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* =========================================
            PAGINATION
            ========================================= */}
        {filtered.length > 0 && (
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 px-6 py-4 border-t border-gray-100 bg-gray-50/30">
            <p className="text-sm text-gray-500 font-medium">
              Showing <span className="text-gray-800">{start + 1}</span> to{" "}
              <span className="text-gray-800">
                {Math.min(start + ITEMS_PER_PAGE, filtered.length)}
              </span>{" "}
              of <span className="text-gray-800">{filtered.length}</span> entries
            </p>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage((p) => p - 1)}
                disabled={currentPage === 1}
                className="p-2 border border-gray-200 bg-white rounded-lg text-gray-600 hover:bg-gray-50 hover:text-[#879b54] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <FiChevronLeft className="text-lg" />
              </button>
              
              <div className="text-sm font-semibold px-2 text-gray-700">
                {currentPage} <span className="text-gray-400 font-normal">/ {totalPages}</span>
              </div>

              <button
                onClick={() => setCurrentPage((p) => p + 1)}
                disabled={currentPage === totalPages}
                className="p-2 border border-gray-200 bg-white rounded-lg text-gray-600 hover:bg-gray-50 hover:text-[#879b54] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <FiChevronRight className="text-lg" />
              </button>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}