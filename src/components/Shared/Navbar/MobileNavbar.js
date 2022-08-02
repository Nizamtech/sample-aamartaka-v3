import Link from "next/link";
import React from "react";

const MobileNavbar = () => {
  return (
    <>
      <nav className="nav flex justify-between items-center h-16 font-monster bg-white">
        <h1 className="text-xl text-black font-semibold">
          Hi <span className="font-bold text-xl text-orange-400">Jhon</span>
        </h1>
        <div className="flex justify-between items-center ">
          <h1 className="font-bold text-black text-lg">Points</h1>
          <h1 className="h-10 w-10 bg-orange-400 text-white rounded-full p-1 ml-2 flex felx-col items-center justify-center text-[17px] font-semibold">
            20
          </h1>
        </div>
      </nav>
    </>
  );
};

export default MobileNavbar;
