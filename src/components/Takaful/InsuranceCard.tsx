import { useNavigate } from "react-router-dom";
// import { ArrowRight } from "lucide-react";
import card1 from "../../../public/card1.png";
import card2 from "../../../public/card2.png";
import card3 from "../../../public/card3.png";
import card4 from "../../../public/card4.png";
import card5 from "../../../public/card5.png";
import Takaful from "../../../public/takaful-img.png";

const InsuranceCard = () => {
  const navigate = useNavigate();

  // Ye sab handlers ab navigate karengi
  const HandleTravelTakafulClick = () => navigate("/travel-takaful");
  const HandleGroupHealthClick = () => navigate("/health-takaful");
  const HandleCarTakafulClick = () => navigate("/car-takaful");
  const HandleBikeTakafulClick = () => navigate("/bike-takaful");
  const HandleFireTClick = () => navigate("/fire-takaful");

  return (
    <div className="w-full bg-[#F4F9FE] min-h-screen h-[400px] flex items-center justify-center pb-24 ">
      <div className="w-full px-4 md:px-10 lg:px-10 xl:px-16 2xl:px-18 py-8 ">
        
        {/* Main Card */}
        <div className="flex flex-col md:flex-row justify-between bg-white shadow-md rounded-lg p-4 sm:p-6 md:p-8 gap-4 md:gap-8 border border-gray-100 overflow-hidden">
          
          {/* Left Section */}
          <div className="flex-1 min-w-0 space-y-4">
            {/* <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-700">
              <div className="min-w-0 flex-shrink">
                <p className="truncate"><span className="font-semibold">Name:</span> Anum Zainab</p>
                <p className="truncate"><span className="font-semibold">Email:</span> contact@securepathsolutions.com</p>
              </div>
              <div className="mt-2 sm:mt-0 flex-shrink-0">
                <p><span className="font-semibold">Gender:</span> Male</p>
                <p><span className="font-semibold">Phone:</span> 03008492075</p>
              </div>
            </div> */}

          

          <div className="flex justify-center w-full">
  <img
    src={Takaful}
    alt="Accident Insurance"
    className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 object-contain max-w-full mx-auto"
  />
</div>


            <div className="text-center space-y-1">
              <h2 className="text-lg font-semibold text-blue-700"> Secure Your Future with a Personal Accident Plan</h2>
              {/* <p className="text-blue-600 text-sm font-medium">Starting from just Rs. 190/year</p> */}
              <p className="text-gray-600 text-xs">Get accidental death coverage up to Rs. 15 Lakh. Apply online in under 10 minutes.</p>
            </div>
          </div>

          {/* Right Section - Cards Grid */}
          <div className="flex-1 min-w-0 bg-gray-50 rounded-lg shadow-lg p-3 sm:p-4 border border-gray-200">
            <h3 className="text-center font-semibold text-gray-700 mb-3 sm:mb-4">Takaful</h3>

          <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
<div
  onClick={HandleTravelTakafulClick}
  className="group flex flex-col items-center justify-center rounded-lg p-2 sm:p-3 md:p-4 cursor-pointer bg-gray-50 shadow-md hover:shadow-lg transition hover:bg-[#1894A4] hover:text-white"
>
  <img src={card1} alt="Travel" className="w-8 h-8 sm:w-10 sm:h-10 mb-1 sm:mb-2" />
  <p className="text-xs sm:text-sm font-medium text-center group-hover:text-white">Travel Takaful</p>
</div>


  <div
    onClick={HandleGroupHealthClick}
    className="flex flex-col items-center justify-center rounded-lg p-2 sm:p-3 md:p-4 cursor-pointer bg-gray-50 shadow-md hover:shadow-lg transition hover:bg-[#1894A4] hover:text-white"
  >
    <img src={card2} alt="Health" className="w-8 h-8 sm:w-10 sm:h-10 mb-1 sm:mb-2" />
    <p className="text-xs sm:text-sm font-medium text-center group-hover:text-white">Group Health Takaful</p>
  </div>

  <div
    onClick={HandleCarTakafulClick}
    className="flex flex-col items-center justify-center rounded-lg p-2 sm:p-3 md:p-4 cursor-pointer bg-gray-50 shadow-md hover:shadow-lg transition hover:bg-[#1894A4] hover:text-white"
  >
    <img src={card3} alt="Car" className="w-8 h-8 sm:w-10 sm:h-10 mb-1 sm:mb-2" />
    <p className="text-xs sm:text-sm font-medium text-center group-hover:text-white">Motor Car Takaful</p>
  </div>

  <div
    onClick={HandleBikeTakafulClick}
    className="flex flex-col items-center justify-center rounded-lg p-2 sm:p-3 md:p-4 cursor-pointer bg-gray-50 shadow-md hover:shadow-lg transition hover:bg-[#1894A4] hover:text-white"
  >
    <img src={card4} alt="Bike" className="w-8 h-8 sm:w-10 sm:h-10 mb-1 sm:mb-2" />
    <p className="text-xs sm:text-sm font-medium text-center group-hover:text-white">Bike Takaful</p>
  </div>

  <div
    onClick={HandleFireTClick}
    className="col-span-2 flex items-center justify-center rounded-lg p-2 sm:p-3 md:p-4 cursor-pointer bg-gray-50 shadow-md hover:shadow-lg transition gap-2 sm:gap-3 hover:bg-[#1894A4] hover:text-white"
  >
    <img src={card5} alt="Fire" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
    <p className="text-xs sm:text-sm font-medium text-center group-hover:text-white">Fire Takaful</p>
  </div>
</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default InsuranceCard;