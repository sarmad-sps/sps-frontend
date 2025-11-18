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

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name as keyof FormData]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validate = (): boolean => {
    let newErrors: Partial<FormData> = {};

    const nameTrimmed = formData.name.trim();
    if (!nameTrimmed) newErrors.name = "Name is required.";
    else if (nameTrimmed.length < 2) newErrors.name = "Name must be at least 2 characters.";
    else if (nameTrimmed.length > 50) newErrors.name = "Name cannot exceed 50 characters.";

    const emailTrimmed = formData.email.trim();
    if (!emailTrimmed) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(emailTrimmed)) newErrors.email = "Enter a valid email address.";

    const subjectTrimmed = formData.subject.trim();
    if (subjectTrimmed && subjectTrimmed.length > 100) newErrors.subject = "Subject cannot exceed 100 characters.";

    const messageTrimmed = formData.message.trim();
    if (!messageTrimmed) newErrors.message = "Message is required.";
    else if (messageTrimmed.length < 10) newErrors.message = "Message must be at least 10 characters.";
    else if (messageTrimmed.length > 1000) newErrors.message = "Message cannot exceed 1000 characters.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    console.log("Form submitted:", formData);
    alert("Message Sent Successfully 🎉");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setErrors({});
  };

  const inputClass = (field: keyof FormData) =>
    `w-full py-3 px-4 border ${
      errors[field] ? "border-red-500" : "border-gray-200"
    } rounded-lg focus:outline-none focus:border-[#1894a4] transition-colors text-gray-700 placeholder-gray-400`;

  return (
    <section className="w-full relative py-16 md:py-20 overflow-hidden bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="relative z-10 w-full px-4 md:px-10 lg:px-10 xl:px-16 2xl:px-18">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gray-600 text-sm md:text-base font-semibold mb-3">Contact</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="text-[#1894a4]">We Always Ready</span>{" "}
            <span className="text-black">To Help You</span>
          </h2>
        </div>

        {/* Contact Form */}
        <div className="w-full mb-12">
          <div className="bg-white rounded-lg shadow-xl p-10">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-2">

              <div className="relative">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClass("name")}
                  maxLength={50}
                />
                <span className="absolute right-3 top-3 text-xs text-gray-400">{formData.name.length}/50</span>
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass("email")}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div className="relative">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject (Optional)"
                  value={formData.subject}
                  onChange={handleChange}
                  className={inputClass("subject")}
                  maxLength={100}
                />
                {formData.subject && <span className="absolute right-3 top-3 text-xs text-gray-400">{formData.subject.length}/100</span>}
                {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
              </div>
            </div>

            <div className="mb-6 relative">
              <textarea
                name="message"
                placeholder="Write your message here *"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className={`${inputClass("message")} resize-none pr-16`}
                maxLength={1000}
              />
              <div className="absolute bottom-2 right-3 text-xs text-gray-500">{formData.message.length}/1000</div>
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>

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
        <div className="w-full mb-12">
          <div className="bg-[#1A3970] rounded-lg shadow-xl p-10 text-white">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              <div>
                <h3 className="text-2xl font-bold mb-4">
                  <span className="font-normal">Lahore,</span> Pakistan
                </h3>
                <p className="text-gray-300 text-sm mb-6">
                  Wahdat Road, Muslim Town, Lahore, Pakistan
                </p>
                <p className="text-gray-300 text-sm mb-4">Email: info@finco.com</p>
                <div className="w-16 h-1 bg-white"></div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">CALL DIRECTLY:</h4>
                  <p className="text-2xl font-bold">+1 212-226-3126</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Brand Office:</h4>
                  <p className="text-sm text-gray-300">
                    Allention 69 | Atlanta, GA | Chicago, IL | Dallas, TX <br />
                    Miami, FL | Houston, TX
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Work Hours:</h4>
                  <p className="text-sm text-gray-300">Mon - Sat: 8:00 - 17:00, Sunday closed</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Map */}
        <div className="w-full mb-12">
          <div className="rounded-lg overflow-hidden shadow-xl h-[450px]">
            <iframe
              src="https://maps.google.com/maps?q=31.520362854003906,74.32260131835938&z=17&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
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
