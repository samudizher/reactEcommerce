import react, { createContext, useState} from 'react'

export const CartContext = createContext()




export const CartProvider = ({children}) =>{

        const [carrito, setCarrito] = useState([]);

        console.log(carrito);
    
        const agregarCarrito = (producto) => {
    
            setCarrito( [...carrito, producto] );
    
        }
    
        const removerCarrito = (id) => {
    
            setCarrito ( carrito.filter(producto => producto.id !== id ) )
    
        }
    
        const vaciarCarrito = () => {
    
            setCarrito([])
    
        }
    
        const isInCart = (id) => {
    
            return carrito.some (producto => producto.id === id)
        }
    
        const totalCarrito = () =>{
            return carrito.reduce((acumulador, producto) => acumulador + producto.cant, 0)
        }

            
        const totalCompra = () =>{
            return carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0)
        }



      return(

          <CartContext.Provider value={{
            carrito,
            agregarCarrito,
            removerCarrito,
            vaciarCarrito,
            isInCart,
            totalCarrito,
            totalCompra
          }}>
                {children}
          </CartContext.Provider>

      )
}