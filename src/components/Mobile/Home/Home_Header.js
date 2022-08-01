import React from "react";

const Home_Header = () => {
  return (
    <div className="relative pb-2">
      <div className="gradientBG px-4 pb-12 pt-7 font-monster rounded-br-[40%]">
        {/* <div className="flex justify-between items-center">
          <div className="border-r-2 border-orange-300">
            <h1 className="text-sm text-white mb-1 mr-2">
              My Commission
            </h1>
            <h1 className="text-md font-bold font-exo text-black">BDT 12,000</h1>
          </div>
          <div className="border-r-2 border-orange-300">
            <h1 className="text-xs text-white font-bold mb-1 mr-2">
              Referral Commission
            </h1>
            <h1 className="text-md font-bold font-exo">BDT 10,000</h1>
          </div>
          <div>
            <h4 className="text-xs text-white font-bold mb-1">
              Total Balance
            </h4>
            <h4 className="text-md font-bold text-black font-exo">BDT 10,000</h4>
          </div>
        </div>
        <div className="w-20 mx-auto mt-4">
          <button className="text-sm font-bold bg-sky-300 text-black py-2 px-3 rounded-md">
            Withdraw
          </button>
        </div> */}

        <div className="flex justify-between items-center py-5 -mt-6 px-2">
          <div>
            <h1 className="text-md text-white font-bold">
              My Commission
            </h1>
            <h1 className="text-sm font-bold">BDT 12,000</h1>
          </div>
          <div>
            <h1 className="text-md text-white font-bold">
              Referral Commission
            </h1>
            <h1 className="text-sm font-bold">BDT 10,000</h1>
          </div>
        </div>
        <div className="flex justify-between items-center px-2">
          <div>
            <h4 className="text-md text-white font-bold">
              Total Balance
            </h4>
            <h4 className="text-sm font-bold text-black">BDT 10,000</h4>
          </div>
          <button className="text-sm font-bold bg-white text-sky-600 py-2 px-4 rounded-md mr-14">
            Withdraw
          </button>
        </div>
      </div>
      <div className="absolute top-40 pt-3 pb-2 grid rounded-md grid-cols-2 place-content-between place-items-center shadow-md bg-gray-50 w-2/3 left-[18%] border border-sky-200">
        <div className="flex flex-col justify-between items-center w-full border-r border-r-sky-800">
          <h1 className="font-bold text-black font-monster">
            Target Points
          </h1>
          <h1 className="text-md font-exo text-black font-bold tracking-widest border-4 border-sky-500 rounded-full p-1 h-9 w-9 text-center mx-auto flex flex-col justify-center items-center">15</h1>
        </div>
        <div className="flex flex-col justify-between items-center ">
          <h1 className="font-bold text-black font-monster">
            Achive Points
          </h1>
          <h1 className="text-md font-exo text-black font-bold tracking-widest border-4 border-sky-500 rounded-full p-1 h-9 w-9 text-center mx-auto flex flex-col justify-center items-center">
            10
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home_Header;
