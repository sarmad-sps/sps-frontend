
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  Phone,
  Menu,
  X,
  Facebook,
  Linkedin,
  Instagram,
  Mail,
  Clock,
} from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Car", route: "/car" },
    { name: "Bike", route: "/bike" },
    { name: "Health", route: "/health" },
    { name: "Travel", route: "/travel" },
    { name: "Takaful", route: "/takaful" },
    { name: "Tracker", route: "/tracker" },
    { name: "About Us", route: "/aboutus" },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-[999] bg-white shadow-md">
        {/* Top Blue Bar */}
        <nav className="w-full bg-gradient-to-r from-[#1a3a5c] to-[#1f7b85] animate-gradient-shift">
          <div className="text-white px-4 sm:px-4 py-2 sm:py-3">
            <div className="flex items-center justify-between text-xs sm:text-sm lg:pl-8 w-full">
              <div className="flex-1 flex gap-2 sm:gap-6 min-w-0">
                <div className="flex items-center gap-1 sm:gap-2 min-w-0">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="truncate">
                    Email Us: contact@securepathsolution.com
                  </span>
                </div>

                <div className="hidden md:flex items-center gap-1 sm:gap-2">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="whitespace-nowrap">
                    Working Hours: Monday - Saturday, 09 am - 06 pm
                  </span>
                </div>
              </div>

              <div className="flex gap-2 sm:gap-3 flex-shrink-0 ml-2">
                <a href="https://www.facebook.com/share/1MDgfmAxRX/" target="_blank" rel="noreferrer">
                  <Facebook className="w-3 h-3 sm:w-4 sm:h-4 hover:scale-110 transition-transform" />
                </a>
                <a href="https://www.linkedin.com/company/secure-path-solutions" target="_blank" rel="noreferrer">
                  <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 hover:scale-110 transition-transform" />
                </a>
                <a href="https://www.instagram.com/securepathsolutions.official/" target="_blank" rel="noreferrer">
                  <Instagram className="w-3 h-3 sm:w-4 sm:h-4 hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Main White Navbar */}
        <div className="bg-white">
          <div className="px-4 md:px-6 lg:px-10 xl:px-16 w-full">
            <div className="flex items-center justify-between w-full">
              {/* Logo - Fixed as per your original size */}
                <Link to="/">
                 <div className="flex items-center w-[170px] h-[70px] mx-auto pr-16  sm:mx-0 ">
                  <img
                    src="/splogo.png"
                    alt="Logo"
                    className="w-[118.7px] h-[70px]"
                  />
                  <img
                    src="/securpathsolution.png"
                    alt="Logo Text"
                 
                  />
                </div>
              </Link>
                
             

              {/* Desktop Nav - With Zinc Hover & Underline */}
            <div className="hidden md:flex items-center justify-center gap-1 md:gap-2 lg:gap-4 w-full  md:mx-auto">
  {navItems.map((item) => {
    const isActive = location.pathname === item.route;
    return (
      <Link
        key={item.name}
        to={item.route}
        className={`relative font-medium transition-all duration-300 py-6 px-2 group ${
          isActive ? "text-[#1f7b85]" : "text-gray-800 hover:text-[#1f7b85]"
        }`}
      >
        {item.name}
        <span
          className={`absolute bottom-5 left-0 h-0.5 bg-[#1f7b85] transition-all duration-300 ease-in-out ${
            isActive ? "w-full" : "w-0 group-hover:w-full"
          }`}
        ></span>
      </Link>
    );
  })}
</div>


              {/* Right Side */}
              <div className="flex items-center gap-2 sm:gap-4">
                <a
                  href="tel:03008492075"
                  className="hidden lg:flex items-center gap-3 border-l border-r border-gray-300 px-6 hover:bg-gray-50 transition-colors group"
                >
                  <Phone className="w-5 h-5 text-[#1f7b85] group-hover:animate-shake" />
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-600">Urgent Call</span>
                    <span className="text-sm font-semibold text-gray-800">
                      03008492075
                    </span>
                  </div>
                </a>

                {/* Mobile Icon */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-all"
                >
                  {mobileMenuOpen ? (
                    <X className="w-6 h-6 rotate-90 transition-transform" />
                  ) : (
                    <Menu className="w-6 h-6 transition-transform" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu - Slide Down Animation */}
          <div 
            className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-gray-100 ${
              mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.route;
                return (
                  <Link
                    key={item.name}
                    to={item.route}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-3 px-4 font-medium rounded-md transition-all ${
                      isActive 
                        ? "bg-teal-50 text-[#1f7b85] border-l-4 border-[#1f7b85]" 
                        : "text-gray-800 hover:bg-gray-50 hover:text-[#1f7b85]"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* Spacer to avoid content jump */}
      <div className="mt-[110px]"></div>
    </>
  );
};

export default Navbar;