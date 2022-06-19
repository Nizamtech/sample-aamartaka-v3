import React from "react";
import BackMenu from "../../../Shared/BackMenu";

const CompanyDetails = ({ id }) => {
  return (
    <div>
      <BackMenu title={id} />

      <div className="  absolute bg-gray-200 w-full h-screen">
        <div className="myShadow rounded-lg mx-2 my-2 bg-white">
          <h1 className="bg-[#4DCBBF] py-2 text-lg text-center ">{id}</h1>
          <h1>{id}</h1>
          <h1>{id}</h1>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
