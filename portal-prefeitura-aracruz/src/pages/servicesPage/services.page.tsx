import React, { useEffect, useState } from "react";
import {
  Breadcrumbs,
  Grid,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";
import { BreadCrumsContainer } from "components/breadCrumb";
import { SearchButton } from "components/searchButton";
import { ReactComponent as SearchIcon } from "assets/icons/search-white.svg";
import {
  MoreAccessedService,
  MoreAccessedServiceDescription,
  MoreAccessedServiceTitle,
} from "components/servicesContainer";
import { accessedServices } from "mocked/moreAccessedServices";
import { PageTitle } from "components/pageTitle";
import { Wrapper } from "components/wrapper";

export const ServicesPage = () => {
  const [servicesList, setServicesList] = useState<any>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setServicesList(accessedServices);
  }, []);

  const onSearch = () => {
    setServicesList(
      accessedServices.filter((service) => service.title.includes(searchTerm))
    );
  };

  return (
    <>
      <BreadCrumsContainer>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/">
            Página inicial
          </Link>
          <Typography color="textPrimary">Serviços</Typography>
        </Breadcrumbs>
      </BreadCrumsContainer>
      <PageTitle>SERVIÇOS</PageTitle>
      <Wrapper>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs>
                <TextField
                  variant="outlined"
                  name="searchTerm"
                  label="Título ou descrição"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs="auto">
                <SearchButton onClick={() => onSearch()}>
                  <SearchIcon />
                  Consultar
                </SearchButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              {servicesList?.map((service: any) => (
                <Grid item xs={12} md={6} lg={3}>
                  <MoreAccessedService key={service.title}>
                    <img src={service.icon} alt="" />
                    <div>
                      <MoreAccessedServiceTitle>
                        {service.title}
                      </MoreAccessedServiceTitle>
                      <MoreAccessedServiceDescription>
                        {service.description}
                      </MoreAccessedServiceDescription>
                    </div>
                  </MoreAccessedService>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Wrapper>
    </>
  );
};
