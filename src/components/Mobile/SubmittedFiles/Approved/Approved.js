import React from "react";
import BackMenu from "../../../Shared/BackMenu";
import VisitingDetailsCard from "../../VisitedCompany/VisitDetails/VisitingDetailsCard";
import ApproedCard from "./ApproedCard";
import ApprovedAccordion from "./ApprovedAccordion";
import ApprovedCard2 from "./ApprovedCard2";

const Approved = () => {
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
      <BackMenu title="Approved" />
      <div className="  absolute bg-gray-200 w-full h-screen">
        <div className="myShadow bg-white h-screen my-2 rounded-lg p-2">
          <h1 className=" font-monster text-ms mb-2 font-bold mx-2">
            Approved List
          </h1>

          {approvedData &&
            approvedData.map((data) => {
              return (
                <>
                  <div className=" text-white rounded-lg ring-1 font-monster ring-slate-300 grid grid-cols-2 place-content-between place-items-center bg-green-400 my-2  ">
                    <h1 className=" py-2 px-3 my-1 font-monster">
                      {data.productType}
                    </h1>
                    <h1 className=" py-2 px-3 my-1 font-monster">
                      {data.limit}
                    </h1>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Approved;