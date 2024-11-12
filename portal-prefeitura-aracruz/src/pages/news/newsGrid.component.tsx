import React from "react";
import { Grid } from "@material-ui/core";
import { useNavigate } from "react-router";

import {
  New,
  NewDescription,
  NewImage,
  NewTheme,
  NewTitle,
} from "components/new";

export const NewsGrid = (currentItems: any) => {
  const navigate = useNavigate();
  return (
    <Grid container spacing={4}>
      {currentItems.currentItems.map((item: any) => (
        <Grid item xs={12} md={6} lg={3} key={item.id}>
          <New onClick={() => navigate(`/noticias/${item.id}`)}>
            <NewImage src={item.image} alt={item.title} />
            <NewTheme>{item.theme}</NewTheme>
            <NewTitle>{item.title}</NewTitle>
            <NewDescription>{item.description}</NewDescription>
          </New>
        </Grid>
      ))}
    </Grid>
  );
};
