import React, { useState } from "react";
// Import Komponen Table Resmi Shadcn UI
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Import Komponen Sheet Resmi Shadcn UI
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// Import Komponen Select Resmi Shadcn UI
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Loyalty() {
  const [members, setMembers] = useState([
    { id: "01", nama: "Amelia", kunjungan: 15, poin: 250, tier: "Gold Member" },
    { id: "02", nama: "Budi", kunjungan: 4, poin: 85, tier: "Silver Member" },
    { id: "03", nama: "Citra", kunjungan: 28, poin: 420, tier: "Platinum VIP" },
  ]);

  const [namaKlaim, setNamaKlaim] = useState("");
  const [pilihanReward, setPilihanReward] = useState("Free 1 Matcha Latte");
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleTukarPoin = (e) => {
    e.preventDefault();
    if (!namaKlaim) return alert("Masukkan nama member!");

    setMembers(members.map(member => {
      if (member.nama.toLowerCase() === namaKlaim.toLowerCase()) {
        const potonganPoin = pilihanReward === "Free 1 Matcha Latte" ? 50 : 100;
        if (member.poin < potonganPoin) {
          alert(`Poin ${member.nama} tidak cukup!`);
          return member;
        }
        alert(`Berhasil! ${member.nama} menukarkan reward.`);
        return { ...member, poin: member.poin - potonganPoin };
      }
      return member;
    }));

    setNamaKlaim("");
    setIsSheetOpen(false);
  };

  return (
    <div className="p-10  min-h-screen text-[#5c5f56] font-sans">
      
      {/* HEADER SECTION */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-4xl font-bold text-[#2d3129] tracking-tight mb-2">Loyalty Program 🍵</h1>
          <p className="text-[#7c8075] text-sm">Manajemen Poin & Reward Amel Butter</p>
        </div>

        {/* --- SHADCN COMPONENT 1: SHEET --- */}
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <button className="bg-[#8fa866] text-white px-5 py-2.5 rounded-2xl text-sm font-medium hover:bg-[#7e9658] transition-all shadow-sm">
              Tukar Poin Reward
            </button>
          </SheetTrigger>
          <SheetContent className="bg-[#fffdf9] border-l-[#e6e4da]">
            <SheetHeader>
              <SheetTitle className="text-[#2d3129] font-bold text-xl">Klaim Reward CRM</SheetTitle>
              <SheetDescription className="text-[#7c8075]">
                Pilih reward loyalitas untuk memotong poin pelanggan setia.
              </SheetDescription>
            </SheetHeader>

            <form onSubmit={handleTukarPoin} className="space-y-5 pt-6">
              <div className="grid gap-1.5">
                <label className="text-xs font-bold text-[#383a34]">Nama Member</label>
                <input
                  type="text"
                  className="flex h-10 w-full rounded-xl border border-[#d1cfc4] bg-white px-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#8fa866]"
                  value={namaKlaim}
                  onChange={(e) => setNamaKlaim(e.target.value)}
                  placeholder="Masukkan nama member..."
                />
              </div>

              <div className="grid gap-1.5">
                <label className="text-xs font-bold text-[#383a34]">Pilih Hadiah Menu</label>
                <select 
                  value={pilihanReward} 
                  onChange={(e) => setPilihanReward(e.target.value)}
                  className="w-full h-10 text-sm border border-[#d1cfc4] bg-white rounded-xl px-3 outline-none focus:ring-1 focus:ring-[#8fa866]"
                >
                  <option value="Free 1 Matcha Latte">Free 1 Matcha Latte (50 Pts)</option>
                  <option value="Diskon 50% All Variant">Diskon 50% Semua Menu (100 Pts)</option>
                </select>
              </div>

              <button type="submit" className="w-full bg-[#8fa866] text-white h-10 rounded-xl font-medium hover:bg-[#7e9658] transition-colors mt-4 shadow-sm">
                Konfirmasi Klaim
              </button>
            </form>
          </SheetContent>
        </Sheet>
      </div>

      {/* --- SHADCN COMPONENT 2: TABLE --- */}
      <div className="rounded-[24px] border border-none bg-white shadow-sm overflow-hidden">
        <Table>
          <TableHeader className="bg-white border-b border-[#f4f3ea]">
            <TableRow className="hover:bg-transparent border-none">
              <TableHead className="py-5 px-8 font-bold text-[#9fa298] text-[11px] tracking-wider uppercase">ID Member</TableHead>
              <TableHead className="font-bold text-[#9fa298] text-[11px] tracking-wider uppercase">Nama Pelanggan</TableHead>
              <TableHead className="font-bold text-[#9fa298] text-[11px] tracking-wider uppercase">Kunjungan</TableHead>
              <TableHead className="font-bold text-[#9fa298] text-[11px] tracking-wider uppercase">Poin Tersedia</TableHead>
              <TableHead className="text-right pr-8 font-bold text-[#9fa298] text-[11px] tracking-wider uppercase">Membership Tier</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {members.map((member) => (
              <TableRow key={member.id} className="border-b border-[#fdfdfc] hover:bg-[#fafaf7] transition-colors">
                <TableCell className="py-5 px-8 text-[#8fa866] font-mono font-bold">#MBR-{member.id}</TableCell>
                <TableCell className="font-bold text-[#383a34] text-sm">{member.nama}</TableCell>
                <TableCell className="text-[#7c8075] text-sm">{member.kunjungan}x Kunjungan</TableCell>
                <TableCell className="text-sm">
                  <span className="bg-[#eef5e6] text-[#608038] px-3 py-1 rounded-full text-xs font-bold border border-[#d6e6c4]">
                    {member.poin} Pts
                  </span>
                </TableCell>
                <TableCell className="text-right pr-8 py-3">
                  {/* --- SHADCN COMPONENT 3: SELECT --- */}
                  <Select
                    defaultValue={member.tier}
                    onValueChange={(val) =>
                      setMembers(members.map(m => m.id === member.id ? { ...m, tier: val } : m))
                    }
                  >
                    <SelectTrigger className="w-[160px] ml-auto h-9 text-xs font-medium border-[#e6e4da] rounded-xl bg-[#faf9f2] text-[#383a34]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-[#e6e4da]">
                      <SelectItem value="Silver Member">🥈 Silver Member</SelectItem>
                      <SelectItem value="Gold Member">🥇 Gold Member</SelectItem>
                      <SelectItem value="Platinum VIP">💎 Platinum VIP</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

    </div>
  );
}