import React, { useState } from "react";
import { Send, LogIn, Menu, X } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    setMobileMenuOpen(false);
    navigate("/login");
  };

  return (
    <header className="relative z-50 w-full border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-4 sm:px-8 lg:px-12">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 cursor-pointer">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500 text-white shrink-0">
            <Send size={18} strokeWidth={2.5} />
          </div>

          <div className="leading-none">
            <h1 className="text-[15px] font-bold text-[#0b2859]">
              Regul Connect
            </h1>
            <p className="mt-1 text-[8px] font-medium text-gray-500">
              Bulk Messaging Platform
            </p>
          </div>
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden items-center gap-9 md:flex">
          <a href="#features" className="text-sm font-medium text-gray-600 transition hover:text-orange-500">
            Features
          </a>
          <a href="#pricing" className="text-sm font-medium text-gray-600 transition hover:text-orange-500">
            Pricing
          </a>
          <a href="#resources" className="text-sm font-medium text-gray-600 transition hover:text-orange-500">
            Resources
          </a>
          <a href="#contact" className="text-sm font-medium text-gray-600 transition hover:text-orange-500">
            Contact
          </a>
        </nav>

        {/* Desktop Login Button */}
        <div className="hidden items-center gap-4 md:flex">
          <span className="hidden text-xs text-gray-500 lg:block">
            Already have an account?
          </span>

          <button
            type="button"
            onClick={handleLoginClick}
            className="flex items-center gap-2 rounded-lg bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600 cursor-pointer shadow-sm shadow-orange-500/20"
          >
            <LogIn size={15} />
            Login
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-600 hover:text-gray-900"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-gray-100 bg-white px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-gray-600 hover:text-orange-500"
            >
              Features
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-gray-600 hover:text-orange-500"
            >
              Pricing
            </a>
            <a
              href="#resources"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-gray-600 hover:text-orange-500"
            >
              Resources
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-gray-600 hover:text-orange-500"
            >
              Contact
            </a>
            <div className="pt-2 border-t border-gray-100">
              <button
                type="button"
                onClick={handleLoginClick}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600 cursor-pointer"
              >
                <LogIn size={15} />
                Login
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;