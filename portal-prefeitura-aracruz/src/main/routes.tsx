import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/home/index";
import History from "../pages/cityHistory/index";
import News from "pages/news";
import NewDetails from "pages/newDetails";
import Services from "pages/servicesPage";
import Mayor from "pages/mayor";
import OrganizationalStructure from "pages/organizationalStructure";
import Departments from "pages/departments";
import Publications from "pages/publications";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/noticias" element={<News />} />
      <Route path="/noticias/:id" element={<NewDetails />} />
      <Route path="/servicos" element={<Services />} />
      <Route path="/historia-municipio" element={<History />} />
      <Route path="/prefeito" element={<Mayor />} />
      <Route
        path="/estrutura-organizacional"
        element={<OrganizationalStructure />}
      />
      <Route path="/estrutura-organizacional/:id" element={<Departments />} />
      <Route path="/publicacoes/*" element={<Publications />} />
    </Routes>
  );
}
