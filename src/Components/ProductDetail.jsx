import React from "react";
import { useContext } from "react";
import { CartContext } from "../CartContext";

function ProductDetail() {
  // solo llamamos a estos estados, porque solo necesitamos saber si esta abierto o cerrado, mostrar la informacion del  producto seleccionado y cerrarlo. En la Card es donde abriremos el produccto..

  const { isProductDetailOpen, closeProductDetail, selectedProduct } =
    useContext(CartContext);

  if (!isProductDetailOpen || !selectedProduct) {
    console.log("ProductDetail debería estar oculto");
    console.log("Estado actual:", { isProductDetailOpen, selectedProduct });
    return null;
  }

  function handleCloseDetail() {
    console.log("🔄 CERRANDO PRODUCT DETAIL...");
    closeProductDetail();
  }



  return (
    <aside className="fixed right-0 top-0 w-80 h-full bg-white shadow-lg p-4 overflow-auto">
      <div className="flex justify-between p-6 items-center">
        <h2 className="font-medium text-xl">Product Details</h2>
        <button 
         className="text-lg font-bold" 
         onClick={handleCloseDetail}>
        x
        </button>
      </div>
      

      <h3 className="text-lg font-semibold mt-4">
        {selectedProduct.title || "Sin título"}
      </h3>
      {selectedProduct.images &&
      Array.isArray(selectedProduct.images) &&
      selectedProduct.images.length > 0 ? (
        <img
          className="w-full h-48 object-cover rounded-lg"
          src={selectedProduct.images[0]}
          alt={selectedProduct.title || "Imagen no disponible"}
        />
      ) : (
        <p className="text-gray-500">Imagen no disponible</p>
      )}
      <p className="text-xl font-bold mt-2">
        Price: ${selectedProduct.price || "0.00"}
      </p>

      <p className="text-gray-600 text-sm">
        {selectedProduct.description || "Sin descripción"}
      </p>
    </aside>
  );
}

export default ProductDetail;
