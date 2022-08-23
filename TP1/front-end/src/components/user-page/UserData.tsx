import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

import axios from "axios";
import { Grid, Typography } from "@mui/material";

import IUser from "../../interfaces/IUser";


const UserData = () => {

    const { id } = useParams();

    const [data, setData] = useState<IUser>();


    useEffect(() => {
        //Obter dados do usuario 
        axios.get('https://cyber-pizza-engsoft.herokuapp.com/usuario/' + id)
            .then(response => {
                setData(response.data);
            })
            .catch(err => {
                console.log(err)
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
                <Typography sx={{ ml:1, mt:0.5 }}> Nome: {data?.name} </Typography>
                <Typography sx={{ ml:1, mt:0.5 }}> Email: {data?.email} </Typography>
                <Typography sx={{ ml:1, mt:0.5 }}> Cpf: {data?.cpf} </Typography>
                <Typography sx={{ ml:1, mt:0.5 }}> Telefone: {data?.phone} </Typography>                
                
            </Grid>
        </Grid>
    );
};
export default UserData;
