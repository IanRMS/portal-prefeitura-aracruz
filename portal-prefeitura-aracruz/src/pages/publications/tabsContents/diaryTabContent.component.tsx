import React, { useEffect, useState } from "react";
import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField,
} from "@material-ui/core";
import InputMask from "react-input-mask";

import { SearchButton } from "components/searchButton";
import { ReactComponent as SearchIcon } from "assets/icons/search-white.svg";
import Calendar from "assets/icons/calendar.svg";
import { ReactComponent as Document } from "assets/icons/services-icons/document.svg";
import {
  CustomTableContainer,
  CustomTableHead,
  ExportText,
  TabTitle,
} from "../publications.styles";
import { diaryPublications } from "mocked/diaryPublications";
import { CustomTablePagination } from "components/tablePagination";

export const DiaryTabContent = () => {
  const [page, setPage] = useState<number>(0);
  const [listItems, setListItems] = useState<any>(null as any);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  useEffect(() => {
    setPage(1);
  }, []);

  useEffect(() => {
    setListItems(
      diaryPublications.filter((item: any) => item.page === page)[0]
    );
  }, [page]);

  return (
    <>
      <Grid item xs={12}>
        <TabTitle>Diário oficial próprio</TabTitle>
      </Grid>
      <Grid container spacing={2}>
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
        <Grid item xs={12}>
          <Grid
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
        </Grid>
        <Grid item xs={12}>
          <CustomTableContainer>
            <Table>
              <CustomTableHead>
                <TableRow>
                  <TableCell width="12%">Data Publicação</TableCell>
                  <TableCell width="12%">Número Edição</TableCell>
                  <TableCell width="10%">Ano</TableCell>
                  <TableCell width="60%">Ementa</TableCell>
                  <TableCell width="auto">Ver arquivo</TableCell>
                </TableRow>
              </CustomTableHead>
              <TableBody>
                {listItems &&
                  listItems?.items?.map((item: any) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.date}</TableCell>
                      <TableCell>{item.number}</TableCell>
                      <TableCell>{item.year}</TableCell>
                      <TableCell>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: item.ement,
                          }}
                        />
                      </TableCell>
                      <TableCell>
                        <IconButton>
                          <Document />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </CustomTableContainer>
        </Grid>
        <Grid item xs={12} style={{ marginTop: 32 }}>
          <CustomTablePagination
            items={diaryPublications}
            page={page}
            setPage={setPage}
          />
        </Grid>
      </Grid>
    </>
  );
};
