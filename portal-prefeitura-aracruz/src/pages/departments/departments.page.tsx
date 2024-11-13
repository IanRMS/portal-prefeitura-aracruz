import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Breadcrumbs, Grid, Link, Typography } from "@material-ui/core";

import { BreadCrumsContainer } from "components/breadCrumb";
import { PageTitle } from "components/pageTitle";
import { sctructureItems } from "mocked/structureItems";
import { Wrapper } from "components/wrapper";
import { InfoText, InfoTitle, MayorPhoto } from "pages/mayor/mayor.styles";
import { SectionTitle } from "components/section";

export const DepartmentsPage = () => {
  const { id } = useParams();
  const [departmentData, setDepartmentData] = useState<any>({});

  useEffect(() => {
    setDepartmentData(sctructureItems.filter((item) => item.id === id)[0]);
  }, [id]);

  return (
    <>
      <BreadCrumsContainer>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/">
            Página inicial
          </Link>
          <Typography color="textPrimary">Governo</Typography>
          <Link color="inherit" href="/estrutura-organizacional">
            Estrutura organizacional
          </Link>
        </Breadcrumbs>
      </BreadCrumsContainer>
      <PageTitle>{departmentData.name}</PageTitle>
      <Wrapper>
        <Grid container spacing={4}>
          <Grid item xs={12} md={5} lg={3}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <MayorPhoto src={departmentData.photo} />
              </Grid>
              <Grid item xs={12}>
                <InfoTitle>Responsável</InfoTitle>
                <InfoText>{departmentData.responsible}</InfoText>
              </Grid>
              <Grid item xs={12}>
                <InfoTitle>Horário de atendimento</InfoTitle>
                <InfoText>{departmentData.attendingTime}</InfoText>
              </Grid>
              <Grid item xs={12}>
                <InfoTitle>Endereço</InfoTitle>
                <InfoText>{departmentData.address}</InfoText>
              </Grid>
              <Grid item xs={12}>
                <InfoTitle>Telefone</InfoTitle>
                <InfoText>{departmentData.phone}</InfoText>
              </Grid>
              <Grid item xs={12}>
                <InfoTitle>E-mail</InfoTitle>
                <InfoText>{departmentData.email}</InfoText>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={7} lg={9}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <SectionTitle style={{ margin: 0 }}>Competências</SectionTitle>
              </Grid>
              <Grid item xs={12}>
                {departmentData?.functions?.map((item: any) => (
                  <Grid item xs={12} key={item.id}>
                    <InfoText>{item.text}</InfoText>
                    <br />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Wrapper>
    </>
  );
};
