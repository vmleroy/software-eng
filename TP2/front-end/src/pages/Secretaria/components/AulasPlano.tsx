import { FC, useState } from "react";
import {
  Button,
  Grid, Typography,
} from "@mui/material";

import IAula from "../../../interfaces/IAula";
import AulaCardItem from "./AulaCardItem";

interface Props {
  nomePlano: string,
  aulas: IAula[]
  handleClickAdd: (id: string) => void
  handleClickRemove: (id: string) => void
}

const AulasPlanos: FC<Props> = ({ nomePlano, aulas, handleClickAdd, handleClickRemove }) => {

  const [planoAux, setPlanoAux] = useState<boolean>(false);
  const [aulasAux, setAulasAux] = useState<IAula[]>([]);

  const handleClick = () => {
    setAulasAux([]);
    aulas.map(item => {
      if (nomePlano === "Natacao") {
        if (item.aulaNome === "Natacao") setAulasAux(old => [...old, item]);
      }
      if (nomePlano === "Musculacao") {
        if (item.aulaNome == "Musculacao") setAulasAux(old => [...old, item]);
      }
      if (nomePlano === "Crossfit, Spinning, Ritmos") {
        if (item.aulaNome == "Crossfit" || item.aulaNome == "Spinning" || item.aulaNome == "Ritmos") setAulasAux(old => [...old, item]);
      }
    })
    setPlanoAux(false);
    setPlanoAux(true);
  }

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
            Aulas:
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
          { planoAux && aulasAux?.map(item => 
              <AulaCardItem 
                key={item._id} _id={item._id} aulaNome={item.aulaNome} 
                aulaInicio={item.aulaInicio} aulaFim={item.aulaFim} dia={item.dia}
                handleClickAdd={handleClickAdd} handleClickRemove={handleClickRemove}
              ></AulaCardItem>
            )
          }
          <Button variant="outlined" sx={{ margin: "0.5rem" }} onClick={handleClick}> Atualizar aulas </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default AulasPlanos;
