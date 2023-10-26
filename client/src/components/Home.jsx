import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <NavLink to="/signin">Login</NavLink> <br />
      <NavLink to="/signup">Signup</NavLink> <br />
      <NavLink to="/forgot-password">Forgot Password</NavLink> <br />
    </div>
  );
};

export default Home;
