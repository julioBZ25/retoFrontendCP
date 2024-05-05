import React from "react";
import { ICartItem } from "../types";
import { useNavigate } from "react-router-dom";
import useUserStore from "../../../store/useUserStore";

interface ICart {
  cartItems: ICartItem[];
}

const Cart = ({ cartItems }: ICart) => {
  const navigate = useNavigate();
  const { getUser } = useUserStore();
  const handleCheckout = () => {
    const user = getUser();
    if (user) navigate("/checkout");
    else navigate("/login");
  };
  const handleTotalPrice = () => {
    return cartItems.reduce((acc, currentItem) => {
      const itemPrice =
        parseFloat(currentItem.price) * (currentItem.quantity as number);
      return acc + itemPrice;
    }, 0);
  };

  return (
    <div className="flex flex-row items-end gap-2">
      <div className="mr-4">
        <h2 className="text-3xl">Precio total</h2>
        <p className="text-xl">S/ {handleTotalPrice()}</p>
      </div>
      <div>
        <button
          className="btn btn-success text-lg"
          disabled={!handleTotalPrice()}
          onClick={handleCheckout}
        >
          Continuar
        </button>
      </div>
    </div>
  );
};

export default Cart;
