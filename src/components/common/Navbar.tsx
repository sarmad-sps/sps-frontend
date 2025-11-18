import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
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

  const navItems = [
    { name: "Car", hasDropdown: false, route: "/car" },
    { name: "Bike", hasDropdown: false, route: "/bike" },
    { name: "Health", hasDropdown: false, route: "/health" },
    { name: "Travel", hasDropdown: false, route: "/travel" },
    { name: "Takaful", hasDropdown: false, route: "/takaful" },
    { name: "About Us", hasDropdown: false, route: "/aboutus" },
  ];

  return (
    <nav className="w-full sm:h-[110px] bg-[#1894a4]">
      {/* Top Bar */}
      <div className="text-white px-4 sm:px-4 py-2 sm:py-3">
        <div className="flex items-center justify-between text-xs sm:text-sm lg:pl-8 w-full">
          <div className="flex-1 flex gap-2 sm:gap-6 min-w-0">
            <div className="flex items-center gap-1 sm:gap-2 min-w-0">
              <Mail className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 flex-shrink-0" />
              <span className="truncate">Email Us: contact@securepathsolution.com</span>
            </div>

            <div className="hidden md:flex items-center gap-1 sm:gap-2">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 flex-shrink-0" />
              <span className="whitespace-nowrap">
                Working Hours: Monday - Saturday, 09 am - 06 pm
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-2 sm:gap-3 flex-shrink-0 ml-2">
            <a href="https://www.facebook.com/share/1MDgfmAxRX/" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-3 h-3 sm:w-4 sm:h-4 cursor-pointer hover:opacity-80" />
            </a>
            <a href="https://www.linkedin.com/company/secure-path-solutions" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 cursor-pointer hover:opacity-80" />
            </a>
            <a href="https://www.instagram.com/securepathsolutions.official/" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-3 h-3 sm:w-4 sm:h-4 cursor-pointer hover:opacity-80" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white shadow-md">
        <div className="px-4 md:px-10 lg:px-10 xl:px-16 2xl:px-18 w-full">
          <div className="flex items-center justify-between w-full">

            {/* LOGO */}
            <Link to="/">
              <div className="flex items-center lg:mx-8 w-[118.7px] h-[70px] xl:mx-0">
                <img src="/splogo.png" alt="Logo" className="w-[118.7px] h-[70px]" />
                <img src="/securpathsolution.png" alt="Logo Text" />
              </div>
            </Link>

            {/* Desktop Nav Items */}
            <div className="hidden md:flex items-center gap-4 md:pl-10 lg:gap-12 lg:pl-0">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.route}
                    className="flex items-center gap-1 text-gray-800 font-medium hover:text-teal-600 transition-colors py-2"
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>

            {/* Right Side Contact + Icons */}
            <div className="flex items-center gap-2 sm:gap-4">

              {/* DESKTOP CALL (CLICK TO DIAL) */}
              <a href="tel:03317495785" className="hidden lg:block">
                <div className="flex items-center gap-3 border-l border-r border-gray-300 px-4 cursor-pointer">
                  <Phone className="w-4 h-4 lg:w-5 lg:h-5 text-teal-600" />
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-600">Urgent Call</span>
                    <span className="text-sm font-semibold text-gray-800">03317495785</span>
                  </div>
                </div>
              </a>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                ) : (
                  <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg left-0 right-0 z-50 max-h-screen overflow-y-auto absolute">
              <div className="px-4 py-4 w-full">
                {navItems.map((item) => (
                  <div key={item.name} className="py-2 border-b border-gray-100 last:border-b-0">
                    <Link
                      to={item.route}
                      className="flex items-center justify-between w-full text-gray-800 font-medium hover:text-teal-600 py-3 px-2 hover:bg-gray-50 rounded text-sm sm:text-base"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </div>
                ))}

                {/* MOBILE CALL (CLICK TO DIAL) */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <a href="tel:03317495785" onClick={() => setMobileMenuOpen(false)}>
                    <div className="flex items-center gap-3 px-2 py-3 hover:bg-gray-50 rounded cursor-pointer">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600" />
                      <div className="flex flex-col">
                        <span className="text-xs text-gray-600">Urgent Call</span>
                        <span className="text-sm font-semibold text-gray-800">03317495785</span>
                      </div>
                    </div>
                  </a>
                </div>

              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
