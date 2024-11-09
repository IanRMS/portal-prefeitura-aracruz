import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import { Footer } from "../components/footer/footer.component";
import { Header } from "../components/header/header.component";
import NavBar from "../components/nav";
import SideMenuDrawer from "../components/sideMenuDrawer";

function App() {
  const [isShowingNavMenu, setIsShowingNavMenu] =
    React.useState<boolean>(false);

  const handleShowMenu = () => {
    setIsShowingNavMenu(true);
  };

  return (
    <>
      <Header showNavMenu={handleShowMenu} />
      <BrowserRouter>
        <NavBar />
        {isShowingNavMenu && (
          <SideMenuDrawer onClose={() => setIsShowingNavMenu(false)} />
        )}
        <main>
          <AppRoutes />
        </main>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
