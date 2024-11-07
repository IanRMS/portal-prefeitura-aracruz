import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import { Footer } from "../components/footer/footer.component";
import { Header } from "../components/header/header.component";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <main>
          <AppRoutes />
        </main>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
