import React from "react";
import { useNavigate } from "react-router-dom";
import {
  RefreshCw,
  MessageSquare,
  ShieldCheck,
  BarChart3,
  ArrowRight,
} from "lucide-react";

import onboardingWelcomeImg from "../assets/images/onboarding-welcome.png";

const OnboardingWelcome = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl w-full mx-auto flex flex-col items-center justify-center text-center px-4 sm:px-6 mt-3 sm:mt-5 mb-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-3 tracking-tight leading-tight">
        Welcome to Regul Connect
      </h1>
      <p className="text-gray-500 max-w-lg text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 font-normal">
        Your complete solution for bulk SMS, WhatsApp and Email messaging. Let's
        get you set up in just a few steps.
      </p>

      <div className="w-full max-w-xl h-auto mb-8 sm:mb-10 flex items-center justify-center">
        <img
          src={onboardingWelcomeImg}
          alt="Messaging Channels Graphic"
          className="w-full h-auto object-contain max-h-[250px] sm:max-h-[300px] md:max-h-[350px] drop-shadow-md"
        />
      </div>

      <div className="w-full max-w-5xl bg-slate-50/90 rounded-2xl p-4 sm:p-5 border border-slate-200/80 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10 shadow-sm">
        <div className="flex items-center justify-center space-x-2.5 text-slate-800 py-1 sm:py-0">
          <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
            <RefreshCw className="w-4 h-4" />
          </div>
          <span className="text-sm font-semibold text-slate-700 whitespace-nowrap">
            Easy Setup
          </span>
        </div>

        <div className="flex items-center justify-center space-x-2.5 text-slate-800 py-1 sm:py-0">
          <div className="w-7 h-7 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
            <MessageSquare className="w-4 h-4" />
          </div>
          <span className="text-sm font-semibold text-slate-700 whitespace-nowrap">
            Multiple Channels
          </span>
        </div>

        <div className="flex items-center justify-center space-x-2.5 text-slate-800 py-1 sm:py-0">
          <div className="w-7 h-7 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <span className="text-sm font-semibold text-slate-700 whitespace-nowrap">
            Secure & Reliable
          </span>
        </div>

        <div className="flex items-center justify-center space-x-2.5 text-slate-800 py-1 sm:py-0">
          <div className="w-7 h-7 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 shrink-0">
            <BarChart3 className="w-4 h-4" />
          </div>
          <span className="text-sm font-semibold text-slate-700 whitespace-nowrap">
            Real-time Reports
          </span>
        </div>
      </div>

      <button
        onClick={() => navigate("/onboarding/choose-plan")}
        className="w-full sm:w-auto justify-center bg-orange-500 hover:bg-orange-600 text-white font-semibold px-10 sm:px-14 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center space-x-2 text-base cursor-pointer"
      >
        <span>Next</span>
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default OnboardingWelcome;