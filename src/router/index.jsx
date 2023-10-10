import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../screens/home";
import Routine from "../screens/routine";
import Eyes from '../screens/routine/eyes'
import Skin from '../screens/routine/skin'
import Result from "../screens/routine/result";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/routine" element={<Routine />} />
      <Route path="/routine/eyes" element={<Eyes />} />
      <Route path="/routine/skin" element={<Skin />} />
      <Route path="/routine/result" element={<Result />} />
    </Routes>
  );
};

export default Router;
