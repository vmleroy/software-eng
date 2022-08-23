import { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Typography } from "@mui/material";
import IPromocao from "../../interfaces/IPromo";
import PromocoesCardItem from "./cards/PromocoesCardItem";
import { useOrderContext } from "../../context/OrderContext";

const Promotion = () => {
  const { order, setOrder } = useOrderContext();

  const [promotions, setPromotions] = useState<IPromocao[]>();

  const handleClick = (id: string) => {
    const novaPromo = promotions?.find((item) => item._id === id);
    console.log(novaPromo);
    if (novaPromo!)
      setOrder({ ...order, promos: order.promos.push(novaPromo)});
  };

  useEffect(() => {
    //Obter prmocoes
    axios
      .get("https://cyber-pizza-engsoft.herokuapp.com/promo")
      .then((resposta) => {
        setPromotions(resposta.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

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
          Promocoes
        </Typography>
      </Grid>
      <Grid
        container
        item
        xs={12}
        alignItems="center"
        direction="row"
        sx={{ minHeight: "20vh", border: 2, borderColor: "#120458" }}
      >
        {promotions?.map((item) => (
          <Grid item sx={{ margin: 2 }} padding="0.5rem">
            {
              <PromocoesCardItem
                key={item._id}
                _id={item._id}
                name={item.name}
                originalPrice={item.originalPrice}
                promoPrice={item.promoPrice}
                discount={item.discount}
                pizzas={item.pizzas}
                pizzas2flavors={item.pizzas2flavors}
                drinks={item.drinks}
                handleClick={handleClick}
              />
            }
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
export default Promotion;
