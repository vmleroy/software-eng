import { Grid, Typography } from "@mui/material";
import { FC } from "react";
import IExercicio from "../../../interfaces/IExercicio";

interface Props {
  descricao: string;
  exercicios: IExercicio[];
}

const Treinos: FC<Props> = ({ descricao, exercicios }) => {
  return (
    <>
      <Grid
        container
        xs={12}
        alignItems="left"
        direction="column"
        sx={{ minHeight: "20vh", border: 2, borderColor: "#120458" }}
      >

        <Typography
          sx={{
            fontWeight: "600",
            fontSize: "1rem",
            marginLeft: "2rem",
          }}
        >
          {`Descrição do treino: ${descricao}`}
        </Typography>
        {exercicios.map((item) => (
          <Grid item xs={12}>
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "1rem",
                marginLeft: "2rem",
              }}
            >
              {`Número de repetições: ${item.repeticoes} `}
            </Typography>
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "1rem",
                marginLeft: "2rem",
              }}
            >
              {`Número de séries: ${item.series} `}
            </Typography>
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "1rem",
              }}
            >
              {item.tipoExercicio?.nome || ""}
            </Typography>
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "1rem",
              }}
            >
              {item.tipoExercicio?.descricao || ""}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Treinos;
