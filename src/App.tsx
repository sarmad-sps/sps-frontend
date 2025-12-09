import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Car from "./pages/Car";
import Bike from "./pages/Bike";
import Health from "./pages/Health";
import Travel from "./pages/Travel";
import Takaful from "./pages/Takaful";
import Aboutus from "./pages/Aboutus";
import Contactus from "./pages/Contactus";
import Pricingplan from "./pages/Pricingplan";
import TravelTakaful from "./pages/TravelTakaful";
import CarTakaful from "./pages/CarTakaful";
import BikeTakaful from "./pages/BikeTakaful";
import Healthtakaful from "./pages/Healthtakaful";
import ItConsulting from "./pages/ItConsulting";
import ScrollToTop from "./components/scrollToTop";
import WhatsAppButton from "./components/common/WhatsappButton";
import Insuranceplan from "./pages/Insuranceplan";
import Tracker from "./pages/Tracker";
import FireTakaful from "./pages/FireTakaful";
import MobileDevelopment from "./pages/MobileDevelopment";
//import VehicleInfoHeader from "./components/common/VehicleInfoHeader"
import WebDevelopment from "./pages/WebDevelopment"
import Devops from "./pages/Devops"
export default function App() {
  return (
    <div className="overflow-x-hidden">
       <ScrollToTop />
      <WhatsAppButton/>
          <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car" element={<Car />} />
        <Route path="/bike" element={<Bike />} />
        <Route path="/health" element={<Health />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/takaful" element={<Takaful />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/pricingplan" element={<Pricingplan />} />
        <Route path="/fire-takaful" element={<FireTakaful />} />
        <Route path="/travel-takaful" element={<TravelTakaful/>}/>
        <Route path="/car-takaful" element={<CarTakaful />} />
        <Route path="/bike-takaful" element={<BikeTakaful />} />
        <Route path="/health-takaful" element={<Healthtakaful />} />
        <Route path="/it-consulting" element={<ItConsulting />} />
        <Route path="/insuranceplan" element={<Insuranceplan />} />
        <Route path="/tracker" element={<Tracker/>}/>
        <Route path="/mobiledevelop" element={<MobileDevelopment/>}/>
       <Route path="/webdevelop" element={<WebDevelopment/>}/>
       <Route path="/devops" element={<Devops/>}/>
      </Routes>
    </div>
  );
}
