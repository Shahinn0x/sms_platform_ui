import React from "react";
import { useNavigate } from "react-router-dom"; // 1. Import useNavigate
import { 
  ArrowRight, 
  Send, 
  Users, 
  FileText, 
  BarChart3 
} from "lucide-react";
import completedImg from "../assets/images/completed.png";

const OnboardingCompleted = ({ onGoToDashboard }) => {
  const navigate = useNavigate(); // 2. Initialize navigate hook

  const quickActions = [
    {
      id: "campaign",
      title: "Create Campaign",
      subtitle: "Send messages in minutes",
      icon: Send,
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      id: "contacts",
      title: "Manage Contacts",
      subtitle: "Upload and organize",
      icon: Users,
      bgColor: "bg-indigo-100",
      iconColor: "text-indigo-600",
    },
    {
      id: "templates",
      title: "Use Templates",
      subtitle: "Save time with templates",
      icon: FileText,
      bgColor: "bg-sky-100",
      iconColor: "text-sky-600",
    },
    {
      id: "reports",
      title: "Track Reports",
      subtitle: "Get real-time insights",
      icon: BarChart3,
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
  ];

  // 3. Handle navigation fallback cleanly
  const handleDashboardClick = () => {
    if (onGoToDashboard) {
      onGoToDashboard();
    } else {
      navigate("/dashboard", { replace: true });
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-8 text-center overflow-x-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">

      <div className="relative flex justify-center items-center py-4 sm:py-8">
        <div className="relative w-full max-w-[300px] sm:max-w-md lg:max-w-xl flex justify-center items-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-gradient-to-tr from-emerald-400/40 via-teal-300/30 to-green-500/30 rounded-full blur-3xl transform scale-110 -z-10" />
          <div className="absolute -top-4 -right-4 w-[60%] h-[60%] bg-gradient-to-br from-blue-400/35 via-indigo-400/25 to-sky-300/30 rounded-full blur-2xl transform scale-100 -z-10" />
          <div className="absolute -bottom-4 -left-4 w-[55%] h-[55%] bg-gradient-to-tl from-purple-400/25 via-orange-300/20 to-pink-400/20 rounded-full blur-2xl transform scale-100 -z-10" />

          <img
            src={completedImg}
            alt="Account Created Successfully"
            className="w-full h-auto object-contain drop-shadow-xl relative z-10 mx-auto"
          />
        </div>
      </div>

      <div className="mt-2 sm:mt-4 space-y-1.5 sm:space-y-2">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
          Account Created Successfully!
        </h1>
        <p className="text-xs sm:text-base font-medium text-slate-500 max-w-md mx-auto">
          Welcome to Regul Connect. Your account is ready to use.
        </p>
      </div>

      <div className="mt-6 sm:mt-10 bg-slate-50/80 border border-slate-200/80 rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <div
                key={action.id}
                className="flex items-center space-x-3 bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-100 shadow-xs hover:shadow-md transition-all text-left"
              >
                <div
                  className={`w-9 h-9 sm:w-11 sm:h-11 rounded-xl ${action.bgColor} ${action.iconColor} flex items-center justify-center shrink-0`}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-800 truncate">
                    {action.title}
                  </h4>
                  <p className="text-[10px] sm:text-xs font-medium text-slate-400 truncate mt-0.5">
                    {action.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-6 sm:mt-8 flex justify-center">
        <button
          type="button"
          onClick={handleDashboardClick} // 4. Updated onClick event
          className="w-full sm:w-auto min-w-[220px] flex items-center justify-center space-x-2 px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white rounded-xl sm:rounded-2xl text-xs sm:text-base font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
        >
          <span>Go to Dashboard</span>
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </div>
  );
};

export default OnboardingCompleted;