import React, { useState } from "react";
import { submitContactForm, type ContactFormData } from "../../apis/contactApi";

export default function ContactUsSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (errors[name as keyof ContactFormData]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validate = (): boolean => {
    let newErrors: Partial<ContactFormData> = {};

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMsg("");
    if (!validate()) return;

    setLoading(true);
    try {
      const res = await submitContactForm(formData);
      setSuccessMsg(res.message || "Message sent successfully 🎉");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    } catch (err: any) {
      setSuccessMsg(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field: keyof ContactFormData) =>
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
            <form onSubmit={handleSubmit}>
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
                  type="submit"
                  disabled={loading}
                  className="bg-[#1A3970] hover:bg-[#1894a4] text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {loading ? "Sending..." : "SEND MESSAGE"}
                </button>
              </div>

              {successMsg && <p className="mt-4 text-center text-green-600">{successMsg}</p>}
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
