import React from "react";

const DeclineCard = (data) => {
  const { companyName, name, trackID, date, limit, productType, reason } = data;
  return (
    <div className="   my-2 ">
      {/* <h1 className=" font-monster font-bold bg-sky-500 text-white p-2 text-center rounded-t-lg">
        {companyName}
      </h1> */}
      <div className=" grid grid-cols-12 f gap-2 p-2 font-roboto">
        <div className=" col-span-5 text-slate-500 text-sm">
          <h1>Customer Name</h1>
          <h1>Track ID</h1>
          <h1>Date</h1>

          {/* <h1>Product Type</h1> */}
          {/* <h1>Customer Address</h1> */}
        </div>
        <div className=" col-span-7 text-slate-700 font-bold text-sm">
          <h1>{name}</h1>
          <h1>{trackID}</h1>
          <h1>{date}</h1>
        </div>
      </div>
      <div className="mx-2">
        <h1>Reason</h1>
        <h1 className=" font-roboto text-red-600 text-justify">{reason}</h1>
      </div>
    </div>
  );
};

export default DeclineCard;
