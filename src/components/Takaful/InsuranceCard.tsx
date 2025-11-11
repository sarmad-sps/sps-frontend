import { useNavigate } from "react-router-dom";
import card1 from "../../../public/card1.png";
import card2 from "../../../public/card2.png";
import card3 from "../../../public/card3.png";
import card4 from "../../../public/card4.png";
import card5 from "../../../public/card5.png"; 
import Takaful from "../../../public/takaful.png";

const InsuranceCard = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col md:flex-row justify-between bg-[aliceblue] shadow-md rounded-lg p-6 md:p-8 gap-8 max-w-5xl mx-auto border border-gray-100 my-8">
      {/* Left Section */}
      <div className="flex-1 space-y-4">
        {/* Header Info */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-700">
          <div>
            <p>
              <span className="font-semibold">Name:</span> Osama Bin Jahangir
            </p>
            <p>
              <span className="font-semibold">Email:</span>{" "}
              osamajahangir786@gmail.com
            </p>
          </div>
          <div className="mt-2 sm:mt-0">
            <p>
              <span className="font-semibold">Gender:</span> Male
            </p>
            <p>
              <span className="font-semibold">Phone:</span> +923314272709
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-300" />

        {/* Middle Illustration */}
        <div className="flex justify-center">
          <img
            src={Takaful}
            alt="Accident Insurance"
            className="w-34 h-34 object-contain"
          />
        </div>

        {/* Bottom Text */}
        <div className="text-center space-y-1">
          <h2 className="text-lg font-semibold text-blue-700">
            Buy Personal Accident Insurance Plan
          </h2>
          <p className="text-blue-600 text-sm font-medium">
            for as low as Rs. 190/year
          </p>
          <p className="text-gray-600 text-xs">
            Accidental Death Coverage up to Rs. 15 Lakh. Buy online in 10
            minutes
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 bg-gray-50 rounded-lg shadow-lg p-4 border border-gray-200">
        <h3 className="text-center font-semibold text-gray-700 mb-4">
          Takaful
        </h3>

        <div className="grid grid-cols-2 gap-4">
          {/* Box 1 */}
          <div className="flex flex-col items-center justify-center bg-blue-100 rounded-lg p-4 cursor-pointer hover:shadow-md transition">
            <img src={card1} alt="Travel Takaful" className="w-10 h-10 mb-2" />
            <p className="text-gray-700 text-sm font-medium">Travel Takaful</p>
          </div>

          {/* Box 2 */}
          <div className="flex flex-col items-center justify-center bg-pink-100 rounded-lg p-4 cursor-pointer hover:shadow-md transition">
            <img
              src={card2}
              alt="Group Health Takaful"
              className="w-10 h-10 mb-2"
            />
            <p className="text-gray-700 text-sm font-medium">
              Group Health Takaful
            </p>
          </div>

          {/* Box 3 */}
         {/* Motor Car Takaful */}
          <div
            className="flex flex-col items-center justify-center bg-yellow-100 rounded-lg p-4 cursor-pointer hover:shadow-md transition"
            onClick={() => navigate("/car-takaful")}
          >
            <img src={card3} alt="Motor Car Takaful" className="w-10 h-10 mb-2" />
            <p className="text-gray-700 text-sm font-medium">Motor Car Takaful</p>
          </div>

          {/* Box 4 */}
          <div className="flex flex-col items-center justify-center bg-purple-100 rounded-lg p-4 cursor-pointer hover:shadow-md transition">
            <img src={card4} alt="Bike Takaful" className="w-10 h-10 mb-2" />
            <p className="text-gray-700 text-sm font-medium">Bike Takaful</p>
          </div>

          {/*  New Box 5 */}
      
<div className="col-span-2 flex items-center justify-center bg-[#FFCDCE] rounded-lg p-4 cursor-pointer hover:shadow-md transition gap-3">
  <img
    src={card5}
    alt="Fire Takaful"
    className="w-12 h-12 object-contain"
  />
  <p className="text-gray-700 text-base font-semibold">Fire Takaful</p>
</div>

        </div>
      </div>
    </div>
  );
};

export default InsuranceCard;