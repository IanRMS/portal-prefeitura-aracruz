import React from "react";
import {
  Button,
  Container,
  HeaderWrapper,
  Logo,
  MediaButton,
  MediaButtons,
  Row,
  SearchInput,
  SideMenuButton,
  SiteInfo,
} from "./header.styles";
import SiteMap from "../../assets/icons/site-map.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Facebook from "../../assets/icons/facebook.svg";
import Youtube from "../../assets/icons/youtube.svg";
import Search from "../../assets/icons/search.svg";
import Accessibility from "../../assets/icons/accessibility.svg";
import LogoPref from "../../assets/images/logo-prefeitura.svg";
import Menu from "../../assets/icons/menu.svg";

interface HeaderProps {
  showNavMenu: () => void;
}

export const Header: React.FC<HeaderProps> = ({ showNavMenu }) => {
  const handleShowMenu = () => {
    console.log("MOSTRA ESSA BUCETA");
    showNavMenu();
  };

  return (
    <header>
      <SiteInfo>
        <span>
          ALT + [Nº de atalho] | <strong>1</strong> ir ao conteúdo |{" "}
          <strong>2</strong> ir ao menu | <strong>3 </strong>ir à pesquisa |{" "}
          <strong>4</strong> ir ao rodapé
        </span>
        <Row>
          <Button style={{ marginRight: 10 }}>
            <img src={SiteMap} alt="Mapa do site" />
            <span>MAPA DO SITE</span>
          </Button>
          <Button>
            <img src={Accessibility} alt="Acessibilidade" />
            <span>ACESSIBILIDADE</span>
          </Button>
        </Row>
      </SiteInfo>
      <HeaderWrapper>
        <Container style={{ justifyContent: "flex-start" }}>
          <SearchInput placeholder="Buscar no site" />
          <img className="search-icon" alt="Procurar" src={Search} />
        </Container>
        <Container style={{ justifyContent: "center" }}>
          <Logo src={LogoPref} alt="Prefeitura de Aracruz" />
        </Container>
        <MediaButtons>
          <MediaButton>
            <img src={Facebook} alt="instagram" />
          </MediaButton>
          <MediaButton>
            <img src={Instagram} alt="instagram" />
          </MediaButton>
          <MediaButton>
            <img src={Youtube} alt="instagram" />
          </MediaButton>
        </MediaButtons>
        <SideMenuButton onClick={() => handleShowMenu()}>
          <img src={Menu} alt="" />
        </SideMenuButton>
      </HeaderWrapper>
    </header>
  );
};
