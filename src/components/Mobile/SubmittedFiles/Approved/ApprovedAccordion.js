import React from "react";
import ApproedCard from "./ApproedCard";

const ApprovedAccordion = () => {
  const approvedData = [
    {
      name: "Jamal Uddin",
      companyName: "Arong Bangladeh",
      trackID: "125469874",
      date: "12/06/2022",
      limit: "3,000,000",
      productType: "Car Loan",
    },
    {
      name: "Kamal Uddin",
      companyName: "Grameen Phone",
      trackID: "935469874",
      date: "   15/07/2022",
      limit: "5,000,000",
      productType: "Home Loan",
    },
    {
      name: "Mohi Uddin",
      companyName: "Asha Telecom",
      trackID: "795469874",
      date: "17/06/2022",
      limit: "7,000,000",
      productType: "Creadit Card",
    },
    {
      name: "Joshim Uddin",
      companyName: "nizam Telecom",
      trackID: "987452145",
      date: "13/06/2022",
      limit: "1,000,000",
      productType: "Car Loan",
    },
    {
      name: "Kashmira Shah",
      companyName: "Boo entainment",
      trackID: "765469874",
      date: "18/06/2022",
      limit: "7,000,000",
      productType: "Car Loan",
    },
  ];

  return (
    <div>
      {approvedData &&
        approvedData.map((data) => {
          return (
            <>
              <div className=" grid grid-cols-2 place-content-between place-items-center  ">
                <h1 className="myShadow2 py-2 px-3 my-1 font-monster">
                  {data.productType}
                </h1>
                <h1 className="myShadow2 py-2 px-3 my-1 font-monster">
                  {data.limit}
                </h1>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default ApprovedAccordion;
