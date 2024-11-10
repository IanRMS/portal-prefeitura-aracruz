import React from "react";
import CarouselSection from "./sections/carousel";
import EasyNavigationSection from "./sections/easyNavigation";
import MoreAccessedServicesSection from "./sections/moreAccessedServices";
import NewsSection from "./sections/news";

export function HomePage() {
  return (
    <>
      <CarouselSection />
      <EasyNavigationSection />
      <MoreAccessedServicesSection />
      <NewsSection />
    </>
  );
}
