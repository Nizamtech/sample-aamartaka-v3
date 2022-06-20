import React from "react";

const ApproedCard = ({
  companyName,
  name,
  trackID,
  date,
  limit,
  productType,
}) => {
  return (
    <div className=" myShadow  rounded-lg my-2 ">
      <h1 className=" font-monster font-bold bg-sky-500 text-white p-2 text-center rounded-t-lg">
        {companyName}
      </h1>
      <div className=" grid grid-cols-12 f gap-2 p-2 font-roboto">
        <div className=" col-span-5 text-slate-500 text-sm">
          <h1>Customer Name</h1>

          <h1>Track ID</h1>
          <h1>Date</h1>
          <h1>Limit</h1>
          <h1>Product Type</h1>
          {/* <h1>Customer Address</h1> */}
        </div>
        <div className=" col-span-7 text-slate-700 font-bold text-sm">
          <h1>{name}</h1>
          <h1>{trackID}</h1>
          <h1>{date}</h1>
          <h1 className=" font-bold">{limit}</h1>
          <h1 className=" font-bold">{productType}</h1>
        </div>
      </div>
    </div>
  );
};

export default ApproedCard;
