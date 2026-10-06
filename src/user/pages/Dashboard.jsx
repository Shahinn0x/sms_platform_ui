import React from "react";
import {
  Send,
  MessageSquare,
  Mail,
  Users,
  Smartphone,
  CheckCircle2,
  AlertCircle,
  Code,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

const StatCard = ({ title, value, change, subtext, isPositive, icon: Icon, color }) => (
  <div className="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-sm flex items-center justify-between">
    <div>
      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{title}</p>
      <h3 className="text-xl font-extrabold text-slate-900 mt-1">{value}</h3>
      <p className="text-[11px] font-bold mt-1">
        {change && <span className={isPositive ? "text-emerald-600" : "text-rose-600"}>{change}</span>}
        {subtext && <span className="text-slate-500">{subtext}</span>}
      </p>
    </div>
    <div className={`w-10 h-10 rounded-xl bg-${color}-50 flex items-center justify-center text-${color}-600`}>
      <Icon className="w-5 h-5" />
    </div>
  </div>
);

const StatusRow = ({ label, badgeText }) => (
  <div className="flex justify-between items-center text-xs py-1">
    <span className="font-semibold text-slate-600">{label}</span>
    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700">
      {badgeText}
    </span>
  </div>
);

const TableRow = ({ name, channel, count, delivered, status, date }) => (
  <tr className="hover:bg-slate-50/50 transition-all">
    <td className="py-3 font-bold text-slate-800">{name}</td>
    <td className="py-3">{channel}</td>
    <td className="py-3">{count}</td>
    <td className="py-3 text-emerald-600 font-bold">{delivered}</td>
    <td className="py-3">
      <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full text-[10px] font-bold">
        {status}
      </span>
    </td>
    <td className="py-3 text-slate-400">{date}</td>
  </tr>
);

const CreditBar = ({ channel, used, total, color }) => (
  <div className="space-y-1">
    <div className="flex justify-between text-xs font-semibold">
      <span className="text-slate-700">{channel}</span>
      <span className="text-slate-500">{used} / {total}</span>
    </div>
    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
      <div className={`${color} h-full w-[40%]`} />
    </div>
  </div>
);

const FeatureGatewayCard = ({ title, desc, icon: Icon, color }) => (
  <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
    <div>
      <div className={`w-10 h-10 rounded-xl bg-${color}-50 flex items-center justify-center text-${color}-600 mb-3`}>
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="text-sm font-bold text-slate-900">{title}</h3>
      <p className="text-xs text-slate-500 font-medium mt-1 leading-relaxed">{desc}</p>
    </div>
    <a href="#" className="text-xs font-bold text-orange-500 hover:text-orange-600 flex items-center space-x-1 mt-4">
      <span>Get Started</span>
      <ArrowRight className="w-3.5 h-3.5" />
    </a>
  </div>
);

const Dashboard = () => {
  return (
    <>
      {/* Welcome Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Good Morning, Jayant!</h1>
          <p className="text-xs font-medium text-slate-500 mt-0.5">Here's an overview of your messaging activity.</p>
        </div>
        <div className="flex items-center space-x-2 bg-white border border-slate-200 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 shadow-sm cursor-pointer self-start sm:self-auto">
          <span>Last 7 Days</span>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
        </div>
      </div>

      {/* Key Metric Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Sent" value="125,680" change="+12.5%" isPositive icon={Send} color="blue" />
        <StatCard title="Delivered" value="120,421" subtext="95.8%" isPositive icon={CheckCircle2} color="emerald" />
        <StatCard title="Failed" value="4,521" subtext="3.6%" isPositive={false} icon={AlertCircle} color="rose" />
        <StatCard title="Total Contacts" value="32,450" change="+8.2%" isPositive icon={Users} color="indigo" />
      </div>

      {/* Main Analytics Row & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-6 bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-bold text-slate-800">Message Activity</h2>
            <div className="flex items-center space-x-3 text-[11px] font-semibold">
              <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-blue-500 mr-1.5"/> Sent</span>
              <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-emerald-500 mr-1.5"/> Delivered</span>
              <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-rose-500 mr-1.5"/> Failed</span>
            </div>
          </div>
          <div className="h-48 w-full bg-slate-50 rounded-xl border border-dashed border-slate-200 flex items-center justify-center text-slate-400 text-xs font-medium">
            [Line Chart Visualization Component]
          </div>
        </div>

        <div className="lg:col-span-3 bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm flex flex-col justify-between">
          <h2 className="text-sm font-bold text-slate-800 mb-2">Channel Wise Delivery</h2>
          <div className="relative flex items-center justify-center my-2">
            <div className="w-32 h-32 rounded-full border-8 border-emerald-500 border-t-blue-500 border-r-indigo-500 flex flex-col items-center justify-center">
              <span className="text-lg font-extrabold text-slate-900">95.8%</span>
              <span className="text-[10px] text-slate-400 font-medium">Delivered</span>
            </div>
          </div>
          <div className="space-y-1.5 text-xs font-semibold">
            <div className="flex justify-between items-center"><span className="text-slate-600">WhatsApp</span><span className="text-slate-900 font-bold">48,520 (96.2%)</span></div>
            <div className="flex justify-between items-center"><span className="text-slate-600">SMS</span><span className="text-slate-900 font-bold">42,150 (94.8%)</span></div>
            <div className="flex justify-between items-center"><span className="text-slate-600">Email</span><span className="text-slate-900 font-bold">35,010 (96.7%)</span></div>
          </div>
        </div>

        <div className="lg:col-span-3 space-y-4">
          <div className="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-sm">
            <h2 className="text-xs font-bold text-slate-800 mb-3">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-2">
              <button className="p-3 bg-orange-50 hover:bg-orange-100 rounded-xl flex flex-col items-center text-center transition-all cursor-pointer">
                <Send className="w-5 h-5 text-orange-500 mb-1" />
                <span className="text-xs font-bold text-orange-600">New Campaign</span>
              </button>
              <button className="p-3 bg-slate-50 hover:bg-slate-100 rounded-xl flex flex-col items-center text-center transition-all cursor-pointer">
                <Users className="w-5 h-5 text-slate-600 mb-1" />
                <span className="text-xs font-bold text-slate-700">Add Contacts</span>
              </button>
            </div>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-sm space-y-2.5">
            <div className="flex justify-between items-center">
              <h2 className="text-xs font-bold text-slate-800">Sender IDs Status</h2>
              <a href="#" className="text-[10px] font-bold text-blue-600 hover:underline">Manage All →</a>
            </div>
            <StatusRow label="SMS Sender ID" badgeText="3 Approved" />
            <StatusRow label="WhatsApp Business" badgeText="Connected" />
            <StatusRow label="Email Domain" badgeText="3 Verified" />
          </div>
        </div>
      </div>

      {/* Recent Campaigns Table & Credits Usage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-bold text-slate-800">Recent Campaigns</h2>
            <a href="#" className="text-xs font-bold text-blue-600 hover:underline">View All →</a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  <th className="pb-3">Campaign Name</th>
                  <th className="pb-3">Channel</th>
                  <th className="pb-3">Recipients</th>
                  <th className="pb-3">Delivered</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3">Sent On</th>
                </tr>
              </thead>
              <tbody className="text-xs font-semibold text-slate-700 divide-y divide-slate-100">
                <TableRow name="Festival Offer - 20% Discount" channel="WhatsApp" count="12,480" delivered="12,021 (96.3%)" status="Completed" date="29 Sep 2026" />
                <TableRow name="New Service Launch" channel="SMS" count="8,560" delivered="8,120 (94.9%)" status="Completed" date="28 Sep 2026" />
                <TableRow name="Monthly Newsletter" channel="Email" count="5,240" delivered="5,080 (96.9%)" status="Completed" date="27 Sep 2026" />
              </tbody>
            </table>
          </div>
        </div>

        <div className="lg:col-span-4 bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-bold text-slate-800">Credits & Usage</h2>
            <a href="#" className="text-xs font-bold text-blue-600 hover:underline">View Details →</a>
          </div>
          <div className="space-y-4">
            <CreditBar channel="SMS Credits" used="42,680" total="125,000" color="bg-blue-500" />
            <CreditBar channel="WhatsApp Credits" used="18,240" total="50,000" color="bg-emerald-500" />
            <CreditBar channel="Email Credits" used="24,560" total="100,000" color="bg-rose-500" />
          </div>
        </div>
      </div>

      {/* Feature Gateway Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <FeatureGatewayCard title="Bulk SMS" desc="Send transactional & promotional SMS to your audience." icon={MessageSquare} color="blue" />
        <FeatureGatewayCard title="Bulk WhatsApp" desc="Send rich messages with images, media & interactive buttons." icon={Smartphone} color="emerald" />
        <FeatureGatewayCard title="Bulk Email" desc="Create and send beautiful email marketing campaigns." icon={Mail} color="rose" />
        <FeatureGatewayCard title="API & Integration" desc="Integrate robust REST APIs directly into your software." icon={Code} color="indigo" />
      </div>
    </>
  );
};

export default Dashboard;