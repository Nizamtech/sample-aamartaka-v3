import React from "react";
import BackMenu from "../../Shared/BackMenu";
import SalesPlanCard from "./SalesPlanCard";

const SalesPlans = () => {
  return (
    <div>
      <BackMenu title={"Sales Plans"} />
      <div className=" bg-[#EFF2F7] h-screen overflow-scroll p-2">
        <div className="flex justify-between items-center my-2">
          <h1 className="font-exo">Sales Plans</h1>
          <button
            type="button"
            className="text-white bg-[#3ac47d] border-[#3ac47d]  text-xs px-5 py-2 rounded-md font-exo"
          >
            Set Plan
          </button>
        </div>
        <div className=" bg-white mt-4 rounded-md h-screen overflow-scroll">
          <div className="grid grid-cols-2 font-exo  ">
            <div className="p-2">
              <h1 className="text-sm text-center text-cyan-500 font-bold ">
                Tomorrow Submit Plan{" "}
              </h1>
              <h1 className="text-lg text-center font-bold ">02 </h1>
            </div>
            <div className="p-2">
              <h1 className="text-sm  text-center text-cyan-500 font-bold">
                Tomorrow Submit Plan{" "}
              </h1>
              <h1 className="text-lg text-center font-bold ">02 </h1>
            </div>
          </div>
          <hr className=" border-dotted" />
          {/* main content  */}
          <SalesPlanCard />
          <SalesPlanCard />
        </div>
      </div>
    </div>
  );
};

export default SalesPlans;
