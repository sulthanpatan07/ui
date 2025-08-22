import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import ExploreSkills from "./pages/ExploreSkills";
import Homepage from "./pages/homepage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ContactUs from "./pages/ContactUs";
import About from "./pages/about";
import Profile from "./pages/Profile1";

function App() {
  return (
    <div>
      <Router>
        {/* Navbar here if needed */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/explore" element={<ExploreSkills />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
