import React from "react";
import useRedirection from "../../hooks/useRedirection";

interface IPremierCard {
  image: string;
  description: string;
}

const PremierCard = ({ image, description }: IPremierCard) => {
  const { handleRedirection } = useRedirection();
  return (
    <div className="card card-side bg-base-100 shadow-2xl w-[300px] lg:w-[450px]">
      <figure
        className="w-[144px] lg:w-[200px] hover:opacity-50"
        onClick={handleRedirection}
      >
        <img
          src={image}
          alt={description}
          className="cursor-pointer w-full h-full"
        />
      </figure>
      <div className="card-body flex justify-center items-center">
        <h2 className="card-title justify-center text-center text-lg lg:text-xl w-[100px] lg:w-[150px]">
          {description}
        </h2>
      </div>
    </div>
  );
};

export default PremierCard;
