import { useEffect, useState } from "react";

import axios from "axios";
import { Grid, Typography } from "@mui/material";

import IBebida from '../../interfaces/IDrinks'
import CardapioCardItem from "./cards/CardapioCardItem";
import { useOrderContext } from "../../context/OrderContext";

const Drinks = () => {

  const { order, setOrder } = useOrderContext();
  
  const handleClick = (id: string) => {
    let novaBebida = drinks?.find(item => item._id === id);
    if (novaBebida!)
      setOrder({ ...order, drinks: order.drinks.push(novaBebida) });
  };

  const [drinks, setDrinks] = useState<IBebida[]>();

  useEffect(() => {
    //Obter bebidas 
    axios.get('https://cyber-pizza-engsoft.herokuapp.com/bebida')
      .then (resposta => {
        setDrinks(resposta.data);
      })
      .catch(erro => {
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
      sx={{ minHeight: "25vh"}}
    >
      <Grid item xs={12} sx={{ minHeight: "5vh", backgroundColor: '#120458' }}>
        <Typography
          sx={{
            fontWeight: "600",
            fontSize: "1.5rem",
            color: '#ffdd6b',
            margin: "1rem"
          }}
        >
          Bebidas
        </Typography>
      </Grid>
      <Grid 
        container
        item 
        xs={12} 
        alignItems="center"
        direction="row"
        sx={{ minHeight: "20vh", border: 2, borderColor:"#120458" }}
      >
          {drinks?.map(item =>
            <Grid item sx={{ margin: 2 }} padding="0.5rem">
              <CardapioCardItem 
                key={item._id}
                _id={item._id}
                description={item.description}
                name={item.name}
                price={item.price}
                image={item.image}
                handleClick={handleClick}
              />
            </Grid>
          )}
      </Grid>
    </Grid>
  );
};
export default Drinks;
