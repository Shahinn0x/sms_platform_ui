import React from "react";
import { Search, Bell, ChevronDown, Menu } from "lucide-react";

const DashNavbar = ({ setMobileOpen }) => {
  return (
    <header className="bg-white border-b border-slate-200/80 px-4 sm:px-6 py-3.5 flex items-center justify-between sticky top-0 z-30 shadow-xs">
      <div className="flex items-center space-x-3 flex-1 max-w-md">
        <button
          onClick={() => setMobileOpen(true)}
          className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-xl focus:outline-none"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="relative w-full">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search campaigns, contacts, templates..."
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:border-orange-500 focus:bg-white transition-all placeholder:text-slate-400"
          />
        </div>
      </div>

      <div className="flex items-center space-x-2 sm:space-x-4 ml-2">
        <div className="hidden sm:flex items-center space-x-2 sm:space-x-3 bg-slate-50 border border-slate-200 px-2.5 sm:px-3 py-1.5 rounded-xl">
          <div className="text-right">
            <p className="text-[9px] sm:text-[10px] text-slate-400 font-medium leading-none">
              Current Balance
            </p>
            <p className="text-xs font-bold text-slate-800 mt-0.5">
              ₹ 12,450.00
            </p>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold px-2.5 py-1.5 rounded-lg transition-all shadow-xs cursor-pointer whitespace-nowrap">
            + Add
          </button>
        </div>

        <button className="p-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-100 relative cursor-pointer shrink-0">
          <Bell className="w-4 h-4" />
          <span className="w-2 h-2 bg-orange-500 rounded-full absolute top-1.5 right-1.5" />
        </button>

        <div className="flex items-center space-x-2 sm:space-x-3 pl-1 sm:pl-2 border-l border-slate-200 cursor-pointer shrink-0">
          <div className="w-8 h-8 sm:w-9 sm:h-9 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-bold text-xs">
            JV
          </div>
          <div className="hidden md:block text-left">
            <p className="text-xs font-bold text-slate-800 leading-none">
              Jayant Vishwakarma
            </p>
            <p className="text-[10px] text-slate-400 font-medium mt-0.5">
              Admin
            </p>
          </div>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400 hidden sm:block" />
        </div>
      </div>
    </header>
  );
};

export default DashNavbar;
