import React from 'react';
import { Globe, ChevronDown } from 'lucide-react';

const OnboardingHeader = () => {
  return (
    <nav className="w-full h-16 bg-white border-b border-gray-100 flex items-center justify-between px-4 sm:px-8">
      <div className="flex items-center space-x-2">
        <div className="bg-orange-500 text-white p-2 rounded-lg transform -rotate-12 flex items-center justify-center shrink-0">
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
          </svg>
        </div>
        <div>
          <h1 className="font-bold text-gray-800 text-base sm:text-lg leading-tight">
            Regul Connect
          </h1>
          <p className="text-[10px] sm:text-xs text-gray-400 font-medium">
            Bulk Messaging Platform
          </p>
        </div>
      </div>

      <button className="flex items-center space-x-1.5 sm:space-x-2 border border-gray-200 rounded-full px-3 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm text-gray-700 hover:bg-gray-50 transition-colors">
        <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-500" />
        <span className="font-medium">English</span>
        <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400" />
      </button>
    </nav>
  );
};

export default OnboardingHeader;