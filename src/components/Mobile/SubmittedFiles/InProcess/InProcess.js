import React from "react";
import BackMenu from "../../../Shared/BackMenu";

const InProcess = () => {
  return (
    <div>
      <BackMenu title="In Process" />
      <div className="  absolute bg-gray-200 w-full h-screen">
        <div className="myShadow bg-white h-screen my-2 rounded-lg p-2">
          <h1 className=" font-monster text-ms mb-2 font-bold">In Process</h1>

          <h1>Data</h1>
        </div>
      </div>
    </div>
  );
};

export default InProcess;
