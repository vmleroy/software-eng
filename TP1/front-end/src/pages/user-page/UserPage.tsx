import React, { useState } from "react";
import { Grid } from "@mui/material";
import NavBar from "../../components/nav-bar/NavBar";
import UserData from "../../components/user-page/UserData";
import AddressData from "../../components/user-page/AddressData";
import LastsOrders from "../../components/user-page/LastsOrders";

const UserPage: React.FC = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  return (
    <Grid
      sx={{ minWidth: "100vw", minHeight: "100vh", backgroundColor: "#f5f5f5" }}
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
        <UserData />
        <AddressData />
        <LastsOrders />
      </Grid>
    </Grid>
  );
};

export default UserPage;
