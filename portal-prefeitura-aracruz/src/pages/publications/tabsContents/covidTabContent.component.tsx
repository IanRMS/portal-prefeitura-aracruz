import { covidPublications } from "mocked/covidPublications";
import React, { useEffect, useState } from "react";
import {
  CustomTableContainer,
  CustomTableHead,
  ExportText,
  MenuItemLabel,
  TabTitle,
} from "../publications.styles";
import {
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Menu,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField,
} from "@material-ui/core";
import InputMask from "react-input-mask";
import Calendar from "assets/icons/calendar.svg";
import { SearchButton } from "components/searchButton";
import { ReactComponent as SearchIcon } from "assets/icons/search-white.svg";
import { ReactComponent as Document } from "assets/icons/services-icons/document.svg";
import { ReactComponent as Options } from "assets/icons/options.svg";
import { ReactComponent as FileView } from "assets/icons/file-view.svg";
import { CustomTablePagination } from "components/tablePagination";

export const CovidTabContent = () => {
  const [page, setPage] = useState<number>(0);
  const [listItems, setListItems] = useState<any>(null as any);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [pubVehicle, setPubVehicle] = useState<string>("");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClickMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => setAnchorEl(null);

  useEffect(() => {
    setPage(1);
  }, []);

  useEffect(() => {
    setListItems(
      covidPublications.filter((item: any) => item.page === page)[0]
    );
  }, [page]);

  return (
    <>
      <Grid item xs={12}>
        <TabTitle>Ações Covid-19</TabTitle>
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
              <FormControl variant="outlined" fullWidth>
                <InputLabel id="demo-simple-select-outlined-label">
                  Veículo publicação
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={pubVehicle}
                  onChange={(e) => setPubVehicle(e.target.value as string)}
                  label="Veículo publicação"
                >
                  <MenuItem value="">TODOS</MenuItem>
                  <MenuItem value="1">PORTAL</MenuItem>
                  <MenuItem value="2">JORNAL</MenuItem>
                </Select>
              </FormControl>
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
                  <TableCell width="12%">Número</TableCell>
                  <TableCell width="60%">Descrição</TableCell>
                  <TableCell width="auto">Republicação</TableCell>
                  <TableCell width={60}>Opções</TableCell>
                </TableRow>
              </CustomTableHead>
              <TableBody>
                {listItems &&
                  listItems?.items?.map((item: any) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.date}</TableCell>
                      <TableCell>{item.number}</TableCell>
                      <TableCell>{item.description}</TableCell>
                      <TableCell>{item.republished ? "Sim" : "Não"}</TableCell>
                      <TableCell>
                        <IconButton onClick={handleClickMenu}>
                          <Options />
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
            items={covidPublications}
            page={page}
            setPage={setPage}
          />
        </Grid>
      </Grid>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={handleCloseMenu}>
          <FileView /> <MenuItemLabel>Ver arquivo</MenuItemLabel>
        </MenuItem>
        <MenuItem onClick={handleCloseMenu}>
          <Document /> <MenuItemLabel>Detalhes</MenuItemLabel>
        </MenuItem>
      </Menu>
    </>
  );
};
