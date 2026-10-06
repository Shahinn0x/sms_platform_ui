import React from "react";
import { Search, Bell, ChevronDown } from "lucide-react";

const DashNavbar = () => {
  return (
    <header className="bg-white border-b border-slate-200/80 px-6 py-3.5 flex items-center justify-between sticky top-0 z-30">
      <div className="flex items-center space-x-4 flex-1 max-w-md">
        <div className="relative w-full">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search campaigns, contacts, templates, reports..."
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:border-orange-500 focus:bg-white transition-all"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        {/* Balance Indicator */}
        <div className="flex items-center space-x-3 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-xl">
          <div className="text-right">
            <p className="text-[10px] text-slate-400 font-medium">Current Balance</p>
            <p className="text-xs font-bold text-slate-800">₹ 12,450.00</p>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-all shadow-sm cursor-pointer">
            Add Balance
          </button>
        </div>

        {/* Notification Bell */}
        <button className="p-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-100 relative cursor-pointer">
          <Bell className="w-4 h-4" />
          <span className="w-2 h-2 bg-orange-500 rounded-full absolute top-1.5 right-1.5" />
        </button>

        {/* User Profile */}
        <div className="flex items-center space-x-3 pl-2 border-l border-slate-200 cursor-pointer">
          <div className="w-9 h-9 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-bold text-xs">
            JV
          </div>
          <div className="hidden sm:block text-left">
            <p className="text-xs font-bold text-slate-800 leading-none">
              Jayant Vishwakarma
            </p>
            <p className="text-[10px] text-slate-400 font-medium mt-0.5">Admin</p>
          </div>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
        </div>
      </div>
    </header>
  );
};

export default DashNavbar;