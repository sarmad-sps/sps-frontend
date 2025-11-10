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
export default function App() {
  return (
    <div className="overflow-x-hidden">
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
      </Routes>
    </div>
  );
}
