import React, { ChangeEvent, SetStateAction, useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface Props {
  value?: number | string,
  label?: string;
}


const CampoDeTextoLeitura: React.FC<Props> = ({
  value,
  label

}) => {

  return (
    <Box sx={{ '& > :not(style)': { m: 1 }, margin: '1rem' }}>
      <Box
        sx={{ display: 'flex', alignItems: 'flex-end', width: '30vw' }}
      >
        <TextField
          label={label}
          value={value}
          variant="standard"
          InputProps={{
            readOnly: true,
          }}
          InputLabelProps = {{
            shrink: true,
          }}
          sx={{ width: '20rem' }}
        />
      </Box>
    </Box>
  );

}

export default CampoDeTextoLeitura;
