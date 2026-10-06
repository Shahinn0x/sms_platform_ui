import React from "react";
import {
  Send,
  MessageSquare,
  Mail,
  Users,
  FileText,
  Smartphone,
  BarChart2,
  Logs,
  Code,
  CreditCard,
  Settings,
  Zap,
} from "lucide-react";

const NavItem = ({ icon: Icon, label, active }) => (
  <a
    href="#"
    className={`flex items-center space-x-3 px-3 py-2.5 rounded-xl transition-all ${
      active
        ? "bg-orange-500 text-white font-bold shadow-md shadow-orange-500/20"
        : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
    }`}
  >
    <Icon className="w-4 h-4" />
    <span>{label}</span>
  </a>
);

const DashSidebar = () => {
  return (
    <aside className="w-64 bg-[#0B1E36] text-slate-300 flex flex-col justify-between shrink-0 hidden lg:flex">
      <div>
        {/* Brand Logo */}
        <div className="flex items-center space-x-3 px-6 py-5 border-b border-slate-800">
          <div className="w-9 h-9 bg-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20">
            <Send className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-base font-bold text-white tracking-tight leading-none">
              Regul Connect
            </h1>
            <p className="text-[10px] text-slate-400 font-medium mt-1">
              Bulk Messaging Platform
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="px-3 py-4 space-y-1 text-xs font-medium">
          <NavItem icon={BarChart2} label="Dashboard" active />
          <NavItem icon={Send} label="New Campaign" />
          <NavItem icon={MessageSquare} label="Bulk SMS" />
          <NavItem icon={Smartphone} label="Bulk WhatsApp" />
          <NavItem icon={Mail} label="Bulk Email" />
          <NavItem icon={Users} label="Contacts" />
          <NavItem icon={FileText} label="Templates" />
          <NavItem icon={Smartphone} label="Sender IDs" />
          <NavItem icon={BarChart2} label="Reports" />
          <NavItem icon={Logs} label="Delivery Logs" />
          <NavItem icon={Code} label="API & Integration" />
          <NavItem icon={CreditCard} label="Billing" />
          <NavItem icon={Settings} label="Settings" />
        </nav>
      </div>

      {/* Business Plan Card */}
      <div className="p-4 m-3 bg-[#132A4A] rounded-2xl border border-slate-700/50">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span className="text-xs font-bold text-white">Business Plan</span>
          </div>
          <span className="text-[10px] text-slate-400">Valid till 30 Sep 2026</span>
        </div>
        <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mb-2">
          <div className="bg-orange-500 h-full w-[49%]" />
        </div>
        <div className="flex justify-between text-[10px] text-slate-400 font-medium mb-3">
          <span>245,680 / 500,000</span>
          <span>49%</span>
        </div>
        <button className="w-full py-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs rounded-xl transition-all shadow-md shadow-orange-500/20 cursor-pointer">
          Upgrade Plan
        </button>
      </div>
    </aside>
  );
};

export default DashSidebar;