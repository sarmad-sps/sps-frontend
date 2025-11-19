import React from "react";
import {
  Facebook,
  Linkedin,
  Instagram,
  MapPin,
  ChevronRight,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const services = [
    { name: "Car Insurance", route: "/car" },
    { name: "Health Insurance", route: "/health" },
    { name: "Bike Insurance", route: "/bike" },
    { name: "Travel Insurance", route: "/travel" },
    { name: "IT Consulting", route: "/it-consulting" },
    { name: "Takaful", route: "/takaful" },
  ];

  const footerLinks = [
    { name: "Home", route: "/" },
    { name: "About", route: "/aboutus" },
    { name: "Services", route: "#services" },
    { name: "Team", route: "#team" },
    // { name: "Pages", route: "/pages" },
    // { name: "News", route: "/news" },
    { name: "Contact", route: "/contactus" },
  ];

  const location = useLocation();
  const navigate = useNavigate();

  // Helper for smooth scroll after navigation
  React.useEffect(() => {
    const hash = sessionStorage.getItem("scrollToSection");
    if (hash && location.pathname === "/") {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
        sessionStorage.removeItem("scrollToSection");
      }, 200); // Wait for page to render
    }
  }, [location]);

  return (
    <footer className="w-full">
      {/* Top CTA Section */}
      <div className="bg-[#1894a4] py-10">
        <div className="px-4 md:px-10 lg:px-10 xl:px-16 2xl:px-18">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <h3 className="text-2xl md:text-4xl font-bold text-white">
              Get Free Consultations! We're
              <span className="block">Ready to Work Together</span>
            </h3>
            <button className="bg-white text-[#1894a4] px-4 md:px-10 lg:px-10 xl:px-16 2xl:px-18 py-3 rounded font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
              Get Free Consultations ≫
            </button>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-[#1a1a1a] py-8">
        <div className="px-4 md:px-10 lg:px-10 xl:px-16 2xl:px-18">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-bold text-white mb-2">
                Subscribe Our Newsletter to Get More
                <span className="block">Updates</span>
              </h4>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto items-center">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="px-3 py-2 rounded bg-[#3a3a3a] text-white placeholder-gray-500 border border-gray-600 focus:outline-none focus:border-[#1894a4] flex-1 md:w-80"
              />
              <button
                className="bg-[#1894a4] text-white px-4 md:px-10 lg:px-10 xl:px-16 2xl:px-18 py-2 
               md:py-3 rounded font-semibold hover:bg-[#157a87] transition-colors whitespace-nowrap flex-shrink-0"
              >
                Subscribe Now ≫
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-[#0f0f0f] py-12">
        <div className="px-4 md:px-10 lg:px-10 xl:px-16 2xl:px-18">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Company Column */}
            <div>
              <h4 className="text-xl font-bold text-white mb-4">
                About Company
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Sed ut perspiciatis unde omnis natus error sit voluptatem
                santium doloremque laudan totam sequa sunt quasi architecto
                beatae vitae
              </p>

              {/* Social Icons */}
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/share/1MDgfmAxRX/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#2a2a2a] rounded flex items-center justify-center hover:bg-[#1894a4] transition-colors"
                >
                  <Facebook className="w-5 h-5 text-white" />
                </a>

                <a
                  href="https://www.linkedin.com/company/secure-path-solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#2a2a2a] rounded flex items-center justify-center hover:bg-[#1894a4] transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>

                <a
                  href="https://www.instagram.com/securepathsolutions.official/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#2a2a2a] rounded flex items-center justify-center hover:bg-[#1894a4] transition-colors"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h4 className="text-xl font-bold text-white mb-4">Services</h4>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      to={service.route}
                      className="text-gray-400 text-sm hover:text-[#1894a4] transition-colors flex items-center gap-2"
                    >
                      <ChevronRight className="w-4 h-4" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Main Office Column */}
            <div>
              <h4 className="text-xl font-bold text-white mb-4">Main Office</h4>
              <div className="flex gap-3 mb-6">
                <MapPin className="w-5 h-5 text-[#1894a4] flex-shrink-0 mt-1" />
                <p className="text-gray-400 text-sm">
                  Office#2, 2nd Floor 12-A Muslim Town Morr, Wahdat Road Lahore.
                </p>
              </div>

              <h4 className="text-xl font-bold text-white mb-4 mt-8">
                Branch Office
              </h4>
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-[#1894a4] flex-shrink-0 mt-1" />
                <p className="text-gray-400 text-sm">
                  Office#2, 2nd Floor 12-A Muslim Town Morr, Wahdat Road Lahore.
                </p>
              </div>
            </div>

            {/* Logo and Contact Column */}
            <div>
              <Link to="/">
                <div className="flex items-center w-[118.7px] h-[70px]">
                  <img
                    src="/splogo.png"
                    alt="Logo"
                    className="w-[118.7px] h-[70px] filter brightness-0 invert"
                  />
                  <img
                    src="/securpathsolution.png"
                    alt="Logo Text"
                    className="filter brightness-0 invert"
                  />
                </div>
              </Link>

              <div className="mb-6 mt-4">
                <h5 className="text-white font-semibold mb-2">Email Address</h5>
                <a
                  href="mailto:office@example.com"
                  className="text-gray-400 text-sm hover:text-[#1894a4] transition-colors"
                >
                  contact@securepathsolutions.com
                </a>
              </div>

              <p className="text-gray-500 text-xs">
                Copyright 2025 Frmlux. All Rights reserved by Raye Themes
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#0f0f0f] py-4">
        <div className="px-4 md:px-10 lg:px-10 xl:px-16 2xl:px-18">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Footer Links */}
            <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm">
              {/* {footerLinks.map((link, index) => (
                <React.Fragment key={link}>
                  <a href="#" className="hover:text-[#1894a4] transition-colors">
                    {link}
                  </a>
                  {index < footerLinks.length - 1 && <span>•</span>}
                </React.Fragment>
              ))} */}
              {footerLinks.map((link, index) => (
                <React.Fragment key={link.name}>
                  {link.route.startsWith("#") ? (
                    <a
                      href={link.route}
                      className="hover:text-[#1894a4] transition-colors cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        const section = link.route.replace("#", "");
                        if (location.pathname === "/") {
                          const el = document.getElementById(section);
                          if (el) {
                            el.scrollIntoView({ behavior: "smooth" });
                          }
                        } else {
                          sessionStorage.setItem("scrollToSection", section);
                          navigate("/");
                        }
                      }}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.route}
                      className="hover:text-[#1894a4] transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                  {index < footerLinks.length - 1 && <span>•</span>}
                </React.Fragment>
              ))}
            </div>

            {/* Global Partners */}
            <div className="text-gray-500 text-sm">
              <span className="font-bold text-white">25537B+</span> Global
              Partners
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
