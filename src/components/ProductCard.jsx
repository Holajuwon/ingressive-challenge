import React from "react";
import { FaRegComment } from "react-icons/fa";

const ProductCard = (props) => {
  return (
    <div className="bg-gray-500 shadow-lg max-w-sm rounded-lg  cursor-pointer w-80 h-90 mb-10">
      <img
        src={props.imagesrc}
        alt={props.imagealt}
        className="rounded-t-lg w-full h-40"
      />
      <div className="bg-white rounded-b-lg p-6 space-y-3 h-50">
        <h1 className="text-xl font-bold text-gray-900">{props.companyName}</h1>
        <p className="text-sm text-gray-500">
          {props.companyDescription.slice(0, 100)}
        </p>
        <div className="flex justify-around content-center">
          <p className="m-1 px-2 py-1 rounded-md shadow-lg bg-orange-900 active:bg-orange-a400 font-bold btns">
            + {props.companyVotes}
          </p>
          <p className="m-1 px-2 py-1 rounded-md shadow-lg flex space-x-2 bg-gray-500 active:bg-gray-700 font-bold btns">
            <FaRegComment size="20px" /> <p>{props.commentCount}</p>
          </p>
          <p className="m-1 px-2 py-1 rounded-md  shadow-lg border-gray-700 border-2">
            {props.tag}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
