import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

import axios from "axios";
import { Grid, Typography } from "@mui/material";

import IAddress from "../../interfaces/IAddress";


const AddressData = () => {

    const { id } = useParams();

    const [address, setAddress] = useState<IAddress>();


    useEffect(() => {
        //Obter dados do usuario 
        axios.get('https://cyber-pizza-engsoft.herokuapp.com/usuario/' + id)
            .then(response_1 => {
                const address_id = response_1.data.address;
                axios.get('https://cyber-pizza-engsoft.herokuapp.com/endereco/' + address_id)
                    .then (response_2 => {
                        setAddress(response_2.data);
                    })
                    .catch(err_2 => {
                        console.log(err_2)
                    });
            })
            .catch(err_1 => {
                console.log(err_1)
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
                    Dados do usuario
                </Typography>
            </Grid>
            <Grid
                container
                item
                xs={12}
                alignItems="left"
                direction="column"
                sx={{ minHeight: "20vh", border: 2, borderColor: "#120458" }}
            >
                <Typography sx={{ ml:1, mt:0.5 }}> Cep: {address?.cep} </Typography>
                <Typography sx={{ ml:1, mt:0.5 }}> Rua: {address?.street} </Typography>
                <Typography sx={{ ml:1, mt:0.5 }}> Bairro: {address?.district} </Typography>
                <Typography sx={{ ml:1, mt:0.5 }}> Numero: {address?.number} </Typography>                
                <Typography sx={{ ml:1, mt:0.5 }}> Cidade: {address?.city} </Typography>
                
            </Grid>
        </Grid>
    );
};
export default AddressData;
