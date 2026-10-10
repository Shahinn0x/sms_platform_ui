import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import DashSidebar from "../components/DashSidebar";
import DashNavbar from "../components/DashNavbar";

const DashboardLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#F8FAFC] font-sans text-slate-800 overflow-hidden">
      <DashSidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <DashNavbar setMobileOpen={setMobileOpen} />
        <main className="p-4 sm:p-6 space-y-6 max-w-[1600px] w-full mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;