import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { NavBarMenu } from './components/NavBar/NavBar';
import { HomeView } from './components/HomeView/HomeView';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Fonts/fonts.css';


function App() {

  return (

      <BrowserRouter>

        <NavBarMenu/>

        
        <Routes>

          <Route path= "/" element={<HomeView/>}/>
          <Route path= "/productos" element={<ItemListContainer/>}></Route>
          <Route path= "/detail/:productoId" element={<ItemDetailContainer/>}/>
          <Route path="*" element={<Navigate to ="/"/>}></Route>

        </Routes>

      </BrowserRouter>

  );
}

export default App;

//<Route path= "/" element={<ItemListContainer/>}/>