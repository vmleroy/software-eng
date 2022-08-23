import { useEffect, useState } from "react";

import axios from "axios";
import { Grid, Typography } from "@mui/material";

import { useOrderContext } from "../../context/OrderContext";
import IPizza from '../../interfaces/IPizza'
import CardapioCardItem from "./cards/CardapioCardItem";
import Pizza2FlavoursModal from "../modal/Pizza2flavoursModal";


const Pizzas = () => {

  const { order, setOrder } = useOrderContext();

  const [pizza, setPizzas] = useState<IPizza[]>();
  const [idPizzaOrder, setIdPizzaOrder] = useState('');
  
  const [openModal, setOpenModal] = useState(false);

  const handleCloseModalWithPizza = async (id: string[]) => {
    if (id.length > 1) {
      const new_pizza = {
        pizza1: id[0],
        pizza2: id[1]
      }
      await axios.post('https://cyber-pizza-engsoft.herokuapp.com/pizza2flavors', new_pizza)
      .then(response => { 
        setOrder({ ...order, pizza2flavors: order.pizza2flavors.push(response.data[0]) });
      })
      .catch(erro => {
        console.log(erro);
      })
    } else {
      const newPizza = pizza?.find(item => item._id === id[0]);
      if (newPizza!)
        setOrder({ ...order, pizzas: order.pizzas.push(newPizza) });
    }
    setOpenModal(false);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleClick = (id: string) => {
    setOpenModal(true);
    setIdPizzaOrder(id)
  };


  useEffect(() => {
    //Obter pizzas 
    axios.get('https://cyber-pizza-engsoft.herokuapp.com/pizza')
      .then(resposta => {
        setPizzas(resposta.data);
      })
      .catch(erro => {
        console.log(erro)
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
      <Grid item xs={12} sx={{ minHeight: "5vh", backgroundColor: '#120458' }}>
        <Typography
          sx={{
            fontWeight: "600",
            fontSize: "1.5rem",
            color: '#ffdd6b',
            margin: "1rem"
          }}
        >
          Pizzas
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
        {pizza?.map(item =>
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
        {openModal &&
          <Pizza2FlavoursModal
            modalOpen={openModal}
            idPizza={idPizzaOrder}
            pizzas={pizza!}
            handleCloseModalWithPizza={handleCloseModalWithPizza}
            handleCloseModal={handleCloseModal}
          />
        }
      </Grid>
    </Grid>
  );
};
export default Pizzas;
