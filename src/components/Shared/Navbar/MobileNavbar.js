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
          {/* <img
            src="https://i.ibb.co/FWrwLGM/icons8-points-64.png"
            alt=""
            width="50px"
            height="50px"
          /> */}
          <h1 className="font-bold text-orange-500 text-lg ">Points</h1>
          <h1 className=" bg-red-500 text-white border-2 border-white rounded-full p-1 ml-3 text-[10px]">
            20
          </h1>
          {/* <div className="p-2 h-8 w-8 my-1 border-2 border-white rounded-full bg-green-400 z-2">
            20
          </div> */}
        </div>
      </nav>
    </div>
  );
};

export default MobileNavbar;
