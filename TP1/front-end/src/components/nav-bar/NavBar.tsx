import React from "react";
import { useNavigate } from "react-router-dom";

import {
  CssBaseline,
  AppBar,
  Typography,
  Toolbar,
  Avatar,
  IconButton,
  Grid,
} from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';


const NavBar = () => {
  const navigate = useNavigate();
  
  const handleLoginClick = () => {
    if (
      document.cookie.split(";").some((item) => item.includes("status=user"))
    ) {
      // @ts-ignore
      const id = ("; " + document.cookie)
        .split("; id_user=")
        .pop()
        .split(";")[0];
      navigate("/user/" + id);
    } else navigate("/login");
  };

  return (
    <>
      <CssBaseline />
      <Grid sx={{ minWidth: "100vw" }}>
        <AppBar position="static" sx={{ backgroundColor: "#120458" }}>
          <Toolbar>
            <Avatar
              src={"/images/logo_1_95H.png"}
              variant="square"
              onClick={() => {
                navigate("/");
              }}
            />
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, margin: 1, color: "#ffdd6b" }}
            >
              cyberPizza
            </Typography>
            <IconButton
              color="primary"
              onClick={() => {
                navigate("/carrinho");
              }}
            >
              <Avatar src={"/images/carrinho_3.png"} variant="square" />
            </IconButton>
            <IconButton
              color="primary"
              onClick={() => {
                handleLoginClick();
              }}
            >
              <Avatar src={"/images/login_3.png"} />
            </IconButton>
            { document.cookie.split(";").some((item) => item.includes("status=user")) && 
              <IconButton
                color="primary"
                onClick={() => {
                  document.cookie = "status=guest";
                  navigate("/login");
                }}
              >
                <LogoutIcon sx={{color: "#ffdd6b"}}/>
              </IconButton>
            }
          </Toolbar>
        </AppBar>
      </Grid>
    </>
  );
};

export default NavBar;
