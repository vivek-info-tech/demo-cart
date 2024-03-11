import logo from './logo.svg';
import './App.css';
import Navbars from './Components/Navbars';

import Login from './Components/Login';
import Products from './Components/Products';
import {BrowserRouter, Routes, Route,Link,} from 'react-router-dom'
import Home from './Components/Home';
import PrivateComponent from './Components/PrivateComponent';
import CartCount from './Components/CartCount';
import { useState } from 'react';

function App() {
 
  return (
    <BrowserRouter>
    <Navbars/>
    
   <Routes>
   <Route element={<PrivateComponent />}>
   <Route exact path= '/' element={<Home/>} />
  <Route exact path= 'products' element={<Products   />} />
    <Route exact path= 'cart' element={<CartCount/>} />
   </Route>
   
     <Route exact path='login' element={<Login/>} />
     
   </Routes>
    </BrowserRouter>
    
  );
}

export default App;
