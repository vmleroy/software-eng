import { useEffect, useState } from "react";
import axios from "axios";

import { Button, Grid, Typography } from "@mui/material";

import Cabecalho from "../../components/Cabecalho/Cabecalho";
import CadastroAluno from "./components/CadastroAluno";
import PlanosTabela from "./components/PlanosTabelas";

import IAula from "../../interfaces/IAula";
import AulasPlanos from "./components/AulasPlano";

const Secretaria = ({ }) => {

  const [aulasAux, setAulasAux] = useState<IAula[]>([]);
  const [qtdAulasPlanoAux, setQtdAulasPlanoAux] = useState<number>(0);

  const [nomePlano, setNomePlano] = useState<string>("");
  const [qtdAulasPlano, setQtdAulasPlano] = useState<number>(0);
  const [precoPlano, setPrecoPlano] = useState<string>("");
  const [aulas, setAulas] = useState<IAula[]>([]);

  const [cpfAluno, setCpf] = useState<string>("");
  const [nome, setNome] = useState<string>("");
  const [rg, setRG] = useState<string>("");
  const [dataNascimento, setDataNascimento] = useState<string>("");

  const [nomeCartao, setNomeCartao] = useState<string>("");
  const [numeroCartao, setNumeroCartao] = useState<string>("");
  const [cvv, setCVV] = useState<string>("");

  const [email, setEmail] = useState<string>("");

  const handleCliqueBotaoCadastrarAluno = (
    cpfAluno: string, nome: string, rg: string, dataNascimento: string,
    nomeCartao: string, numeroCartao: string, cvv: string,
    nomePlano: string, precoPlano: string,
    email: string
  ) => {
    if (cpfAluno && nome && rg && dataNascimento && nomeCartao && numeroCartao && cvv) {
      console.log("cadastro aluno");
      const cartao = { nome: nomeCartao, numeroCartao: numeroCartao, CVV: cvv };
      axios.post("https://tp2-engsoft.herokuapp.com/cartoescredito/", cartao)
        .then((resposta_cartao) => {
          console.log(resposta_cartao.data);
          const plano = { nome: nomePlano, preco: precoPlano, descricao: nomePlano, aulas: aulas };
          axios.post("https://tp2-engsoft.herokuapp.com/planos", plano)
            .then((resposta_plano) => {
              console.log(resposta_plano.data);
              const usuario = { email: email, senha: "123456" }
              axios.post("https://tp2-engsoft.herokuapp.com/usuarios", usuario)
                .then((resposta_usuario) => {
                  console.log(resposta_usuario.data);
                  const aluno = { nome: nome, usuario: resposta_usuario.data.usuarioCriado._id, CPF: cpfAluno, RG: rg, dataNasc: dataNascimento, cartaoCred: resposta_cartao.data, planos: resposta_plano.data, exames: [] };
                  axios.post("https://tp2-engsoft.herokuapp.com/alunos", aluno)
                    .then((resposta_aluno) => {
                      console.log(resposta_aluno.data);
                    })
                    .catch((erro_aluno) => {
                      console.log(erro_aluno);
                    });
                })
                .catch((erro_aluno) => {
                  console.log(erro_aluno);
                });

            })
            .catch((erro_plano) => {
              console.log(erro_plano);
            });
        })
        .catch((erro_cartao) => {
          console.log(erro_cartao);
        });
    } else {
      console.log("Dados incompletos, favor preencher todos os campos!");
    }
  };

  const handleAddAula = (id: string) => {
    axios.get(`https://tp2-engsoft.herokuapp.com/aulas/id/${id}`)
      .then(resposta => {
        if (qtdAulasPlano > qtdAulasPlanoAux) {
          setAulas((aulas) => [...aulas, resposta.data]);
          setQtdAulasPlanoAux(qtdAulasPlanoAux + 1);
        } else {
          console.log("numero maximo de aulas obtidos")
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleRemoveAula = (id: string) => {
    aulas.forEach(item => {
      if (item._id === id) {
        setAulas(aulas.filter((item) => item._id !== id));
        setQtdAulasPlanoAux(qtdAulasPlanoAux - 1);
      }
    })
  };

  const handleCriarAulas = () => {
    setAulasAux([]);
    setQtdAulasPlanoAux(0);
    axios.get(`https://tp2-engsoft.herokuapp.com/aulas`)
      .then((resposta) => {
        setAulasAux(resposta.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

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
        <Cabecalho nomeNoCabecalho="Academia - Secretária" />
        <CadastroAluno
          setEmail={setEmail}
          setCpf={setCpf}
          setNome={setNome}
          setRG={setRG}
          setDataNascimento={setDataNascimento}
          setNomeCartao={setNomeCartao}
          setNumeroCartao={setNumeroCartao}
          setCVV={setCVV}
        />
        <PlanosTabela setNomePlano={setNomePlano} setQtdAulas={setQtdAulasPlano} setPreco={setPrecoPlano} setOpenModal={handleCriarAulas} />
        <AulasPlanos nomePlano={nomePlano} aulas={aulasAux} handleClickAdd={handleAddAula} handleClickRemove={handleRemoveAula}></AulasPlanos>
        <Button
          variant="outlined"
          sx={{ margin: "0.5rem" }}
          onClick={() =>
            handleCliqueBotaoCadastrarAluno(
              cpfAluno, nome, rg, dataNascimento,
              nomeCartao, numeroCartao, cvv,
              nomePlano, precoPlano,
              email
            )
          }
        >
          Cadastrar Aluno
        </Button>
      </Grid>
    </>
  );
};

export default Secretaria;
