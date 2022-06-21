import React from "react";

const Home_Header = () => {
  return (
    <div className="m-2 ">
      <div className="gradientBG font-exo rounded-lg border-b-0 rounded-b-none border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 p-3 ">
        <div>
          <div>
            <h1 className="text-xs  text-white font-monster font-[16px]   ">
              Total Balance
            </h1>
            <button className="widraw text-[10px] font-monster text-[#3A2424]">
              Withdraw
            </button>
          </div>
          <h1 className="text-sm  text-white font-bold">BDT 10,000</h1>
        </div>

        <div className="grid grid-cols-2 font-monster mt-4">
          <div>
            <h1 className="text-xs text-white  tracking-wide  ">
              My Commission
            </h1>
            <h1 className="text-sm  text-white font-bold  ">BDT 12,000</h1>
          </div>
          <div>
            <h1 className="text-white text-xs  tracking-wide ">
              Referral Commission
            </h1>
            <h1 className="text-sm text-white font-bold  ">BDT 10,000</h1>
          </div>
        </div>

        {/* <hr className=" border-dashed border-1 my-1" /> */}
      </div>

      <div className="  pt-3 pb-2 grid border-t-0  rounded-b-md grid-cols-2 place-content-between place-items-center shadow-md border-b  bg-gray-50 w-full">
        <div className="flex flex-col justify-between items-center w-full border-r  ">
          <h1 className=" font-bold text-slate-500 font-monster ">
            Target Points
          </h1>
          <h1 className=" text-lg  text-black font-bold tracking-[2px]">15</h1>
        </div>
        <div className="flex flex-col justify-between items-center ">
          <h1 className="font-bold text-slate-500 font-monster">
            Achive Points
          </h1>
          <h1 className=" text-lg dont-exo text-black font-bold tracking-[2px]">
            10
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home_Header;
