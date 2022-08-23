import React from "react";
import { useNavigate } from "react-router-dom";

import { Button, Modal, Grid, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  modalOpen: boolean;
  handleCloseModal: () => void;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ShoppingCartLoginModal: React.FC<Props> = ({ modalOpen, handleCloseModal }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignIn = () => {
    navigate("/cadastro");
  };

  const handleExitButton = () => {
    handleCloseModal();
  };

  return (
    <Modal
      open={modalOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Grid
        alignSelf="center"
        direction="column"
        justifyContent="center"
        sx={style}
      >
        <IconButton
          onClick={() => {
            handleExitButton();
          }}
        >
          <CloseIcon />
        </IconButton>
        <Grid
          container
          item
          justifyContent="center"
          justifyItems="center"
          alignContent="center"
          alignItems="center"
          direction="column"
        >
          <Typography>Voce deve estar logado para finalizar pedido!</Typography>
          <Grid>
            <Button
              variant="outlined"
              onClick={() => {
                handleLogin();
              }}
              sx={{ margin: 1 }}
            >
              Fazer Login
            </Button>
            <Button
              variant="outlined"
              onClick={() => {
                handleSignIn();
              }}
              sx={{ margin: 1 }}
            >
              Fazer cadastro
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default ShoppingCartLoginModal;
