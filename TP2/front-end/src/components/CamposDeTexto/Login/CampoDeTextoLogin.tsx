import React, { ChangeEvent } from "react";

import { Box, TextField } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";

interface Props {
  setEmail: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const CampoDeTextoLogin: React.FC<Props> = ({ setEmail }) => {
  const onChangeUser = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <Box sx={{ "& > :not(style)": { m: 1 }, margin: "1rem" }}>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          required
          onChange={onChangeUser}
          sx={{ width: 300 }}
        />
      </Box>
    </Box>
  );
};

export default CampoDeTextoLogin;
