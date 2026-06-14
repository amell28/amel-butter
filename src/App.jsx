import "./assets/tailwind.css";
import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Loading from "./components/Loading";

/* Lazy Pages & Layouts */
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Customers = lazy(() => import("./pages/Customers"));
const Orders = lazy(() => import("./pages/Orders"));
const AddCustomer = lazy(() => import("./pages/AddCustomer"));
const AddOrder = lazy(() => import("./pages/AddOrder"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));
const Pesanan = lazy(() => import("./pages/Pesanan"));
const PesananDetail = lazy(() => import("./pages/PesananDetail"));
const CustomerDetail = lazy(() => import("./pages/CustomerDetail"));
const Loyalty = lazy(() => import("./pages/Loyalty"));
const User = lazy(() => import("./pages/User"));

// Import Lazy untuk Halaman Guest CRM Baru
const GuestLanding = lazy(() => import("./pages/GuestLanding"));

const Login = lazy(() => import("./pages/auth/Login"));
const Register = lazy(() => import("./pages/auth/Register"));
const Forgot = lazy(() => import("./pages/auth/Forgot"));

const MainLayout = lazy(() => import("./layouts/MainLayout"));
const AuthLayout = lazy(() => import("./layouts/AuthLayout"));

// --- 🛡️ PROTECTED ROUTE COMPONENT ---
const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("user");
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>

        {/* ================= ZONA GUEST (BUKA PERTAMA KALI) ================= */}
        <Route path="/" element={<GuestLanding />} />


        {/* ================= ZONA AUTHENTICATION ================= */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>


        {/* ================= ZONA ADMIN MANAGEMENTS ================= */}
        {/* 
          Di bawah ini adalah grup Admin. 
          Semua rute di dalamnya diwajibkan melewati ProtectedRoute (Cek login).
        */}
        <Route 
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          {/* 🔥 INI DIA: Akses khusus `/admin` langsung ngebuka Dashboard Admin */}
          <Route path="/admin" element={<Dashboard />} />
          
          {/* Sisa halaman admin lainnya tetap menggunakan path asli bawaan kamu */}
          <Route path="/user" element={<User />} />

          {/* Customers */}
          <Route path="/customers" element={<Customers />} />
          <Route path="/customers/add" element={<AddCustomer />} />
          <Route path="/customerdetail" element={<CustomerDetail />} />
          <Route path="/Loyalty" element={<Loyalty />} />

          {/* Orders */}
          <Route path="/orders" element={<Orders />} />
          <Route path="/orders/add" element={<AddOrder />} />

          {/* Pesanan */}
          <Route path="/pesanan" element={<Pesanan />} />
          <Route path="/pesanan/:id" element={<PesananDetail />} />

          {/* Error Pages inside Main Layout */}
          <Route path="/400" element={<ErrorPage code="400" />} />
          <Route path="/401" element={<ErrorPage code="401" />} />
          <Route path="/403" element={<ErrorPage code="403" />} />
          
          {/* Catch-all 404 inside Main Layout (keeps Sidebar visible) */}
          <Route path="*" element={<ErrorPage code="404" />} />
        </Route>

      </Routes>
    </Suspense>
  );
}

export default App;