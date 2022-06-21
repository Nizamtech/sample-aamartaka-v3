import React from "react";
import BackMenu from "../../../Shared/BackMenu";
import ApproedCard from "../Approved/ApproedCard";
import DeclineCard from "./DeclineCard";

const Decline = () => {
  const approvedData = [
    {
      name: "Jamal Uddin",
      companyName: "Arong Bangladeh",
      trackID: "125469874",
      date: "12/06/2022",
      limit: "3,000,000",
      productType: "Car Loan",
      reason:
        "Applicants may month salary was 32k, which is less than required. Checklist @SD-3",
    },
    {
      name: "Kamal Uddin",
      companyName: "Grameen Phone",
      trackID: "935469874",
      date: "   15/07/2022",
      limit: "5,000,000",
      productType: "Home Loan",
      reason: " Your application is not approved. Checklist @SD-3",
    },
    {
      name: "Mohi Uddin",
      companyName: "Asha Telecom",
      trackID: "795469874",
      date: "17/06/2022",
      limit: "7,000,000",
      productType: "Creadit Card",
      reason: " You are not eligible for this product. Checklist @SD-3",
    },
    {
      name: "Joshim Uddin",
      companyName: "nizam Telecom",
      trackID: "987452145",
      date: "13/06/2022",
      limit: "1,000,000",
      productType: "Car Loan",
      reason:
        " Your application does not meet the requirements. Checklist @SD-3",
    },
    {
      name: "Kashmira Shah",
      companyName: "Boo entainment",
      trackID: "765469874",
      date: "18/06/2022",
      limit: "7,000,000",
      productType: "Car Loan",
      reason:
        " Your application does not meet the requirements. Checklist @SD-3",
    },
  ];
  return (
    <div>
      <BackMenu title="Decline" />
      <div className="  absolute bg-gray-200 w-full h-screen">
        <div className="myShadow bg-white h-screen my-2 rounded-lg p-2">
          <h1 className=" font-monster text-ms mb-2 font-bold">Decline</h1>

          <div>
            {approvedData &&
              approvedData.map((data) => {
                return (
                  <>
                    <details>
                      <summary className="myShadow2 py-2 px-3 bg-gray-50 my-1 font-monster">
                        {data.productType}
                      </summary>
                      <DeclineCard {...data} />
                    </details>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Decline;
