import { useState, useEffect } from "react";
import Card from "../Components/Card";
import Layout from "../Components/Layout";

function Home() {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true); // Estado de carga
    const [error, setError] = useState(null); // Estado de error

    const url = 'https://api.escuelajs.co/api/v1/products';
  
    useEffect(() => { 

      async function fetchData() {

        try {
          const response = await fetch(url);
          if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

          const data = await response.json();
          setItems(data);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false); // Finaliza la carga
        }
      };
      fetchData();

  }, []);
     
  
    return (
        <Layout>
        <h1 className="text-xl font-bold mb-4">Home</h1>
         
        {loading && <p>Cargando productos...</p>}
        {error && <p className="text-red-500">{error}</p>}


        <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-lg'>
        { items.length > 0 ? (
            items.map((item) => <Card key={item.id} data={item} />)
            ) : (
              !loading && <p>No hay productos disponibles.</p>
    )}
        </div>
      </Layout>
    )
  }
  
  export default Home