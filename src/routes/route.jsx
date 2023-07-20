import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import Login from '../pages/login';
import Register from '../pages/register';
import Home2 from '../pages/home2';
import Temperatura from '../pages/temperatura';
import Movimiento from '../pages/movimiento';
import Gas from '../pages/gas';
import Historial from '../pages/history';
import Tempgra from '../pages/tempgra';
import Movgra from '../pages/movgra'
import Gasgra from '../pages/gasgra'
import Ilugra from '../pages/ilugra'
import Perfil from '../pages/perfil'
import Iluminacion from '../pages/iluminacion'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home2/>} />
        <Route path="/temperatura" element={<Temperatura />} />
        <Route path="/movimiento" element={<Movimiento/>} />
        <Route path="/gas" element={<Gas/>} />
        <Route path="/iluminacion" element={<Iluminacion/>} />
        <Route path="/historial" element={<Historial/>} />
        <Route path="/tempgra" element={<Tempgra/>} />
        <Route path="/movgra" element={<Movgra/>} />
        <Route path="/gasgra" element={<Gasgra/>} />
        <Route path="/ilugra" element={<Ilugra/>} />
        <Route path="/perfil" element={<Perfil/>} />
        <Route path="/iluminacion" element={<Iluminacion/>} />
      </Routes>
    </Router>
  );
};

export default App;
