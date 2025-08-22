import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

<<<<<<< HEAD
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
=======
import { Contact } from 'lucide-react';


function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Homepage/>}/>
        <Route path="/explore" element={<ExploreSkills/>} />
       
      </Routes>
    </Router>
  )
>>>>>>> cb70100e581147d61c5d4fe5a1a8301d246f1a55
}

export default App;
