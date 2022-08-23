import React from 'react';
import { FC, useState, useEffect } from 'react';

import axios from 'axios';

import { Grid, Typography } from '@mui/material';

import IExercicio from '../../../interfaces/IExercicio';
import ITipoExercicio from '../../../interfaces/ITipoExercicio';

import CampoDeTexto from '../../../components/CamposDeTexto/CampoDeTexto';
import ExercicioProfessorCardItem from './ExerciciosProfessorCardItem';


interface Props {
    setCpf: React.Dispatch<React.SetStateAction<string>>,
    setDescricao: React.Dispatch<React.SetStateAction<string>>,
    handleSetExercicioAdd: (exercicio: IExercicio) => void
    handleSetExercicioRemove: (id: string) => void
}

const FormularioProfessor: FC<Props> = ({ setCpf, setDescricao, handleSetExercicioAdd, handleSetExercicioRemove }) => {

    const [tiposExercicios, setTiposExercicios] = useState<ITipoExercicio[]>([]);

    useEffect(() => {
        axios.get('https://tp2-engsoft.herokuapp.com/tiposexercicio/')
        
            .then(resposta => {
                setTiposExercicios(resposta.data)
            })
            .catch(erro => {
                console.log(erro);
            });
    });

    const handleCardCliqueAdd = (id:string, series:string, repeticoes:string) => {
        if((series !== '0' && repeticoes !== '0')) {
            const newExercicio = {tipoExercicio:id, series:series, repeticoes:repeticoes};
            axios.post('https://tp2-engsoft.herokuapp.com/exercicios/', newExercicio)
                .then(resposta => {
                    console.log("Exercicio adicionado com sucesso!");
                    handleSetExercicioAdd(resposta.data);
                })
                .catch(erro =>{
                    console.log(erro);
                });
        }
        else
            console.log("Favor preencher series e repeticoes, caso queira adicionar o exercicio")
    }

    const handleCardCliqueRemove = (id:string) => {
        handleSetExercicioRemove(id);
        console.log("Exercicio removido com sucesso!");
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
                <Grid item xs={12} sx={{ minHeight: "5vh", backgroundColor: '#120458' }}>
                    <Typography
                        sx={{
                            fontWeight: "600",
                            fontSize: "1.5rem",
                            color: 'white',
                            margin: "1rem"
                        }}
                    >
                        Treino:
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
                    <CampoDeTexto label='CPF Aluno' setValue={setCpf} />
                    <CampoDeTexto label='Descricao' setValue={setDescricao} />
                    <Grid
                        container
                        item
                        xs={12}
                        alignItems="left"
                        direction="column"
                        margin={2}
                        sx={{ width: "93vw", minHeight: "20vh", border: 2, borderColor: "#120458" }}
                    >
                        <Typography sx={{
                            fontWeight: "600",
                            fontSize: "10",
                            color: 'black',
                            margin: "0.2rem"
                        }}> 
                            Exercicios disponiveis:
                        </Typography>
                        <Grid container item xs={12} margin={1} direction='row'>
                            { tiposExercicios?.map(item => 
                                <ExercicioProfessorCardItem key={item._id} _id={item._id} nome={item.nome} descricao={item.descricao} 
                                    handleClickAdd={handleCardCliqueAdd} handleClickRemove={handleCardCliqueRemove}/>
                            )}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );

}

export default FormularioProfessor;