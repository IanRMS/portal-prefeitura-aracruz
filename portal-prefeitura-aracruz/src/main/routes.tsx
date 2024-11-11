import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/home/index";
import History from "../pages/cityHistory/index";
import News from "pages/news";
import NewDetails from "pages/newDetails";
import Services from "pages/services";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/noticias" element={<News />} />
      <Route path="/noticias/:id" element={<NewDetails />} />
      <Route path="/servicos" element={<Services />} />
      <Route path="/historia-municipio" element={<History />} />
    </Routes>
  );
}
