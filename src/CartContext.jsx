import { useState, createContext } from "react";

// 1️⃣ Creamos el contexto global para el carrito
export const CartContext = createContext();

// 2️⃣ Creamos el Provider con toda la lógica del carrito

export const CartProvider = ({ children }) => {

   const [count, setCount] = useState(0); // Estado global del contador

    return (
    <CartContext.Provider value={{ count, setCount}}>
    {children}
    </CartContext.Provider>
  );
  };