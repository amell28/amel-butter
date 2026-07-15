import { useState, useEffect } from "react";
import { authAPI } from "../services/authAPI";
import { AiOutlinePlus, AiOutlineReload } from "react-icons/ai";

// 1. Import Komponen Shadcn UI
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function User() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  // State Modal Shadcn UI
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [newUser, setNewUser] = useState({ username: "", email: "", password: "", role: "member" });

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState({ id: "", username: "", email: "", role: "member" });

  // 1. READ
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const data = await authAPI.getAllUsers();
      setUsers(data);
    } catch (err) {
      setMessage({ type: "error", text: "Gagal mengambil data dari Supabase!" });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // 2. CREATE
  const handleCreateSubmit = async (e) => {
    e.preventDefault();
    try {
      // Mengirimkan parameter role ke API register
      await authAPI.register(newUser.email, newUser.password, newUser.username, newUser.role);
      setMessage({
        type: "success",
        text: `User "${newUser.username}" dengan role "${newUser.role}" berhasil ditambahkan!`,
      });
      setIsCreateModalOpen(false);
      setNewUser({ username: "", email: "", password: "", role: "member" });
      fetchUsers();
    } catch (err) {
      setMessage({ type: "error", text: "Gagal menambahkan user baru." });
    }
  };

  // 3. DELETE
  const handleDelete = async (id, username) => {
    if (window.confirm(`Apakah Anda yakin ingin menghapus user "${username}"?`)) {
      try {
        await authAPI.deleteUser(id);
        setMessage({
          type: "success",
          text: `User "${username}" berhasil dihapus dari sistem!`,
        });
        fetchUsers();
      } catch (err) {
        setMessage({ type: "error", text: "Gagal menghapus user dari database." });
      }
    }
  };

  // Buka Modal Edit
  const openEditModal = (user) => {
    setEditingUser({
      id: user.id,
      username: user.username || "",
      email: user.email,
      role: user.role || "member", // Default ke member jika null
    });
    setIsEditModalOpen(true);
  };

  // 4. UPDATE
  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      // Mengirimkan data perubahan termasuk role baru ke database
      await authAPI.updateUser(editingUser.id, {
        username: editingUser.username,
        email: editingUser.email,
        role: editingUser.role,
      });
      setMessage({
        type: "success",
        text: "Perubahan data user berhasil disimpan ke Supabase! 🍵",
      });
      setIsEditModalOpen(false);
      fetchUsers();
    } catch (err) {
      setMessage({ type: "error", text: "Gagal memperbarui data user." });
    }
  };

  // Helper styling warna badge berdasarkan role
  const getRoleBadge = (role) => {
    switch (role?.toLowerCase()) {
      case "admin":
        return <Badge className="bg-red-100 text-red-800 border-red-200 hover:bg-red-100 uppercase text-[10px] font-bold">Admin</Badge>;
      case "staff":
        return <Badge className="bg-amber-100 text-amber-800 border-amber-200 hover:bg-amber-100 uppercase text-[10px] font-bold">Staff</Badge>;
      default:
        return <Badge className="bg-green-100 text-green-800 border-green-200 hover:bg-green-100 uppercase text-[10px] font-bold">Member</Badge>;
    }
  };

  return (
    <div className="w-full p-6 font-roboto antialiased">
      {/* Header & Aksi */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-[#2c3619]">User Management Table</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Kelola data pelanggan dan hak akses akun Supabase.
          </p>
        </div>

        <div className="flex items-center gap-3 self-start sm:self-center">
          <Button
            onClick={() => setIsCreateModalOpen(true)}
            className="bg-[#879b54] hover:bg-[#738645] text-white rounded-xl gap-2 shadow-sm transition-all active:scale-95 border-none cursor-pointer"
          >
            <AiOutlinePlus className="text-base" />
            Tambah User Baru
          </Button>

          <Button
            variant="outline"
            onClick={fetchUsers}
            className="rounded-xl gap-2 border-gray-200 shadow-sm transition-all active:scale-95 cursor-pointer"
          >
            <AiOutlineReload className="text-base text-muted-foreground" />
            Refresh
          </Button>
        </div>
      </div>

      {/* Alert Shadcn */}
      {message.text && (
        <Alert
          variant={message.type === "success" ? "default" : "destructive"}
          className={`mb-6 rounded-xl flex items-center justify-between ${
            message.type === "success" ? "bg-green-50 border-green-200 text-green-800" : ""
          }`}
        >
          <div className="flex flex-col gap-1">
            <AlertTitle className="font-bold flex items-center gap-2">
              {message.type === "success" ? "✅ Berhasil" : "⚠️ Perhatian"}
            </AlertTitle>
            <AlertDescription>{message.text}</AlertDescription>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setMessage({ type: "", text: "" })}
            className="hover:bg-transparent font-bold text-lg p-0 h-auto"
          >
            ×
          </Button>
        </Alert>
      )}

      {/* Tabel Utama */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-muted-foreground font-medium">
            Memuat data user dari Supabase... 🍵
          </div>
        ) : users.length === 0 ? (
          <div className="p-12 text-center text-muted-foreground">
            Tidak ada data user ditemukan.
          </div>
        ) : (
          <Table>
            <TableHeader className="bg-gray-50/70">
              <TableRow>
                <TableHead className="w-[200px] px-6 py-4 font-bold uppercase tracking-wider text-[11px]">ID</TableHead>
                <TableHead className="px-6 py-4 font-bold uppercase tracking-wider text-[11px]">Username</TableHead>
                <TableHead className="px-6 py-4 font-bold uppercase tracking-wider text-[11px]">Email Address</TableHead>
                <TableHead className="px-6 py-4 font-bold uppercase tracking-wider text-[11px] text-center">Role</TableHead>
                <TableHead className="px-6 py-4 font-bold uppercase tracking-wider text-[11px] text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-gray-100 text-sm">
              {users.map((user) => (
                <TableRow key={user.id} className="hover:bg-gray-50/40 transition-colors">
                  <TableCell className="px-6 py-4 font-mono text-xs text-muted-foreground">
                    {user.id}
                  </TableCell>
                  <TableCell className="px-6 py-4 font-semibold text-[#2c3619]">
                    {user.username || "-"}
                  </TableCell>
                  <TableCell className="px-6 py-4 text-gray-600">{user.email}</TableCell>
                  <TableCell className="px-6 py-4 text-center">
                    {getRoleBadge(user.role)}
                  </TableCell>
                  <TableCell className="px-6 py-4 text-center space-x-3 whitespace-nowrap">
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => openEditModal(user)}
                      className="bg-[#879b54]/10 text-[#738645] hover:bg-[#879b54]/20 rounded-lg text-xs font-bold shadow-none border-none cursor-pointer"
                    >
                      ✏️ Edit
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(user.id, user.username)}
                      className="bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-bold shadow-none border-none cursor-pointer"
                    >
                      🗑️ Hapus
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>

      {/* --- ➕ MODAL DIALOG CREATE (SHADCN UI) --- */}
      <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
        <DialogContent className="sm:max-w-md bg-white rounded-2xl p-6 border-none">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-[#2c3619]">
              Tambah User Baru
            </DialogTitle>
            <DialogDescription className="text-xs text-muted-foreground">
              Masukkan data akun dan hak akses peran (role) untuk user baru.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleCreateSubmit} className="space-y-4 pt-2">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-500">Username</label>
              <Input
                type="text"
                required
                value={newUser.username}
                onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
                className="rounded-xl focus-visible:ring-[#879b54] h-11"
                placeholder="Ketik username baru"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-500">Email Address</label>
              <Input
                type="email"
                required
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                className="rounded-xl focus-visible:ring-[#879b54] h-11"
                placeholder="name@example.com"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-500">Password</label>
              <Input
                type="password"
                required
                value={newUser.password}
                onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                className="rounded-xl focus-visible:ring-[#879b54] h-11"
                placeholder="Minimal 6 karakter"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-500">Role Pengguna</label>
              <select
                value={newUser.role}
                onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                className="flex h-11 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-[#879b54] focus:ring-offset-2"
              >
                <option value="member">Member (Pelanggan)</option>
                <option value="staff">Staff (Kasir/Barista)</option>
                <option value="admin">Admin (Pengelola)</option>
              </select>
            </div>

            <DialogFooter className="flex gap-3 pt-4 sm:justify-start">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsCreateModalOpen(false)}
                className="w-1/2 py-3 border-gray-200 text-gray-500 rounded-xl font-semibold cursor-pointer"
              >
                Batal
              </Button>
              <Button
                type="submit"
                className="w-1/2 py-3 bg-[#879b54] hover:bg-[#738645] text-white rounded-xl font-semibold border-none cursor-pointer"
              >
                Tambah Akun
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* --- ✏️ MODAL DIALOG EDIT (SHADCN UI) --- */}
      <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <DialogContent className="sm:max-w-md bg-white rounded-2xl p-6 border-none">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-[#2c3619]">
              Edit Data User
            </DialogTitle>
            <DialogDescription className="text-xs text-muted-foreground">
              ID Pengguna: <span className="font-mono text-gray-500">{editingUser.id}</span>
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleUpdateSubmit} className="space-y-4 pt-2">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-500">Username</label>
              <Input
                type="text"
                required
                value={editingUser.username}
                onChange={(e) => setEditingUser({ ...editingUser, username: e.target.value })}
                className="rounded-xl focus-visible:ring-[#879b54] h-11"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-500">Email Address</label>
              <Input
                type="email"
                required
                value={editingUser.email}
                onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
                className="rounded-xl focus-visible:ring-[#879b54] h-11"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-500">Role Pengguna</label>
              <select
                value={editingUser.role}
                onChange={(e) => setEditingUser({ ...editingUser, role: e.target.value })}
                className="flex h-11 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-[#879b54] focus:ring-offset-2"
              >
                <option value="member">Member (Pelanggan)</option>
                <option value="staff">Staff (Kasir/Barista)</option>
                <option value="admin">Admin (Pengelola)</option>
              </select>
            </div>

            <DialogFooter className="flex gap-3 pt-4 sm:justify-start">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsEditModalOpen(false)}
                className="w-1/2 py-3 border-gray-200 text-gray-500 rounded-xl font-semibold cursor-pointer"
              >
                Batal
              </Button>
              <Button
                type="submit"
                className="w-1/2 py-3 bg-[#879b54] hover:bg-[#738645] text-white rounded-xl font-semibold border-none cursor-pointer"
              >
                Simpan Perubahan
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}