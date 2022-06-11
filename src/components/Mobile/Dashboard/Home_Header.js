import React from "react";

const Home_Header = () => {
  return (
    <div className="w-full">
      <div className="m-2 rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 grid grid-cols-2 place-items-center place-content-between  font-poppins font-bold p-2 bg-white">
        <div>
          <h1 className="text-gray-500 text-xs"> My Commission</h1>
          <h1 className="text-sm ">BDT 1200</h1>
        </div>
        <div>
          <h1 className="text-gray-500 text-xs"> Given Commission</h1>
          <h1 className="text-sm ">BDT 100</h1>
        </div>
      </div>
    </div>
  );
};

export default Home_Header;
