import React from 'react'
import { FC } from 'react'

import { Checkbox, Grid, Typography } from '@mui/material'

import CampoDeTexto from '../../../components/CamposDeTexto/CampoDeTexto';
import CampoDeTextoLeitura from '../../../components/CamposDeTexto/CampoDeTextoLeitura';

interface Props {
    setCpf: React.Dispatch<React.SetStateAction<string>>,
    setAltura: React.Dispatch<React.SetStateAction<string>>,
    setPeso: React.Dispatch<React.SetStateAction<string>>,
    setPressaoArt: React.Dispatch<React.SetStateAction<string>>,
    setGorduraCorp: React.Dispatch<React.SetStateAction<string>>,
    setMassaMagra: React.Dispatch<React.SetStateAction<string>>,
    setDescricao: React.Dispatch<React.SetStateAction<string>>,
    setApto: React.Dispatch<React.SetStateAction<boolean>>,
    IMC: number
    resultadoIMC: string
}

const FormularioMedico: FC<Props> = ({
    setCpf, setAltura, setPeso, setPressaoArt,
    setGorduraCorp, setMassaMagra,
    setDescricao, setApto, IMC, resultadoIMC
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
                <Grid item xs={12} sx={{ minHeight: "5vh", backgroundColor: '#120458' }}>
                    <Typography
                        sx={{
                            fontWeight: "600",
                            fontSize: "1.5rem",
                            color: 'white',
                            margin: "1rem"
                        }}
                    >
                        Exame:
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
                    <Grid
                        item
                        container
                        xs={12}
                        alignContent="center"
                        direction="row"
                    >
                        <CampoDeTexto label='CPF Aluno:' setValue={setCpf} />
                        <CampoDeTexto label='Altura (em metros):' setValue={setAltura} />
                        <CampoDeTexto label='Peso (em KG):' setValue={setPeso} />
                        <CampoDeTexto label='Pressao Arterial:' setValue={setPressaoArt} />
                        <CampoDeTexto label='% Gordura:' setValue={setGorduraCorp} />
                        <CampoDeTexto label='% Massa Magra:' setValue={setMassaMagra} />
                    </Grid>
                    <Grid
                        item
                        container
                        xs={12}
                        alignItems="center"
                        direction="row"
                    >
                        <CampoDeTextoLeitura label='IMC' value={IMC} />
                        <CampoDeTextoLeitura label='IMC -> Resultado ' value={resultadoIMC} />
                    </Grid>
                    <Grid
                        item
                        container
                        xs={12}
                        alignItems="center"
                        direction="row"
                    >
                        <Typography sx={{ marginLeft: "2rem" }}> Aluno esta apto? </Typography>
                        <Checkbox aria-label='Apto' onChange={(e) => { setApto(e.target.checked) }} />
                    </Grid>
                    <CampoDeTexto label='Descricao:' setValue={setDescricao} />
                </Grid>
            </Grid>
        </>
    );
};

export default FormularioMedico;