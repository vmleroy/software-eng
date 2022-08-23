import { Grid, Typography } from "@mui/material";
import { FC } from "react";
interface Props {
  nome: string;
  cpf: string;
  rg: string;
  dataNascimento: string;
}

const DadosAluno: FC<Props> = ({ nome, cpf, rg, dataNascimento }) => {
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
            Dados:
          </Typography>
        </Grid>
        <Grid
          container
          item
          xs={12}
          alignItems="left"
          direction="column"
          sx={{
            minHeight: "20vh",
            border: 2,
            borderColor: "#120458",
          }}
        >
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: "1rem",
              marginLeft: "2rem",
            }}
          >
            {` Nome aluno: ${nome}`}
          </Typography>
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: "1rem",
              marginLeft: "2rem",
            }}
          >
            {`CPF aluno: ${cpf}`}
          </Typography>
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: "1rem",
              marginLeft: "2rem",
            }}
          >
            {`RG aluno: ${rg}`}
          </Typography>
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: "1rem",
              marginLeft: "2rem",
            }}
          >
            {`Data Nascimento:${dataNascimento}`}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default DadosAluno;
