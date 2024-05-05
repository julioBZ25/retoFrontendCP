import React, { useEffect, useState } from "react";
import useCartStore from "../../../../store/useCartStore";
import CandyCart from "../CandyCart";
import { ICartItem } from "../../types";

const CartList = () => {
  const [cartItems, setCartItems] = useState<ICartItem[] | null>(null);
  const { getCart } = useCartStore();
  useEffect(() => {
    const items = getCart();
    setCartItems(items);
  }, []);
  return (
    <ul
      tabIndex={0}
      className="menu menu-2xl dropdown-content mt-3 z-[1] px-2 py-2 shadow bg-base-100 rounded-box w-52"
    >
      {cartItems &&
        cartItems.map((item) => (
          <CandyCart
            key={`${item.name}${item.quantity}`}
            name={item.name}
            price={item.price}
          />
        ))}
    </ul>
  );
};

export default CartList;
