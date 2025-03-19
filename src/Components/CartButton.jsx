import React, { useContext } from "react";
import { CartContext } from "../CartContext";

function CartButton() {
  const { count, setCount } = useContext(CartContext);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div onClick={handleClick}>
      <button>+</button>
    </div>
  );
}
export default CartButton;
