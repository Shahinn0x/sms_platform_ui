import React, { useState } from "react";
import { User, Lock, Mail, Building2, Phone, Eye, EyeOff, ArrowRight, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import completedImg from "../assets/images/completed.png";

const SignUp = ({ onSwitchToLogin }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    countryCode: "+91",
    mobileNumber: "",
    password: "",
    agreeToTerms: false,
  });

  const handleLoginClick = () => {
    if (onSwitchToLogin) {
      onSwitchToLogin();
    } else {
      navigate("/login");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SignUp Submitted:", formData);
    navigate("/onboarding");
  };

  return (
    <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center p-4 lg:p-8 font-sans [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[680px]">
        
        {/* Left Section - Hero / Branding */}
        <div className="lg:col-span-6 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 p-8 lg:p-12 flex flex-col justify-between relative overflow-hidden">
          
          {/* Logo */}
          <div className="flex items-center space-x-3 z-10">
            <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center shadow-md shadow-orange-500/20">
              <span className="text-white text-xl font-black">R</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 leading-none">Regul Connect</h2>
              <p className="text-[10px] text-slate-400 font-medium mt-0.5">Bulk Messaging Platform</p>
            </div>
          </div>

          {/* Hero Content */}
          <div className="my-6 z-10">
            <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Start Your <br />
              Messaging Journey <br />
              <span className="text-orange-500">Today</span>
            </h1>
            <p className="text-slate-500 text-xs sm:text-sm mt-3 max-w-md font-medium leading-relaxed">
              Create your account and start connecting with your customers in minutes.
            </p>

            <div className="mt-6 space-y-2.5">
              {["No credit card required", "Quick and easy setup", "Free trial available", "Scalable for your business"].map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 fill-emerald-100" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Spreading Glow Graphic Section */}
          <div className="relative flex justify-center items-center py-2">
            <div className="relative w-full max-w-[300px] flex justify-center items-center">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-gradient-to-tr from-emerald-400 via-sky-400 to-amber-300 opacity-50 rounded-full blur-3xl transform scale-110 -z-0 pointer-events-none" />
              <img
                src={completedImg}
                alt="Messaging Illustration"
                className="w-full h-auto object-contain drop-shadow-xl relative z-10 mx-auto"
              />
            </div>
          </div>

        </div>

        {/* Right Section - Signup Form */}
        <div className="lg:col-span-6 p-8 lg:p-10 flex flex-col justify-center bg-white">
          <div className="max-w-md w-full mx-auto space-y-5">
            
            {/* Form Header */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Create an Account
              </h2>
              <p className="text-xs sm:text-sm font-medium text-slate-400 mt-1">
                Fill in the details to get started
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              
              {/* Full Name */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Full Name</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:bg-white transition-all"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>
              </div>

              {/* Company Name */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Company Name</label>
                <div className="relative">
                  <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Regul Softech Solution Private Limited"
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:bg-white transition-all"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Email Address</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:bg-white transition-all"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              {/* Mobile Number */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Mobile Number</label>
                <div className="flex space-x-2">
                  <div className="flex items-center space-x-1 px-3 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 shrink-0">
                    <span>🇮🇳</span>
                    <span>+91</span>
                  </div>
                  <input
                    type="tel"
                    required
                    placeholder="98765 43210"
                    className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:bg-white transition-all"
                    value={formData.mobileNumber}
                    onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Password</label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="••••••••••••"
                    className="w-full pl-10 pr-10 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:bg-white transition-all"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="pt-1">
                <label className="flex items-start space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    className="w-4 h-4 mt-0.5 text-orange-500 border-slate-300 rounded focus:ring-orange-400 accent-orange-500 shrink-0"
                    checked={formData.agreeToTerms}
                    onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                  />
                  <span className="text-[11px] font-medium text-slate-600 leading-tight">
                    I agree to the{" "}
                    <a href="#terms" className="text-blue-600 font-bold hover:underline">Terms & Conditions</a>
                    {" "}and{" "}
                    <a href="#privacy" className="text-blue-600 font-bold hover:underline">Privacy Policy</a>
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 px-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-xs sm:text-sm font-bold shadow-md shadow-orange-500/20 hover:shadow-lg transition-all flex items-center justify-center space-x-2 cursor-pointer mt-2"
              >
                <span>Create Account</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Switch to Login */}
            <p className="text-center text-xs font-medium text-slate-500 pt-1">
              Already have an account?{" "}
              <button
                type="button"
                onClick={handleLoginClick}
                className="font-bold text-orange-500 hover:underline cursor-pointer"
              >
                Login
              </button>
            </p>

          </div>
        </div>

      </div>
    </div>
  );
};

export default SignUp;