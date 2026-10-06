import React, { useState, useEffect, useRef } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import verifyIllustration from "../assets/images/verify.png";

const VerifyContact = ({ onNext, onBack, phoneNumber = "+91 98765 43210" }) => {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [timer, setTimer] = useState(28);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (index, value) => {
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    if (value && index < 5 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").trim();
    if (!/^\d+$/.test(pastedData)) return;

    const digits = pastedData.slice(0, 6).split("");
    const newOtp = [...otp];
    digits.forEach((digit, idx) => {
      newOtp[idx] = digit;
    });
    setOtp(newOtp);

    const targetIndex = Math.min(digits.length, 5);
    inputRefs.current[targetIndex]?.focus();
  };

  const handleResend = () => {
    if (timer === 0) {
      setTimer(30);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");
    if (onNext) onNext(enteredOtp);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-2 text-slate-800 overflow-x-hidden">
      {/* Header Section */}
      <div className="text-left mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3 sm:mb-5">
          Verify Your Contact
        </h1>
        <p className="text-sm sm:text-base text-slate-500 mt-1 font-medium break-words">
          We have sent a 6-digit OTP to{" "}
          <span className="font-bold text-slate-900 text-base sm:text-lg whitespace-nowrap">
            {phoneNumber}
          </span>
        </p>
        <p className="text-xs sm:text-base text-slate-500 mt-0.5 font-medium">
          Enter the OTP below to verify your mobile number.
        </p>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        {/* Illustration */}
        <div className="lg:col-span-5 flex justify-center items-center relative py-4 sm:py-10">
          <div className="absolute w-[260px] h-[260px] sm:w-[480px] sm:h-[480px] -z-10 flex items-center justify-center pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/60 via-indigo-500/80 to-purple-600/70 rounded-full blur-2xl sm:blur-3xl transform scale-120 sm:scale-150" />
            <div className="absolute w-full h-full bg-gradient-to-br from-sky-600/80 via-blue-500 to-indigo-500/90 rounded-full blur-lg sm:blur-xl transform scale-100 sm:scale-110" />
          </div>

          <img
            src={verifyIllustration}
            alt="Verify Contact Illustration"
            className="w-full max-w-[220px] sm:max-w-md lg:max-w-lg object-contain relative z-10"
          />
        </div>

        {/* Form Inputs */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
          <div>
            {/* Fully Responsive Grid for 6 OTP Boxes */}
            <div className="grid grid-cols-6 gap-1.5 sm:gap-3 mb-5 max-w-xs sm:max-w-md">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={handlePaste}
                  className="w-full aspect-square border-2 border-slate-200 rounded-xl sm:rounded-2xl text-center text-lg sm:text-2xl font-bold text-slate-900 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all shadow-sm bg-white"
                />
              ))}
            </div>

            {/* Resend Code Prompt */}
            <div className="text-xs sm:text-sm font-semibold text-slate-500 pl-1">
              Didn't receive the code?{" "}
              <button
                type="button"
                onClick={handleResend}
                disabled={timer > 0}
                className={`font-bold transition-colors cursor-pointer ${
                  timer > 0
                    ? "text-blue-500 cursor-not-allowed"
                    : "text-orange-500 hover:text-orange-600 underline"
                }`}
              >
                Resend in 00:{timer < 10 ? `0${timer}` : timer}
              </button>
            </div>
          </div>

          {/* Info Card */}
          <div className="bg-[#EFF6FE] border border-slate-200/60 rounded-2xl sm:rounded-3xl p-4 sm:p-6 max-w-md shadow-sm">
            <h3 className="font-bold text-slate-800 text-base sm:text-lg mb-3 sm:mb-4">
              Why do we verify?
            </h3>
            <ul className="space-y-2.5 sm:space-y-3">
              <li className="flex items-center text-xs sm:text-sm font-semibold text-slate-500">
                <CheckCircle2 className="w-4 h-4 text-slate-700 mr-2 shrink-0 stroke-[2]" />
                <span>To secure your account</span>
              </li>
              <li className="flex items-center text-xs sm:text-sm font-semibold text-slate-500">
                <CheckCircle2 className="w-4 h-4 text-slate-700 mr-2 shrink-0 stroke-[2]" />
                <span>To prevent spam and misuse</span>
              </li>
              <li className="flex items-center text-xs sm:text-sm font-semibold text-slate-500">
                <CheckCircle2 className="w-4 h-4 text-slate-700 mr-2 shrink-0 stroke-[2]" />
                <span>To ensure reliable communication</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between mt-8 sm:mt-10 pt-4 sm:pt-6 border-t border-slate-100 gap-3">
        <button
          type="button"
          onClick={onBack}
          className="px-6 sm:px-10 py-2.5 sm:py-3 border border-slate-300 rounded-xl text-xs sm:text-sm font-bold text-slate-700 hover:bg-slate-100 transition-all cursor-pointer shadow-sm"
        >
          Back
        </button>

        <button
          type="button"
          onClick={handleSubmit}
          className="flex items-center justify-center space-x-1.5 sm:space-x-2 px-6 sm:px-12 py-2.5 sm:py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl sm:rounded-2xl text-xs sm:text-base font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
        >
          <span>Verify & Continue</span>
          <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>
      </div>
    </div>
  );
};

export default VerifyContact;