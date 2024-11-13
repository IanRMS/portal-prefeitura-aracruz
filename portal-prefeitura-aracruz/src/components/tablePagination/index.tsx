import React from "react";
import { Grid, IconButton } from "@material-ui/core";

import ArrowRight from "assets/icons/arrow-right-blue.svg";
import ArrowLeft from "assets/icons/arrow-left-blue.svg";
import { FC } from "react";
import { PaginationButton } from "./styles";

interface ITablePagination {
  page: number;
  setPage: any;
  items: any;
}

export const CustomTablePagination: FC<ITablePagination> = ({
  page,
  setPage,
  items,
}) => {
  return (
    <Grid container spacing={3} justifyContent="center" alignItems="center">
      {page > 1 && (
        <Grid item xs="auto">
          <IconButton onClick={() => setPage(page - 1)}>
            <img src={ArrowLeft} alt="" />
          </IconButton>
        </Grid>
      )}
      {items.map((item: any) => (
        <Grid item xs="auto" key={item.page}>
          <PaginationButton
            onClick={() => setPage(item.page)}
            style={{
              background: item.page === page ? "var(--primary)" : "none",
            }}
          >
            <span
              style={{
                color:
                  item.page === page ? "var(--lightest)" : "var(--primary)",
              }}
            >
              {item.page}
            </span>
          </PaginationButton>
        </Grid>
      ))}
      {items[page]?.items?.length && (
        <Grid item xs="auto">
          <IconButton onClick={() => setPage(page + 1)}>
            <img src={ArrowRight} alt="" />
          </IconButton>
        </Grid>
      )}
    </Grid>
  );
};
