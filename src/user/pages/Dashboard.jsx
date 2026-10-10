import React, { useState } from "react";
import {
  Send,
  MessageSquare,
  Mail,
  Users,
  Smartphone,
  CheckCircle2,
  XCircle,
  Code,
  ArrowRight,
  ChevronDown,
  FileText,
  Calendar,
  BarChart2,
  Clock,
  MoreHorizontal,
  ChevronRight,
} from "lucide-react";

import MessageActivityChart from "../components/MessageActivityChart";

const StatCard = ({
  title,
  value,
  change,
  subtext,
  isPositive,
  icon: Icon,
  color,
  sparklineColor,
}) => {
  const colorMap = {
    blue: "bg-blue-500",
    emerald: "bg-emerald-500",
    rose: "bg-rose-500",
    indigo: "bg-indigo-500",
  };

  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl p-3 sm:p-3.5 shadow-xs flex items-center justify-between min-w-0">
      <div className="flex items-center space-x-2.5 min-w-0">
        <div
          className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full ${colorMap[color]} flex items-center justify-center text-white shrink-0 shadow-sm`}
        >
          <Icon className="w-5 h-5 stroke-[2.2]" />
        </div>
        <div className="min-w-0">
          <p className="text-[10px] sm:text-[11px] font-semibold text-slate-500 truncate">
            {title}
          </p>
          <h3 className="text-base sm:text-lg font-extrabold text-slate-900 leading-tight mt-0.5 truncate">
            {value}
          </h3>
          <p className="text-[10px] font-bold mt-0.5 flex items-center space-x-1 truncate">
            {change && (
              <span
                className={isPositive ? "text-emerald-600" : "text-rose-600"}
              >
                {isPositive ? "↑" : "↓"} {change}
              </span>
            )}
            {subtext && (
              <span className="text-emerald-600 font-bold">{subtext}</span>
            )}
          </p>
        </div>
      </div>

      <div className="w-10 h-5 opacity-70 hidden xl:block shrink-0 ml-1">
        <svg viewBox="0 0 50 20" className="w-full h-full">
          <path
            d="M0 15 Q10 5, 20 12 T40 4 T50 10"
            fill="none"
            stroke={sparklineColor}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

const CampaignRow = ({
  name,
  channel,
  count,
  delivered,
  deliveredPct,
  failed,
  failedPct,
  status,
  date,
}) => {
  const channelBadge = {
    WhatsApp: (
      <span className="p-1 bg-emerald-100 text-emerald-600 rounded-lg inline-flex">
        <Smartphone className="w-3.5 h-3.5" />
      </span>
    ),
    SMS: (
      <span className="px-1.5 py-0.5 bg-blue-100 text-blue-600 rounded-md text-[10px] font-bold inline-flex items-center gap-1">
        <MessageSquare className="w-3 h-3" /> SMS
      </span>
    ),
    Email: (
      <span className="px-1.5 py-0.5 bg-rose-100 text-rose-600 rounded-md text-[10px] font-bold inline-flex items-center gap-1">
        <Mail className="w-3 h-3" /> Email
      </span>
    ),
  };

  return (
    <tr className="hover:bg-slate-50/50 transition-all text-xs font-semibold text-slate-700 border-b border-slate-100">
      <td className="py-2.5 font-bold text-slate-800 whitespace-nowrap pr-2">
        {name}
      </td>
      <td className="py-2.5 whitespace-nowrap pr-2">
        {channelBadge[channel] || channel}
      </td>
      <td className="py-2.5 whitespace-nowrap pr-2">{count}</td>
      <td className="py-2.5 text-emerald-600 font-bold whitespace-nowrap pr-2">
        {delivered}{" "}
        <span className="text-[10px] text-emerald-500 font-semibold">
          ({deliveredPct})
        </span>
      </td>
      <td className="py-2.5 text-rose-500 font-bold whitespace-nowrap pr-2">
        {failed}{" "}
        <span className="text-[10px] text-rose-400 font-semibold">
          ({failedPct})
        </span>
      </td>
      <td className="py-2.5 whitespace-nowrap pr-2">
        <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full text-[10px] font-bold">
          {status}
        </span>
      </td>
      <td className="py-2.5 text-slate-400 text-[11px] whitespace-nowrap pr-2">
        {date}
      </td>
      <td className="py-2.5 text-slate-400 text-right">
        <button className="p-1 hover:bg-slate-200 rounded-lg cursor-pointer">
          <MoreHorizontal className="w-4 h-4 text-slate-400" />
        </button>
      </td>
    </tr>
  );
};

const CreditCardItem = ({ title, total, used, pct, icon: Icon, color }) => (
  <div className="bg-slate-50/80 border border-slate-200/60 rounded-xl p-2.5 flex items-center justify-between">
    <div className="flex items-center space-x-2.5">
      <div
        className={`w-8 h-8 rounded-xl ${color} flex items-center justify-center text-white shrink-0`}
      >
        <Icon className="w-4 h-4" />
      </div>
      <div>
        <h4 className="text-xs font-bold text-slate-800 leading-none">
          {title}
        </h4>
        <p className="text-[11px] font-extrabold text-slate-900 mt-1">
          {total}
        </p>
        <p className="text-[9px] text-slate-400 font-medium">Total Credits</p>
      </div>
    </div>

    <div className="text-right w-20">
      <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden mb-1">
        <div
          className="bg-emerald-500 h-full rounded-full"
          style={{ width: `${pct}%` }}
        />
      </div>
      <p className="text-[10px] font-bold text-slate-700">{used}</p>
      <p className="text-[9px] text-slate-400 font-medium">Used ({pct}%)</p>
    </div>
  </div>
);

const ActivityItem = ({
  title,
  subtitle,
  time,
  icon: Icon,
  iconBg,
  iconColor,
}) => (
  <div className="flex items-center justify-between py-2 text-xs border-b border-slate-100 last:border-0">
    <div className="flex items-center space-x-2.5 min-w-0">
      <div
        className={`w-7 h-7 rounded-full ${iconBg} ${iconColor} flex items-center justify-center shrink-0`}
      >
        <Icon className="w-3.5 h-3.5" />
      </div>
      <div className="min-w-0">
        <p className="font-bold text-slate-800 text-[11px] truncate leading-tight">
          {title}
        </p>
        <p className="text-[10px] text-slate-400 font-medium truncate mt-0.5">
          {subtitle}
        </p>
      </div>
    </div>
    <span className="text-[10px] text-slate-400 font-medium whitespace-nowrap ml-1.5">
      {time}
    </span>
  </div>
);

// Feature Gateway Card
const GatewayCard = ({
  title,
  desc,
  icon: Icon,
  iconBg,
  iconColor,
  bullets,
  buttonText,
  buttonColor,
}) => (
  <div className="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-xs flex flex-col justify-between hover:shadow-md transition-all">
    <div>
      <div className="flex items-center space-x-2.5 mb-2">
        <div
          className={`w-8 h-8 rounded-xl ${iconBg} ${iconColor} flex items-center justify-center shrink-0`}
        >
          <Icon className="w-4 h-4" />
        </div>
        <h3 className="text-sm font-bold text-slate-900">{title}</h3>
      </div>
      <p className="text-[11px] text-slate-500 font-medium leading-relaxed mb-3">
        {desc}
      </p>

      <ul className="space-y-1 mb-4">
        {bullets.map((b, i) => (
          <li
            key={i}
            className="flex items-center text-[10px] font-semibold text-slate-600"
          >
            <CheckCircle2 className="w-3 h-3 text-emerald-500 mr-1.5 shrink-0" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>

    <button
      className={`w-full py-2 rounded-xl text-xs font-bold ${buttonColor} flex items-center justify-center space-x-1.5 transition-all cursor-pointer`}
    >
      <span>{buttonText}</span>
      <ArrowRight className="w-3.5 h-3.5" />
    </button>
  </div>
);

const Dashboard = () => {
  const [activeQuickAction, setActiveQuickAction] = useState("campaign");

  const quickActions = [
    {
      id: "campaign",
      label: "New Campaign",
      icon: Send,
      subtitle: "Send messages now",
    },
    {
      id: "contacts",
      label: "Add Contacts",
      icon: Users,
      subtitle: "Upload or manage",
    },
    {
      id: "templates",
      label: "Create Template",
      icon: FileText,
      subtitle: "Use ready templates",
    },
    {
      id: "reports",
      label: "View Reports",
      icon: BarChart2,
      subtitle: "Track performance",
    },
  ];

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        <div className="lg:col-span-8 space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Good Morning, Jayant!
              </h1>
              <p className="text-xs font-medium text-slate-500 mt-0.5">
                Here's an overview of your messaging activity.
              </p>
            </div>

            <div className="flex items-center space-x-2 bg-white border border-slate-200/90 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-700 shadow-xs cursor-pointer">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>Last 7 Days</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <StatCard
              title="Total Sent"
              value="125,680"
              change="12.5%"
              isPositive
              icon={Send}
              color="blue"
            />
            <StatCard
              title="Delivered"
              value="120,421"
              subtext="95.8%"
              isPositive
              icon={CheckCircle2}
              color="emerald"
            />
            <StatCard
              title="Failed"
              value="4,521"
              subtext="3.6%"
              isPositive={false}
              icon={XCircle}
              color="rose"
            />
            <StatCard
              title="Total Contacts"
              value="32,450"
              change="8.2%"
              isPositive
              icon={Users}
              color="indigo"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            <div className="md:col-span-7 bg-white border border-slate-200/80 rounded-2xl p-4 shadow-xs">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xs font-bold text-slate-800">
                  Message Activity
                </h2>
                <div className="flex items-center space-x-2.5 text-[10px] font-semibold">
                  <span className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mr-1" />{" "}
                    Sent
                  </span>
                  <span className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mr-1" />{" "}
                    Delivered
                  </span>
                  <span className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-rose-500 mr-1" />{" "}
                    Failed
                  </span>
                </div>
              </div>
              <MessageActivityChart />
            </div>

            <div className="md:col-span-5 bg-white border border-slate-200/80 rounded-2xl p-4 shadow-xs flex flex-col justify-between">
              <h2 className="text-xs font-bold text-slate-800">
                Channel Wise Delivery
              </h2>

              <div className="flex items-center justify-between my-2">
                <div className="w-24 h-24 rounded-full border-[8px] border-emerald-500 border-t-blue-500 border-r-indigo-500 flex flex-col items-center justify-center shrink-0">
                  <span className="text-base font-extrabold text-slate-900 leading-none">
                    95.8%
                  </span>
                  <span className="text-[9px] text-slate-400 font-medium mt-0.5">
                    Delivered
                  </span>
                </div>

                <div className="space-y-1.5 text-xs font-semibold pl-3 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center text-slate-600 text-[11px]">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 mr-1" />{" "}
                      WhatsApp
                    </span>
                    <span className="text-slate-900 font-bold text-[11px]">
                      48,520
                    </span>
                    <span className="text-emerald-600 font-bold text-[10px]">
                      96.2%
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center text-slate-600 text-[11px]">
                      <span className="w-2 h-2 rounded-full bg-blue-500 mr-1" />{" "}
                      SMS
                    </span>
                    <span className="text-slate-900 font-bold text-[11px]">
                      42,150
                    </span>
                    <span className="text-emerald-600 font-bold text-[10px]">
                      94.8%
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center text-slate-600 text-[11px]">
                      <span className="w-2 h-2 rounded-full bg-rose-500 mr-1" />{" "}
                      Email
                    </span>
                    <span className="text-slate-900 font-bold text-[11px]">
                      35,010
                    </span>
                    <span className="text-emerald-600 font-bold text-[10px]">
                      96.7%
                    </span>
                  </div>
                </div>
              </div>

              <a
                href="#"
                className="text-[11px] font-bold text-blue-600 hover:underline flex items-center justify-end"
              >
                <span>View Detailed Report</span>
                <ArrowRight className="w-3 h-3 ml-1" />
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-xs">
            <h2 className="text-xs font-bold text-slate-800 mb-3">
              Quick Actions
            </h2>
            <div className="grid grid-cols-2 gap-2.5">
              {quickActions.map((action) => {
                const Icon = action.icon;
                const isActive = activeQuickAction === action.id;

                return (
                  <button
                    key={action.id}
                    type="button"
                    onClick={() => setActiveQuickAction(action.id)}
                    className={`p-3 rounded-2xl flex flex-col items-center text-center transition-all cursor-pointer ${
                      isActive
                        ? "bg-orange-500 text-white shadow-md shadow-orange-500/20"
                        : "bg-slate-50/80 hover:bg-slate-100 border border-slate-100 text-slate-800"
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 mb-1 ${isActive ? "text-white" : "text-slate-600"}`}
                    />
                    <span className="text-xs font-bold leading-tight">
                      {action.label}
                    </span>
                    <span
                      className={`text-[9px] font-medium mt-0.5 ${isActive ? "text-orange-100" : "text-slate-400"}`}
                    >
                      {action.subtitle}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-xs space-y-2.5">
            <div className="flex justify-between items-center">
              <h2 className="text-xs font-bold text-slate-800">
                Sender IDs Status
              </h2>
              <a
                href="#"
                className="text-[10px] font-bold text-blue-600 hover:underline flex items-center"
              >
                Manage All <ArrowRight className="w-3 h-3 ml-0.5" />
              </a>
            </div>

            <div className="space-y-2 text-xs">
              <div className="p-2 bg-slate-50/80 rounded-xl flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="p-1.5 bg-blue-500 text-white rounded-lg">
                    <MessageSquare className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-semibold text-slate-700 text-[11px]">
                    SMS Sender ID
                  </span>
                </div>
                <div className="flex space-x-1">
                  <span className="px-1.5 py-0.5 bg-emerald-100 text-emerald-700 rounded-md text-[9px] font-bold">
                    3 Approved
                  </span>
                  <span className="px-1.5 py-0.5 bg-amber-100 text-amber-700 rounded-md text-[9px] font-bold">
                    1 Pending
                  </span>
                </div>
              </div>

              {/* WhatsApp Business */}
              <div className="p-2 bg-slate-50/80 rounded-xl flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="p-1.5 bg-emerald-500 text-white rounded-lg">
                    <Smartphone className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-semibold text-slate-700 text-[11px]">
                    WhatsApp Business
                  </span>
                </div>
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-md text-[9px] font-bold flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1" />{" "}
                  Connected
                </span>
              </div>

              {/* Email Domain */}
              <div className="p-2 bg-slate-50/80 rounded-xl flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="p-1.5 bg-rose-500 text-white rounded-lg">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-semibold text-slate-700 text-[11px]">
                    Email Domain
                  </span>
                </div>
                <div className="flex space-x-1">
                  <span className="px-1.5 py-0.5 bg-emerald-100 text-emerald-700 rounded-md text-[9px] font-bold">
                    3 Verified
                  </span>
                  <span className="px-1.5 py-0.5 bg-amber-100 text-amber-700 rounded-md text-[9px] font-bold">
                    0 Pending
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="lg:col-span-5 bg-white border border-slate-200/80 rounded-2xl p-4 shadow-xs">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xs font-bold text-slate-800">
              Recent Campaigns
            </h2>
            <a
              href="#"
              className="text-[10px] font-bold text-blue-600 hover:underline flex items-center"
            >
              View All <ArrowRight className="w-3 h-3 ml-0.5" />
            </a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[480px]">
              <thead>
                <tr className="border-b border-slate-100 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  <th className="pb-2">Campaign Name</th>
                  <th className="pb-2">Channel</th>
                  <th className="pb-2">Recipients</th>
                  <th className="pb-2">Delivered</th>
                  <th className="pb-2">Failed</th>
                  <th className="pb-2">Status</th>
                  <th className="pb-2">Sent On</th>
                  <th className="pb-2 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                <CampaignRow
                  name="Festival Offer - 20% Discount"
                  channel="WhatsApp"
                  count="12,480"
                  delivered="12,021"
                  deliveredPct="96.3%"
                  failed="459"
                  failedPct="3.7%"
                  status="Completed"
                  date="29 Sep 2026"
                />
                <CampaignRow
                  name="New Service Launch"
                  channel="SMS"
                  count="8,560"
                  delivered="8,120"
                  deliveredPct="94.9%"
                  failed="440"
                  failedPct="5.1%"
                  status="Completed"
                  date="28 Sep 2026"
                />
                <CampaignRow
                  name="Monthly Newsletter"
                  channel="Email"
                  count="5,240"
                  delivered="5,080"
                  deliveredPct="96.9%"
                  failed="160"
                  failedPct="3.1%"
                  status="Completed"
                  date="27 Sep 2026"
                />
                <CampaignRow
                  name="Customer Reminder"
                  channel="WhatsApp"
                  count="14,260"
                  delivered="13,820"
                  deliveredPct="96.9%"
                  failed="440"
                  failedPct="3.1%"
                  status="Completed"
                  date="26 Sep 2026"
                />
                <CampaignRow
                  name="Payment Reminder"
                  channel="SMS"
                  count="9,560"
                  delivered="9,210"
                  deliveredPct="96.3%"
                  failed="350"
                  failedPct="3.7%"
                  status="Completed"
                  date="25 Sep 2026"
                />
              </tbody>
            </table>
          </div>
        </div>

        {/* Credits & Usage (4 Spans) */}
        <div className="lg:col-span-4 bg-white border border-slate-200/80 rounded-2xl p-4 shadow-xs flex flex-col justify-between space-y-2">
          <div className="flex items-center justify-between mb-1">
            <h2 className="text-xs font-bold text-slate-800">
              Credits & Usage
            </h2>
            <a
              href="#"
              className="text-[10px] font-bold text-blue-600 hover:underline flex items-center"
            >
              View Details <ArrowRight className="w-3 h-3 ml-0.5" />
            </a>
          </div>
          <div className="space-y-2">
            <CreditCardItem
              title="SMS"
              total="125,000"
              used="42,680"
              pct="34"
              icon={MessageSquare}
              color="bg-blue-500"
            />
            <CreditCardItem
              title="WhatsApp"
              total="50,000"
              used="18,240"
              pct="36"
              icon={Smartphone}
              color="bg-emerald-500"
            />
            <CreditCardItem
              title="Email"
              total="100,000"
              used="24,560"
              pct="24"
              icon={Mail}
              color="bg-rose-500"
            />
          </div>
        </div>

        {/* Recent Activity (3 Spans) */}
        <div className="lg:col-span-3 bg-white border border-slate-200/80 rounded-2xl p-4 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xs font-bold text-slate-800">
                Recent Activity
              </h2>
              <a
                href="#"
                className="text-[10px] font-bold text-blue-600 hover:underline flex items-center"
              >
                View All <ArrowRight className="w-3 h-3 ml-0.5" />
              </a>
            </div>
            <div className="space-y-1">
              <ActivityItem
                title="Campaign sent successfully"
                subtitle="Festival Offer - 20% Discount"
                time="2 mins ago"
                icon={CheckCircle2}
                iconBg="bg-emerald-100"
                iconColor="text-emerald-600"
              />
              <ActivityItem
                title="New contact added"
                subtitle="1,250 contacts imported"
                time="15 mins ago"
                icon={Users}
                iconBg="bg-blue-100"
                iconColor="text-blue-600"
              />
              <ActivityItem
                title="Sender ID submitted"
                subtitle="REGUL01 (Pending approval)"
                time="1 hour ago"
                icon={Clock}
                iconBg="bg-amber-100"
                iconColor="text-amber-600"
              />
              <ActivityItem
                title="New template created"
                subtitle="Special Discount Template"
                time="3 hours ago"
                icon={FileText}
                iconBg="bg-indigo-100"
                iconColor="text-indigo-600"
              />
              <ActivityItem
                title="WhatsApp connected"
                subtitle="Business account linked"
                time="5 hours ago"
                icon={CheckCircle2}
                iconBg="bg-emerald-100"
                iconColor="text-emerald-600"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <GatewayCard
          title="Bulk SMS"
          desc="Send transactional and promotional SMS to your customers."
          icon={MessageSquare}
          iconBg="bg-blue-100"
          iconColor="text-blue-600"
          bullets={[
            "High delivery rate",
            "Supports sender ID",
            "Instant delivery",
          ]}
          buttonText="Create SMS Campaign"
          buttonColor="bg-blue-50 hover:bg-blue-100 text-blue-600"
        />

        <GatewayCard
          title="Bulk WhatsApp"
          desc="Send rich WhatsApp messages with media, buttons and templates."
          icon={Smartphone}
          iconBg="bg-emerald-100"
          iconColor="text-emerald-600"
          bullets={[
            "Images, Videos, Documents",
            "Interactive Buttons",
            "Official WhatsApp API",
          ]}
          buttonText="Create WhatsApp Campaign"
          buttonColor="bg-emerald-50 hover:bg-emerald-100 text-emerald-600"
        />

        <GatewayCard
          title="Bulk Email"
          desc="Create and send beautiful emails to your audience."
          icon={Mail}
          iconBg="bg-rose-100"
          iconColor="text-rose-600"
          bullets={[
            "Drag & Drop Builder",
            "Personalization",
            "Attachments Support",
          ]}
          buttonText="Create Email Campaign"
          buttonColor="bg-rose-50 hover:bg-rose-100 text-rose-600"
        />

        <GatewayCard
          title="API & Integration"
          desc="Integrate our powerful APIs into your application."
          icon={Code}
          iconBg="bg-indigo-100"
          iconColor="text-indigo-600"
          bullets={["RESTful API", "Easy Integration", "Developer Docs"]}
          buttonText="View API Documentation"
          buttonColor="bg-indigo-50 hover:bg-indigo-100 text-indigo-600"
        />
      </div>
    </div>
  );
};

export default Dashboard;
