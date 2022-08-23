import React from "react";
import { useState } from "react";

import axios from "axios";

import { Button, Grid } from "@mui/material";

import Cabecalho from "../../components/Cabecalho/Cabecalho";
import FormularioProfessor from "./components/FormularioProfessor";

import IExercicio from "../../interfaces/IExercicio";

const Professor = ({}) => {
  const [cpf, setCpfAluno] = useState<string>("");
  const [descricao, setDescricao] = useState<string>("");
  const [exercicios, setExercicio] = useState<IExercicio[]>([]);

  const handleSetExercicioAdd = (exercicio: IExercicio) => {
    setExercicio((exercicios) => [...exercicios, exercicio]);
  };

  const handleSetExercicioRemove = (id: string) => {
    setExercicio(
      exercicios.filter((item) => String(item.tipoExercicio) !== id)
    );
  };

  const handleCliqueBotaoCadastro = (
    cpf: string,
    descricao: string,
    exercicios: IExercicio[]
  ) => {
    const newTreino = {
      CPFTreino: cpf,
      descricao: descricao,
      exercicios: exercicios,
    };
    console.log(newTreino);
    axios
      .post("https://tp2-engsoft.herokuapp.com/treinos", newTreino)
      .then((resposta) => {
        console.log(resposta.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  return (
    <>
      <Grid
        container
        item
        direction="column"
        alignItems="center"
        sx={{
          minWidth: "100vw",
          minHeight: "100vh",
        }}
      >
        <Cabecalho nomeNoCabecalho="Academia - Professor" />
        <FormularioProfessor
          setCpf={setCpfAluno}
          setDescricao={setDescricao}
          handleSetExercicioAdd={handleSetExercicioAdd}
          handleSetExercicioRemove={handleSetExercicioRemove}
        />
        <Button
          variant="outlined"
          sx={{ margin: "0.5rem" }}
          onClick={() => handleCliqueBotaoCadastro(cpf, descricao, exercicios)}
        >
          Cadastrar treino
        </Button>
      </Grid>
    </>
  );
};

export default Professor;
