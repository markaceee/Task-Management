import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouteUser = ({ decodedToken, isExpired }) => {
  return decodedToken && !isExpired ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouteUser;
