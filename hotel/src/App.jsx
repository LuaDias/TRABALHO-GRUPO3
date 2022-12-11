import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Clientes from './components/Clientes/clientes';
import Funcionarios from './components/Funcionarios/funcionarios';
import Login from './components/Login/login';
import Painel from './components/Login/painel';
import Quartos from './components/Quartos/quartos';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="login/*" element={<Login />} />
          <Route path="painel/*" element={<Painel />} />
          <Route path="funcionarios/*" element={<Funcionarios />} />
          <Route path="clientes/*" element={<Clientes />} />
          <Route path="quartos/*" element={<Quartos />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
