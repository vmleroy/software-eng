import { Checkbox, Grid, Typography } from "@mui/material";
import { FC } from "react";
import CampoDeTexto from "../../../components/CamposDeTexto/CampoDeTexto";

interface Props {
  setCpf: React.Dispatch<React.SetStateAction<string>>;
  setNome: React.Dispatch<React.SetStateAction<string>>;
  setRG: React.Dispatch<React.SetStateAction<string>>;
  setDataNascimento: React.Dispatch<React.SetStateAction<string>>;
  // setExameFeito: React.Dispatch<React.SetStateAction<boolean>>;
  setNomeCartao: React.Dispatch<React.SetStateAction<string>>;
  setNumeroCartao: React.Dispatch<React.SetStateAction<string>>;
  setCVV: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>
}

const CadastroAluno: FC<Props> = ({
  setEmail, setCpf, setNome, setRG, setDataNascimento, setNomeCartao, setNumeroCartao, setCVV
}) => {
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
            Cadastro Aluno:
          </Typography>
        </Grid>
        <Grid
          container
          item
          xs={12}
          alignItems="left"
          direction="row"
          sx={{ minHeight: "20vh", border: 2, borderColor: "#120458" }}
        >
          <CampoDeTexto label="Email:" setValue={setEmail} />
          <CampoDeTexto label="CPF do Aluno:" setValue={setCpf} />
          <CampoDeTexto label="Nome do Aluno:" setValue={setNome} />
          <CampoDeTexto label="RG (apenas números):" setValue={setRG} />
          <CampoDeTexto label="Data de Nascimento:" setValue={setDataNascimento} />
          <CampoDeTexto label="Nome no cartao:" setValue={setNomeCartao} />
          <CampoDeTexto label="Numero cartao:" setValue={setNumeroCartao} />
          <CampoDeTexto label="CVV:" setValue={setCVV} />
          {/* <Grid item container xs={12} alignItems="center" direction="row">
            <Typography sx={{ marginLeft: "2rem" }}>Exame Feito?</Typography>
            <Checkbox
              aria-label="Exame Feito"
              onChange={(e) => {
                setExameFeito(e.target.checked);
              }}
            />
          </Grid> */}
        </Grid>
      </Grid>
    </>
  );
};

export default CadastroAluno;
