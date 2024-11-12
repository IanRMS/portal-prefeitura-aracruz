import React from "react";
import { Breadcrumbs, Grid, Link, Typography } from "@material-ui/core";
import { BreadCrumsContainer } from "components/breadCrumb";
import { PageTitle } from "components/pageTitle";
import { sctructureItems } from "mocked/structureItems";
import { OrganizationalLink, Text } from "./organizationalStructure.styles";
import { Wrapper } from "components/wrapper";

export const OrganizationalStructurePage = () => {
  return (
    <>
      <BreadCrumsContainer>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/">
            Página inicial
          </Link>
          <Typography color="textPrimary">Governo</Typography>
        </Breadcrumbs>
      </BreadCrumsContainer>
      <PageTitle>ESTRUTURA ORGANIZACIONAL</PageTitle>
      <Wrapper>
        <Grid container spacing={3}>
          {sctructureItems.map((item) => (
            <Grid key={item.id} item xs={12} md={6}>
              <OrganizationalLink href={`/estrutura-organizacional/${item.id}`}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs="auto">
                    <img src={item.icon} alt="" />
                  </Grid>
                  <Grid item xs>
                    <Text>{item.name}</Text>
                  </Grid>
                </Grid>
              </OrganizationalLink>
            </Grid>
          ))}
        </Grid>
      </Wrapper>
    </>
  );
};
