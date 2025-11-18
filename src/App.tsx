import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
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
export default function App() {
  return (
    <div className="overflow-x-hidden">
       <ScrollToTop />
      <WhatsAppButton/>
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
        <Route path="/travel-takaful" element={<TravelTakaful/>}/>
        <Route path="/car-takaful" element={<CarTakaful />} />
        <Route path="/bike-takaful" element={<BikeTakaful />} />
        <Route path="/health-takaful" element={<Healthtakaful />} />
        <Route path="/it-consulting" element={<ItConsulting />} />
      </Routes>
    </div>
  );
}
