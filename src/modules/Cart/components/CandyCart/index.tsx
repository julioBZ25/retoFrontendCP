import React from "react";
import { CiTrash } from "react-icons/ci";

interface ICandyCart {
  name: string;
  price: string;
}

const CandyCart = ({ name, price }: ICandyCart) => {
  return (
    <div className="card card-compact max-w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title flex gap-4 text-xs justify-between">
          {name}
          <div className="badge badge-success text-xs">S/ {price}</div>
        </h2>
        <div className="card-actions justify-end">
          <button className="btn btn-success btn-sm text-xs">
            <CiTrash size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CandyCart;
