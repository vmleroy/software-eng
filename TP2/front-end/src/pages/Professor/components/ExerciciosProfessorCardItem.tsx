import React from 'react';
import { FC, ChangeEvent, useState } from 'react';

import { Button, Card, CardActions, CardContent, Grid, TextField, Typography } from '@mui/material';

import ICardExercicioProfessor from '../../../interfaces/Cards/ICardExercicioProfessor';


const ExercicioProfessorCardItem: FC<ICardExercicioProfessor> = ({
    _id, nome, descricao, handleClickAdd, handleClickRemove
}) => {

    const [series, setSeries] = useState<string>("");
    const [repeticoes, setRepeticoes] = useState<string>("");
    const [exercicioAdicionado, setExercicioAdicionado] = useState<boolean>(false);

    const onChangeSeries = (event: ChangeEvent<HTMLInputElement>) => {
        setSeries(event.target.value);
    };
    const onChangeRepeticoes = (event: ChangeEvent<HTMLInputElement>) => {
        setRepeticoes(event.target.value);
    };

    return (
        <Card sx={{ maxWidth: 200, border: 1.5, borderColor: "darkgrey", margin: "0.2rem" }}>
            <CardContent>
                <Typography gutterBottom component="div">
                    {nome}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {descricao}
                </Typography>
                <Grid container direction='row'>
                    <Typography variant="body2" sx={{ mt: 2 }}>
                        Series:
                    </Typography>
                    <TextField
                        variant='standard'
                        sx={{ display: 'flex', alignItems: 'flex-end', width: '1.5rem', mt: '0.6rem', ml: '0.2rem' }}
                        inputProps={{ min: 0, style: { textAlign: 'center' } }}
                        defaultValue={0}
                        onChange={onChangeSeries}
                    />
                </Grid>
                <Grid container direction='row'>
                    <Typography variant="body2" sx={{ mt: 2 }}>
                        Repeticoes:
                    </Typography>
                    <TextField
                        variant='standard'
                        sx={{ display: 'flex', alignItems: 'flex-end', width: '1.5rem', mt: '0.6rem', ml: '0.2rem' }}
                        inputProps={{ min: 0, style: { textAlign: 'center' } }}
                        defaultValue={0}
                        onChange={onChangeRepeticoes}
                    />
                </Grid>
            </CardContent>
            <CardActions>
                {!exercicioAdicionado &&
                    <Button
                        size="small"
                        variant="outlined"
                        onClick={() => { setExercicioAdicionado(true); handleClickAdd(_id, series, repeticoes); }}
                    >
                        Adicionar exercicio
                    </Button>
                }
                {exercicioAdicionado &&
                    <Button
                        size="small"
                        variant="outlined"
                        onClick={() => { setExercicioAdicionado(false); handleClickRemove(_id); }}
                    >
                        Remover exercicio
                    </Button>
                }
            </CardActions>
        </Card>
    );
}

export default ExercicioProfessorCardItem;