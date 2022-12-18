import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Clientes from './components/Clientes/Clientes';
import Funcionarios from './components/Funcionarios/Funcionarios';
import Login from './components/Login/Login';
import Painel from './components/Painel/Painel';
import Quartos from './components/Quartos/Quartos';
import Delet from './components/Clientes/Delet';
import Put from './components/Clientes/Put';
import Get from './components/Clientes/Get';
import FuncionariosDelete from './components/Funcionarios/FuncionariosDelete';
import GetFuncionarios from './components/Funcionarios/GetFuncionarios';
import PutFuncionarios from './components/Funcionarios/PutFuncionarios';
import DeletQuartos from './components/Quartos/DeletQuartos';
import GetQuartos from './components/Quartos/GetQuartos';
import PutQuartos from './components/Quartos/PutQuartos';


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="painel/*" element={<Painel />} />
          <Route path="funcionarios/*" element={<Funcionarios />} />
          <Route path="clientes/*" element={<Clientes />} />
          <Route path="quartos/*" element={<Quartos />} />
          <Route path='clientes/delet' element={<Delet />} />
          <Route path='clientes/get' element={<Get />} />
          <Route path='clientes/put' element={<Put />} />
          <Route path='funcionarios/delet' element={<FuncionariosDelete />} />
          <Route path='funcionarios/get' element={<GetFuncionarios />} />
          <Route path='funcionarios/put' element={<PutFuncionarios />} />
          <Route path='quartos/delet' element={<DeletQuartos />} />
          <Route path='quartos/get' element={<GetQuartos />} />
          <Route path='quartos/put' element={<PutQuartos />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
