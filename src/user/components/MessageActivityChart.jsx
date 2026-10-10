import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const activityData = [
  { date: "23 Sep", sent: 5000, delivered: 3300, failed: 1200 },
  { date: "24 Sep", sent: 9200, delivered: 7300, failed: 3000 },
  { date: "25 Sep", sent: 8100, delivered: 6200, failed: 2200 },
  { date: "26 Sep", sent: 11000, delivered: 9200, failed: 3000 },
  { date: "27 Sep", sent: 15260, delivered: 14021, failed: 420 },
  { date: "28 Sep", sent: 11200, delivered: 9500, failed: 2800 },
  { date: "29 Sep", sent: 14500, delivered: 12600, failed: 5800 },
  { date: "30 Sep", sent: 17800, delivered: 15500, failed: 5000 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-slate-100 p-3 rounded-xl shadow-xl text-xs space-y-1.5 min-w-[130px]">
        <p className="font-bold text-slate-800 text-[13px] mb-1">{label}</p>
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shrink-0" />
          <span className="text-slate-600 font-medium">Sent:</span>
          <span className="font-bold text-slate-900 ml-auto">{payload[0]?.value.toLocaleString()}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
          <span className="text-slate-600 font-medium">Delivered:</span>
          <span className="font-bold text-slate-900 ml-auto">{payload[1]?.value.toLocaleString()}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500 shrink-0" />
          <span className="text-slate-600 font-medium">Failed:</span>
          <span className="font-bold text-slate-900 ml-auto">{payload[2]?.value.toLocaleString()}</span>
        </div>
      </div>
    );
  }
  return null;
};

const MessageActivityChart = () => {
  return (
    <div className="w-full h-64 pt-2">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={activityData} margin={{ top: 10, right: 10, left: -15, bottom: 0 }}>
          <defs>
            <linearGradient id="colorSent" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2563EB" stopOpacity={0.15} />
              <stop offset="95%" stopColor="#2563EB" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorDelivered" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10B981" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#10B981" stopOpacity={0.02} />
            </linearGradient>
            <linearGradient id="colorFailed" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#EF4444" stopOpacity={0.15} />
              <stop offset="95%" stopColor="#EF4444" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="0" stroke="#F1F5F9" />
          <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fill: "#64748B", fontSize: 11 }} dy={8} />
          <YAxis axisLine={false} tickLine={false} tick={{ fill: "#64748B", fontSize: 11 }} domain={[0, 20000]} ticks={[0, 5000, 10000, 15000, 20000]} tickFormatter={(val) => (val === 0 ? "0" : `${val / 1000}K`)} />
          <Tooltip content={<CustomTooltip />} cursor={{ stroke: "#CBD5E1", strokeWidth: 1, strokeDasharray: "3 3" }} />

          <Area type="monotone" dataKey="sent" stroke="#2563EB" strokeWidth={2.5} fillOpacity={1} fill="url(#colorSent)" dot={{ r: 4, fill: "#2563EB", strokeWidth: 0 }} />
          <Area type="monotone" dataKey="delivered" stroke="#10B981" strokeWidth={2.5} fillOpacity={1} fill="url(#colorDelivered)" dot={{ r: 4, fill: "#10B981", strokeWidth: 0 }} />
          <Area type="monotone" dataKey="failed" stroke="#EF4444" strokeWidth={2.5} fillOpacity={1} fill="url(#colorFailed)" dot={{ r: 4, fill: "#EF4444", strokeWidth: 0 }} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MessageActivityChart;