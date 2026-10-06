import React from "react";
import { Outlet } from "react-router-dom";
import DashSidebar from "../components/DashSidebar";
import DashNavbar from "../components/DashNavbar";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen bg-[#F8FAFC] font-sans text-slate-800 overflow-hidden">
      <DashSidebar />
      <div className="flex-1 flex flex-col overflow-y-auto">
        <DashNavbar />
        <main className="p-6 space-y-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;