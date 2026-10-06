import React from "react";
import { Outlet } from "react-router-dom";
import OnboardingHeader from "../components/OnboardingHeader";
import OnboardingSidebar from "../components/OnboardingSidebar";

const OnboardingLayout = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <OnboardingHeader />
      <div className="flex flex-col md:flex-row flex-1 relative">
        <OnboardingSidebar />

        <main className="flex-1 flex flex-col items-center justify-start p-4 sm:p-6 min-h-[calc(100vh-64px)] w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default OnboardingLayout;