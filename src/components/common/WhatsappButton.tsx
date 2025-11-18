// src/components/WhatsAppButton.tsx
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton: React.FC = () => {
  const phoneNumber = "923296394505";

  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp className="text-white text-4xl" />

      {/* Pulse animation – attractive lagta hai */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
    </a>
  );
};

export default WhatsAppButton;