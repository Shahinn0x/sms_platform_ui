import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[#f7faff] flex flex-col font-sans text-slate-800 antialiased">
      {/* Top Navbar */}
      <Navbar />

      {/* Dynamic Content Area */}
      <main className="flex-1 w-full flex flex-col">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;