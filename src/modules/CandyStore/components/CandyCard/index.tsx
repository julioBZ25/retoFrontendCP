import React from "react";
import { ICartItem } from "../../../Cart/types";

interface ICandyCard {
  name: string;
  description: string;
  price: string;
  handleAddItem: (value: ICartItem, addingValue: number) => void;
  quantity: number;
}

const CandyCard = ({
  name,
  description,
  price,
  handleAddItem,
  quantity,
}: ICandyCard) => {
  return (
    <div className="card card-compact max-w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title flex gap-4">
          {name}
          <div className="badge badge-success py-3">S/ {price}</div>
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-around items-center mt-4">
          {!!quantity && (
            <>
              <button
                className="btn btn-success btn-sm text-sm"
                onClick={() => handleAddItem({ name, price }, -1)}
              >
                eliminar
              </button>
              <span className="text-lg">{quantity}</span>
            </>
          )}
          <button
            className="btn btn-success btn-sm text-sm"
            onClick={() => handleAddItem({ name, price }, 1)}
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CandyCard;
