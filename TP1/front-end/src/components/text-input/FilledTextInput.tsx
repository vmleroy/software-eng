import React, { ChangeEvent, SetStateAction, useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';

interface Props {
    value?: string;
}


const FilledTextInput: React.FC<Props> = ({
  value
}) => {

  return (
    <Box sx={{ '& > :not(style)': { m: 1 }, margin: "1rem" }}>
      <Box 
        sx={{ display: 'flex', alignItems: 'flex-end', width: '30vw'}}
      >
        <TextField
          value={value}
          variant="standard" 
          disabled={true}
          sx={{width: "30vw"}}        
        />
      </Box>
    </Box>
  );

}

export default FilledTextInput;
