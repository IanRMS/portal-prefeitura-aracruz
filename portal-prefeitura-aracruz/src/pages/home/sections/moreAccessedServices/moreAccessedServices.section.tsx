import React from "react";
import {
  Section,
  SectionTitle,
  ShowMoreButton,
  ShowMoreButtonContainer,
} from "../../homePage.styles";
import { useNavigate } from "react-router";
import { accessedServices } from "../../../../mocked/moreAccessedServices";
import {
  MoreAccessedService,
  MoreAccessedServiceDescription,
  MoreAccessedServicesContainer,
  MoreAccessedServiceTitle,
} from "./moreAccessedServices.styles";

export const MoreAccessedServicesSection = () => {
  const navigate = useNavigate();

  return (
    <Section>
      <SectionTitle>Serviços mais acessados</SectionTitle>
      <MoreAccessedServicesContainer>
        {accessedServices.map((service) => (
          <MoreAccessedService key={service.title}>
            <img src={service.icon} alt="" />
            <div>
              <MoreAccessedServiceTitle>
                {service.title}
              </MoreAccessedServiceTitle>
              <MoreAccessedServiceDescription>
                {service.description}
              </MoreAccessedServiceDescription>
            </div>
          </MoreAccessedService>
        ))}
      </MoreAccessedServicesContainer>
      <ShowMoreButtonContainer>
        <ShowMoreButton onClick={() => navigate("/services")}>
          Todos os serviços
        </ShowMoreButton>
      </ShowMoreButtonContainer>
    </Section>
  );
};
