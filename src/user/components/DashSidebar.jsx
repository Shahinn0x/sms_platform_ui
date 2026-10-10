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
  X,
} from "lucide-react";

const NavItem = ({ icon: Icon, label, active, onClick }) => (
  <a
    href="#"
    onClick={onClick}
    className={`flex items-center space-x-3 px-3 py-2.5 rounded-xl transition-all ${
      active
        ? "bg-orange-500 text-white font-bold shadow-md shadow-orange-500/20"
        : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
    }`}
  >
    <Icon className="w-4 h-4 shrink-0" />
    <span className="truncate">{label}</span>
  </a>
);

const DashSidebar = ({ mobileOpen, setMobileOpen }) => {
  return (
    <>
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-40 lg:hidden transition-opacity"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={`fixed lg:static top-0 left-0 z-50 h-full w-64 bg-[#0B1E36] text-slate-300 flex flex-col justify-between shrink-0 transform transition-transform duration-300 ease-in-out ${
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex flex-col h-full justify-between overflow-y-auto [scrollbar-width:none]">
          <div>
            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 bg-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20 shrink-0">
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

              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="lg:hidden text-slate-400 hover:text-white p-1 rounded-lg cursor-pointer"
                aria-label="Close Navigation Sidebar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="px-3 py-4 space-y-1 text-xs font-medium">
              <NavItem
                icon={BarChart2}
                label="Dashboard"
                active
                onClick={() => setMobileOpen(false)}
              />
              <NavItem
                icon={Send}
                label="New Campaign"
                onClick={() => setMobileOpen(false)}
              />
              <NavItem
                icon={MessageSquare}
                label="Bulk SMS"
                onClick={() => setMobileOpen(false)}
              />
              <NavItem
                icon={Smartphone}
                label="Bulk WhatsApp"
                onClick={() => setMobileOpen(false)}
              />
              <NavItem
                icon={Mail}
                label="Bulk Email"
                onClick={() => setMobileOpen(false)}
              />
              <NavItem
                icon={Users}
                label="Contacts"
                onClick={() => setMobileOpen(false)}
              />
              <NavItem
                icon={FileText}
                label="Templates"
                onClick={() => setMobileOpen(false)}
              />
              <NavItem
                icon={Smartphone}
                label="Sender IDs"
                onClick={() => setMobileOpen(false)}
              />
              <NavItem
                icon={BarChart2}
                label="Reports"
                onClick={() => setMobileOpen(false)}
              />
              <NavItem
                icon={Logs}
                label="Delivery Logs"
                onClick={() => setMobileOpen(false)}
              />
              <NavItem
                icon={Code}
                label="API & Integration"
                onClick={() => setMobileOpen(false)}
              />
              <NavItem
                icon={CreditCard}
                label="Billing"
                onClick={() => setMobileOpen(false)}
              />
              <NavItem
                icon={Settings}
                label="Settings"
                onClick={() => setMobileOpen(false)}
              />
            </nav>
          </div>

          <div className="p-4 m-3 bg-[#132A4A] rounded-2xl border border-slate-700/50 my-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-amber-400 fill-amber-400 shrink-0" />
                <span className="text-xs font-bold text-white truncate">
                  Business Plan
                </span>
              </div>
              <span className="text-[10px] text-slate-400 whitespace-nowrap">
                Till 30 Sep
              </span>
            </div>
            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mb-2">
              <div className="bg-orange-500 h-full w-[49%]" />
            </div>
            <div className="flex justify-between text-[10px] text-slate-400 font-medium mb-3">
              <span>245k / 500k</span>
              <span>49%</span>
            </div>
            <button
              type="button"
              className="w-full py-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs rounded-xl transition-all shadow-md shadow-orange-500/20 cursor-pointer"
            >
              Upgrade Plan
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default DashSidebar;
