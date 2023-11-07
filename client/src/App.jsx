import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthWrapper } from "./auth/AuthWrapper";

const App = () => {
  return (
    <BrowserRouter >
      <AuthWrapper />
    </BrowserRouter>
  );
};

export default App;
