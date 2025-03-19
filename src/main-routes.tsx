import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import OurTeam from "./pages/Our-team";
import Schedule from "./pages/Schedule";
import FindUs from "./pages/Find-us";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/our-team" element={<OurTeam />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/find-us" element={<FindUs />} />
    </Routes>
  );
}

export default MainRoutes;