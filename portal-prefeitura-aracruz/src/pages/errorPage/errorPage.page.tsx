import { PageTitle } from "components/pageTitle";
import React from "react";
import { CityImage } from "./errorPage.styles";
import City from "assets/images/city-vector.jpg"

export const ErrorPage = () => {
  return (
    <>
      <PageTitle>Página não encontrada</PageTitle>
      <CityImage src={City} />
    </>
  );
};
