import React, { useState } from 'react';

interface HeroProps {
  backgroundImage?: string;
  title?: React.ReactNode;
  isCarPage?: boolean;
  isBikePage?: boolean;
  isKafalaPage?: boolean;
  isTrackerPage?: boolean;
  height?: string;
  titleSize?: string;
}

const HeroSection = ({
  backgroundImage = "/Hero.jpg",
  title = "Secure Today, Smile Tomorrow",
  heading="Trusted insurance solutions for a secure and worry-free future.",
  isCarPage = false,
  isBikePage = false,
  isKafalaPage = false,
  isTrackerPage = false,
  height = "h-screen",
  titleSize = "text-5xl md:text-6xl",
}: HeroProps) => {
  const [formData, setFormData] = useState({
    pickup: '',
    dropoff: '',
    carType: '',
    date: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleTrack = () => {
    console.log('Tracking:', formData);
  };

  return (
    <section className={`relative w-full ${isTrackerPage ? 'min-h-screen' : height} overflow-hidden mt-0 pt-0`}>
      {isTrackerPage ? (
        // Tracker Page Layout
        <div className="relative w-full min-h-screen">
          <div className="absolute inset-0">
            <img
              src={backgroundImage}
              alt="Vehicle Tracking"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          <div className="relative z-10 w-full min-h-screen flex items-center px-4 py-16 md:px-6 lg:px-10 xl:px-16 2xl:px-20">
            <div className="w-full flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 items-start md:items-center justify-between">
              
              {/* Left Content */}
              <div className="w-full md:w-1/2 lg:w-[45%] mb-10 ">
                <p className="text-cyan-400 text-sm md:text-base font-medium mb-4">
                  We Make Finding The Right Car Simple
                </p>

                <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  FIND WHAT ARE YOU{' '}
                  <span className="text-cyan-400">LOOKING</span> FOR
                </h1>

                <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed">
                  Lorem ipsum is simply junk text more so dummy text of free available in market the printing and typesetting industry.
                </p>

                <button className="bg-[#1A3970] text-white px-8 md:px-12 py-3 md:py-4 rounded font-semibold hover:bg-[#132B55] transition-colors text-base md:text-lg">
                  Free Consulting &gt;&gt;
                </button>
              </div>

              {/* Right Form */}
              <div className="w-full md:w-1/2 lg:w-[40%] flex justify-center md:justify-end">
                <div className="bg-white rounded-lg shadow-2xl overflow-hidden w-full max-w-md md:max-w-lg">
                  <div className="bg-[#1A3970] text-white text-center py-3 md:py-4">
                    <h2 className="text-lg md:text-xl font-bold">
                      TRACK YOUR VEHICLE
                    </h2>
                  </div>

                  <div className="p-5 md:p-6 space-y-4">
                    {/* Pickup Location */}
                    <div>
                      <label className="flex items-center text-gray-700 text-sm font-medium mb-2">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        Pickup
                      </label>
                      <input
                        type="text"
                        name="pickup"
                        placeholder="Enter a Location"
                        value={formData.pickup}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1A3970] focus:border-transparent text-sm"
                      />
                    </div>

                    {/* Drop off Location */}
                    <div>
                      <label className="flex items-center text-gray-700 text-sm font-medium mb-2">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        Drop of
                      </label>
                      <input
                        type="text"
                        name="dropoff"
                        placeholder="Enter a Location"
                        value={formData.dropoff}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1A3970] focus:border-transparent text-sm"
                      />
                    </div>

                    {/* Car Type */}
                    <div>
                      <label className="flex items-center text-gray-700 text-sm font-medium mb-2">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                          <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                        </svg>
                        Your car type
                      </label>
                      <input
                        type="text"
                        name="carType"
                        placeholder="Your Car Type"
                        value={formData.carType}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1A3970] focus:border-transparent text-sm"
                      />
                    </div>

                    {/* Date */}
                    <div>
                      <label className="flex items-center text-gray-700 text-sm font-medium mb-2">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        Date
                      </label>
                      <input
                        type="text"
                        name="date"
                        placeholder="mm/dd/yyy"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1A3970] focus:border-transparent text-sm"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      onClick={handleTrack}
                      className="w-full bg-[#1A3970] text-white py-2.5 md:py-3 rounded-md font-semibold hover:bg-[#132B55] transition-colors flex items-center justify-center gap-2 text-sm md:text-base"
                    >
                      Track Now
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      ) : isKafalaPage ? (
        // Kafala Insurance Layout
        <div className="relative w-full h-full">
          <div className="absolute inset-0 top-0">
            <img
              src={backgroundImage}
              alt="Kafala Insurance Business Meeting"
              className="w-full h-full object-cover"
              style={{ objectPosition: "right center" }}
            />
          </div>

          <div className="absolute inset-0 top-0 bg-gradient-to-r from-[#1A3970] via-[#1A3970]/95 to-transparent w-3/5 xl:w-1/2"></div>

          <div className="relative z-10 h-full flex flex-col justify-center w-full px-4 md:px-6 lg:px-10 xl:px-16 2xl:px-20">
            <h1 className={`text-white ${titleSize} font-bold leading-tight`}>
              {title}
            </h1>
            <p className="text-white/90 text-lg md:text-xl mt-4 leading-relaxed text-left">
              Comprehensive protection for your employees and domestic workers
            </p>
          </div>
        </div>
      ) : isCarPage ? (
        // Car Insurance Split Layout
        <div className="relative w-full h-full">
          <div className="absolute inset-0 top-0">
            <img
              src={backgroundImage}
              alt="Car insurance family"
              className="w-full h-full object-cover"
              style={{ objectPosition: "8% center" }}
            />
          </div>

          <div className="absolute inset-0 top-0 bg-gradient-to-r from-white via-white/90 to-transparent w-2/5 xl:w-1/2.5"></div>

          <div className="relative z-10 h-full flex items-center w-full px-4 md:px-6 lg:px-10 xl:px-16 2xl:px-20">
            <h1 className={`text-[#002244] ${titleSize} md:leading-tight font-bold`}>
              {title}
            </h1>
          </div>
        </div>
      ) : isBikePage ? (
        // Bike Insurance Split Layout
        <div className="relative w-full h-full">
          <div className="absolute inset-0 top-0">
            <img
              src={backgroundImage}
              alt="Bike insurance"
              className="w-full h-full object-cover"
              style={{ objectPosition: "30% center" }}
            />
          </div>

          <div className="absolute inset-0 top-0 bg-gradient-to-r from-white via-white/90 to-transparent w-2/5 xl:w-1/2.5"></div>

          <div className="relative z-10 h-full flex items-center w-full px-4 md:px-6 lg:px-10 xl:px-16 2xl:px-20">
            <h1 className={`text-[#002244] ${titleSize} md:leading-tight font-bold`}>
              {title}
            </h1>
          </div>
        </div>
      ) : (
        // Home Page Layout
        <div className="relative w-full h-full">
          <div className="absolute inset-0 top-0">
            <img
              src={backgroundImage}
              alt="Business consultation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 top-0 bg-black/50"></div>
          </div>

          <div className="relative z-10 w-full h-full flex items-center px-4 md:px-6 lg:px-10 xl:px-16 2xl:px-20">
            <div className="w-full">
              <h1 className="text-white text-4xl  font-bold leading-tight mb-4">
                {title}
              </h1>
              <p className="text-white text-lg md:text-xl">{heading}</p>

              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-8 bg-white"></div>
                <p className="text-white text-lg md:text-xl font-medium">
                  25+ Years Of Experience In Consulting Services
                </p>
              </div>

              <button className="bg-[#1A3970] text-white px-4 md:px-10 lg:px-10 xl:px-16 2xl:px-20 py-3 rounded font-semibold hover:bg-[#132B55] transition-colors mb-8">
                Free Consulting
              </button>

              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <div className="w-12 h-12 rounded-full bg-blue-500 border-2 border-white overflow-hidden">
                    <img
                      src="/HeroImage1.png"
                      alt="Client"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-purple-500 border-2 border-white overflow-hidden">
                    <img
                      src="/HeroImage1.png"
                      alt="Client"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-pink-500 border-2 border-white overflow-hidden">
                    <img
                      src="/HeroImage1.png"
                      alt="Client"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-teal-500 border-2 border-white overflow-hidden">
                    <img
                      src="/HeroImage1.png"
                      alt="Client"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="text-white">
                  <p className="font-bold text-lg">+12k Testimonials</p>
                  <p className="text-sm text-gray-300">Client feedback</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;