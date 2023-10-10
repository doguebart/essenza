import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../screens/home";
import Routine from "../screens/routine";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/routine" element={<Routine />} />
    </Routes>
  );
};

export default Router;
