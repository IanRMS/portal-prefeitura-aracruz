import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/home/index";
import History from "../pages/history/index";
import News from "pages/news";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/noticias" element={<News />} />
      <Route path="/historia-municipio" element={<History />} />
    </Routes>
  );
}
