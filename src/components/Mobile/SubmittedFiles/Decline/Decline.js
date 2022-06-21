import React from "react";
import BackMenu from "../../../Shared/BackMenu";
import LeadListCard from "../../../Shared/LeadListCard/LeadListCard";
import ApproedCard from "../Approved/ApproedCard";
import DeclineCard from "./DeclineCard";
import data from "../../../../../public/assets/data/data.json";
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
        <div className="myShadow bg-white my-2 rounded-lg p-2">
          <div>
            {data &&
              data.map((item) => {
                return (
                  <>
                    <div className="rounded-md m-2 bg-white myShadow py-2">
                      <div className="mx-4 flex justify-between items-center">
                        <h1 className="  text-sm font-monster bg-sky-500 px-2 text-white rounded-md py-[2px]">
                          {item?.productType}
                        </h1>

                        {/* <h1 className="  text-sm font-monster ">2,000,000</h1> */}
                      </div>
                      <hr className=" border-dotted  my-1 border-gray-400" />
                      <LeadListCard item={item} isStatus={true} />
                      <DeclineCard {...item} />
                    </div>
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
