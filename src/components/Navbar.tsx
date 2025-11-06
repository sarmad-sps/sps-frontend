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
    // { name: "Rent", hasDropdown: false, route: "/rent" },
    { name: "Kafala", hasDropdown: false, route: "/kafala" },
    { name: "About Us", hasDropdown: false, route: "/aboutus" },
    // { name: "Contact Us", hasDropdown: false, route: "/contactus" },
  ];

  return (
    <nav className="w-full h-[110px] bg-[#1894a4]">
      {/* Top Bar */}
      <div className=" text-white px-4 py-3 ">
        <div className="max-w-7xl flex flex-wrap items-center justify-between text-sm lg:pl-8">
          <div className="flex  gap-6">
            <div className="flex  gap-2">
              <span className="text-xs">
                <Mail className="w-5 h-5" />
              </span>
              <span>Email Us: contact@securepathsolution.com</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <span className="text-xs">
                <Clock className="w-5 h-5" />
              </span>
              <span>Working Hours: Monday - Satursday, 09 am - 06 pm</span>
            </div>
          </div>
          <div className="flex gap-3 ">
            <a
              href="https://www.facebook.com/share/1MDgfmAxRX/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="w-4 h-4 cursor-pointer hover:opacity-80" />
            </a>
            <a
              href="https://www.linkedin.com/company/secure-path-solutions"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-4 w-4 cursor-pointer hover:opacity-80" />
            </a>
            <a
              href="https://www.instagram.com/securepathsolutions.official/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-4 h-4 cursor-pointer hover:opacity-80" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white shadow-md  ">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/">
              <div className="flex items-center lg:mx-8  w-[118.7px] h-[70px] xl:mx-0">
                <img
                  src="/splogo.png"
                  alt="Logo"
                  className="w-[118.7px] h-[70px]"
                />
                <img
                  src="/securpathsolution.png"
                  alt="Logo Text"
                  className=""
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4 md:pl-10 lg:gap-12 lg:pl-0">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.hasDropdown ? (
                    <button className="flex items-center gap-1 text-gray-800 font-medium hover:text-teal-600 transition-colors py-2">
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  ) : (
                    <Link
                      to={item.route}
                      className="flex items-center gap-1 text-gray-800 font-medium hover:text-teal-600 transition-colors py-2"
                    >
                      <span>{item.name}</span>
                    </Link>
                  )}
                  {item.hasDropdown && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-2 mx-auto">
                        <Link
                          to={item.route}
                          className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600"
                        >
                          {item.name} Insurance
                        </Link>
                        <a
                          href="#"
                          className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600"
                        >
                          Option 2
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600"
                        >
                          Option 3
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side - Contact & Menu */}
            <Link to="/contactus">
              <div className="flex items-center gap-4">
                {/* Urgent Call */}
                <div className="hidden md:flex items-center gap-3 border-l border-r border-gray-300 px-4">
                  <Phone className="w-5 h-5 text-teal-600" />
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-600">Urgent Call</span>
                    <span className="text-sm font-semibold text-gray-800">
                      03317495785
                    </span>
                  </div>
                </div>

                {/* Grid Menu Icon */}
                <button className="hidden md:block p-2 hover:bg-gray-100 rounded">
                  <div className="grid grid-cols-3 gap-1">
                    {[...Array(9)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1.5 h-1.5 bg-gray-700 rounded-sm"
                      ></div>
                    ))}
                  </div>
                </button>

                {/* Mobile Menu Toggle */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden p-2 hover:bg-gray-100 rounded"
                >
                  {mobileMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </button>
              </div>
            </Link>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200 shadow-lg absolute left-0 right-0 z-50">
              <div className="max-w-7xl mx-auto px-4 py-4">
                {navItems.map((item) => (
                  <div
                    key={item.name}
                    className="py-2 border-b border-gray-100 last:border-b-0"
                  >
                    <Link
                      to={item.route}
                      className="flex items-center justify-between w-full text-gray-800 font-medium hover:text-teal-600 py-2 px-2 hover:bg-gray-50 rounded"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span>{item.name}</span>
                      {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                    </Link>
                  </div>
                ))}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-3 px-2">
                    <Phone className="w-5 h-5 text-teal-600" />
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-600">Urgent Call</span>
                      <span className="text-sm font-semibold text-gray-800">
                        +296 358 700 88
                      </span>
                    </div>
                  </div>
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
