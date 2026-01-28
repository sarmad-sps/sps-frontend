import React, { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import toast from "react-hot-toast";
import { submitTrackerForm, type TrackerFormData } from "../../apis/trackerApi";
import form from "../../assets/fromimg.png"
import spslogo from "../../assets/splogo.png"
const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<TrackerFormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof TrackerFormData, string>>
  >({});
  const [loading, setLoading] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof TrackerFormData, string>> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email))
      newErrors.email = "Invalid email address";

    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    else if (!/^\d{10,15}$/.test(formData.phone))
      newErrors.phone = "Phone must be 10-15 digits";

    if (!formData.service) newErrors.service = "Please select a service";

    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.length < 10)
      newErrors.message = "Message must be at least 10 characters";
    else if (formData.message.length > 500)
      newErrors.message = "Message must be less than 500 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    const toastId = toast.loading("Sending message...");
    try {
      await submitTrackerForm(formData);
      toast.success("Message sent successfully!", { id: toastId });
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      setErrors({});
    } catch (err: any) {
      toast.error(err?.message || "Something went wrong.", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="tracker-form"
      className=" relative pt-8 md:pt-10 lg:pt-12 pb-0 bg-[#ffff] text-white overflow-hidden w-full px-4 md:px-10 lg:px-10 2xl:px-18"
    >
      <div className="max-w-8xl mx-auto h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch h-full">
          
          <div className="flex flex-col justify-center">
            {/* Form Box - Background changed to White, text to Dark */}
            <div className="p-5 md:p-7 bg-[#0F2854] text-[#0f121c] rounded-2xl shadow-2xl space-y-6 mb-8 md:mb-10 lg:mb-12">
              <div className="space-y-3">
                <div className="flex items-center justify-left gap-3 mb-4">
                  <img src={spslogo} className="w-9 h-9 sm:w-11 sm:h-11" alt="Logo" />
                  <p className="text-[#1894A4] font-bold text-xs sm:text-sm tracking-widest uppercase">
                    CONTACT US
                  </p>
                </div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-[#ffff]">
                  WE CREATE ONLINE SUCCESS <br />
                  TOGETHER WITH YOU.
                </h1>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      /* Input styles updated for white background */
                      className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#1ca9c9] focus:ring-1 focus:ring-[#1ca9c9]"
                    />
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#1ca9c9] focus:ring-1 focus:ring-[#1ca9c9]"
                    />
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#1ca9c9] focus:ring-1 focus:ring-[#1ca9c9]"
                    />
                  </div>
                  <div className="flex flex-col relative">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 appearance-none focus:outline-none focus:border-[#1ca9c9] focus:ring-1 focus:ring-[#1ca9c9]"
                    >
                      <option value="" disabled>Packages</option>
                      <option value="Track me">Track me</option>
                      <option value="Secure me">Secure me</option>
                      <option value="Fleet minder">Fleet minder</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div className="flex flex-col">
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 resize-none focus:outline-none focus:border-[#1ca9c9] focus:ring-1 focus:ring-[#1ca9c9]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1ca9c9] hover:bg-[#178fa9] text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.98]"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                  {!loading && <ArrowRight className="w-4 h-4" />}
                </button>
              </form>
            </div>
          </div>

          <div className="hidden lg:flex items-end">
            <img
              src={form}
              alt="Contact"
              className="w-full h-full object-contain object-bottom block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;