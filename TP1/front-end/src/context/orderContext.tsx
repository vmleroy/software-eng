import React, { Dispatch, SetStateAction, useContext } from 'react';

import IOrder from '../interfaces/IOrder';

interface IOrderContext {
    setOrder: Dispatch<SetStateAction<any>>;
    order: IOrder;
  }
  
  export const OrderContext = React.createContext<IOrderContext>({
    setOrder: () => {},
    
    order: {
        number: 0,
        user: {
            name: "",
            email: "",
            cpf: "",
            phone: "", 
            addres: {
                city: "",
                cep: "",
                street: "",
                district: "",
                number: 0,
                complement: "",
            },
        },
        createDate: new Date(),
        status: "pending",
        pizzas: [],
        pizza2flavors: [],
        drinks: [],
        promos: []
    },

  });
  
  export const useOrderContext = () => useContext<IOrderContext>(OrderContext);