import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {
  Breadcrumbs,
  FormControl,
  Grid,
  InputLabel,
  Link,
  Typography,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { newsCategories } from "mocked/newCategories";
import { ReactComponent as SearchIcon } from "assets/icons/search-white.svg";
import PaginatedItems from "./pagination.component";
import { BreadCrumsContainer } from "components/breadCrumb";
import { PageTitle } from "components/pageTitle";
import { SearchButton } from "components/searchButton";
import { Wrapper } from "components/wrapper";

export function NewsPage() {
  const navigate = useNavigate();
  const [searchTitle, setSearchTitle] = useState<string>("");
  const [searchCategory, setSearchCategory] = useState<string>("0");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <>
      <BreadCrumsContainer>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/" onClick={handleClick}>
            Página inicial
          </Link>
          <Typography color="textPrimary">Notícias</Typography>
        </Breadcrumbs>
      </BreadCrumsContainer>
      <PageTitle>Notícias</PageTitle>
      <Wrapper>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="title"
                  label="Título ou descrição"
                  value={searchTitle}
                  onChange={(e) => setSearchTitle(e.target.value)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs>
                <FormControl variant="outlined" fullWidth>
                  <InputLabel shrink id="demo-simple-select-outlined-label">
                    Categorias
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={searchCategory}
                    onChange={(e) => setSearchCategory(e.target.value as any)}
                    label="Categorias"
                    displayEmpty
                  >
                    {newsCategories.map((category) => (
                      <MenuItem key={category.id} value={category.id}>
                        {category.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs="auto">
                <SearchButton>
                  <SearchIcon /> Consultar
                </SearchButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <PaginatedItems itemsPerPage={8} />
          </Grid>
        </Grid>
      </Wrapper>
    </>
  );
}
