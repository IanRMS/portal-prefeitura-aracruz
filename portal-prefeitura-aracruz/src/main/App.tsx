import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import { Footer } from "../components/footer/footer.component";

function App() {
  return (
    <>
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
