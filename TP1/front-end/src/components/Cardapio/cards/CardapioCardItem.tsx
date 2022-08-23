import { FC, useState } from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import ICardCardapio from '../../../interfaces/IMenuCard'

const MenuCardItem: FC<ICardCardapio> = ({
    description,
    image,
    name,
    price,
    _id,
    handleClick
}) => {    
    return (
        <Card sx={{ maxWidth: 220, border: 1.5, borderColor: "darkgrey" }}>
            <CardMedia
            component="img"
            height="140"
            image={image}
            alt={name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Typography variant="body2" sx={{mt: 2}}>
                        R$: {price}
                </Typography>
            </CardContent>
            <CardActions>
                <Button 
                    size="small"
                    variant = "outlined"
                    onClick={() => {handleClick(_id)}}
                >
                    Adicionar ao carrinho
                </Button>
            </CardActions>
        </Card>
    );
}

export default MenuCardItem;