import React from "react";
import { useNavigate } from "react-router";
import {
  New,
  NewDescription,
  NewImage,
  NewsContainer,
  NewTheme,
  NewTitle,
  Section,
  SectionTitle,
  ShowMoreButton,
  ShowMoreButtonContainer,
} from "../homePage.styles";
import { news } from "../../../mocked/news";

const NewsSection = () => {
  const navigate = useNavigate();

  return (
    <Section>
      <SectionTitle>Notícias</SectionTitle>
      <NewsContainer>
        {news.map((item) => (
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

export default NewsSection;
