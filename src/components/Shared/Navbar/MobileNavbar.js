import Link from "next/link";
import React from "react";

const MobileNavbar = () => {
  return (
    <>
      <nav className="nav flex justify-between items-center h-16 font-monster bg-[#4EC0ED]">
        <h1 className="text-xl text-black font-semibold">
          Hi <span className="font-bold text-white text-lg">Jhon</span>
        </h1>
        <div className="flex justify-between items-center ">
          <h1 className="font-bold text-black text-lg">Points</h1>
          <h1 className="h-9 w-9 bg-sky-400 text-white border-2 border-white rounded-full p-1 ml-3 flex felx-col items-center justify-center text-[17px] font-semibold">
            20
          </h1>
        </div>
      </nav>
    </>
  );
};

export default MobileNavbar;
