import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Aluno from "./pages/Aluno/Aluno";
import Home from "./pages/Home/Home";
import Medico from "./pages/Medico/Medico";
import Professor from "./pages/Professor/Professor";
import Secretaria from "./pages/Secretaria/Secretaria";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="medico" element={<Medico />} />
        <Route path="aluno" element={<Aluno />} />
        <Route path="professor" element={<Professor />} />
        <Route path="secretaria" element={<Secretaria />} />
      </Routes>
    </Router>
  );
};

export default App;
