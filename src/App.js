import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import PostJob from "./components/PostJob";
import Home from "./components/Home";
import ApplyJob from "./components/ApplyJob";
import Signup from "./components/Signup";
import Login from "./components/Login";
import NavbarScreen from "./components/Navbar";
import Candidates from "./components/Candidates";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Layout" element={<Layout />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Navbar" element={<NavbarScreen />} />
          <Route path="/Candidates" element={<Candidates />} />
          <Route path="/postjob" element={<PostJob />} />
          <Route path="/ApplyJob" element={<ApplyJob />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
