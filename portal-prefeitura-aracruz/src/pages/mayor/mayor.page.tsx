import React, { useEffect, useState } from "react";
import { Breadcrumbs, Grid, Link, Typography } from "@material-ui/core";
import { BreadCrumsContainer } from "components/breadCrumb";
import { PageTitle } from "components/pageTitle";
import Photo from "assets/images/mayor-photo.jpg";
import { InfoText, InfoTitle, MayorPhoto } from "./mayor.styles";
import { SectionTitle } from "components/section";
import { cityMayorData } from "mocked/cityMayorData";
import { Wrapper } from "components/wrapper";

export const MayorPage = () => {
  const [mayorData, setMayorData] = useState<any>({});

  useEffect(() => {
    setMayorData(cityMayorData);
  }, []);

  return (
    <>
      <BreadCrumsContainer>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/">
            Página inicial
          </Link>
          <Typography color="textPrimary">Governo</Typography>
          <Typography color="textPrimary">Prefeito</Typography>
        </Breadcrumbs>
      </BreadCrumsContainer>
      <PageTitle>PREFEITO</PageTitle>
      <Wrapper>
        <Grid container spacing={3} alignItems="flex-start">
          <Grid item xs={12} md={3}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <MayorPhoto src={Photo} alt="" />
              </Grid>
              <Grid item xs={12}>
                <InfoTitle>Horário de Atendimento</InfoTitle>
                <InfoText>{mayorData.attendingTime}</InfoText>
              </Grid>
              <Grid item xs={12}>
                <InfoTitle>Endereço</InfoTitle>
                <InfoText>{mayorData.address}</InfoText>
              </Grid>
              <Grid item xs={12}>
                <InfoTitle>Telefone</InfoTitle>
                <InfoText>{mayorData.phone}</InfoText>
              </Grid>
              <Grid item xs={12}>
                <InfoTitle>E-mail:</InfoTitle>
                <InfoText>{mayorData.email}</InfoText>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={9}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <SectionTitle style={{ margin: 0 }}>BIOGRAFIA</SectionTitle>
              </Grid>
              <Grid item xs={12}>
                <InfoText>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: mayorData.description,
                    }}
                  />
                </InfoText>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Wrapper>
    </>
  );
};
