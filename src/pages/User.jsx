import { useState, useEffect } from "react";
import { authAPI } from "../services/authAPI";
import { AiOutlinePlus, AiOutlineReload } from "react-icons/ai";

export default function User() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  // State untuk Modal Create (Tambah)
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  // State untuk Modal Edit (Update)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState({
    id: "",
    username: "",
    email: "",
  });

  // 1. READ: Ambil semua data user dari Supabase
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const data = await authAPI.getAllUsers();
      setUsers(data);
    } catch (err) {
      setMessage({
        type: "error",
        text: "Gagal mengambil data dari Supabase!",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // 2. CREATE: Tambah user baru ke Supabase
  const handleCreateSubmit = async (e) => {
    e.preventDefault();
    try {
      await authAPI.register(newUser.email, newUser.password, newUser.username);
      setMessage({
        type: "success",
        text: `User "${newUser.username}" berhasil ditambahkan!`,
      });
      setIsCreateModalOpen(false);
      setNewUser({ username: "", email: "", password: "" }); // Reset form
      fetchUsers(); // Refresh tabel setelah ditambah
    } catch (err) {
      setMessage({ type: "error", text: "Gagal menambahkan user baru." });
    }
  };

  // 3. DELETE: Hapus user berdasarkan ID
  const handleDelete = async (id, username) => {
    if (
      window.confirm(`Apakah Anda yakin ingin menghapus user "${username}"?`)
    ) {
      try {
        await authAPI.deleteUser(id);
        setMessage({
          type: "success",
          text: `User "${username}" berhasil dihapus dari sistem!`,
        });
        fetchUsers(); // Refresh tabel setelah dihapus
      } catch (err) {
        setMessage({
          type: "error",
          text: "Gagal menghapus user dari database.",
        });
      }
    }
  };

  // Fungsi membuka modal edit
  const openEditModal = (user) => {
    setEditingUser({
      id: user.id,
      username: user.username || "",
      email: user.email,
    });
    setIsEditModalOpen(true);
  };

  // 4. UPDATE: Simpan perubahan data user ke Supabase
  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      await authAPI.updateUser(editingUser.id, {
        username: editingUser.username,
        email: editingUser.email,
      });
      setMessage({
        type: "success",
        text: "Perubahan data user berhasil disimpan ke Supabase! 🍵",
      });
      setIsEditModalOpen(false);
      fetchUsers(); // Refresh tabel setelah diubah
    } catch (err) {
      setMessage({ type: "error", text: "Gagal memperbarui data user." });
    }
  };

  return (
    <div className="w-full p-6 font-roboto antialiased">
      {/* Header Tabel & Aksi Utama */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-[#2c3619]">
            User Management Table
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            Kelola data pelanggan dan hak akses akun Supabase.
          </p>
        </div>

        <div className="flex items-center gap-3 self-start sm:self-center">
          {/* Tombol Create */}
          <button
            onClick={() => setIsCreateModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#879b54] hover:bg-[#738645] rounded-xl shadow-sm transition-all active:scale-95"
          >
            <AiOutlinePlus className="text-base" />
            <span>Tambah User Baru</span>
          </button>

          {/* Tombol Refresh */}
          <button
            onClick={fetchUsers}
            className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 border border-gray-200/60 rounded-xl shadow-sm transition-all active:scale-95"
          >
            {/* Kamu bisa ganti AiOutlineReload dengan icon refresh bawaan project-mu seperti FiRefreshCw atau HiRefresh jika perlu */}
            <AiOutlineReload className="text-base text-gray-500" />
            <span>Refresh</span>
          </button>
        </div>
      </div>

      {/* 🔔 KOMPONEN ALERT BOX */}
      {message.text && (
        <div
          className={`mb-6 p-4 rounded-xl text-sm font-medium border flex items-center justify-between transition-all duration-300 ${
            message.type === "success"
              ? "bg-green-50 text-green-800 border-green-200"
              : "bg-red-50 text-red-800 border-red-200"
          }`}
        >
          <div className="flex items-center gap-2">
            <span>{message.type === "success" ? "✅" : "⚠️"}</span>
            <span>{message.text}</span>
          </div>
          <button
            onClick={() => setMessage({ type: "", text: "" })}
            className="text-gray-400 hover:text-gray-600 font-bold px-2"
          >
            ×
          </button>
        </div>
      )}

      {/* Konten Tabel */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-gray-500 font-medium">
            Memuat data user dari Supabase... 🍵
          </div>
        ) : users.length === 0 ? (
          <div className="p-12 text-center text-gray-500">
            Tidak ada data user ditemukan.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                    ID
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                    Username
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                    Email Address
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500 text-center">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className="hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="px-6 py-4 font-mono text-xs text-gray-400">
                      {user.id}
                    </td>
                    <td className="px-6 py-4 font-semibold text-[#2c3619]">
                      {user.username || "-"}
                    </td>
                    <td className="px-6 py-4 text-gray-600">{user.email}</td>
                    <td className="px-6 py-4 text-center space-x-3 whitespace-nowrap">
                      <button
                        onClick={() => openEditModal(user)}
                        className="px-3 py-1.5 bg-[#879b54]/10 text-[#738645] hover:bg-[#879b54]/20 rounded-lg text-xs font-bold transition-all"
                      >
                        ✏️ Edit
                      </button>
                      <button
                        onClick={() => handleDelete(user.id, user.username)}
                        className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-bold transition-all"
                      >
                        🗑️ Hapus
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* --- ➕ MODAL POP-UP CREATE (TAMBAH USER) --- */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-xl space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[#2c3619]">
                Tambah User Baru
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Masukkan data akun untuk pelanggan baru.
              </p>
            </div>

            <form onSubmit={handleCreateSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                  Username
                </label>
                <input
                  type="text"
                  required
                  value={newUser.username}
                  onChange={(e) =>
                    setNewUser({ ...newUser, username: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-[#879b54] focus:border-transparent text-sm"
                  placeholder="Ketik username baru"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={newUser.email}
                  onChange={(e) =>
                    setNewUser({ ...newUser, email: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-[#879b54] focus:border-transparent text-sm"
                  placeholder="name@example.com"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                  Password
                </label>
                <input
                  type="password"
                  required
                  value={newUser.password}
                  onChange={(e) =>
                    setNewUser({ ...newUser, password: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-[#879b54] focus:border-transparent text-sm"
                  placeholder="Minimal 6 karakter"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsCreateModalOpen(false)}
                  className="w-1/2 py-3 border border-gray-200 text-gray-500 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-all"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="w-1/2 py-3 bg-[#879b54] text-white rounded-xl text-sm font-semibold hover:bg-[#738645] transition-all shadow-sm"
                >
                  Tambah Akun
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* --- ✏️ MODAL POP-UP EDIT (UPDATE USER) --- */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-xl space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[#2c3619]">
                Edit Data User
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                ID Pengguna: {editingUser.id}
              </p>
            </div>

            <form onSubmit={handleUpdateSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                  Username
                </label>
                <input
                  type="text"
                  required
                  value={editingUser.username}
                  onChange={(e) =>
                    setEditingUser({ ...editingUser, username: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-[#879b54] focus:border-transparent text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={editingUser.email}
                  onChange={(e) =>
                    setEditingUser({ ...editingUser, email: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-[#879b54] focus:border-transparent text-sm"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="w-1/2 py-3 border border-gray-200 text-gray-500 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-all"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="w-1/2 py-3 bg-[#879b54] text-white rounded-xl text-sm font-semibold hover:bg-[#738645] transition-all shadow-sm"
                >
                  Simpan Perubahan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
