import React, { useState } from "react";

import axios from 'axios';

import { Grid, Button } from "@mui/material";

import Cabecalho from "../../components/Cabecalho/Cabecalho";
import FormularioMedico from "./components/FormularioMedico";

const Medico = ({ }) => {
  const [cpfAluno, setCpf] = useState<string>("");
  const [altura, setAltura] = useState<string>("");
  const [peso, setPeso] = useState<string>("");
  const [pressaoArt, setPressaoArt] = useState<string>("");
  const [gorduraCorp, setGorduraCorp] = useState<string>("");
  const [massaMagra, setMassaMagra] = useState<string>("");
  const [descricao, setDescricao] = useState<string>("");
  const [apto, setApto] = useState<boolean>(false);

  const [IMC, setIMC] = useState<number>(0);
  const [resultadoIMC, setResultadoIMC] = useState<string>("");

  const handleCliqueBotaoIMC = (
    altura: string, peso: string
  ) => {
    if (peso !== "" && altura !== "") {
      let imc = parseFloat(
        (parseFloat(peso) / ((parseFloat(altura) ** 2))).toFixed(1)
      );
      setIMC(imc);

      if (imc < 15) setResultadoIMC("Extremamente abaixo do peso");
      else if (imc >= 15 && imc < 16)
        setResultadoIMC("Gravemente abaixo do peso");
      else if (imc >= 16 && imc < 18.6) setResultadoIMC("Abaixo do peso ideal");
      else if (imc >= 18.6 && imc < 25) setResultadoIMC("Faixa de peso ideal");
      else if (imc >= 25 && imc < 30) setResultadoIMC("Sobrepeso");
      else if (imc >= 30 && imc < 35) setResultadoIMC("Obesidade grau I");
      else if (imc >= 35 && imc < 40)
        setResultadoIMC("Obesidade grau II (grave)");
      else setResultadoIMC("Obesidade grau III (morbida)");
    }
  };

  const handleCliqueBotaoCadastro = (
    cpfAluno: string, altura: string, peso: string, pressaoArt: string,
    gorduraCorp: string, massaMagra: string, IMC: number, resultadoIMC: string,
    descricao: string, apto: boolean
  ) => {
    if (IMC !== 0) {
      if (cpfAluno !== "" && altura !== "" && peso !== "" && descricao !== "" && pressaoArt !== "" && gorduraCorp !== "" && massaMagra !== "") {
        const novoExame = {
          CPFAluno: cpfAluno, descricao: descricao, peso: parseFloat(peso), altura: parseFloat(altura),
          pressaoArt: pressaoArt, gorduraCorp: gorduraCorp, massaMagra: massaMagra,
          IMC: IMC, estaApto: apto
        }
        axios.post("https://tp2-engsoft.herokuapp.com/exames/", novoExame)
          .then(resposta => {
            console.log(resposta.data);
          })
          .catch(erro => {
            console.log(erro);
          })
      } else {
        console.log("Dados incompletos, favor preencher todos os campos!");
      }
    } else {
      console.log("Favor calcular IMC");
    }
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
        <Cabecalho nomeNoCabecalho="Academia - Médico" />
        <FormularioMedico
          setCpf={setCpf}
          setAltura={setAltura}
          setPeso={setPeso}
          setPressaoArt={setPressaoArt}
          setGorduraCorp={setGorduraCorp}
          setMassaMagra={setMassaMagra}
          setDescricao={setDescricao}
          setApto={setApto}
          IMC={IMC}
          resultadoIMC={resultadoIMC}
        />
        <Button
          variant="outlined"
          sx={{ margin: "0.5rem" }}
          onClick={() => handleCliqueBotaoIMC(altura, peso)}
        >
          Calculo do IMC
        </Button>
        <Button
          variant="outlined"
          sx={{ margin: "0.5rem" }}
          onClick={() =>
            handleCliqueBotaoCadastro(
              cpfAluno,
              altura,
              peso,
              pressaoArt,
              gorduraCorp,
              massaMagra,
              IMC,
              resultadoIMC,
              descricao,
              apto
            )
          }
        >
          Cadastrar exame
        </Button>
      </Grid>
    </>
  );
};

export default Medico;
