// Logout.js

import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/Login");
  };

  return;
};

export default Logout;
