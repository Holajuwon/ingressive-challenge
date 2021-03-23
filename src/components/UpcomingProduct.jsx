import React from "react";

const UpcomingProduct = (props) => {
  return (
    <div className="flex flex-row-reverse">
      <img src={props.imagesrc} alt={props.imagealt} className="w-16 h-16" />
      <div>
        <h1 className="font-bold text-lg">{props.companyName}</h1>
        <p className="text-sm text-gray-500">
          {props.companyDescription?.slice(0, 30)}
        </p>
        <p className="text-gray-700 hover:text-orange-900 cursor-pointer uppercase text-sm">
          + Follow ({props.followCount})
        </p>
      </div>
    </div>
  );
};

export default UpcomingProduct;
