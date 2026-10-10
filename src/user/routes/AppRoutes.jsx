import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


import MainLayout from "../layouts/MainLayout";
import OnboardingLayout from "../layouts/OnboardingLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import Home from "../pages/Home";
import OnboardingWelcome from "../pages/OnboardingWelcome";
import ChoosePlan from "../pages/ChoosePlan";
import AccountDetails from "../pages/AccountDetails";
import VerifyContact from "../pages/VerifyContact";
import OnboardingCompleted from "../pages/OnboardingCompleted";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/onboarding" element={<OnboardingLayout />}>
          <Route index element={<Navigate to="welcome" replace />} />
          <Route path="welcome" element={<OnboardingWelcome />} />
          <Route path="choose-plan" element={<ChoosePlan />} />
          <Route path="account-details" element={<AccountDetails />} />
          <Route path="verify" element={<VerifyContact />} />
          <Route path="get-started" element={<OnboardingCompleted />} />
        </Route>

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
        </Route>

        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
