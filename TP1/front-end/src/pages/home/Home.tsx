import React from "react";
import { Grid } from "@mui/material";
import NavBar from "../../components/nav-bar/NavBar";
import Promotions from "../../components/cardapio/Promotions";
import Pizzas from "../../components/cardapio/Pizzas";
import Drinks from "../../components/cardapio/Drinks";

const Home: React.FC = () => {
  return (
    <>
      <Grid
        container
        direction="column"
        sx={{
          minWidth: "100vw",
          minHeight: "100vh",
          backgroundColor: "#f5f5f5",
        }}
      >
        <NavBar />
        <Grid
          container
          item
          justifyContent="center"
          alignItems="center"
          rowSpacing={4}
          marginTop="0.5rem"
        >
          <Promotions />
          <Pizzas />
          <Drinks />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
