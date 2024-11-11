import React from "react";
import { useNavigate } from "react-router";
import { ShowMoreButton, ShowMoreButtonContainer } from "../../homePage.styles";
import { news } from "mocked/news";
import { Section, SectionTitle } from "components/section";
import { NewsContainer } from "./news.styles";
import { New, NewDescription, NewImage, NewTheme, NewTitle } from "components/new";

export const NewsSection = () => {
  const navigate = useNavigate();

  return (
    <Section>
      <SectionTitle>Notícias</SectionTitle>
      <NewsContainer>
        {news.slice(0, 4).map((item) => (
          <New key={item.id}>
            <NewImage src={item.image} alt={item.title} />
            <NewTheme>{item.theme}</NewTheme>
            <NewTitle>{item.title}</NewTitle>
            <NewDescription>{item.description}</NewDescription>
          </New>
        ))}
      </NewsContainer>
      <ShowMoreButtonContainer>
        <ShowMoreButton onClick={() => navigate("/noticias")}>
          Todas as notícias
        </ShowMoreButton>
      </ShowMoreButtonContainer>
    </Section>
  );
};
