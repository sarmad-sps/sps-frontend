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
            <Link to="/contactus">
              <button className="relative bg-white text-[#1e3a8a] px-4 md:px-10 lg:px-10 xl:px-16 2xl:px-18 py-3 rounded font-semibold overflow-hidden group transition-all duration-300 shadow-md hover:shadow-2xl hover:scale-105 cursor-pointer">
                {/* Text + Arrow */}
                <span className="relative z-10 flex items-center gap-2">
                  Get Free Consultations
                  <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-2 animate-bounce">
                    ≫
                  </span>
                </span>

                {/* Gradient neon glow */}
                <span className="absolute inset-0 bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#9333ea] opacity-0 rounded transition-opacity duration-500 group-hover:opacity-40 animate-pulse blur-lg"></span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-[#0f0f0f] py-12">
        <div className="px-4 md:px-10 lg:px-10 xl:px-16 2xl:px-18">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Company Column */}
            <div className="text-center sm:text-left">
              <h4 className="text-xl font-bold text-white mb-4">
                About Company
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                We are a trusted insurance aggregator dedicated to helping
                individuals and businesses find the right insurance solutions
                with ease and confidence. Our mission is to simplify insurance
                by making it more accessible, understandable, and stress-free
                for everyone.
              </p>

              {/* Social Icons */}
              <div className="flex gap-3 justify-center sm:justify-start">
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
            <div className="flex mx-auto  ">
              <div className=" text-left  w-[160px] sm:w-[400px] ">
                <h4 className="text-xl font-bold text-white mb-4">Services</h4>
                <ul className="space-y-2 inline-block sm:block">
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
              <div className="flex flex-col  w-[175px] sm:hidden">
                <div className="flex items-center gap-2 mt-1">
                  <MapPin className="w-5 h-5 text-[#1894a4] flex-shrink-0" />
                  <h4 className="text-xl font-bold text-white">Main Office</h4>
                </div>
                <p className="text-gray-400 text-sm mb-6">
                  Office#2, 2nd Floor 12-A Muslim Town Morr, Wahdat Road Lahore.
                </p>

                <div className="flex items-center gap-2 ">
                  <MapPin className="w-5 h-5 text-[#1894a4] flex-shrink-0" />
                  <h4 className="text-xl font-bold text-white">
                    Branch Office
                  </h4>
                </div>
                <p className="text-gray-400 text-sm">
                  Office#2, 2nd Floor 12-A Muslim Town Morr, Wahdat Road Lahore.
                </p>
              </div>
            </div>

            {/* Main Office Column */}
            <div className="hidden sm:flex flex-col text-left">
              <h4 className="text-xl font-bold text-white mb-4">Main Office</h4>
              <div className="flex gap-3 mb-6 justify-center sm:justify-start items-start">
                <MapPin className="w-5 h-5 text-[#1894a4] flex-shrink-0 " />
                <p className="text-gray-400 text-sm text-left">
                  Office#2, 2nd Floor 12-A Muslim Town Morr, Wahdat Road Lahore.
                </p>
              </div>

              <h4 className="text-xl font-bold text-white mb-4 ">
                Branch Office
              </h4>
              <div className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-[#1894a4] flex-shrink-0 mt-1" />
                <p className="text-gray-400 text-sm">
                  Office#2, 2nd Floor 12-A Muslim Town Morr, Wahdat Road Lahore.
                </p>
              </div>
            </div>

            {/* Logo and Contact Column */}
            <div className="text-center  sm:text-left">
              <Link to="/">
                <div className="flex items-center w-[200px] h-[70px] mx-auto pr-16  sm:mx-0 ">
                  <img
                    src="/splogo.png"
                    alt="Logo"
                    className="w-[118.7px] h-[70px] filter brightness-0 invert "
                  />
                  <img
                    src="/securpathsolution.png"
                    alt="Logo Text"
                    className=" filter brightness-0 invert"
                  />
                </div>
              </Link>

              <div className="mb-6 mt-4">
                <h5 className="text-white font-semibold mb-2">Email Address</h5>
                <a
                  href="mailto:contact@securepathsolutions.com"
                  className="text-gray-400 text-sm hover:text-[#1894a4] transition-colors"
                >
                  contact@securepathsolution.com
                </a>
              </div>

              <p className="text-gray-500 text-xs">
                © 2025 Secure Path Solutions. All Rights Reserved.


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
            {/* <div className="text-gray-500 text-sm">
              <span className="font-bold text-white">25537B+</span> Global
              Partners
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
