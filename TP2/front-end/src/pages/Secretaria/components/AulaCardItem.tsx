import React from 'react';
import { FC, ChangeEvent, useState } from 'react';

import { Button, Card, CardActions, CardContent, Grid, TextField, Typography } from '@mui/material';

import ICardAulas from '../../../interfaces/Cards/ICardAulas';


const AulaCardItem: FC<ICardAulas> = ({
    _id, aulaNome, aulaInicio, aulaFim, dia, handleClickAdd, handleClickRemove
}) => {

    const [exercicioAdicionado, setExercicioAdicionado] = useState<boolean>(false);

    return (
        <Card sx={{ maxWidth: 200, border: 1.5, borderColor: "darkgrey", margin: "0.2rem" }}>
            <CardContent>
                <Typography gutterBottom component="div">
                    {aulaNome}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Horario de inicio: {aulaInicio}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Horario de Termino: {aulaFim}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Dias: {dia}
                </Typography>              
            </CardContent>
            <CardActions>
                {!exercicioAdicionado &&
                    <Button
                        size="small"
                        variant="outlined"
                        onClick={() => { setExercicioAdicionado(true); handleClickAdd(_id);}}
                    >
                        Adicionar exercicio
                    </Button>
                }
                {exercicioAdicionado &&
                    <Button
                        size="small"
                        variant="outlined"
                        onClick={() => { setExercicioAdicionado(false); handleClickRemove(_id);}}
                    >
                        Remover exercicio
                    </Button>
                }
            </CardActions>
        </Card>
    );
}

export default AulaCardItem;