import React from "react";
import {
  FooterLink,
  InfoColumn,
  InfoDescription,
  InfoFooter,
  InfoRow,
  InfoTitle,
} from "./footer.styles";
import PhoneIcon from "../../assets/icons/phone.svg";
import EmailIcon from "../../assets/icons/email.svg";
import ArrowRight from "../../assets/icons/arrow-right.svg";

export function Footer() {
  return (
    <>
      <InfoFooter>
        <InfoColumn>
          <InfoTitle>Horário de atendimento</InfoTitle>
          <InfoDescription>
            O funcionamento da Prefeitura Municipal de Antônio Prado é de
            Segunda à Sexta-feira na parte da manhã das 8h às 11:45 e das 13:15
            às 17h.
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
            Nossa prefeitura quer te ouvir! <br/> Deixe suas críticas e sugestões.
          </InfoDescription>
          <InfoRow>
            <FooterLink href="/ouvidoria">Acessar Ouvidoria</FooterLink>
            <img src={ArrowRight} alt="Ouvidoria" />
          </InfoRow>
        </InfoColumn>
      </InfoFooter>
    </>
  );
}
