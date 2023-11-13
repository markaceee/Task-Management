import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import { Home } from "../components/Home";
import { useJwt } from "react-jwt";
import { getAuthToken, removeAuthHeader } from "../axios_helper";
import Login from "../components/Login";
import PrivateRouteUser from "./PrivateRouteUser";
import Register from "../components/Register";
import ForgotPassword from "../components/ForgotPassword";
import TaskContent from "../components/TaskContent";
import { Private } from "../components/Private";
import { Account } from "../components/Account";

const Routing = () => {
  const { decodedToken, isExpired } = useJwt(getAuthToken());
  useEffect(() => {
    console.log(isExpired);
    if (isExpired) {
      removeAuthHeader();
    }
  }, [isExpired]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login decodedToken={decodedToken} isExpired={isExpired} />} />
      <Route path="/register" element={<Register decodedToken={decodedToken} isExpired={isExpired} />} />
      <Route
        path="/forgot-password"
        element={<ForgotPassword decodedToken={decodedToken} isExpired={isExpired} />}
      />
      <Route element={<PrivateRouteUser decodedToken={decodedToken} isExpired={isExpired} />}>
        <Route path="/tasks" element={<TaskContent />} />
        <Route path="/private" element={<Private />} />
        <Route path="/account" element={<Account />} />
      </Route>
    </Routes>
  );
};

export default Routing;
