import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Courses from "./pages/Courses";
import Partners from "./pages/Partners";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="courses" element={<Courses />} />
          <Route path="partners" element={<Partners />} />

          {/* Individual Partners */}
          <Route path="partners/obs" element={<Partners />} />
          <Route path="partners/rga" element={<Partners />} />
          <Route path="partners/egraduate" element={<Partners />} />
          <Route path="partners/srh" element={<Partners />} />


          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
