import React from "react";
import { FaProductHunt, FaHammer } from "react-icons/fa";
import { MdLiveHelp } from "react-icons/md";
import { GiSail } from "react-icons/gi";
import { HiDotsHorizontal, HiOutlineCalendar } from "react-icons/hi";
import { CgToolbox } from "react-icons/cg";

const NavBar = () => {
  return (
    <div className="fixed bg-gray-900 hover:w-40 h-full flex group">
      <div className="space-y-44 flex flex-col items-center  w-16  ">
        <FaProductHunt
          color="#dc5636"
          size="50"
          className="mt-2 cursor-pointer"
        />
        <div className="space-y-5 ">
          <MdLiveHelp color="gray" size="35" cursor="pointer" className="transition transform hover:-translate-y-1" />
          <GiSail color="gray" size="35" cursor="pointer" className="transition transform hover:-translate-y-1 hover:rotate-12"/>
          <FaHammer color="gray" size="35" cursor="pointer" className="transition transform hover:-translate-y-1 hover:rotate-45"/>
          <CgToolbox color="gray" size="35" cursor="pointer" className="transition transform hover:-translate-y-1"/>
          <HiOutlineCalendar color="gray" size="35" cursor="pointer" className="transition transform hover:-translate-y-1"/>
          <HiDotsHorizontal color="gray" size="35" cursor="pointer" className="transition transform hover:-translate-y-1"/>
        </div>
      </div>
      <div className="hidden group-hover:flex w-24 space-y-48  flex-col place-items-start font-bold transition transform ">
        <h1 className="mt-5 cursor-pointer text-gray-100 text-lg">Product Q</h1>
        <div className="space-y-8 text-orange-900 cursor-pointer ">
          <p>Help</p>
          <p>Explore</p>
          <p>Action</p>
          <p>Toolbox</p>
          <p>Calender</p>
          <p className="pb-96">Options</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
