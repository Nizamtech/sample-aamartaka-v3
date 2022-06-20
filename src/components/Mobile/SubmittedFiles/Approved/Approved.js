import React from "react";
import BackMenu from "../../../Shared/BackMenu";
import VisitingDetailsCard from "../../VisitedCompany/VisitDetails/VisitingDetailsCard";
import ApproedCard from "./ApproedCard";

const Approved = () => {
  return (
    <div>
      <BackMenu title="Approved" />
      <div className="  absolute bg-gray-200 w-full h-screen">
        <div className="myShadow bg-white mx-2 my-2 rounded-lg p-2">
          <h1 className=" font-monster text-ms mb-2 font-bold">
            Approved List
          </h1>

          <ApproedCard
            name="Jamal Uddin"
            companyName="Arong Bangladeh"
            trackID="125469874"
            date="12/06/2022"
            limit="3,000,000"
            productType="Car Loan"
          />

          <ApproedCard
            name="Jamal Uddin"
            companyName="Grameen Phone"
            trackID="935469874"
            date="15/07/2022"
            limit="5,000,000"
            productType="Home Loan"
          />

          <ApproedCard
            name="Jamal Uddin"
            companyName="Asha Telecom"
            trackID="795469874"
            date="12/06/2022"
            limit="7,000,000"
            productType="Creadit Card"
          />
        </div>
      </div>
    </div>
  );
};

export default Approved;
