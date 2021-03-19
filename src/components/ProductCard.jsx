import React from "react";
import { FaRegComment } from "react-icons/fa";

const ProductCard = (props) => {
  return (
    <div className="bg-gray-50 shadow-lg max-w-sm rounded-lg">
      <div className="w-full rounded-full">
        <img
          src={props.imagesrc}
          alt={props.imagealt}
          className="rounded-t-lg"
        />
      </div>
      <div className="bg-white rounded-b-lg p-6 space-y-3">
        <h1 className="text-xl font-bold text-gray-900">{props.companyName}</h1>
        <p className="text-sm text-gray-500">{props.companyDescription}</p>
        <div className="flex justify-around content-center">
          <p className="m-1 px-3 py-1 rounded-md shadow-lg bg-red-300 font-bold">
            + {props.companyVotes}
          </p>
          <p className="m-1 px-3 py-1 rounded-md shadow-lg flex space-x-2 bg-gray-500 font-bold">
            <FaRegComment size="20px" /> <p>{props.commentCount}</p>
          </p>
          <p className="m-1 px-3 py-1 rounded-md  shadow-lg border-gray-700 border-2">
            {props.tag}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
