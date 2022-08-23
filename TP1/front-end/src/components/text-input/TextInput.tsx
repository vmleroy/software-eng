import React, { ChangeEvent, SetStateAction, useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';

interface Props {
    setValue: React.Dispatch<React.SetStateAction<string | undefined>>;
    label?: string;
}


const TextInput: React.FC<Props> = ({
  setValue,
  label

}) => {
  
  const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
  };

  return (
    <Box sx={{ '& > :not(style)': { m: 1 }, margin: "1rem" }}>
      <Box 
        sx={{ display: 'flex', alignItems: 'flex-end', width: '30vw'}}
      >
        <TextField
          label={label}
          variant="standard" 
          required
          onChange={onChangeValue}
          sx={{width: "30vw"}}        
        />
      </Box>
    </Box>
  );

}

export default TextInput;
