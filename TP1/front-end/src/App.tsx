import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import Home from "./pages/home/Home"
import Carrinho from "./pages/carrinho/Carrinho"
import Login from "./pages/login/Login"
import UserPage from "./pages/user-page/UserPage"
import Cadastro from "./pages/cadastro/Cadastro"


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="carrinho" element={<Carrinho />} />
                <Route path="login" element={<Login />} />
                <Route path="cadastro" element={<Cadastro />} />
                <Route path="user/:id" element={<UserPage />} />
            </Routes>
        </Router>
    );
}

export default App;