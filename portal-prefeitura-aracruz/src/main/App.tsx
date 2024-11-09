import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import { Footer } from "../components/footer/footer.component";
import { Header } from "../components/header/header.component";
import NavBar from "../components/nav";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <NavBar />
        <main>
          <AppRoutes />
        </main>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
