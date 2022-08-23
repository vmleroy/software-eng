import React from 'react';
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import { Button, Grid } from '@mui/material'

import Cabecalho from '../../components/Cabecalho/Cabecalho';
import CampoDeTextoLogin from '../../components/CamposDeTexto/Login/CampoDeTextoLogin';
import CampoDeTextoSenha from '../../components/CamposDeTexto/Senha/CampoDeTextoSenha';

/* const NomeFuncao/PAG: FC<IProps> = ({ props separadas por vírgula e com tipo}) => { desembola aqui as func return(desembola aqui oq visivel);};

export default NomeFuncao/PAG;
 */

const Home = ({ }) => {

  const navigate = useNavigate();

  const [email, setEmail] = useState<string>();
  const [senha, setSenha] = useState<string>();

  const handleCliqueBotao = (email: string | undefined, senha: string | undefined) => {
      axios.post('https://tp2-engsoft.herokuapp.com/usuarios/login', { email: email, senha:senha })
          .then((resposta) => {
              console.debug(resposta.data);
              document.cookie = "status="+resposta.data["tipo"];
              document.cookie = "id_user=" + resposta.data["id"];

              const status = document.cookie.split('status=')[1].split(';')[0]
              if (['medico', 'aluno', 'professor', 'secretaria'].includes(status.toLowerCase())){
                  navigate("/" + status.toLowerCase());
              }


          })
          .catch((erro) => {
              console.log(erro);
              document.cookie = "status=guest";

          });
  };

  return (
    <>
      <Grid
        container
        item
        direction='column'
        alignItems='center'
        sx={{
          minWidth: '100vw',
          minHeight: '100vh'
        }}
      >
        <Cabecalho nomeNoCabecalho='Academia' />
        <CampoDeTextoLogin setEmail={setEmail} />
        <CampoDeTextoSenha setPassword={setSenha} />
        <Button variant="outlined" sx={{ margin: "0.5rem" }}
          onClick={() => {
            handleCliqueBotao(email, senha);
          }}
        >
          {" "} Login {" "}
        </Button>
      </Grid>
    </>
  );
};

export default Home;
