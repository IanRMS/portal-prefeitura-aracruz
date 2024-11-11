import React, { useEffect } from "react";
import { homeSlides } from "mocked/homeSlides";
import ArrowRight from "assets/icons/right.svg";
import ArrowLeft from "assets/icons/left.svg";
import {
  ArrowButton,
  CarouselImage,
  CarouselWrapper,
  DotsContainer,
  Dot,
} from "./carousel.styles";
import { Section } from "components/section";

export const CarouselSection = () => {
  const [currentSlide, setCurrentSlide] = React.useState<number>(0);

  const handleSlide = (operation: "next" | "prev") => {
    if (operation === "next") {
      setCurrentSlide(currentSlide + 1);
      return;
    }
    setCurrentSlide(currentSlide - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentSlide === homeSlides.length - 1) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide(currentSlide + 1);
      }
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <Section>
      <CarouselWrapper>
        {homeSlides.map(
          (slide, i) =>
            currentSlide === i && <CarouselImage src={slide.src} alt="" />
        )}
        {currentSlide > 0 && (
          <ArrowButton className="left" onClick={() => handleSlide("prev")}>
            <img src={ArrowLeft} alt="" />
          </ArrowButton>
        )}
        {currentSlide < homeSlides.length - 1 && (
          <ArrowButton className="right" onClick={() => handleSlide("next")}>
            <img src={ArrowRight} alt="" />
          </ArrowButton>
        )}
      </CarouselWrapper>
      <DotsContainer>
        {homeSlides.map((_item, i) => (
          <Dot active={i === currentSlide} />
        ))}
      </DotsContainer>
    </Section>
  );
};
