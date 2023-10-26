import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home";
import Signin from "../SignIn";
import Signup from "../SignUp";
import ForgotPassword from "../ForgotPassword";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
};

export default Routing;
