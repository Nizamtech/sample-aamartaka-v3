import React from "react";
import BackMenu from "../../../Shared/BackMenu";
import SendQueryCard from "./SendQueryCard";
import data from "../../../../../public/assets/data/data.json";
import LeadListCard from "../../../Shared/LeadListCard/LeadListCard";
import SendQueryCard2 from "./SendQueryCard2";
const SendQuery = () => {
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
      sendBack: [
        "Need Correct NID",
        "Need e-TIN",
        "Overdue on current month on a term loan of 2.85 Lacs, marked as NPI-1, need to clear the dues and provide statement. Another overdue on a Mortgage loan as a Guarantor, marked as NPI-2, need to clear the dues and clarification on th repayment",
      ],
    },
    {
      name: "Kamal Uddin",
      companyName: "Grameen Phone",
      trackID: "935469874",
      date: "   15/07/2022",
      limit: "5,000,000",
      productType: "Home Loan",
      reason: " Your application is not approved. Checklist @SD-3",
      sendBack: [
        "Need Correct NID",
        "Need e-TIN",
        "Overdue on current month on a term loan of 2.85 Lacs, marked as NPI-1, need to clear the dues and provide statement. Another overdue on a Mortgage loan as a Guarantor, marked as NPI-2, need to clear the dues and clarification on th repayment",
      ],
    },
    {
      name: "Mohi Uddin",
      companyName: "Asha Telecom",
      trackID: "795469874",
      date: "17/06/2022",
      limit: "7,000,000",
      productType: "Creadit Card",
      reason: " You are not eligible for this product. Checklist @SD-3",
      sendBack: [
        "Need Correct NID",
        "Need e-TIN",
        "Overdue on current month on a term loan of 2.85 Lacs, marked as NPI-1, need to clear the dues and provide statement. Another overdue on a Mortgage loan as a Guarantor, marked as NPI-2, need to clear the dues and clarification on th repayment",
      ],
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
      sendBack: [
        "Need Correct NID",
        "Need e-TIN",
        "Overdue on current month on a term loan of 2.85 Lacs, marked as NPI-1, need to clear the dues and provide statement. Another overdue on a Mortgage loan as a Guarantor, marked as NPI-2, need to clear the dues and clarification on th repayment",
      ],
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
      sendBack: [
        "Need Correct NID",
        "Need e-TIN",
        "Overdue on current month on a term loan of 2.85 Lacs, marked as NPI-1, need to clear the dues and provide statement. Another overdue on a Mortgage loan as a Guarantor, marked as NPI-2, need to clear the dues and clarification on th repayment",
      ],
    },
  ];

  return (
    <div>
      <BackMenu title="Send Query" />
      <div className="  absolute bg-gray-200 w-full h-screen">
        <div className="myShadow bg-white  my-2 rounded-lg p-2">
          {data &&
            data.map((item) => {
              return (
                <>
                  <SendQueryCard2 item={item} isStatus={true} />
                </>
              );
            })}
          <div>
            {/* {approvedData &&
              approvedData.map((data) => {
                return (
                  <>
                    <details>
                      <summary className=" shadow py-2 px-3 bg-gray-50 my-1 font-monster rounded-sm">
                        {data.productType}
                      </summary>
                      <SendQueryCard {...data} />
                    </details>
                  </>
                );
              })} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendQuery;
