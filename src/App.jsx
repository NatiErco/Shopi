import { Route, Routes } from "react-router-dom";
import { CartProvider } from "./CartContext";
import Home from "./Pages/Home";
import MyAccount from "./Pages/MyAccount";
import MyOrder from "./Pages/MyOrder";
import MyOrders from "./Pages/MyOrders";
import SignIn from "./Pages/SignIn";
import NotFound from "./Pages/NotFound";
import Navbar from "./Components/Navbar";
import "./App.css";
import ProductDetail from "./Components/ProductDetail";

function App() {
  return (
    <CartProvider >
    <Navbar />
    <ProductDetail />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/my-order" element={<MyOrder />} />
        <Route path="/my-orders" element={<MyOrders />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />{" "}
        {/* Ruta para manejar errores 404 */}
      </Routes>
    </CartProvider>
  );
}

export default App;
