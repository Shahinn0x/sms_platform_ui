import React, { useState } from "react";
import {
  User,
  Building2,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Check,
  ArrowRight,
  ChevronDown,
} from "lucide-react";


const COUNTRY_CODES = [
  { code: "+91", country: "IN", flag: "🇮🇳", digits: 10, name: "India" },
  { code: "+1", country: "US", flag: "🇺🇸", digits: 10, name: "United States" },
  { code: "+44", country: "UK", flag: "🇬🇧", digits: 10, name: "United Kingdom" },
  { code: "+971", country: "AE", flag: "🇦🇪", digits: 9, name: "UAE" },
  { code: "+61", country: "AU", flag: "🇦🇺", digits: 9, name: "Australia" },
  { code: "+65", country: "SG", flag: "🇸🇬", digits: 8, name: "Singapore" },
];

const AccountDetails = ({ onNext, onBack, selectedPlan }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(COUNTRY_CODES[0]);

  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "Regul Softech Solution Private Limited",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  // Helper validation function
  const validateField = (name, value, country = selectedCountry) => {
    let errorMsg = "";

    switch (name) {
      
      case "fullName":
        if (!value.trim()) {
          errorMsg = "Full name is required";
        } else if (!/^[a-zA-A\s]+$/.test(value)) {
          errorMsg = "Only letters and spaces are allowed (no numbers or special characters)";
        }
        break;

      case "companyName":
        if (!value.trim()) {
          errorMsg = "Company name is required";
        }
        break;

      case "email":
        if (!value.trim()) {
          errorMsg = "Email address is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          errorMsg = "Please enter a valid email address";
        }
        break;

      case "mobileNumber":
        const cleanNumber = value.replace(/\D/g, "");
        if (!value.trim()) {
          errorMsg = "Mobile number is required";
        } else if (cleanNumber.length !== country.digits) {
          errorMsg = `Mobile number for ${country.name} (${country.code}) must be exactly ${country.digits} digits`;
        }
        break;

      case "password":
        if (!value) {
          errorMsg = "Password is required";
        } else if (value.length < 6) {
          errorMsg = "Password must be at least 6 characters";
        }
        break;

      case "confirmPassword":
        if (!value) {
          errorMsg = "Please confirm your password";
        } else if (value !== formData.password) {
          errorMsg = "Passwords do not match";
        }
        break;

      default:
        break;
    }

    return errorMsg;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Direct input sanitizer for Full Name (prevents typing non-letters directly)
    if (name === "fullName" && value !== "" && !/^[a-zA-A\s]+$/.test(value)) {
      return;
    }

    // Direct input sanitizer for Mobile (allows numbers only)
    if (name === "mobileNumber") {
      const cleanDigits = value.replace(/\D/g, "");
      if (cleanDigits.length > selectedCountry.digits) return;
      
      setFormData((prev) => ({ ...prev, mobileNumber: cleanDigits }));
      setErrors((prev) => ({
        ...prev,
        mobileNumber: validateField("mobileNumber", cleanDigits, selectedCountry),
      }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));

    // Real-time error state clearing/updating
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));

    // Cross-check password mismatch when typing confirmPassword
    if (name === "password" && formData.confirmPassword) {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: value !== formData.confirmPassword ? "Passwords do not match" : "",
      }));
    }
  };

  const handleCountryChange = (e) => {
    const selected = COUNTRY_CODES.find((c) => c.code === e.target.value);
    if (selected) {
      setSelectedCountry(selected);
      // Revalidate existing phone number against the new country rules
      setErrors((prev) => ({
        ...prev,
        mobileNumber: validateField("mobileNumber", formData.mobileNumber, selected),
      }));
    }
  };

  const validateAll = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const err = validateField(key, formData[key]);
      if (err) newErrors[key] = err;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    const isValid = validateAll();
    if (isValid && onNext) {
      onNext({ ...formData, countryCode: selectedCountry.code });
    }
  };

  const currentPlan = selectedPlan || {
    name: "Business Plan",
    price: "₹2,499/month",
    features: [
      "50,000 Messages / month",
      "SMS + WhatsApp + Email",
      "Advanced Reports",
      "Contact Management",
      "Priority Support",
    ],
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-2 sm:px-6 py-2 sm:py-4 text-slate-800">
      {/* Header */}
      <div className="text-left mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
          Create Your Account
        </h1>
        <p className="text-xs sm:text-sm lg:text-base text-slate-500 mt-1.5 sm:mt-2 font-medium">
          Please provide your business details to create your account.
        </p>
      </div>

      {/* Main Grid Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-start">
        {/* Left: Input Form Fields */}
        <div className="lg:col-span-8 w-full">
          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-7">
            {/* Row 1: Full Name & Company Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-7">
              {/* Full Name */}
              <div className="text-left">
                <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5 sm:mb-2.5">
                  Full Name <span className="text-orange-500">*</span>
                </label>
                <div className="relative flex items-center">
                  <User className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 absolute left-3.5 sm:left-4 pointer-events-none" />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={`w-full pl-10 sm:pl-13 pr-4 py-3 sm:py-4 bg-white border ${
                      errors.fullName ? "border-red-500 focus:ring-red-500" : "border-slate-200 focus:border-orange-500 focus:ring-orange-500"
                    } rounded-xl sm:rounded-2xl text-xs sm:text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 transition-all shadow-sm`}
                  />
                </div>
                {errors.fullName && (
                  <p className="text-xs text-red-500 mt-1 font-medium">{errors.fullName}</p>
                )}
              </div>

              {/* Company Name */}
              <div className="text-left">
                <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5 sm:mb-2.5">
                  Company Name <span className="text-orange-500">*</span>
                </label>
                <div className="relative flex items-center">
                  <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 absolute left-3.5 sm:left-4 pointer-events-none" />
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Enter company name"
                    className={`w-full pl-10 sm:pl-13 pr-4 py-3 sm:py-4 bg-white border ${
                      errors.companyName ? "border-red-500 focus:ring-red-500" : "border-slate-200 focus:border-orange-500 focus:ring-orange-500"
                    } rounded-xl sm:rounded-2xl text-xs sm:text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 transition-all shadow-sm`}
                  />
                </div>
                {errors.companyName && (
                  <p className="text-xs text-red-500 mt-1 font-medium">{errors.companyName}</p>
                )}
              </div>
            </div>

            {/* Row 2: Email & Mobile Number */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-7">
              {/* Email Address */}
              <div className="text-left">
                <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5 sm:mb-2.5">
                  Email Address <span className="text-orange-500">*</span>
                </label>
                <div className="relative flex items-center">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 absolute left-3.5 sm:left-4 pointer-events-none" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className={`w-full pl-10 sm:pl-13 pr-4 py-3 sm:py-4 bg-white border ${
                      errors.email ? "border-red-500 focus:ring-red-500" : "border-slate-200 focus:border-orange-500 focus:ring-orange-500"
                    } rounded-xl sm:rounded-2xl text-xs sm:text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 transition-all shadow-sm`}
                  />
                </div>
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1 font-medium">{errors.email}</p>
                )}
              </div>

              {/* Mobile Number with Country Code Selector */}
              <div className="text-left">
                <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5 sm:mb-2.5">
                  Mobile Number <span className="text-orange-500">*</span>
                </label>
                <div className={`relative flex items-center bg-white border ${
                  errors.mobileNumber ? "border-red-500 focus-within:ring-red-500" : "border-slate-200 focus-within:border-orange-500 focus-within:ring-orange-500"
                } rounded-xl sm:rounded-2xl overflow-hidden focus-within:ring-1 transition-all shadow-sm`}>
                  
                  {/* Dynamic Country Dropdown */}
                  <div className="relative flex items-center space-x-1 px-2.5 py-3 sm:px-3 sm:py-4 bg-slate-50 border-r border-slate-200 shrink-0">
                    <select
                      value={selectedCountry.code}
                      onChange={handleCountryChange}
                      className="bg-transparent text-xs sm:text-sm font-bold text-slate-700 focus:outline-none cursor-pointer pr-1 appearance-none"
                    >
                      {COUNTRY_CODES.map((c) => (
                        <option key={c.code} value={c.code}>
                          {c.country} ({c.code})
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-500 pointer-events-none" />
                  </div>

                  <input
                    type="tel"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    placeholder={`${selectedCountry.digits} digits`}
                    className="w-full px-3 sm:px-4 py-3 sm:py-4 text-xs sm:text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none bg-transparent"
                  />
                </div>
                {errors.mobileNumber && (
                  <p className="text-xs text-red-500 mt-1 font-medium">{errors.mobileNumber}</p>
                )}
              </div>
            </div>

            {/* Row 3: Password & Confirm Password */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-7">
              {/* Password */}
              <div className="text-left">
                <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5 sm:mb-2.5">
                  Password <span className="text-orange-500">*</span>
                </label>
                <div className="relative flex items-center">
                  <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 absolute left-3.5 sm:left-4 pointer-events-none" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className={`w-full pl-10 sm:pl-13 pr-10 sm:pr-12 py-3 sm:py-4 bg-white border ${
                      errors.password ? "border-red-500 focus:ring-red-500" : "border-slate-200 focus:border-orange-500 focus:ring-orange-500"
                    } rounded-xl sm:rounded-2xl text-xs sm:text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 transition-all shadow-sm`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 sm:right-4 text-slate-400 hover:text-slate-600 cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" /> : <Eye className="w-4 h-4 sm:w-5 sm:h-5" />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-xs text-red-500 mt-1 font-medium">{errors.password}</p>
                )}
              </div>

              {/* Confirm Password */}
              <div className="text-left">
                <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5 sm:mb-2.5">
                  Confirm Password <span className="text-orange-500">*</span>
                </label>
                <div className="relative flex items-center">
                  <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 absolute left-3.5 sm:left-4 pointer-events-none" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className={`w-full pl-10 sm:pl-13 pr-10 sm:pr-12 py-3 sm:py-4 bg-white border ${
                      errors.confirmPassword ? "border-red-500 focus:ring-red-500" : "border-slate-200 focus:border-orange-500 focus:ring-orange-500"
                    } rounded-xl sm:rounded-2xl text-xs sm:text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 transition-all shadow-sm`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3.5 sm:right-4 text-slate-400 hover:text-slate-600 cursor-pointer"
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" /> : <Eye className="w-4 h-4 sm:w-5 sm:h-5" />}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-xs text-red-500 mt-1 font-medium">{errors.confirmPassword}</p>
                )}
              </div>
            </div>
          </form>
        </div>

        {/* Right: Plan Summary Card */}
        <div className="lg:col-span-4 w-full">
          <div className="bg-[#EFF6FE] border border-slate-200/70 rounded-2xl sm:rounded-3xl p-5 sm:p-7 text-left shadow-sm">
            <h3 className="font-bold text-slate-900 text-xl sm:text-2xl mb-4 sm:mb-6">Your Plan</h3>

            <div className="flex items-center space-x-3 sm:space-x-4 bg-[#EFF6FE] border border-none p-3.5 sm:p-5 rounded-xl sm:rounded-2xl mb-5 sm:mb-7">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-orange-500 flex items-center justify-center shrink-0 text-white shadow-md">
                <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h5 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                  {currentPlan.name}
                </h5>
                <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-0.5 sm:mt-1">
                  {currentPlan.price}
                </p>
              </div>
            </div>

            <ul className="space-y-3 sm:space-y-4">
              {currentPlan.features.map((feature, i) => (
                <li key={i} className="flex items-center text-xs sm:text-sm font-semibold text-slate-700">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mr-2.5 sm:mr-3 shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="flex items-center justify-between mt-8 sm:mt-12 pt-4 sm:pt-6 border-t border-slate-100">
        <button
          type="button"
          onClick={onBack}
          className="px-6 sm:px-12 py-2.5 sm:py-3 border border-slate-300 rounded-xl text-xs sm:text-sm font-bold text-slate-700 hover:bg-slate-100 transition-all cursor-pointer shadow-sm"
        >
          Back
        </button>

        <button
          type="button"
          onClick={handleSubmit}
          className="flex items-center justify-center space-x-2 px-8 sm:px-20 py-2.5 sm:py-3.5 bg-orange-500 hover:bg-orange-600 text-white rounded-xl sm:rounded-2xl text-xs sm:text-base font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
        >
          <span>Next</span>
          <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>
      </div>
    </div>
  );
};

export default AccountDetails;