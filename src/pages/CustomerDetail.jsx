import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  FiMail, FiPhone, FiCalendar, FiAward, 
  FiDollarSign, FiShoppingBag, FiStar, FiClock, 
  FiEdit3, FiPlus
} from "react-icons/fi";

// Import ke-15 Komponen dari folder /components
import LoyaltyBadge from "../components/LoyaltyBadge";
import StatusBadge from "../components/StatusBadge";
import StatCard from "../components/StatCard";
import QuickActionButton from "../components/QuickActionButton";
import InfoRow from "../components/InfoRow";
import PreferenceTag from "../components/PreferenceTag";
import OrderRow from "../components/OrderRow";
import TimelineItem from "../components/TimelineItem";
import PointMilestone from "../components/PointMilestone";
import CustomerNotesInput from "../components/CustomerNotesInput";
import ProfileAvatar from "../components/ProfileAvatar";
import SegmentBadge from "../components/SegmentBadge";
import BackButton from "../components/BackButton";
import SectionHeader from "../components/SectionHeader";
import ActiveVoucherItem from "../components/ActiveVoucherItem";

export default function CustomerDetail() {
  const navigate = useNavigate();
  const [newNote, setNewNote] = useState("");
  const [timeline, setTimeline] = useState([
    { id: 1, title: "Komplain Rasa Manis", desc: "Kasir mengonfirmasi bahwa pelanggan meminta takaran gula dikurangi 25% di order berikutnya.", time: "Hari ini, 10:20", type: "Complaint" },
    { id: 2, title: "Klaim Voucher Gold", desc: "Menukarkan kupon 'Free Croissant' di kasir utama.", time: "15 Mei 2026", type: "Reward" },
    { id: 3, title: "Pendaftaran Akun CRM", desc: "Berhasil diverifikasi menjadi member Bronze melalui aplikasi kasir.", time: "01 Mar 2026", type: "System" },
  ]);

  const handleAddNote = (e) => {
    e.preventDefault();
    if (!newNote.trim()) return;
    
    const addedLog = {
      id: Date.now(),
      title: "Catatan Manual Staf",
      desc: newNote,
      time: "Baru saja",
      type: "Staff Note"
    };

    setTimeline([addedLog, ...timeline]);
    setNewNote("");
  };

  return (
    <div className="w-full space-y-6 antialiased text-gray-600">
      
      {/* 1. BackButton Component */}
      <BackButton onClick={() => navigate("/customers")} />

      {/* HEADER SECTION */}
      <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-xs flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex items-center gap-4">
          {/* 2. ProfileAvatar Component */}
          <ProfileAvatar name="Amelia Putri" />
          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-xl font-bold text-gray-800">Amelia Putri</h1>
              {/* 3. LoyaltyBadge Component */}
              <LoyaltyBadge loyalty="Gold" />
              {/* 4. SegmentBadge Component */}
              <SegmentBadge segment="Whale / Loyal" />
            </div>
            <p className="text-xs text-gray-400">ID Member: <span className="font-mono font-bold text-gray-600">BB-94021</span> • Bergabung sejak Maret 2026</p>
          </div>
        </div>

        {/* 5. QuickActionButton Components */}
        <div className="flex gap-2 w-full md:w-auto">
          <QuickActionButton icon={FiEdit3} label="Edit Profil" variant="secondary" />
          <QuickActionButton icon={FiPlus} label="Tambah Transaksi" variant="primary" onClick={() => navigate("/orders/add")} />
        </div>
      </div>

      {/* METRIC CARD BAR - 6. StatCard Component */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={FiDollarSign} label="Total Pengeluaran (LTV)" value="Rp 1.450.000" subtext="Dari total 18 transaksi" />
        <StatCard icon={FiShoppingBag} label="Rata-rata Keranjang" value="Rp 80.550" subtext="Nilai per satu kali kunjungan" />
        <StatCard icon={FiStar} label="Skor Retensi Pelanggan" value="9.8 / 10" subtext="Sangat aktif & loyal" />
        <StatCard icon={FiClock} label="Kunjungan Terakhir" value="2 Hari Lalu" subtext="17 Mei 2026 • 15:42 WIB" />
      </div>

      {/* CORE CONTENT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        
        {/* COL 1: DATA PERSONAL & PREFERENSI */}
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-xs space-y-6">
          <div>
            {/* 7. SectionHeader Component */}
            <SectionHeader title="Informasi Kontak & Akun" />
            <div className="space-y-1">
              {/* 8. InfoRow Component */}
              <InfoRow icon={FiMail} label="Email" value="amelia.putri@example.com" />
              <InfoRow icon={FiPhone} label="Nomor HP" value="+62 812-3456-7890" />
              <InfoRow icon={FiCalendar} label="Tgl Lahir" value="12 November 2000 (Scorpio)" />
              <InfoRow icon={FiAward} label="Poin Saat Ini" value="850 Points" />
            </div>
          </div>

          <div>
            <SectionHeader title="Preferensi Rasa & Menu" />
            <div className="flex flex-wrap gap-2">
              {/* 9. PreferenceTag Component */}
              <PreferenceTag label="Iced Matcha Latte" />
              <PreferenceTag label="Less Sugar (75%)" />
              <PreferenceTag label="Matcha Croissant" />
              <PreferenceTag label="Oatmilk Option" />
            </div>
          </div>

          <div>
            <SectionHeader title="Voucher Aktif Tersedia" />
            <div className="space-y-2.5">
              {/* 10. ActiveVoucherItem Component */}
              <ActiveVoucherItem code="GOLDMATCHA" expires="31 Mei 2026" />
              <ActiveVoucherItem code="MATMANDY" expires="Besok" />
            </div>
          </div>
        </div>

        {/* COL 2: RIWAYAT TRANSAKSI (TABLE) */}
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-xs lg:col-span-2 space-y-6">
          <div>
            <SectionHeader title="Riwayat Pembelian Terakhir" />
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="text-[10px] font-extrabold text-gray-400 tracking-wider uppercase border-b border-gray-100 pb-2">
                    <th className="pb-3">ID Order</th>
                    <th className="pb-3">Item Dibeli</th>
                    <th className="pb-3">Tanggal</th>
                    <th className="pb-3">Total Harga</th>
                    <th className="pb-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {/* 11. OrderRow Component (di dalamnya otomatis panggil 12. StatusBadge) */}
                  <OrderRow id="#ORD-9831" items="2x Iced Matcha Latte (Oatmilk)" date="17 Mei 2026" total={72000} status="Completed" />
                  <OrderRow id="#ORD-9750" items="1x Matcha Croissant, 1x Espresso" date="12 Mei 2026" total={58000} status="Completed" />
                  <OrderRow id="#ORD-9612" items="1x Matcha Ice Cream Box" date="04 Mei 2026" total={120000} status="Completed" />
                  <OrderRow id="#ORD-9441" items="3x Matcha Monday Treat Bag" date="28 Apr 2026" total={105000} status="Completed" />
                  <OrderRow id="#ORD-9201" items="1x Red Velvet Matcha Roll" date="15 Apr 2026" total={45000} status="Completed" />
                </tbody>
              </table>
            </div>
          </div>

          {/* TIMELINE INTERAKSI CRM & INPUT */}
          <div className="pt-4 border-t border-gray-50">
            <SectionHeader title="Log Aktivitas & Interaksi CRM" />
            
            {/* 13. PointMilestone Component */}
            <div className="mb-6">
              <PointMilestone points={850} />
            </div>

            {/* 14. TimelineItem Component */}
            <div className="mt-4 bg-gray-50/40 p-4 rounded-2xl border border-gray-100/60">
              {timeline.map((log) => (
                <TimelineItem 
                  key={log.id}
                  title={log.title} 
                  desc={log.desc} 
                  time={log.time} 
                  type={log.type} 
                />
              ))}
            </div>

            {/* 15. CustomerNotesInput Component */}
            <CustomerNotesInput 
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              onSubmit={handleAddNote}
            />
          </div>

        </div>

      </div>
    </div>
  );
}