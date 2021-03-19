import React from "react";
import ProductCard from "../components/ProductCard";
import data from "../components/data";

const Home = () => {
  return (
    <div className="space-x-10 space-y-10 flex flex-wrap content-center justify-center">
      {data.map((dt, item) => (
        <ProductCard
          className="flex-shrink-0"
          imagesrc={dt.img}
          imagealt={dt.alt}
          companyName={dt.name}
          companyDescription={dt.desc}
          companyVotes={dt.vote}
          commentCount={dt.comments}
          tag={dt.tag}
        />
      ))}
    </div>
  );
};

export default Home;
