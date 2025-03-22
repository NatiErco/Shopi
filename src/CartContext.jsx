import { useState, createContext } from "react";

// 1️⃣ Creamos el contexto global para el carrito
export const CartContext = createContext();

// 2️⃣ Creamos el Provider con toda la lógica del carrito

export const CartProvider = ({ children }) => {

  // Estado global del contador

   const [count, setCount] = useState(0); 

  // Estado para manejar la visibilidad del detalle del producto

  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Función para abrir el detalle del producto
  const openProductDetail = (product) => {setIsProductDetailOpen(true);
    setSelectedProduct(product);
  };

  // Función para cerrar el detalle del producto
  const closeProductDetail = () => { 
    console.log("❌ Cerrando detalle del producto...");
    setIsProductDetailOpen(false);

      setSelectedProduct(prev => {
    console.log("✅ Producto seleccionado antes de cerrar:", prev);
    return null;
  });
  

   // Esperamos al próximo render para mostrar el estado actualizado
   setTimeout(() => {
    console.log("✅ Producto seleccionado después de cerrar:", selectedProduct);
  }, 0);
}


  // Nota importante: ReETORNAMOS todos los estados y funciones que declaramos arriba para que otros componentes puedan acceder a ellos al usar: useContext(CartContext)!
    return (
    <CartContext.Provider value={{ count,  // Estado global del contador
      setCount, // Función para modificar el contador
      isProductDetailOpen, // Estado que indica si el detalle del producto está abierto
      openProductDetail, // Función para abrir el detalle de un producto
      closeProductDetail, // Función para cerrar el detalle de un producto
       selectedProduct // Producto actualmente seleccionado para ver su detalle
      }}>
    {children}
    </CartContext.Provider>
  );
  };