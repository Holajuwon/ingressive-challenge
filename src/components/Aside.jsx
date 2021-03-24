import React from "react";
import data from "./data";
import NewsletterInput from "./NewsletterInput";
import UpcomingProduct from "./UpcomingProduct";

const Aside = () => {
  return (
    <div className="absolute top-32 right-5 w-2/12 space-y-5 hidden xl:block">
      <NewsletterInput />
      <h1 className="font-bold text-xl">Upcoming Products</h1>
      <div className="space-y-4 bg-gray-50 p-3 rounded-md">
        {data.map(
          (item, index) =>
            index >= 5 && (
              <>
                <UpcomingProduct
                  imagesrc={item.img}
                  imagealt={item.tag}
                  companyName={item.name}
                  companyDescription={item.desc}
                  followCount={item.vote}
                />
                <hr className="w-full border-gray-500" />
              </>
            )
        )}
        <h2 className="text-center p-2 w-full border-gray-500 border-2 rounded-md cursor-pointer text-orange-900 uppercase">
          View All
        </h2>
      </div>
    </div>
  );
};

export default Aside;
