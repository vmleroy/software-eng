import * as React from 'react';

import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';

import ICardOrder from '../../../interfaces/IOrderCard';

const LastOrderCard: React.FC<ICardOrder> = ({
  status,
  number,
  pizzas,
  drinks,
  pizza2flavours,
  promos
}) => {

  const calculateTotalValue = () => {
    let totalValue = 0;
    pizzas?.map((item) => (totalValue += item.price));
    pizza2flavours?.map((item) => (totalValue += item.price));
    drinks?.map((item) => (totalValue += item.price));
    promos?.map(
      (item) => (totalValue += parseFloat(item.promoPrice.toFixed(1)))
    );
    return totalValue;
  };

  return (
    <Card sx={{ maxWidth: "95vw", border: 1.5, borderColor: "darkgrey" }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Pedido {number} || Status: {status}
          </Typography>
          <Grid sx={{ display: "flex", alignItems: "flex-start", flexDirection: "column" }}>
            <Typography>
              Itens:
            </Typography>
            {pizzas?.map(item =>
              <Typography variant="body2" color="text.secondary">
                . {item.name} -- R${item.price}
              </Typography>
            )}
            {drinks?.map(item =>
              <Typography variant="body2" color="text.secondary">
                . {item.name} -- R${item.price}
              </Typography>
            )}
            {pizza2flavours?.map(item =>
              <Typography variant="body2" color="text.secondary">
              . {item.name} -- R${item.price}
              </Typography>
            )}
            {promos?.map(item =>
              <Typography variant="body2" color="text.secondary">
              . {item.name} -- R${item.promoPrice.toFixed(1)}
              </Typography>
            )}
          </Grid>
          <Grid sx={{ display: "flex", alignItems: "flex-end", flexDirection: "column" }}>
            <Typography variant="body2" color="text.secondary">
              Valor total: R${calculateTotalValue()}
            </Typography>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default LastOrderCard;