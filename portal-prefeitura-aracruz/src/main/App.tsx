import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <main>
        <AppRoutes />
      </main>
    </BrowserRouter>
  );
}

export default App;
