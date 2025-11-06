import React from "react";
import {
  Facebook,

  Linkedin,
  Instagram,
  MapPin,
  ChevronRight,
} from "lucide-react";

import { Link } from "react-router-dom";

const Footer = () => {
  const services = [
    "Business Consulting",
    "Financial Investment",
    "Corporate Business",
    "IT Consulting",
    "Web Strategy",
    "Business Development",
  ];

  const footerLinks = [
    "Home",
    "About",
    "Services",
    "Team",
    "Pages",
    "News",
    "Contact",
  ];

  return (
    <footer className="w-full">
      {/* Top CTA Section */}
      <div className="bg-[#1894a4] py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <h3 className="text-2xl md:text-4xl font-bold text-white">
              Get Free Consultations! We're
              <span className="block">Ready to Work Together</span>
            </h3>
            <button className="bg-white text-[#1894a4] px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
              Get Free Consultations ≫
            </button>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-[#1a1a1a] py-8">
        <div className="max-w-7xl mx-auto px-4">
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
              <button className="bg-[#1894a4] text-white px-4 py-2 md:px-6 md:py-3 rounded font-semibold hover:bg-[#157a87] transition-colors whitespace-nowrap flex-shrink-0">
                Subscribe Now ≫
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-[#0f0f0f] py-12">
        <div className="max-w-7xl mx-auto px-4">
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
                <button className="w-10 h-10 bg-[#2a2a2a] rounded flex items-center justify-center hover:bg-[#1894a4] transition-colors">
                  <Facebook className="w-5 h-5 text-white" />
                </button>
                {/* <button className="w-10 h-10 bg-[#2a2a2a] rounded flex items-center justify-center hover:bg-[#1894a4] transition-colors">
                  <Twitter className="w-5 h-5 text-white" />
                </button> */}
                <button className="w-10 h-10 bg-[#2a2a2a] rounded flex items-center justify-center hover:bg-[#1894a4] transition-colors">
                  <Linkedin className="w-5 h-5 text-white" />
                </button>
                <button className="w-10 h-10 bg-[#2a2a2a] rounded flex items-center justify-center hover:bg-[#1894a4] transition-colors">
                  <Instagram className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h4 className="text-xl font-bold text-white mb-4">Services</h4>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-400 text-sm hover:text-[#1894a4] transition-colors flex items-center gap-2"
                    >
                      <ChevronRight className="w-4 h-4" />
                      {service}
                    </a>
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
                  55 Main Street, 2nd Block 3rd Floor, New York
                </p>
              </div>

              <h4 className="text-xl font-bold text-white mb-4 mt-8">
                Branch Office
              </h4>
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-[#1894a4] flex-shrink-0 mt-1" />
                <p className="text-gray-400 text-sm">
                  55 Main Street, 2nd Block 3rd Floor, New York
                </p>
              </div>
            </div>

            {/* Logo and Contact Column */}
            <div>
              <Link to="/">
              <div className="flex items-center lg:mx-8  w-[118.7px] h-[70px] xl:mx-0">
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

              <div className="mb-6">
                <h5 className="text-white font-semibold mb-2">Email Address</h5>
                <a
                  href="mailto:office@example.com"
                  className="text-gray-400 text-sm hover:text-[#1894a4] transition-colors"
                >
                  office@example.com
                </a>
              </div>

              <p className="text-gray-500 text-xs">
                Copyright 2023 Frmlux. All Rights reserved by Raye Themes
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#0f0f0f] py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Footer Links */}
            <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm">
              {footerLinks.map((link, index) => (
                <React.Fragment key={link}>
                  <a
                    href="#"
                    className="hover:text-[#1894a4] transition-colors"
                  >
                    {link}
                  </a>
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
