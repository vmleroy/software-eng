import React from 'react';

import {
Table, TableBody, TableCell,
TableContainer, TableHead, TableRow,
Paper
}
    from '@mui/material';

function createData(
    faixa_imc: string,
    situacao: string
) {
    return { faixa_imc, situacao };
}

const rows = [
    createData('Abaixo de 14,9'     , 'Extremamente abaixo do peso'),
    createData('Entre 15 e 15,9'    , 'Gravemente abaixo do peso'),
    createData('Entre 16 e 18,5'    , 'Abaixo do peso ideal'),
    createData('Entre 18,6 e 24,9'  , 'Faixa de peso ideal'),
    createData('Entre 25 e 29,9'    , 'Sobrepeso'),
    createData('Entre 30 e 34,9'    , 'Obesidade grau I'),
    createData('Entre 35 e 39,9'    , 'Obesidade grau II (grave)'),
    createData('Acima ou igual a 40', 'Obesidade grau III (mórbida)')
];

export default function DenseTable() {
    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 100 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>FAIXA IMC</TableCell>
              <TableCell>SITUACAO CIDADAO</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.faixa_imc}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.faixa_imc}
                </TableCell>
                <TableCell>{row.situacao}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}