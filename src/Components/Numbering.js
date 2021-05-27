import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { dark } from "@material-ui/core/styles/createPalette";

export const Numbering = ({ setPage, numOfPages = 10 }) => {
  const theme = createMuiTheme({
    palette: dark,
  });

  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <div className="numbering">
      <ThemeProvider theme={theme}>
        <Pagination
          count={numOfPages}
          onChange={(event) => handlePageChange(event.target.textContent)}
          hideNextButton
          hidePrevButton
        />
      </ThemeProvider>
    </div>
  );
};
