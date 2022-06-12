import React, { useState } from "react";
import BackMenu from "../../Shared/BackMenu";
import Calendar from "../../Shared/Calendar";

const VisitedCompany = () => {
  return (
    <div>
      <BackMenu title="Visited Company" />

      <Calendar />

      <div className="bg-[#EFF2F7] w-full p-3 ">
        <div className=" bg-white h-screen rounded-md overflow-scroll">
          <div className=" mt-1 ">
            <h1 className="p-2">{"12/6/2022"}</h1>
            <hr className=" border-dotted mb-2" />
          </div>
          <div className="grid grid-cols-2 gap-4 text-center m-2">
            <div className="myShadow text-xs p-2 bg-white rounded-md">
              {" "}
              Amin Fashion
            </div>
            <div className="myShadow text-xs p-2 bg-white rounded-md">
              {" "}
              Bonolota Ceramics
            </div>
            <div className="myShadow text-xs p-2 bg-white rounded-md">
              {" "}
              Lanka BAngla
            </div>
            <div className="myShadow text-xs p-2 bg-white rounded-md ">
              {" "}
              First Globar{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitedCompany;
