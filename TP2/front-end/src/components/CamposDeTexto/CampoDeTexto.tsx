import React, { ChangeEvent } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

interface Props {
  setValue: React.Dispatch<React.SetStateAction<string>>;
  label?: string;
}

const CampoDeTexto: React.FC<Props> = ({ setValue, label }) => {
  const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Box sx={{ "& > :not(style)": { m: 1 }, margin: "1rem" }}>
      <Box sx={{ display: "flex", alignItems: "flex-end", width: "30vw" }}>
        <TextField
          label={label}
          variant="standard"
          defaultValue={""}
          required
          onChange={onChangeValue}
          sx={{ width: "30vw" }}
        />
      </Box>
    </Box>
  );
};

export default CampoDeTexto;
