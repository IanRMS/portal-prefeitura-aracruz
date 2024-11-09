import React from "react";
import EasyNavigationSection from "./sections/easyNavigation.section";
import MoreAccessedServicesSection from "./sections/moreAccessedServices.section";
import NewsSection from "./sections/news.section";

export function HomePage() {
  return (
    <>
      <EasyNavigationSection />
      <MoreAccessedServicesSection />
      <NewsSection />
    </>
  );
}
