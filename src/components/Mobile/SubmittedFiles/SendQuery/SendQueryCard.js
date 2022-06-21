import React from "react";

const SendQueryCard = (data) => {
  const {
    companyName,
    name,
    trackID,
    date,
    limit,
    productType,
    reason,
    sendBack,
  } = data;
  console.log(sendBack);
  return (
    <div className=" h-screen overflow-scroll  my-2 ">
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
        <h1 className=" text-red-600">Send Query</h1>
        <div>
          {sendBack.map((item, index) => {
            return (
              <>
                <div className=" font-roboto text-justify py-1 grid grid-cols-12">
                  <h1 className=" col-span-1">
                    {" "}
                    <span className=" text-slate-400">{index + 1}.</span>{" "}
                  </h1>
                  <h1 className=" col-span-11">
                    <span className="">{item}</span>
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

export default SendQueryCard;
