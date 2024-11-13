import React, { FC } from "react";
import { Grid, TextField } from "@material-ui/core";
import { TabTitle } from "../publications.styles";
import { SearchButton } from "components/searchButton";
import { ReactComponent as SearchIcon } from "assets/icons/search-white.svg";

interface IContentComponent {
  title: string;
}

export const ContentComponent: FC<IContentComponent> = ({ title }) => {
  return (
    <>
      <Grid item xs={12}>
        <TabTitle>{title}</TabTitle>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              name="search"
              fullWidth
              onChange={(e) => console.log(e.target.value)}
              label="Buscar por"
            />
          </Grid>
          <Grid item xs></Grid>
          <Grid item xs></Grid>
          <Grid item xs="auto">
            <SearchButton>
              <SearchIcon /> Consultar
            </SearchButton>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
