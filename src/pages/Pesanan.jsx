import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import dataPesanan from "../data/pesanan.json";  

const ITEMS_PER_PAGE = 5;

function TableRow({ id, title, code, category, brand, price, stock }) {
  return (
    <tr className="border-t hover:bg-gray-50">
      <td className="px-6 py-4">{id}</td>
      <td className="px-6 py-4">
        <Link to={`/pesanan/${id}`} className="text-emerald-600 hover:underline">
          {title}
        </Link>
      </td>
      <td className="px-6 py-4">{code}</td>
      <td className="px-6 py-4">{category}</td>
      <td className="px-6 py-4">{brand}</td>
      <td className="px-6 py-4">Rp {price.toLocaleString()}</td>
      <td className="px-6 py-4">{stock}</td>
    </tr>
  );
}

export default function Pesanan() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter data berdasarkan pencarian
  const filtered = useMemo(() => {
    return dataPesanan.filter((o) =>
      o.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentData = filtered.slice(start, start + ITEMS_PER_PAGE);

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-[#2c3619]">Pesanan</h1>
        <p className="text-sm text-gray-500 mt-1">
          Manage your matcha shop orders and stock.
        </p>
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative w-full sm:w-80">
          <FiSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search by title..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-[#879b54]/30 focus:border-[#879b54]"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50 border-b text-gray-500 text-xs uppercase font-semibold">
              <tr>
                <th className="px-6 py-4">ID</th>
                <th className="px-6 py-4">Title</th>
                <th className="px-6 py-4">Code</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Brand</th>
                <th className="px-6 py-4">Price</th>
                <th className="px-6 py-4">Stock</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((o) => (
                <TableRow key={o.id} {...o} />
              ))}
              {currentData.length === 0 && (
                <tr>
                  <td colSpan="7" className="text-center py-12 text-gray-400">
                    No orders found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {filtered.length > 0 && (
          <div className="flex justify-between items-center px-6 py-4 border-t bg-gray-50">
            <p className="text-sm text-gray-500">
              Showing {start + 1} to {Math.min(start + ITEMS_PER_PAGE, filtered.length)} of {filtered.length}
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage((p) => p - 1)}
                disabled={currentPage === 1}
                className="p-2 border rounded-lg disabled:opacity-50"
              >
                <FiChevronLeft />
              </button>
              <span className="text-sm font-semibold">
                {currentPage} / {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage((p) => p + 1)}
                disabled={currentPage === totalPages}
                className="p-2 border rounded-lg disabled:opacity-50"
              >
                <FiChevronRight />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
