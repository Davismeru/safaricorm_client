import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Share from "./Share";
import Redirect from "./Redirect";
import Disclaimer from "./Disclaimer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Redirect} />
        <Route path="/:code" Component={Home} />
        <Route path="/share/final" Component={Share} />
        <Route path="/read/disclaimer" Component={Disclaimer} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
