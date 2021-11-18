import React from 'react';
import { NavBar } from './components/NavBar/NavBar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Fonts/fonts.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import {BrowserRouter} from 'react-router-dom';


function App() {

  return (
      <BrowserRouter>

        <NavBar/>
        <ItemListContainer/>

      </BrowserRouter>

  );
}

export default App;
