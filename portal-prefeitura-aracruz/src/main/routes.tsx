import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/home/index";
import History from "../pages/history/index";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/historia-municipio" element={<History />} />
    </Routes>
  );
}
