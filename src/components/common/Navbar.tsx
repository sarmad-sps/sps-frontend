import { useState } from "react";
import { Link } from "react-router-dom";
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

  const navItems = [
    { name: "Car", route: "/car" },
    { name: "Bike", route: "/bike" },
    { name: "Health", route: "/health" },
    { name: "Travel", route: "/travel" },
    { name: "Takaful", route: "/takaful" },
    { name: "About Us", route: "/aboutus" },
    { name: "Tracker", route: "/tracker" },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-[999] bg-white shadow-md">
        {/* Top Blue Bar */}
        <nav className={`w-full bg-[#1894a4]`}>
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
                <a
                  href="https://www.facebook.com/share/1MDgfmAxRX/"
                  target="_blank"
                >
                  <Facebook className="w-3 h-3 sm:w-4 sm:h-4 hover:opacity-80" />
                </a>
                <a
                  href="https://www.linkedin.com/company/secure-path-solutions"
                  target="_blank"
                >
                  <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 hover:opacity-80" />
                </a>
                <a
                  href="https://www.instagram.com/securepathsolutions.official/"
                  target="_blank"
                >
                  <Instagram className="w-3 h-3 sm:w-4 sm:h-4 hover:opacity-80" />
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Main White Navbar */}
        <div className="bg-white">
          <div className="px-4 md:px-10 lg:px-10 xl:px-16 w-full">
            <div className="flex items-center justify-between w-full">
              {/* Logo */}
              <Link to="/">
                <div className="flex items-center lg:mx-8 w-[118.7px] h-[70px] xl:mx-0">
                  <img
                    src="/splogo.png"
                    alt="Logo"
                    className="w-[118.7px] h-[70px]"
                  />
                  <img src="/securpathsolution.png" alt="Logo Text" />
                </div>
              </Link>

              {/* Desktop Nav */}
              <div className="hidden md:flex items-center justify-center gap-6 md:pl-14 lg:gap-8 lg:pl-6 w-full">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.route}
                    className="text-gray-800 font-medium hover:text-teal-600 transition-colors py-6 px-2"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Right Side */}
              <div className="flex items-center gap-2 sm:gap-4">
                <a
                  href="tel:03317495785"
                  className="hidden lg:flex items-center gap-3 border-l border-r border-gray-300 px-6"
                >
                  <Phone className="w-5 h-5 text-teal-600" />
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-600">Urgent Call</span>
                    <span className="text-sm font-semibold text-gray-800">
                      03008492075
                    </span>
                  </div>
     <button className="hidden md:block p-2 hover:bg-gray-100 rounded">
  <div className="grid grid-cols-3 gap-2">
    {[...Array(9)].map((_, i) => (
      <div key={i} className="w-1.5 h-1.5 bg-black rounded-full"></div>
    ))}
  </div>
</button>
                </a>

                {/* Mobile Icon */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden p-2 hover:bg-gray-100 rounded"
                >
                  {mobileMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
              <div className="px-4 py-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.route}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-3 px-2 text-gray-800 font-medium hover:text-teal-600 hover:bg-gray-50 rounded"
                  >
                    {item.name}
                  </Link>
                ))}

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <a
                    href="tel:03317495785"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-2 py-4 hover:bg-gray-50 rounded"
                  >
                    <Phone className="w-5 h-5 text-teal-600" />
                    <div>
                      <div className="text-xs text-gray-600">Urgent Call</div>
                      <div className="font-semibold">03317495785</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="mt-[100px]"></div>
    </>
  );
};

export default Navbar;
