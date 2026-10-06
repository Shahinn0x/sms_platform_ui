import React from "react";
import { NavLink } from "react-router-dom";

const steps = [
  { number: 1, label: "Welcome", path: "/onboarding/welcome" },
  { number: 2, label: "Choose Plan", path: "/onboarding/choose-plan" },
  { number: 3, label: "Account Details", path: "/onboarding/account-details" },
  { number: 4, label: "Verify", path: "/onboarding/verify" },
  { number: 5, label: "Get Started", path: "/onboarding/get-started" },
];

const OnboardingSidebar = () => {
  return (
    <>
      {/* Desktop/Tablet Sidebar */}
      <aside className="hidden md:flex w-64 border-r border-gray-100 bg-[#F3F8FE] p-6 flex-col space-y-4 shrink-0">
        {steps.map((step) => (
          <NavLink
            key={step.number}
            to={step.path}
            className={({ isActive }) =>
              `flex items-center space-x-3 p-2 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "text-orange-600 font-semibold"
                  : "text-gray-500 hover:text-gray-900"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span
                  className={`w-7 h-7 flex items-center justify-center rounded-full text-xs font-bold ${
                    isActive
                      ? "bg-orange-500 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {step.number}
                </span>
                <span>{step.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </aside>

      {/* Mobile Horizontal Stepper */}
      <div className="flex md:hidden w-full overflow-x-auto bg-[#F3F8FE] p-3 border-b border-gray-100 no-scrollbar space-x-2 shrink-0">
        {steps.map((step) => (
          <NavLink
            key={step.number}
            to={step.path}
            className={({ isActive }) =>
              `flex items-center space-x-2 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                isActive
                  ? "bg-white text-orange-600 font-semibold shadow-sm"
                  : "text-gray-500"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span
                  className={`w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold ${
                    isActive
                      ? "bg-orange-500 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {step.number}
                </span>
                <span>{step.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default OnboardingSidebar;