
import React from 'react';
import { NavBar } from './components/NavBar/NavBar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Fonts/fonts.css'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemCount } from './components/ItemCount/ItemCount';


function App() {

  return (
    <>
      
      <NavBar/>

|     <ItemCount/>
      
      <ItemListContainer greeting="Estamos costruyendo una nueva pagina"/>

    </>
  );
}

export default App;
