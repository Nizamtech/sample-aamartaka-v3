import React from "react";

const VisitingDetailsCard = ({ purpose, name, time, date, phone }) => {
  return (
    <div className="rounded-lg my-4 pb-2 border shadow">
      <h1 className="font-monster font-bold bg-[#2684FF] text-white px-2 py-1.5 text-center rounded-t-md">
        {date}
      </h1>
      <div className="grid grid-cols-12 gap-2 p-2 font-roboto">
        <div className="col-span-5 text-black text-md font-semibold">
          <h1>Time</h1>
          <h1>Customer Name</h1>
          <h1>Customer Phone</h1>
          <h1>Purpose</h1>
        </div>
        <div className="col-span-1 text-black text-md font-semibold">
          <h1>--</h1>
          <h1>--</h1>
          <h1>--</h1>
          <h1>--</h1>
        </div>
        <div className="col-span-6 text-black text-md font-semibold">
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
