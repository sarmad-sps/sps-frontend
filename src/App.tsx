import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Car from "./pages/Car";
import Bike from "./pages/Bike";
import Health from "./pages/Health";
import Travel from "./pages/Travel";
import Kafala from "./pages/Kafala";
import Aboutus from "./pages/Aboutus";
import Contactus from "./pages/Contactus";
import Pricingplan from "./pages/Pricingplan";
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car" element={<Car />} />
        <Route path="/bike" element={<Bike />} />
        <Route path="/health" element={<Health />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/kafala" element={<Kafala />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/pricingplan" element={<Pricingplan />} />
      </Routes>
    </div>
  );
}
