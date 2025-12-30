import { useNavigate } from "react-router-dom";
import { motion,type Variants } from "framer-motion"; 
import card1 from "../../../public/card1.png";
import card2 from "../../../public/card2.png";
import card3 from "../../../public/card3.png";
import card4 from "../../../public/motorcycleicon.png";
import card5 from "../../../public/card5.png";
import Takaful from "../../../public/takaful-img.png";

const InsuranceCard = () => {
  const navigate = useNavigate();

  const HandleTravelTakafulClick = () => navigate("/travel-takaful");
  const HandleGroupHealthClick = () => navigate("/health-takaful");
  const HandleCarTakafulClick = () => navigate("/car-takaful");
  const HandleBikeTakafulClick = () => navigate("/bike-takaful");
  const HandleFireTClick = () => navigate("/fire-takaful");

  const cardClasses =
    "group relative flex flex-col items-center justify-center rounded-lg p-4 cursor-pointer bg-white shadow-lg transition-all duration-700 hover:shadow-2xl hover:scale-110 overflow-hidden border border-gray-100";

  const bubbleEffectClasses =
    "absolute inset-0 rounded-full bg-gradient-to-r from-[#42c3ca]/40 to-[#309df0]/30 scale-0 transition-all duration-1000 ease-out group-hover:scale-150 opacity-0 group-hover:opacity-100 z-0";

  // Explicitly typed variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const leftSectionVariants: Variants = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut", // Valid string hai, ab type safe hai
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="w-full bg-[#F4F9FE] py-12 px-4 md:px-10 lg:px-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left Section */}
            <motion.div
              variants={leftSectionVariants}
              className="flex-1 flex flex-col items-center justify-center p-8 lg:p-12 text-center bg-gradient-to-br from-[#f0fbff] to-[#e6f7ff]"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="relative"
              >
                <div className="absolute inset-0  rounded-full blur-3xl animate-pulse" />
                <img
                  src={Takaful}
                  alt="Personal Accident Takaful"
                  className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain relative z-10 drop-shadow-2xl"
                />
              </motion.div>

              <motion.div variants={titleVariants} className="mt-8 space-y-4">
                <h2 className="  font-bold text-[#1e72c2]">
                  Secure Your Future with a Personal Accident Plan
                </h2>
                <p className="text-gray-600 text-sm md:text-base max-w-md mx-auto">
                  Get accident protection benefits. Apply online in under 10 minutes.
                </p>
              </motion.div>
            </motion.div>

            {/* Right Section - Cards */}
            <div className="flex-1 p-8 lg:p-12 bg-white">
              <motion.h3
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-center text-2xl font-bold text-gray-800 mb-8"
              >
                Takaful
              </motion.h3>

              <div className="grid grid-cols-2 gap-6 max-w-lg mx-auto">
                {/* Cards with motion */}
                <motion.div variants={cardVariants} whileHover={{ y: -10 }} onClick={HandleTravelTakafulClick} className={`${cardClasses} hover:bg-gradient-to-br hover:from-[#42c3ca] hover:to-[#1e72c2]`}>
                  <div className={bubbleEffectClasses} />
                  <img src={card1} alt="Travel" className="w-12 h-12 mb-3 transition-all duration-500 group-hover:invert group-hover:brightness-0 relative z-10" />
                  <p className="text-base font-semibold relative z-10 group-hover:invert group-hover:brightness-0">Travel Takaful</p>
                </motion.div>

                <motion.div variants={cardVariants} whileHover={{ y: -10 }} onClick={HandleGroupHealthClick} className={`${cardClasses} hover:bg-gradient-to-br hover:from-[#42c3ca] hover:to-[#1e72c2]`}>
                  <div className={bubbleEffectClasses} />
                  <img src={card2} alt="Health" className="w-12 h-12 mb-3 transition-all duration-500 group-hover:invert group-hover:brightness-0 relative z-10" />
                  <p className="text-base font-semibold relative z-10 group-hover:invert group-hover:brightness-0">Group Health Takaful</p>
                </motion.div>

                <motion.div variants={cardVariants} whileHover={{ y: -10 }} onClick={HandleCarTakafulClick} className={`${cardClasses} hover:bg-gradient-to-br hover:from-[#42c3ca] hover:to-[#1e72c2]`}>
                  <div className={bubbleEffectClasses} />
                  <img src={card3} alt="Car" className="w-12 h-12 mb-3 transition-all duration-500 group-hover:invert group-hover:brightness-0 relative z-10" />
                  <p className="text-base font-semibold relative z-10 group-hover:invert group-hover:brightness-0">Motor Car Takaful</p>
                </motion.div>

                <motion.div variants={cardVariants} whileHover={{ y: -10 }} onClick={HandleBikeTakafulClick} className={`${cardClasses} hover:bg-gradient-to-br hover:from-[#42c3ca] hover:to-[#1e72c2]`}>
                  <div className={bubbleEffectClasses} />
                  <img src={card4} alt="Bike" className="w-12 h-12 mb-3 transition-all duration-500 group-hover:invert group-hover:brightness-0 relative z-10" />
                  <p className="text-base font-semibold relative z-10 group-hover:invert group-hover:brightness-0">Bike Takaful</p>
                </motion.div>

                <motion.div variants={cardVariants} whileHover={{ y: -10 }} onClick={HandleFireTClick} className={`${cardClasses} col-span-2 hover:bg-gradient-to-br hover:from-[#42c3ca] hover:to-[#1e72c2]`}>
                  <div className={bubbleEffectClasses} />
                  <div className="flex items-center justify-center gap-4">
                    <img src={card5} alt="Fire" className="w-14 h-14 transition-all duration-500 group-hover:invert group-hover:brightness-0 relative z-10" />
                    <p className="text-lg font-bold relative z-10 group-hover:invert group-hover:brightness-0">Fire Takaful</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default InsuranceCard;