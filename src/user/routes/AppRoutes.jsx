// import React from "react";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// // Layouts
// import MainLayout from "../layouts/MainLayout";
// import OnboardingLayout from "../layouts/OnboardingLayout";

// // Pages
// import Home from "../pages/Home";
// import OnboardingWelcome from "../pages/OnboardingWelcome";
// import ChoosePlan from "../pages/ChoosePlan";
// import AccountDetails from "../pages/AccountDetails";
// import VerifyContact from "../pages/VerifyContact";
// import OnboardingCompleted from "../pages/OnboardingCompleted";
// import Login from "../pages/Login";
// import SignUp from "../pages/SignUp";

// function AppRoutes() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Public Landing Pages (With Navbar) */}
//         <Route element={<MainLayout />}>
//           <Route path="/" element={<Home />} />
//         </Route>

//         {/* Standalone Auth Pages (Without Navbar) */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<SignUp />} />

//         {/* Onboarding Flow */}
//         <Route path="/onboarding" element={<OnboardingLayout />}>
//           <Route index element={<Navigate to="welcome" replace />} />
//           <Route path="welcome" element={<OnboardingWelcome />} />
//           <Route path="choose-plan" element={<ChoosePlan />} />
//           <Route path="account-details" element={<AccountDetails />} />  
//           <Route path="verify" element={<VerifyContact />} />
//           <Route path="get-started" element={<OnboardingCompleted />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }


// export default AppRoutes;

import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Layouts
import MainLayout from "../layouts/MainLayout";
import OnboardingLayout from "../layouts/OnboardingLayout";
import DashboardLayout from "../layouts/DashboardLayout";

// Pages
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
        {/* Public Landing Pages */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* Standalone Auth Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Onboarding Flow */}
        <Route path="/onboarding" element={<OnboardingLayout />}>
          <Route index element={<Navigate to="welcome" replace />} />
          <Route path="welcome" element={<OnboardingWelcome />} />
          <Route path="choose-plan" element={<ChoosePlan />} />
          <Route path="account-details" element={<AccountDetails />} />  
          <Route path="verify" element={<VerifyContact />} />
          <Route path="get-started" element={<OnboardingCompleted />} />
        </Route>

        {/* Protected Dashboard Route with Layout */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;