import React from "react";

const Home_Header = () => {
  return (
    <div className="relative mb-11">
      <div className="gradientBG px-4 pb-12 pt-7 font-monster rounded-br-[40%]">
        <div className="flex justify-between items-center py-5 -mt-5">
          <div>
            <h1 className="text-md text-white font-bold">
              My Commission
            </h1>
            <h1 className="text-sm font-bold text-orange-500">BDT 12,000</h1>
          </div>
          <div>
            <h1 className="text-md text-white font-bold">
              Referral Commission
            </h1>
            <h1 className="text-sm font-bold text-orange-500">BDT 10,000</h1>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <h4 className="text-md text-white font-bold">
              Total Balance
            </h4>
            <h4 className="text-sm text-orange-500 font-bold">BDT 10,000</h4>
          </div>
          <button className="text-sm font-bold bg-orange-600 text-white py-2 px-4 rounded-md mr-14">
            Withdraw
          </button>
        </div>
      </div>
      <div className="absolute top-40 pt-3 pb-2 grid rounded-md grid-cols-2 place-content-between place-items-center shadow-md border-b bg-gray-50 w-2/3 left-[20%] border border-gray-400">
        <div className="flex flex-col justify-between items-center w-full border-r  ">
          <h1 className=" font-bold text-slate-500 font-monster">
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
