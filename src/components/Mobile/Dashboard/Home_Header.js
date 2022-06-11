import React from "react";

const Home_Header = () => {
  return (
    <div className="m-2">
      <div className="gradientBG font-exo rounded-lg border-b-0 rounded-b-none border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700  font-bold p-3 ">
        <div>
          <h1 className="text-lg font-exo text-white tracking-[5px]">
            Total Balance
          </h1>
          <h1 className="text-xl font-exo tracking-[1px]">BDT 000</h1>
        </div>

        <div className="grid grid-cols-2   font-exo  mt-1">
          <div>
            <h1 className="text-xs text-white tracking-[2px]">
              {" "}
              My Commission
            </h1>
            <h1 className="text-lg text-[#222B55] font-bold font-exo tracking-[1px]">
              BDT 1200
            </h1>
          </div>
          <div>
            <h1 className="text-white text-xs tracking-[1px]">
              {" "}
              Referral Commission
            </h1>
            <h1 className="text-lg text-[#222B55]  font-bold tracking-[5px]">
              BDT 100
            </h1>
          </div>
        </div>

        {/* <hr className=" border-dashed border-1 my-1" /> */}
      </div>

      <div className="pt-1 grid border-t-0 font-exo rounded-b-md grid-cols-2 place-content-between place-items-center shadow-md border-b  bg-white w-full">
        <div className="flex flex-col justify-between items-center ">
          <h1 className="font-exo font-bold text-slate-400">Target Points</h1>
          <h1 className="dont-exo text-black font-bold tracking-[2px]">10</h1>
        </div>
        <div className="flex flex-col justify-between items-center ">
          <h1 className="font-exo font-bold text-slate-400">Achive Points</h1>
          <h1 className="dont-exo text-black font-bold tracking-[2px]">10</h1>
        </div>
      </div>
    </div>
  );
};

export default Home_Header;
