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
import News1 from "../../../assets/images/news-1.jpg";
import News2 from "../../../assets/images/news-2.jpg";
import News3 from "../../../assets/images/news-3.jpg";
import News4 from "../../../assets/images/news-4.jpg";

const NewsSection = () => {
  const navigate = useNavigate();
  const news = [
    {
      id: 1,
      image: News1,
      theme: "Saúde",
      title: "Inauguração de Novo Centro de Saúde Municipal",
      description:
        "Unidade moderna amplia atendimento e garante mais qualidade de vida à população.",
    },
    {
      id: 2,
      image: News2,
      theme: "Mobilidade urbana",
      title: "Prefeito Anuncia Novas Medidas de Segurança no Trânsito",
      description:
        "Unidade moderna amplia atendimento e garante mais qualidade de vida à população.",
    },
    {
      id: 3,
      image: News3,
      theme: "Edução e emprego",
      title: "Prefeitura Lança Programa de Capacitação Profissional",
      description:
        "Unidade moderna amplia atendimento e garante mais qualidade de vida à população.",
    },
    {
      id: 4,
      image: News4,
      theme: "Infraestrutura e urbanismo",
      title: "Obras de Revitalização da Praça Central Entram na Fase Final",
      description:
        "Espaço ganhará novas áreas de lazer e acessibilidade para todos os moradores.",
    },
  ];

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
