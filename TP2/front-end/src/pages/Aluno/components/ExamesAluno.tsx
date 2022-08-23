import { Grid, Typography } from "@mui/material";
import { FC } from "react";
import IExame from "../../../interfaces/IExame";

interface Props {
  exames: IExame[];
}

const ExamesAluno: FC<Props> = ({ exames }) => {
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
            Exames:
          </Typography>
        </Grid>
        <Grid
          container
          item
          xs={12}
          alignItems="left"
          direction="column"
          sx={{ minHeight: "20vh", border: 2, borderColor: "#120458" }}
        >
          {exames.map((exame) => (
            <Grid item xs={4}>

              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "1rem",
                  marginLeft: "2rem",
                }}
              >
                {`Descrição do exame: ${exame.descricao} `}
              </Typography>
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "1rem",
                  marginLeft: "2rem",
                }}
              >
                {`Altura do alunos: ${exame.altura} `}
              </Typography>
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "1rem",
                  marginLeft: "2rem",
                }}
              >
                {`IMC: ${exame.IMC} `}
              </Typography>
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "1rem",
                  marginLeft: "2rem",
                }}
              >
                {`Pressão Arterial: ${exame.pressaoArt}`}
              </Typography>
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "1rem",
                  marginLeft: "2rem",
                }}
              >
                {`Peso: ${exame.peso} `}
              </Typography>
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "1rem",
                  marginLeft: "2rem",
                }}
              >
                {`Gordura Corporal: ${exame.gorduraCorp}`}
              </Typography>
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "1rem",
                  marginLeft: "2rem",
                }}
              >
                {`Massa Magra: ${exame.massaMagra}`}
              </Typography>
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "1rem",
                  marginLeft: "2rem",
                }}
              >
                {exame.estaApto
                  ? "O aluno está apto para realizar as atividades"
                  : "O aluno não está apto para realizar as atividades"}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default ExamesAluno;
