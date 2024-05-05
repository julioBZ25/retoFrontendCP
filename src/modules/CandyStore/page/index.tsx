import React, { useEffect, useState } from "react";
import useGetCandies from "../hooks/useGetCandies";
import CandyCard from "../components/CandyCard";
import Skeleton from "../../Home/components/Skeleton";
import Cart from "../../Cart/page";
import { ICartItem } from "../../Cart/types";
import useCartStore from "../../../store/useCartStore";

export default function CandyStore() {
  const { handleGetCandies, candies, status } = useGetCandies();
  const { getCart, setCart, getQuantity } = useCartStore();
  const [cartItems, setCartItems] = useState<ICartItem[]>(getCart());
  const handleAddItem = (item: ICartItem, addingValue: number) => {
    setCart(item, addingValue);
    const newCartItems = getCart();
    setCartItems(newCartItems);
  };
  useEffect(() => {
    handleGetCandies();
  }, []);
  return (
    <div className="py-8 px-5">
      <div className="w-full mb-8 flex justify-end">
        <Cart cartItems={cartItems} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 col justify-items-center">
        {status === "loading" && <Skeleton />}
        {status === "success" &&
          (!!candies?.length
            ? candies?.map((candy, i) => {
                const quantity = getQuantity(candy.name) ?? 0;
                return (
                  <CandyCard
                    key={i}
                    quantity={quantity}
                    handleAddItem={handleAddItem}
                    name={candy.name}
                    description={candy.description}
                    price={candy.price}
                  />
                );
              })
            : null)}
      </div>
    </div>
  );
}
