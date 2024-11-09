import React from "react";
import {
  Address,
  FooterLink,
  InfoColumn,
  InfoContainer,
  InfoDescription,
  InfoRow,
  InfoTitle,
} from "./footer.styles";
import PhoneIcon from "../../assets/icons/phone.svg";
import EmailIcon from "../../assets/icons/email.svg";
import ArrowRight from "../../assets/icons/arrow-right.svg";
import LogoPrefeiura from "../../assets/images/logo-prefeitura.svg";

export function Footer() {
  return (
    <>
      <InfoContainer background={"blue"}>
        <InfoColumn>
          <InfoTitle>Horário de atendimento</InfoTitle>
          <InfoDescription>
            O funcionamento da Prefeitura Municipal de Aracruz é de Segunda à
            Sexta-feira na parte da manhã das 8h às 11:45 e das 13:15 às 17h.
          </InfoDescription>
        </InfoColumn>
        <InfoColumn>
          <InfoTitle>Fale conosco</InfoTitle>
          <InfoRow>
            <img src={PhoneIcon} alt="Telefone" />
            <InfoDescription>(54) 3293.5600</InfoDescription>
          </InfoRow>
          <InfoRow>
            <img src={EmailIcon} alt="Email" />
            <InfoDescription>
              comunicacao@antonioprado.rs.gov.br
            </InfoDescription>
          </InfoRow>
        </InfoColumn>
        <InfoColumn>
          <InfoTitle>Ouvidoria</InfoTitle>
          <InfoDescription>
            Nossa prefeitura quer te ouvir! <br /> Deixe suas críticas e
            sugestões.
          </InfoDescription>
          <InfoRow>
            <FooterLink href="/ouvidoria">Acessar Ouvidoria</FooterLink>
            <img src={ArrowRight} alt="Ouvidoria" />
          </InfoRow>
        </InfoColumn>
      </InfoContainer>
      <InfoContainer background="white" alignCenter>
        <img src={LogoPrefeiura} alt="Prefeitura" width={200} />
        <Address>
          <strong>Prefeitura Municipal de Aracruz</strong> <br />
          Av. Morobá, 20 - Conj. Moroba, Aracruz - ES, CEP: 29192-733
        </Address>
      </InfoContainer>
    </>
  );
}
