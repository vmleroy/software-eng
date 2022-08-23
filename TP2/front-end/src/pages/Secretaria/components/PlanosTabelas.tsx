import { FC } from "react";
import {
  Grid,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

interface Props {
  setOpenModal: () => void, 
  setNomePlano: React.Dispatch<React.SetStateAction<string>>, 
  setQtdAulas: React.Dispatch<React.SetStateAction<number>>,
  setPreco: React.Dispatch<React.SetStateAction<string>>
}

const PlanosTabela: FC<Props> = ({ setOpenModal, setNomePlano, setQtdAulas, setPreco }) => {

  const handleClick = (nome: string, qtdAulas: number, preco: string) => {
    console.log(nome, qtdAulas, preco)
    setNomePlano(nome);
    setQtdAulas(qtdAulas);
    setPreco(preco);
    setOpenModal();
  };

  return (
    <>
      <Grid
        container
        width="95%"
        margin="0.5rem"
        alignItems="center"
        direction="row"
        sx={{ minHeight: "25vh" }}
      >
        <Grid
          item
          xs={12}
          sx={{ minHeight: "5vh", backgroundColor: "#120458" }}
        >
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: "1.5rem",
              color: "white",
              margin: "1rem",
            }}
          >
            Planos:
          </Typography>
        </Grid>
        <Grid
          container
          item
          xs={12}
          alignItems="left"
          direction="row"
          justifyContent="left"
          padding="2rem"
          sx={{
            minHeight: "40vh",
            maxWidth: "100vw",
            border: 2,
            borderColor: "#120458",
          }}
        >
          <Grid item xs={3} sx={{ margin: 0.5, border: 2, borderColor: "#120458" }}>
            <TableContainer>
              <Table size="medium" aria-label="Natação" width="100%">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Natacao</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">Mensal</TableCell>
                    <TableCell align="left" onClick={(e) => { handleClick("Natacao", 2, "215") }}>2x semana - R$215,00</TableCell>
                    <TableCell align="left" onClick={(e) => { handleClick("Natacao", 3, "229") }}>3x semana - R$229,00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">Semestral</TableCell>
                    <TableCell align="left" onClick={(e) => { handleClick("Natacao", 2, "6x 193.50") }}>2x semana - 6x R$193,50</TableCell>
                    <TableCell align="left" onClick={(e) => { handleClick("Natacao", 3, "6x 206.10") }}>3x semana - 6x R$206,10</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">Anual</TableCell>
                    <TableCell align="left" onClick={(e) => { handleClick("Natacao", 2, "12x 182.75") }}>2x semana - 12x R$182,75</TableCell>
                    <TableCell align="left" onClick={(e) => { handleClick("Natacao", 3, "12x 182.75") }}>3x semana - 12x R$182,75</TableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </TableContainer>
          </Grid>

          <Grid item xs={3} sx={{ margin: 0.5, border: 2, borderColor: "#120458" }}>
            <TableContainer>
              <Table size="medium" aria-label="Natação" width="100%">
                <TableHead>
                  <TableRow>
                    <TableCell align="center"> Musculacao </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">Mensal</TableCell>
                    <TableCell align="left" onClick={(e) => { handleClick("Musculacao", 7, "125") }}>7x semana - R$125,00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">Semestral</TableCell>
                    <TableCell align="left" onClick={(e) => { handleClick("Musculacao", 7, "6x 112.50") }}>7x semana - 6x R$112,50</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">Anual</TableCell>
                    <TableCell align="left" onClick={(e) => { handleClick("Musculacao", 7, "12x 106.25") }}>7x semana - 12x R$106,25</TableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </TableContainer>
          </Grid>

          <Grid item xs={3} sx={{ margin: 0.5, border: 2, borderColor: "#120458" }}>
            <TableContainer>
              <Table size="medium" aria-label="Natação" width="100%">
                <TableHead>
                  <TableRow>
                    <TableCell align="center"> Crossfit, Spinning, Ritmos </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">Mensal</TableCell>
                    <TableCell align="left" onClick={(e) => { handleClick("Crossfit, Spinning, Ritmos", 3, "155") }}>3x semana - R$155,00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">Semestral</TableCell>
                    <TableCell align="left" onClick={(e) => { handleClick("Crossfit, Spinning, Ritmos", 3, "6x 139") }}>3x semana - 6X R$139,00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">Anual</TableCell>
                    <TableCell align="left" onClick={(e) => { handleClick("Crossfit, Spinning, Ritmos", 3, "12x 130") }}>3x semana - 12X R$130,00</TableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </TableContainer>
          </Grid>

        </Grid>
      </Grid>
    </>
  );
};

export default PlanosTabela;
