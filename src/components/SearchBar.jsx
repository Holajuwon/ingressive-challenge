import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
  return (
    <div className="flex w-full items-center box-border text-4xl p-5 shadow-xl rounded-xl bg-gray-100 ">
      <input
        type="text"
        className="w-full p-2 outline-none bg-gray-100"
        placeholder="Discover your next favorite thing"
      />
      <BsSearch size="50" color="gray" className="" />
    </div>
  );
};

export default SearchBar;
