import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Courses from "./pages/Courses";
import Partners from "./pages/Partners";

import SRHPage from "./pages/partners/srh"
import RGAPage from "./pages/partners/rga"
import OBSPage from "./pages/partners/obs"
import EgradPage from "./pages/partners/egraduate"

import EGradCoursePage from "./pages/partners/egraduate/course"
import  EGradCoursesPage from "./pages/partners/egraduate/course"

import OBSCoursePage from "./pages/partners/obs/CoursePage"
import SRHCoursePage from './pages/partners/srh/CoursePage'
import HighSchoolRGAPage from "./pages/partners/rga/highSchool"
import CollgeRGAPage from "./pages/partners/rga/college"



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
          <Route path="partners/obs" element={<OBSPage />} />
          <Route path="partners/rga" element={<RGAPage />} />
          <Route path="partners/egraduate" element={<EgradPage />} />
          <Route path="partners/srh" element={<SRHPage />} />

          <Route path="partners/egraduate/courses" element={<EGradCoursesPage />} />

          <Route path="partners/online-business-school/:courseTitle" element={<OBSCoursePage />} />
          <Route path="partners/e-graduate-academy/:courseTitle" element={<EGradCoursePage />} />
          <Route path="partners/srh-university/:courseTitle" element={<SRHCoursePage />} />

           <Route path="partners/rga/highschool" element={<HighSchoolRGAPage />} />
           <Route path="partners/rga/college" element={<CollgeRGAPage />} />

          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
