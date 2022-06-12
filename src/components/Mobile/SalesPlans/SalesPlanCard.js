import React from "react";

const SalesPlanCard = () => {
  return (
    <div className="grid grid-cols-1  m-2">
      <div className="myShadow text-sm  bg-white ">
        <h1 className=" p-2 "> Amin Fashion</h1>
        <hr className=" border-dotted" />

        <div className="p-2 ">
          <div className="flex text-sm font-exo">
            <h1 className="mx-2 font-bold text-slate-800">Location:</h1>
            <h1 className="mx-1">
              Bashundhara City Shopping Complex, Panthapath, Dhaka, Bangladesh
            </h1>
          </div>
          <div className="flex  text-sm font-exo mt-2">
            <h1 className="mx-2 font-bold text-slate-800">Visit Time:</h1>
            <h1 className="mx-1">14:40:00</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesPlanCard;
