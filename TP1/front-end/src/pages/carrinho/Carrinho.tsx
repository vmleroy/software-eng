import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Button, Grid, Typography } from "@mui/material";
import NavBar from "../../components/nav-bar/NavBar";
import { useOrderContext } from "../../context/OrderContext";

import ShoppingCartItens from "../../components/carrinho/ShoppingCartItens";
import ShoppingCartLoginModal from "../../components/modal/ShoppingCartLoginModal";

const Carrinho: React.FC = () => {

  const navigate = useNavigate();

  const { order, setOrder } = useOrderContext();

  const [openModal, setOpenModal] = useState(false);

  const finishOrder = async () => {
    if (document.cookie.split(";").some((item) => item.includes("status=user"))) {
      // @ts-ignore
      const id = ("; " + document.cookie)
        .split("; id_user=")
        .pop()
        .split(";")[0];
      await axios.get('https://cyber-pizza-engsoft.herokuapp.com/usuario/' + id)
        .then(response => {
          setOrder({ ...order, user: (order.user = response.data) })
        })
        .catch(err => {
          console.log(err)
        });
      setOrder({ ...order, status: (order.status = "completed") });
      console.log(order);
      await axios.post('https://cyber-pizza-engsoft.herokuapp.com/pedido', order);
      setOrder({...order, number: (order.number = 0), 
        user: (order.user = {name: "", email: "", cpf: "", phone: "", 
          addres: { city: "", cep: "", street: "", district: "", number: 0, complement: "",}
        }),
        createDate: (order.createDate = new Date()),
        status: (order.status = "pending"),
        pizzas: (order.pizzas = []),
        pizza2flavors: (order.pizza2flavors = []),
        drinks: (order.drinks = []),
        promos: (order.promos = [])
      })
      navigate('/');
    }
    else {
      setOpenModal(true);
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const calculateTotalValue = () => {
    let totalValue = 0;
    order?.pizzas?.map((item) => (totalValue += item.price));
    order?.pizza2flavors?.map((item) => (totalValue += item.price));
    order?.drinks?.map((item) => (totalValue += item.price));
    order?.promos?.map(
      (item) => (totalValue += parseFloat(item.promoPrice.toFixed(1)))
    );
    return totalValue;
  };

  return (
    <Grid
      container
      direction="column"
      sx={{ minWidth: "100vw", minHeight: "100vh", backgroundColor: "#f5f5f5" }}
    >
      <NavBar />
      <Grid
        container
        item
        justifyContent="center"
        alignItems="center"
        rowSpacing={4}
        marginTop="0.5rem"
      >
        <ShoppingCartItens />
        <Grid sx={{ backgroundColor: "#120458", minWidth: "100vw" }}>
          <Typography color="#ffdd6b" sx={{ ml: 2, mr: 2 }}>
            Valor total: {calculateTotalValue()}
          </Typography>
        </Grid>
        <Button
          variant="outlined"
          onClick={() => {
            finishOrder();
          }}
          sx={{ minWidth: "5vw", mt: 2 }}
        >
          Finalizar pedido
        </Button>
      </Grid>
      <ShoppingCartLoginModal
        modalOpen={openModal}
        handleCloseModal={handleCloseModal}
      />
    </Grid>
  );
};

export default Carrinho;
