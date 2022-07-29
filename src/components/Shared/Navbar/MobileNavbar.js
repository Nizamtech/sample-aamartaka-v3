import Link from "next/link";
import React from "react";

const MobileNavbar = () => {
  return (
    <div className="gradientBG">
      <nav className="nav flex justify-between items-center h-16 font-monster">
        <div>
          <h1 className="text-lg text-white font-semibold">
            Hi <span className="font-bold text-red-400 text-lg">Jhon</span>
          </h1>
        </div>
        <div className="flex justify-between items-center ">
          <h1 className="font-bold text-white text-lg ">Points</h1>
          <h1 className="h-9 w-9 bg-orange-600 text-white border-2 border-white rounded-full p-1 ml-3 flex felx-col items-center justify-center text-[17px] font-semibold">
            20
          </h1>
        </div>
      </nav>
    </div>
  );
};

export default MobileNavbar;
