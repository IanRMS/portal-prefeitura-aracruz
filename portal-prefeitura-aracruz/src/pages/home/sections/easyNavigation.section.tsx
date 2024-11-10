import React from "react";
import { useNavigate } from "react-router";
import {
  EasyNavigationCard,
  EasyNavigationContainer,
  Section,
  SectionTitle,
} from "../homePage.styles";
import { easyNavigationItems } from "../../../mocked/easyNavigationItems";

const EasyNavigationSection = () => {
  const navigate = useNavigate();

  return (
    <Section>
      <SectionTitle>Acesso rápido</SectionTitle>
      <EasyNavigationContainer>
        {easyNavigationItems.map((item) => (
          <EasyNavigationCard
            onClick={() => navigate(item.route)}
            key={item.label}
          >
            <img src={item.icon} alt="" />
            <span>{item.label}</span>
          </EasyNavigationCard>
        ))}
      </EasyNavigationContainer>
    </Section>
  );
};

export default EasyNavigationSection;
