import React from "react";
import { Routes, Route } from "react-router-dom";
import Signin from "../SignIn";
import Signup from "../SignUp";
import AppContent from "../AppContent";
import ForgotPassword from "../ForgotPassword";
import Home from "../Home";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/home" element={<Home />} />
      <Route path="/app" element={<AppContent />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
};

export default Routing;
