import { stock } from "../Datos/stock";
  
  export const TraerDatos = () => {
            return new Promise((resolve, rejected) => {
    
                setTimeout(() =>{
                    resolve(stock)
                }, 3000);
            
            })
    }    



