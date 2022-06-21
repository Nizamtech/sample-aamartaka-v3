import React from "react";
import BackMenu from "../../../Shared/BackMenu";
import LeadListCard from "../../../Shared/LeadListCard/LeadListCard";
import VisitingDetailsCard from "../../VisitedCompany/VisitDetails/VisitingDetailsCard";
import ApproedCard from "./ApproedCard";
import ApprovedAccordion from "./ApprovedAccordion";
import ApprovedCard2 from "./ApprovedCard2";
import data from "../../../../../public/assets/data/data.json";
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
      <BackMenu title="In Progress" />
      <div className="  absolute bg-gray-200 w-full h-screen">
        <div className="myShadow bg-white h-screen my-2 rounded-lg p-2">
          {data &&
            data.map((item) => {
              return (
                <>
                  <div className="rounded-md m-2 bg-white myShadow py-2">
                    <div className="mx-4 flex justify-between items-center">
                      <h1 className="  text-sm font-monster bg-sky-500 px-2 text-white rounded-md py-[2px]">
                        {item.productType}
                      </h1>

                      <h1 className="  text-sm font-monster flex justify-between items-center ">
                        <span className="mx-2  rounded text-slate-400 font-bold">
                          Limit
                        </span>{" "}
                        <span className="  text-sm font-monster font-bold text-slate-900">
                          {" "}
                          2,000,000
                        </span>
                      </h1>
                    </div>
                    <hr className=" border-dotted  my-1 border-gray-400" />
                    <LeadListCard item={item} />
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
