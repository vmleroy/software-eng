import { Grid, Typography } from "@mui/material";

import { useOrderContext } from "../../context/OrderContext";

const ShoppingCartItens = () => {
  const { order, setOrder } = useOrderContext();

  return (
    <Grid
      container
      width="95%"
      margin="0.5rem"
      alignItems="center"
      direction="row"
      sx={{ minHeight: "25vh" }}
    >
      <Grid item xs={12} sx={{ minHeight: "5vh", backgroundColor: "#120458" }}>
        <Typography
          sx={{
            fontWeight: "600",
            fontSize: "1.5rem",
            color: "#ffdd6b",
            margin: "1rem",
          }}
        >
          Itens no carrinho
        </Typography>
      </Grid>
      <Grid
        container
        item
        xs={12}
        sx={{ minHeight: "20vh", border: 2, borderColor: "#120458" }}
      >
        <Grid container item direction="column" sx={{ ml: 2 }}>
          <Typography sx={{ mt: 1 }}>Pizzas==========</Typography>
          {order?.pizzas?.map((item) => (
            <Typography>
              . {item.name} -- R$ {item.price}
            </Typography>
          ))}
          {order?.pizza2flavors?.map((item) => (
            <Typography>
              . {item.name} -- R$ {item.price}
            </Typography>
          ))}
          <Typography sx={{ mt: 1 }}>Bebidas========</Typography>
          {order?.drinks?.map((item) => (
            <Typography>
              . {item.name} -- R$ {item.price}
            </Typography>
          ))}
          <Typography sx={{ mt: 1 }}>Promocoes=====</Typography>
          {order?.promos?.map((item) => (
            <Typography>
              . {item.name} -- R$ {Number(item.promoPrice.toFixed(1))}
            </Typography>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};
export default ShoppingCartItens;
