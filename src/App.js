import React from 'react';
import { NavBar } from './components/NavBar/NavBar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Fonts/fonts.css';

import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes,Route} from 'react-router-dom';


function App() {

  return (

      <BrowserRouter>

        <NavBar/>

        
        <Routes>

          <Route path= "/" element={<ItemListContainer/>}/>
          <Route path= "/detail" element={<ItemDetailContainer/>}/>
          <Route path= "/productos" element={<ItemListContainer/>}></Route>

        </Routes>

      </BrowserRouter>

  );
}

export default App;
