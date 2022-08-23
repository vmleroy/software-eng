import { FC, useState } from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import ICardPromocoes from '../../../interfaces/IPromoCard'

const PromotionsCardItem: FC<ICardPromocoes> = ({
    name,
    promoPrice,
    originalPrice,
    discount,
    pizzas,
    pizzas2flavors,
    drinks,
    _id,
    handleClick
}) => {
    return (
        <Card sx={{ maxWidth: 220, border: 1.5, borderColor: "darkgrey" }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div"
                    sx={{fontSize: 15}}
                >
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                        R$ {originalPrice} -- Desconto: {discount}%
                </Typography>
                <Typography variant="body2" sx={{mt: 2}}>
                        Novo preco: {promoPrice.toFixed(1)}
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

export default PromotionsCardItem;