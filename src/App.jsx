import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Homepage from "./pages/homepage";
import Register from "./pages/Register";
import Login from "./pages/Login";
// Import your Navbar

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* Add Navbar here so it appears on all pages */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
