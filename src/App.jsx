import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar/NavigationBar.jsx";
import { Home, Experience, Education, Projects, Skills, Achievements, Certifications, Involvements, Gallery, ProfessionalJourney, PersonalJourney, Contact, NotFound } from "./pages";
import "./index.css";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/involvements" element={<Involvements />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/professional-journey" element={<ProfessionalJourney />} />
        <Route path="/personal-journey" element={<PersonalJourney />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
