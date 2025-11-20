import { useState } from "react";
import { ArrowRight, ChevronDown, Calendar, ChevronLeft, ChevronRight } from "lucide-react";

const TravelFormCard = () => {
  const [selectedTravelType, setSelectedTravelType] = useState("Single Trip");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [formData, setFormData] = useState({
    travelStart: "",
    personalTraining: "",
    travelDates: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showCalendar, setShowCalendar] = useState<{ [key: string]: boolean }>({
    travelStart: false,
    travelDates: false,
  });
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const travelTypes = [
    { id: "single", label: "Single Trip" },
    { id: "multi", label: "Multi Trip" },
    { id: "student", label: "Student" },
  ];

  const countries = ["USA", "UK", "Canada", "Australia", "Germany"];

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  //   setErrors((prev) => ({ ...prev, [name]: "" }));
  // };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!selectedTravelType) newErrors.travelType = "Select travel type";
    if (!selectedCountry) newErrors.country = "Select country";
    if (!formData.travelStart) newErrors.travelStart = "Select start date";
    if (!formData.personalTraining) newErrors.personalTraining = "Enter personal training info";
    if (!formData.travelDates) newErrors.travelDates = "Select travel dates";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    console.log({ travelType: selectedTravelType, country: selectedCountry, ...formData });
    alert("Form submitted successfully!");

    // Reset fields
    setSelectedTravelType("Single Trip");
    setSelectedCountry("");
    setFormData({ travelStart: "", personalTraining: "", travelDates: "" });
    setErrors({});
  };

  // Calendar helpers
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    const days = [];
    for (let i = 0; i < 42; i++) {
      const day = new Date(startDate);
      day.setDate(startDate.getDate() + i);
      days.push(day);
    }
    return days;
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB");
  };

  const handleDateSelect = (field: string, date: Date) => {
    setFormData((prev) => ({ ...prev, [field]: date.toISOString().split("T")[0] }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
    setShowCalendar((prev) => ({ ...prev, [field]: false }));
  };

  // Calendar JSX (reusable)
  const renderCalendar = (field: "travelStart" | "travelDates") => (
    <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10 p-4 w-80">
      <div className="flex items-center justify-between mb-4">
        <button
          type="button"
          onClick={() =>
            setCurrentMonth(
              new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
            )
          }
          className="p-1 hover:bg-gray-100 rounded"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h3 className="text-lg font-semibold">
          {currentMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
        </h3>
        <button
          type="button"
          onClick={() =>
            setCurrentMonth(
              new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
            )
          }
          className="p-1 hover:bg-gray-100 rounded"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 mb-2 text-center text-sm font-medium text-gray-500">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {getDaysInMonth(currentMonth).map((date, i) => {
          const isCurrentMonth = date.getMonth() === currentMonth.getMonth();
          const isSelected = formData[field] === date.toISOString().split("T")[0];
          return (
            <button
              key={i}
              onClick={() => handleDateSelect(field, date)}
              className={`h-8 w-8 text-sm rounded-lg transition-colors ${
                !isCurrentMonth ? "text-gray-300" : "text-gray-700"
              } ${isSelected ? "bg-[#1894a4] text-white" : ""} ${
                isCurrentMonth && !isSelected ? "hover:bg-[#1894a4] hover:text-white" : ""
              }`}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>
      <div className="flex justify-between mt-4">
        <button
          type="button"
          onClick={() => setFormData((prev) => ({ ...prev, [field]: "" }))}
          className="text-[#1894a4] text-sm hover:underline"
        >
          Clear
        </button>
        <button
          type="button"
          onClick={() => handleDateSelect(field, new Date())}
          className="text-[#1894a4] text-sm hover:underline"
        >
          Today
        </button>
      </div>
    </div>
  );

  return (
    <div className="w-full px-4 md:px-10 lg:px-10 xl:px-16 2xl:px-18 py-8">
      <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
        {/* Travel Type */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {travelTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => {
                setSelectedTravelType(type.label);
                setErrors((prev) => ({ ...prev, travelType: "" }));
              }}
              className={`p-4 rounded-lg border-2 text-sm font-semibold transition-all text-center ${
                selectedTravelType === type.label
                  ? "border-[#1A3970] bg-blue-50 text-[#1A3970]"
                  : "border-gray-200 text-gray-700 hover:border-gray-300"
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>
        {errors.travelType && <p className="text-red-500 text-sm mb-3">{errors.travelType}</p>}

        {/* Country */}
        <div className="mb-6 relative">
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Countries traveling to
          </label>
          <div className="relative">
            <select
              value={selectedCountry}
              onChange={(e) => {
                setSelectedCountry(e.target.value);
                setErrors((prev) => ({ ...prev, country: "" }));
              }}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none appearance-none pr-10 ${
                errors.country ? "border-red-500" : "border-gray-300 focus:border-[#1894a4]"
              }`}
            >
              <option value="">Select Country</option>
              {countries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
          {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
        </div>

        {/* Travel Start Date */}
        <div className="mb-6 relative">
          <label className="block text-sm font-bold text-gray-700 mb-2">Start Date</label>
          <div className="relative">
            <input
              type="text"
              readOnly
              value={formatDate(formData.travelStart)}
              onClick={() =>
                setShowCalendar((prev) => ({ ...prev, travelStart: !prev.travelStart }))
              }
              placeholder="DD/MM/YYYY"
              className={`w-full px-4 py-3 pr-10 border rounded-lg focus:outline-none cursor-pointer ${
                errors.travelStart ? "border-red-500" : "border-gray-300 focus:border-[#1894a4]"
              }`}
            />
            <Calendar
              onClick={() =>
                setShowCalendar((prev) => ({ ...prev, travelStart: !prev.travelStart }))
              }
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 cursor-pointer"
            />
          </div>
          {showCalendar.travelStart && renderCalendar("travelStart")}
          {errors.travelStart && <p className="text-red-500 text-sm mt-1">{errors.travelStart}</p>}
        </div>

       {/* Personal Training */}
<div className="mb-6 relative">
  <label className="block text-sm font-bold text-gray-700 mb-2">
    Personal Training
  </label>
  <div className="relative">
    <input
      type="text"
      name="personalTraining"
      value={formData.personalTraining}
      onChange={(e) => {
        // Allow only letters and spaces
        const regex = /^[a-zA-Z\s]*$/;
        if (regex.test(e.target.value)) {
          setFormData((prev) => ({ ...prev, personalTraining: e.target.value }));
          setErrors((prev) => ({ ...prev, personalTraining: "" }));
        }
      }}
      placeholder="Enter training info"
      minLength={3} // minimum 3 characters
      maxLength={30} // maximum 30 characters
      className={`w-full px-4 py-3 border rounded-lg focus:outline-none ${
        errors.personalTraining ? "border-red-500" : "border-gray-300 focus:border-[#1894a4]"
      }`}
    />
  </div>
  {errors.personalTraining && (
    <p className="text-red-500 text-sm mt-1">{errors.personalTraining}</p>
  )}
</div>

        {/* Travel Dates */}
        <div className="mb-6 relative">
          <label className="block text-sm font-bold text-gray-700 mb-2">Travel Dates</label>
          <div className="relative">
            <input
              type="text"
              readOnly
              value={formatDate(formData.travelDates)}
              onClick={() =>
                setShowCalendar((prev) => ({ ...prev, travelDates: !prev.travelDates }))
              }
              placeholder="DD/MM/YYYY"
              className={`w-full px-4 py-3 pr-10 border rounded-lg focus:outline-none cursor-pointer ${
                errors.travelDates ? "border-red-500" : "border-gray-300 focus:border-[#1894a4]"
              }`}
            />
            <Calendar
              onClick={() =>
                setShowCalendar((prev) => ({ ...prev, travelDates: !prev.travelDates }))
              }
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 cursor-pointer"
            />
          </div>
          {showCalendar.travelDates && renderCalendar("travelDates")}
          {errors.travelDates && <p className="text-red-500 text-sm mt-1">{errors.travelDates}</p>}
        </div>

        {/* Submit */}
        <button
          onClick={handleSubmit}
          className="w-full bg-[#1A3970] text-white py-4 rounded-lg font-semibold hover:bg-[#2A4D8F] transition-colors flex items-center justify-center gap-2"
        >
          See Plan
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default TravelFormCard;




