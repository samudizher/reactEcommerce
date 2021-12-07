import React, { useState } from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { NavBarMenu } from './components/NavBar/NavBar';
import { HomeView } from './components/HomeView/HomeView';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Fonts/fonts.css';
import { Cart } from './components/Cart/Cart';
import { CartProvider } from './context/CartContext';


function App() {

  return (

    <CartProvider>
        <BrowserRouter>

            <NavBarMenu/>

            
            <Routes>

              <Route path= "/" element={<HomeView/>}/>
              <Route path= "/productos" element={<ItemListContainer/>}></Route>
              <Route path= "/productos/:categoryId" element={<ItemListContainer/>}></Route>
              <Route path= "/detail/:productoId" element={<ItemDetailContainer/>}/>
              <Route path="/Cart" element={<Cart/>}/>
              <Route path="*" element={<Navigate to ="/"/>}></Route>

            </Routes>

        </BrowserRouter>
    </CartProvider>


  );
}

export default App;

//<Route path= "/" element={<ItemListContainer/>}/>
