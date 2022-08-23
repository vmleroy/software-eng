import React, { useState } from "react";
import axios from "axios";

import { Grid, TextField } from "@mui/material";
import TextInput from "../text-input/TextInput";
import FilledTextInput from  "../text-input/FilledTextInput"


interface Props {
    city?: string,
    street?: string,
    district?: string,
    setNumber: React.Dispatch<React.SetStateAction<string | undefined>>,
    setComplement: React.Dispatch<React.SetStateAction<string | undefined>>
}

const CepComponents: React.FC<Props> = ({
    city, street, district, setNumber, setComplement
}) => {
  return (
    <Grid
      container
      item
      alignContent="center"
      alignItems="center"
      justifyContent="center"
      direction="row"
    >
        <FilledTextInput value={street} />
        <TextInput setValue={setNumber} label="Numero" />
        <TextInput setValue={setComplement} label="Complemento" />
        <FilledTextInput value={district} />
        <FilledTextInput value={city} />
    </Grid>
  );
};

export default CepComponents;
