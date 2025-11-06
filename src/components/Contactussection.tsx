import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactUsSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  return (
    <section className="w-full relative py-16 md:py-20 overflow-hidden bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gray-600 text-sm md:text-base font-semibold mb-3">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="text-[#1894a4]">We Alway Ready</span>{" "}
            <span className="text-black">To Help Your</span>
          </h2>
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-10">
            {/* Top Row - 3 inputs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#1894a4] transition-colors text-gray-700 placeholder-gray-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#1894a4] transition-colors text-gray-700 placeholder-gray-400"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject (Optional)"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#1894a4] transition-colors text-gray-700 placeholder-gray-400"
              />
            </div>

            {/* Message Textarea */}
            <div className="mb-6">
              <textarea
                name="message"
                placeholder="Write your message here"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#1894a4] transition-colors text-gray-700 placeholder-gray-400 resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                onClick={handleSubmit}
                className="bg-[#1A3970] hover:bg-[#1894a4] text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                SEND MESSAGE
              </button>
            </div>
          </div>
        </div>

        {/* Office Info Card */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className="bg-[#1A3970] rounded-lg shadow-xl p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
              {/* Left Side - Address */}
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  <span className="font-normal">Lahore,</span> Pakistan
                </h3>
                <p className="text-gray-300 text-sm mb-6">
                  Wahdat Road, Muslim Town, Lahore, Pakistan
                </p>
                <div className="mb-4">
                  <p className="text-gray-300 text-sm">Email: info@finco.com</p>
                </div>
                <div className="w-16 h-1 bg-white"></div>
              </div>

              {/* Right Side - Contact Details */}
              <div className="space-y-6">
                {/* Call Directly */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">
                    CALL DIRECTLY:
                  </h4>
                  <p className="text-2xl font-bold">+1 212-226-3126</p>
                </div>

                {/* Brand Office */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">
                    Brand Office:
                  </h4>
                  <p className="text-sm text-gray-300">
                    Allention 69 | Atlanta, GA | Chicago, IL | Dallas, TX
                    <br />
                    Miami, FL | Houston, TX
                  </p>
                </div>

                {/* Work Hours */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">
                    Work Hours:
                  </h4>
                  <p className="text-sm text-gray-300">
                    Mon - Sat: 8:00 - 17:00, Sunday closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="max-w-6xl mx-auto">
          <div className="rounded-lg overflow-hidden shadow-xl h-[450px]">
            <iframe
              src="https://maps.google.com/maps?q=31.520362854003906,74.32260131835938&z=17&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
