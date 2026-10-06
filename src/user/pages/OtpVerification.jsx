import React, { useState, useEffect, useRef } from "react";
import { Globe, ArrowRight, Info, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import verifyIllustration from "../assets/images/verify.png";

const OtpVerification = ({ phoneNumber = "+91 98765 43210", onVerify }) => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [timer, setTimer] = useState(28);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  // Focus navigation & digit handling
  const handleChange = (index, value) => {
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // Auto-advance focus to next input box
    if (value && index < 5 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Navigate backwards on Backspace if current box is empty
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
    if (onVerify) {
      onVerify(enteredOtp);
    } else {
      console.log("OTP Submitted:", enteredOtp);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#f8fafc] flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
      
      {/* Outer Card Wrapper */}
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[580px] relative">
        
        {/* Language Selector (Top Right Header) */}
        <div className="absolute top-6 right-6 z-20 flex items-center space-x-1.5 text-slate-600 bg-slate-50 border border-slate-200/80 px-3 py-1.5 rounded-xl text-xs font-semibold cursor-pointer hover:bg-slate-100 transition-colors">
          <Globe className="w-4 h-4 text-slate-500" />
          <span>English</span>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
        </div>

        
        <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between bg-gradient-to-br from-slate-50/50 via-blue-50/20 to-transparent relative">
          
         
          <div className="flex items-center space-x-3 z-10">
            <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center shadow-md shadow-orange-500/20">
              <span className="text-white text-xl font-black">R</span>
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 leading-none">Regul Connect</h2>
              <p className="text-[10px] text-slate-400 font-medium mt-0.5">Bulk Messaging Platform</p>
            </div>
          </div>

          {/* Heading and Description */}
          <div className="my-8 z-10">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Secure <br /> Verification
            </h1>
            <p className="text-slate-500 text-xs sm:text-sm mt-4 font-medium leading-relaxed max-w-xs">
              We have sent a 6-digit OTP to{" "}
              <span className="font-bold text-slate-800">{phoneNumber}</span>. Please enter the code below to verify your account.
            </p>
          </div>

          
          <div className="relative flex justify-center items-center py-2 z-10">
            <div className="relative w-full max-w-[220px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-blue-400/20 opacity-60 rounded-full blur-2xl -z-10 pointer-events-none" />
              <img
                src={verifyIllustration}
                alt="Verification Envelope"
                className="w-full h-auto object-contain drop-shadow-md mx-auto"
              />
            </div>
          </div>

        </div>


        <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-center items-center bg-white relative">
          
          <div className="w-full max-w-md bg-white border border-slate-100 shadow-xl shadow-slate-200/40 rounded-3xl p-6 sm:p-8 flex flex-col items-center">
            
            {/* Form Title */}
            <h2 className="text-2xl font-extrabold text-slate-900 text-center tracking-tight mb-6">
              Enter OTP
            </h2>

            <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
              
              {/* 6 Digit OTP Inputs */}
              <div className="grid grid-cols-6 gap-2 sm:gap-3 w-full mb-4">
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
                    className="w-full aspect-square border border-slate-200 rounded-xl text-center text-lg sm:text-xl font-bold text-slate-800 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all bg-slate-50/50"
                  />
                ))}
              </div>

              {/* Resend Code Prompt */}
              <div className="text-xs font-semibold text-slate-500 mb-8 text-center">
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

              {/* Verify CTA Button */}
              <button
                type="submit"
                className="w-full py-3.5 px-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-sm font-bold shadow-md shadow-orange-500/20 hover:shadow-lg transition-all flex items-center justify-center space-x-2 cursor-pointer mb-4"
              >
                <span>Verify</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Back Link */}
              <button
                type="button"
                onClick={() => navigate("/signup")}
                className="text-xs font-bold text-blue-600 hover:underline flex items-center justify-center space-x-1 mb-6 cursor-pointer"
              >
                <span>← Back to Sign Up</span>
              </button>

              {/* Disclaimer Expiry Info */}
              <div className="flex items-center space-x-1.5 text-[11px] font-medium text-slate-400">
                <Info className="w-3.5 h-3.5 shrink-0" />
                <span>The OTP is valid for 5 minutes.</span>
              </div>

            </form>

          </div>

        </div>

      </div>
    </div>
  );
};

export default OtpVerification;