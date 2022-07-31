import { Router, useRouter } from "next/router";
import React, { useState } from "react";
import BackMenu from "../../Shared/BackMenu";
import SalesPlanCard from "./SalesPlanCard";
import SetPlan_Modal from "./SetPlan_Modal";

const SalesPlans = () => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  return (
    <div>
      <BackMenu title={"Sales Plans"} />
      <div className=" bg-[#EFF2F7] h-screen overflow-scroll p-2">
        <div className="flex justify-between items-center my-2 mx-2">
          {/* <h1 className="font-exo">Sales Plans</h1> */}
          <button
            onClick={() => router.push("/salesplans/saleshistory")}
            type="button"
            className="w-full mx-2 text-white bg-sky-500 border-sky-500 text-xs px-5 py-2 rounded-md font-exo"
          >
            History
          </button>
          <button
            onClick={() => setShowModal(true)}
            type="button"
            className="w-full mx-2 text-white bg-[#2684FF] border-[#2684FF] text-xs px-5 py-2 rounded-md font-exo"
          >
            Set Plan
          </button>
        </div>
        <div className=" bg-white mt-4 rounded-md h-screen overflow-scroll">
          <div className="grid grid-cols-2 font-exo  ">
            <div className="p-2 border-r">
              <h1 className="text-sm text-center text-[#E68E8D] font-bold ">
                Tomorrow Submit Plan
              </h1>
              <h1 className="text-lg text-center font-bold ">02</h1>
            </div>
            <div className="p-2 border-l">
              <h1 className="text-sm  text-center text-[#E68E8D] font-bold">
                Tomorrow visit Plan
              </h1>
              <h1 className="text-lg text-center font-bold ">02 </h1>
            </div>
          </div>
          <hr className=" border-dotted" />
          {/* main content  */}

          {/* first Half  */}
          <div className="shadow rounded-lg my-2 p-2 bg-gray-50">
            <h1 className="my-2 text-lg text-black mx-4 font-monster font-semibold tracking-wide">
              First Half
            </h1>

            <SalesPlanCard />
            <SalesPlanCard />
          </div>
          <div className="myShadow rounded-lg my-6 p-2 bg-gray-50 ">
            <h1 className="my-2 text-lg text-black mx-4 font-monster font-semibold tracking-wide">
              Second Half
            </h1>
            {/* <hr className=" border-dotted border-slate-700" /> */}
            <SalesPlanCard />
            <SalesPlanCard />
          </div>
        </div>
      </div>
      <SetPlan_Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default SalesPlans;
