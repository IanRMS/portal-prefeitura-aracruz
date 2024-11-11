import React from "react";
import { Breadcrumbs, Link, Typography } from "@material-ui/core";

import image from "assets/images/city-image.jpg";
import { BreadCrumsContainer } from "components/breadCrumb";
import { PageTitle } from "components/pageTitle";
import { CityImage, Title, Text, TextContainer } from "./history.styles";
import { cityHistoryText } from "mocked/cityHistoryText";

export function HistoryPage() {
  return (
    <>
      <BreadCrumsContainer>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/">
            Página inicial
          </Link>
          <Typography color="textPrimary">Município</Typography>
        </Breadcrumbs>
      </BreadCrumsContainer>
      <div>
        <PageTitle>HISTÓRIA</PageTitle>
        <CityImage src={image} alt="" />
        <TextContainer>
          <Title>Reconstruindo nossa história</Title>
          <Text>
            <span
              dangerouslySetInnerHTML={{
                __html: cityHistoryText,
              }}
            />
          </Text>
        </TextContainer>
      </div>
    </>
  );
}
