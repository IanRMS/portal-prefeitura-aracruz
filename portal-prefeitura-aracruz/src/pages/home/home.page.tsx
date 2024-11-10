import React from "react";

import EasyNavigationSection from "./sections/easyNavigation.section";
import MoreAccessedServicesSection from "./sections/moreAccessedServices.section";
import NewsSection from "./sections/news.section";
import CarouselSection from "./sections/carousel.section";

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
