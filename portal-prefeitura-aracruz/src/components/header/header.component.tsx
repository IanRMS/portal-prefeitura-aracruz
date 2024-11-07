import React from "react";
import { Button, Row, SiteInfo } from "./header.styles";
import SiteMap from "../../assets/icons/site-map.svg";
import Accessibility from "../../assets/icons/accessibility.svg";

export function Header() {
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
    </header>
  );
}
