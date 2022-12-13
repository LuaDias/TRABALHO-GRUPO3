import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Clientes from './components/Clientes/Clientes';
import Funcionarios from './components/Funcionarios/Funcionarios';
import Login from './components/Login/Login';
import Painel from './components/Login/Painel';
import Quartos from './components/Quartos/Quartos';
import Delet from './components/Clientes/Delet';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="painel/*" element={<Painel />} />
          <Route path="funcionarios/*" element={<Funcionarios />} />
          <Route path="clientes/*" element={<Clientes />} />
          <Route path='clientes/delet' element={<Delet/>} />
          <Route path="quartos/*" element={<Quartos />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
