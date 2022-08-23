import React from "react";
import { FC } from "react";

import { AppBar, CssBaseline, Grid, Toolbar, Typography } from "@mui/material";

interface Props {
  nomeNoCabecalho: string;
}

const Cabecalho: FC<Props> = ({ nomeNoCabecalho }) => {
  return (
    <>
      <CssBaseline />
      <Grid sx={{ minWidth: "100vw" }}>
        <AppBar position="static" sx={{ backgroundColor: "#120458" }}>
          <Toolbar>
            <Typography align="center" sx={{ flexGrow: 1, fontSize: 32 }}>
              {nomeNoCabecalho}
            </Typography>
          </Toolbar>
        </AppBar>
      </Grid>
    </>
  );
};

export default Cabecalho;
