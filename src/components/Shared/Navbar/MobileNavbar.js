import Link from "next/link";
import React from "react";

const MobileNavbar = () => {
  return (
    <div className=" bg-white">
      <nav className="nav flex justify-between items-center h-20 font-monster  ">
        <div>
          <h1 className="text-lg">
            Hi <span className="font-bold text-red-400">Jhon</span>{" "}
          </h1>
        </div>
        <div className="flex justify-between items-center ">
          <h1 className="font-bold text-orange-500 text-lg ">Points</h1>
          <h1 className=" bg-red-500 text-white border-2 border-white rounded-full p-1 ml-3 text-[10px]">
            20
          </h1>
        </div>
      </nav>
    </div>
  );
};

export default MobileNavbar;
