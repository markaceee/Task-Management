import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./components/routing/Routing";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routing />
      </div>
    </Router>
  );
};

export default App;
