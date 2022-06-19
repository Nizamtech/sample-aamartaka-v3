import React from "react";
import BackMenu from "../../../Shared/BackMenu";

const CompanyDetails = ({ id }) => {
  return (
    <div>
      <BackMenu title={id} />

      <div className=" bg-gray-100">
        <h1> {id} </h1>
      </div>
    </div>
  );
};

export default CompanyDetails;
