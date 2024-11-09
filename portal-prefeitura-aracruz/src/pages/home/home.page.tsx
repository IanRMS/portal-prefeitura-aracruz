import React from "react";
import { Section, SectionTitle } from "./homePage.styles";
import EasyNavigationSection from "./sections/easyNavigation.section";

export function HomePage() {
  return (
    <>
      <Section>
        <SectionTitle>Acesso rápido</SectionTitle>
      </Section>
      <EasyNavigationSection />
    </>
  );
}
