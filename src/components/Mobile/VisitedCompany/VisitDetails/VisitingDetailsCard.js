import React from "react";

const VisitingDetailsCard = ({ purpose, name, time, date, phone }) => {
  return (
    <div className=" myShadow  rounded-lg my-2 ">
      <h1 className=" font-monster font-bold bg-sky-500 text-white p-2 text-center rounded-t-lg">
        {date}
      </h1>
      <div className=" grid grid-cols-12 f gap-2 p-2 font-roboto">
        <div className=" col-span-5 text-slate-500 text-sm">
          <h1>Time</h1>
          <h1>Customer Name</h1>
          <h1>Customer Phone</h1>
          <h1>Purpose</h1>
          {/* <h1>Customer Address</h1> */}
        </div>
        <div className=" col-span-7 text-slate-700 font-bold text-sm">
          <h1>{time}</h1>
          <h1>{name}</h1>
          <h1>{phone}</h1>
          <h1>{purpose}</h1>
        </div>
      </div>
    </div>
  );
};

export default VisitingDetailsCard;
