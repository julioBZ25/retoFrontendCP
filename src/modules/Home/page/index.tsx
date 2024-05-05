import React, { useEffect } from "react";
import useGetPremieres from "../hooks/useGetPremieres";
import Skeleton from "../components/Skeleton";
import PremierCard from "../components/PremierCard";

export default function Home() {
  const { handleGetPremieres, premieres, status } = useGetPremieres();
  useEffect(() => {
    handleGetPremieres();
  }, []);
  return (
    <div className="py-8 px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 col justify-items-center">
        {status === "loading" && <Skeleton />}
        {status === "success" &&
          (!!premieres?.length
            ? premieres?.map((premiere, i) => (
                <PremierCard
                  key={i}
                  image={premiere.image}
                  description={premiere.description}
                />
              ))
            : null)}
      </div>
    </div>
  );
}
