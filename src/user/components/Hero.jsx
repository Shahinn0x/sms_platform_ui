import React from "react";
import { ArrowRight, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import dashbord from "../assets/images/regul-dashboard1.png";

function Hero() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/onboarding");
  };

  return (
    <section className="relative overflow-hidden bg-[#f7faff]">
      <div className="mx-auto flex flex-col lg:grid max-w-[1400px] items-center gap-6 sm:gap-10 px-4 py-8 sm:px-8 sm:py-16 lg:min-h-[550px] lg:grid-cols-[0.95fr_1.05fr] lg:px-12 lg:py-20">
        {/* Header Text Block */}
        <div className="relative z-20 max-w-[620px] text-left">
          <div className="mb-3 inline-flex rounded-full bg-orange-50 px-3.5 py-1.5 sm:mb-7 sm:px-4 sm:py-2">
            <span className="text-xs font-medium text-orange-500 sm:text-sm">
              Bulk Messaging Platform
            </span>
          </div>

          <h1 className="text-3xl font-bold leading-[1.1] tracking-[-1px] text-[#0b2859] sm:text-5xl sm:leading-[1.05] sm:tracking-[-2px] xl:text-[62px] xl:leading-[1.02]">
            Connect
            <br />
            Communicate
            <br />
            <span className="text-orange-500">Grow Together</span>
          </h1>

          <p className="mt-3 max-w-[560px] text-xs leading-5 text-[#53647a] sm:mt-7 sm:text-[16px] sm:leading-7">
            Send SMS, WhatsApp and Email messages to multiple recipients, manage
            contacts, track delivery, and get real-time reports.
          </p>

          {/* Desktop Action Buttons */}
          <div className="mt-7 hidden lg:flex flex-row items-center gap-4">
            <button
              type="button"
              onClick={handleGetStarted}
              className="group flex items-center justify-center gap-3 rounded-lg bg-orange-500 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-orange-600 cursor-pointer"
            >
              Get Started
              <ArrowRight
                size={18}
                strokeWidth={2.5}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </button>

            <button
              type="button"
              className="flex items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-6 py-3.5 text-sm font-medium text-gray-700 transition-all duration-200 hover:border-orange-400 hover:text-orange-500 cursor-pointer"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-300">
                <Play size={10} fill="currentColor" />
              </span>
              Watch Video
            </button>
          </div>
        </div>

        <div className="relative flex min-h-[220px] items-center justify-center sm:min-h-[430px] lg:min-h-[500px] w-full my-1 lg:my-0">
          <div className="absolute right-[2%] top-[8%] h-[160px] w-[200px] rounded-full bg-blue-300/30 blur-[50px] sm:h-[360px] sm:w-[500px] sm:blur-[90px]" />
          <div className="absolute left-[12%] top-[22%] h-[140px] w-[140px] rounded-full bg-pink-300/30 blur-[45px] sm:h-[260px] sm:w-[280px] sm:blur-[85px]" />
          <div className="absolute bottom-[5%] right-[18%] h-[140px] w-[180px] rounded-full bg-purple-300/25 blur-[50px] sm:h-[250px] sm:w-[330px] sm:blur-[90px]" />

          <div className="relative z-10 w-full max-w-[700px]">
            <img
              src={dashbord}
              alt="Regul Connect messaging dashboard"
              className="w-full object-contain drop-shadow-md lg:drop-shadow-none"
            />
          </div>
        </div>

        <div className="w-full lg:hidden pt-2">
          <div className="flex flex-row items-center gap-3 w-full">
            <button
              type="button"
              onClick={handleGetStarted}
              className="group flex-1 flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-4 py-3 text-xs sm:text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-orange-600 cursor-pointer whitespace-nowrap"
            >
              <span>Get Started</span>
              <ArrowRight
                size={16}
                strokeWidth={2.5}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </button>

            <button
              type="button"
              className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-3 text-xs sm:text-sm font-medium text-gray-700 transition-all duration-200 hover:border-orange-400 hover:text-orange-500 cursor-pointer whitespace-nowrap"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-300">
                <Play size={8} fill="currentColor" />
              </span>
              <span>Watch Video</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
