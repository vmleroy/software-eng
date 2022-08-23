import React, { useState } from "react";
import axios from "axios";

import { Button, Grid, Typography } from "@mui/material";

import TextInput from "../../components/text-input/TextInput";
import TextInputPassword from "../../components/text-input/password/TextInputPassword";
import NavBar from "../../components/nav-bar/NavBar";
import CepComponents from "../../components/cadastro/CepComponents";
import IAddress from "../../interfaces/IAddress";

const Cadastro: React.FC = () => {

  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [cpf, setCPF] = useState<string>();
  const [phone, setPhone] = useState<string>();
  const [cep, setCep] = useState<string>();
  const [city, setCity] = useState<string>();
  const [street, setStreet] = useState<string>();
  const [district, setDistrict] = useState<string>();
  const [number, setNumber] = useState<string>();
  const [complement, setComplement] = useState<string>();

  const [cepSearched, setCepSearched] = useState(false);

  const handleCEP = () => {
    setCepSearched(true);
    axios.get('https://viacep.com.br/ws/' + cep + '/json/')
      .then((response) => {
        setCity(response.data.localidade);
        setStreet(response.data.logradouro);
        setDistrict(response.data.bairro);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClick = async (
    email: string | undefined,
    password: string | undefined,
    name: string | undefined,
    cpf: string | undefined,
    phone: string | undefined,
    cep: string | undefined,
    city: string | undefined,
    street: string | undefined,
    district: string | undefined,
    number: string | undefined,
    complement: string | undefined
  ) => {
    await axios.post("https://cyber-pizza-engsoft.herokuapp.com/endereco", {
      cep: cep,
      city: city,
      street: street,
      district: district,
      number: parseInt(number!),
      complement: complement
    })
      .then((response) => {
        axios.post("https://cyber-pizza-engsoft.herokuapp.com/usuario", {
          email: email,
          password: password,
          name: name,
          cpf: cpf,
          phone: phone,
          address: response.data
        })
          .then((response_2) => {
            console.log(response_2.data);

          })
          .catch((erro_2) => {
            console.log(erro_2);
          });
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  return (
    <Grid
      sx={{ minWidth: "100vh", minHeight: "100vh", backgroundColor: "#f5f5f5" }}
    >
      <NavBar />
      <Grid
        container
        item
        alignContent="center"
        alignItems="center"
        justifyContent="center"
        direction="column"
        sx={{ minWidth: "80vh", minHeight: "80vh" }}
      >
        <Typography
          sx={{
            fontWeight: "1500",
            fontSize: "5rem",
            color: "#ffdd6b",
          }}
        >
          CADASTRO
        </Typography>
        <TextInput setValue={setName} label="Nome" />
        <TextInput setValue={setEmail} label="Email" />
        <TextInputPassword setPassword={setPassword} />
        <TextInput setValue={setCPF} label="CPF" />
        <TextInput setValue={setPhone} label="Celular" />
        <TextInput setValue={setCep} label="CEP" />
        <Button variant="outlined" onClick={handleCEP}> Procurar CEP </Button>
        {cepSearched &&
          <CepComponents
            city={city}
            street={street}
            district={district}
            setNumber={setNumber}
            setComplement={setComplement}
          />
        }
        {cepSearched &&
          <Button
            variant="outlined"
            sx={{ margin: "0.5rem" }}
            onClick={() => {
              handleClick(email, password, name, cpf, phone, cep,
                city, street, district, number,
                complement);
            }}
          >
            {" "}
            Cadastro{" "}
          </Button>
        }
      </Grid>
    </Grid>
  );
};

export default Cadastro;


function parseJSON(arg0: Promise<import("axios").AxiosResponse<any, any>>): JSON {
  throw new Error("Function not implemented.");
}
/*
  const handleClick = (
    email: string | undefined,
    password: string | undefined,
    name: string | undefined,
    cpf: string | undefined,
    phone: string | undefined,
    address: string | undefined
  ) => {
    axios
      .post("http://localhost:8000/usuario", {
        email: email,
        password: password,
        name: name,
        cpf: cpf,
        phone: phone,
        address: address,
      })
      .then((resposta) => {
        console.debug(resposta.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
    console.log("Verificando login");
  };
  return (
    <Grid
      sx={{ minWidth: "100vh", minHeight: "100vh", backgroundColor: "#121212" }}
    >
      <NavBar />
      <Grid
        container
        item
        alignContent="center"
        alignItems="center"
        justifyContent="center"
        direction="column"
        sx={{ minWidth: "80vh", minHeight: "80vh" }}
      >
        <Typography
          sx={{
            fontWeight: "1500",
            fontSize: "5rem",
            color: "#ffdd6b",
          }}
        >
          CADASTRO
        </Typography>
        <TextInput setValue={setName} label="Name" />
        <TextInput setValue={setEmail} label="Email" />
        <TextInputPassword setPassword={setPassword} />
        <TextInput setValue={setCPF} label="CPF" />
        <TextInput setValue={setPhone} label="Phone" />
        <TextInput setValue={setAddress} label="Address" />
        <Button
          variant="outlined"
          sx={{ margin: "0.5rem" }}
          onClick={() => {
            handleClick(email, password, name, cpf, phone, address);
          }}
        >
          {" "}
          Cadastro{" "}
        </Button>
      </Grid>
    </Grid>
  );*/
