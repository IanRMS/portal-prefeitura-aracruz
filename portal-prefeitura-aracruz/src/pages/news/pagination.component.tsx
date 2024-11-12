import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { Grid } from "@material-ui/core";
import { news } from "mocked/news";
import { PaginationContainer } from "./news.styles";
import { NewsGrid } from "./newsGrid.component";

function PaginatedItems({ itemsPerPage = 0 }) {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = news.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(news.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % news.length;
    window.scrollTo({ top: 0, behavior: "smooth" });
    setItemOffset(newOffset);
  };

  return (
    <Grid container spacing={7}>
      <Grid item xs={12}>
        <NewsGrid currentItems={currentItems} />
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={3} justifyContent="center">
          <PaginationContainer>
            <ReactPaginate
              breakLabel="..."
              nextLabel=">"
              onPageChange={handlePageClick}
              pageRangeDisplayed={2}
              pageCount={pageCount}
              previousLabel="<"
              renderOnZeroPageCount={null}
            />
          </PaginationContainer>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default PaginatedItems;
