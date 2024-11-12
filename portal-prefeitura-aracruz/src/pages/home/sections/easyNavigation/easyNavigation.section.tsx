import React from "react";
import { useNavigate } from "react-router";
import { easyNavigationItems } from "mocked/easyNavigationItems";
import {
  EasyNavigationCard,
  EasyNavigationContainer,
} from "./easyNavigation.styles";
import { Section, SectionTitle } from "components/section";

export const EasyNavigationSection = () => {
  const navigate = useNavigate();

  return (
    <Section style={{ marginTop: 64 }}>
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
