import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import { Footer } from "../components/footer/footer.component";
import { Header } from "../components/header/header.component";
import NavBar from "../components/nav";
import SideMenuDrawer from "../components/sideMenuDrawer";
import { PageContainer } from "../components/pageContainer";
import "pure-react-carousel/dist/react-carousel.es.css";
import FabButtonComponent from "components/fab";

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
        <PageContainer>
          <AppRoutes />
          <FabButtonComponent />
        </PageContainer>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
