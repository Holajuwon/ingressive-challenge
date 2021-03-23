import React from "react";
import { IoIosSend } from "react-icons/io";

const NewsletterInput = () => {
  return (
    <div className="flex w-full items-center box-border text-lg p-4 shadow-xl rounded-xl bg-gray-100 ">
      <input
        type="email"
        className="w-full p-1 outline-none bg-gray-100"
        placeholder="Newsletter signup"
      />
      <IoIosSend size="35" color="gray" className="cursor-pointer " />
    </div>
  );
};

export default NewsletterInput;
