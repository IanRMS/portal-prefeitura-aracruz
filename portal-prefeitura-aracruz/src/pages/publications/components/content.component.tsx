import React, { FC, useEffect, useState } from "react";
import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@material-ui/core";
import InputMask from "react-input-mask";

import { SearchButton } from "components/searchButton";
import { ReactComponent as SearchIcon } from "assets/icons/search-white.svg";
import Calendar from "assets/icons/calendar.svg";
import { ReactComponent as Document } from "assets/icons/services-icons/document.svg";
import { ExportText, PaginationButton, TabTitle } from "../publications.styles";
import ArrowRight from "assets/icons/arrow-right-blue.svg";
import ArrowLeft from "assets/icons/arrow-left-blue.svg";

interface publicationPage {
  page: number;
  items: any;
}

interface IContentComponent {
  title: string;
  publications: publicationPage[];
}

export const ContentComponent: FC<IContentComponent> = ({
  title,
  publications,
}) => {
  const [page, setPage] = useState<number>(0);
  const [listItems, setListItems] = useState<any>(null as any);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  useEffect(() => {
    console.log(publications);
    setPage(1);
  }, []);

  useEffect(() => {
    setListItems(publications.filter((item: any) => item.page === page)[0]);
  }, [page]);

  return (
    <>
      <Grid item xs={12}>
        <TabTitle>{title}</TabTitle>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              value={searchTerm}
              variant="outlined"
              name="search"
              fullWidth
              onChange={(e) => setSearchTerm(e.target.value)}
              label="Buscar por"
            />
          </Grid>
          <Grid item xs={12} md>
            <InputMask
              mask={"99/99/9999"}
              onChange={(e) => setStartDate(e.target.value)}
              value={startDate}
            >
              {(inputProps) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Data início"
                  placeholder="dd/mm/aaaa"
                  {...inputProps}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <img src={Calendar} alt="" />
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            </InputMask>
          </Grid>
          <Grid item xs={12} md>
            <InputMask
              mask={"99/99/9999"}
              onChange={(e) => setEndDate(e.target.value)}
              value={endDate}
            >
              {(inputProps) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Data fim"
                  placeholder="dd/mm/aaaa"
                  {...inputProps}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <img src={Calendar} alt="" />
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            </InputMask>
          </Grid>
          <Grid item xs="auto">
            <SearchButton>
              <SearchIcon /> Consultar
            </SearchButton>
          </Grid>
        </Grid>
      </Grid>
      <div style={{ marginTop: 32 }}>
        <Grid
          item
          container
          spacing={2}
          justifyContent="flex-end"
          alignItems="center"
        >
          <Grid item xs="auto">
            <ExportText>Exportar</ExportText>
          </Grid>
          <Grid item xs="auto">
            <Button startIcon={<Document />}>ODT</Button>
          </Grid>
          <Grid item xs="auto">
            <Button startIcon={<Document />}>JSON</Button>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell width="12%">Data Publicação</TableCell>
                  <TableCell width="12%">Número Edição</TableCell>
                  <TableCell width="10%">Ano</TableCell>
                  <TableCell width="60%">Ementa</TableCell>
                  <TableCell width="auto">Ver arquivo</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {listItems &&
                  listItems?.items?.map((item: any) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.date}</TableCell>
                      <TableCell>{item.number}</TableCell>
                      <TableCell>{item.year}</TableCell>
                      <TableCell>{item.ement}</TableCell>
                      <TableCell>
                        <IconButton>
                          <Document />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12} style={{ marginTop: 32 }}>
          <Grid
            container
            spacing={3}
            justifyContent="center"
            alignItems="center"
          >
            {page > 1 && (
              <Grid item xs="auto">
                <IconButton onClick={() => setPage(page - 1)}>
                  <img src={ArrowLeft} alt="" />
                </IconButton>
              </Grid>
            )}
            {publications.map((item) => (
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
                        item.page === page
                          ? "var(--lightest)"
                          : "var(--primary)",
                    }}
                  >
                    {item.page}
                  </span>
                </PaginationButton>
              </Grid>
            ))}
            {publications[page]?.items?.length && (
              <Grid item xs="auto">
                <IconButton onClick={() => setPage(page + 1)}>
                  <img src={ArrowRight} alt="" />
                </IconButton>
              </Grid>
            )}
          </Grid>
        </Grid>
      </div>
    </>
  );
};
