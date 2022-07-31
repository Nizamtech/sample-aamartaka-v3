import React from "react";

const SalesPlanCard = () => {
  return (
    <div className="grid grid-cols-1 m-2 font-monster">
      <div className="shadow rounded-lg bg-white my-1">
        <h1 className="p-2 font-bold text-sky-500">Amin Fashion</h1>
        <hr className="border-dotted" />

        <div className="p-2">
          <div className="text-md font-exo">
            <h1 className="mx-2 font-bold text-black">Location:</h1>
            <h1 className="mx-2">
              Bashundhara City Shopping Complex, Panthapath, Dhaka, Bangladesh
            </h1>
          </div>
          <div className="flex text-md font-exo mt-2">
            <h1 className="mx-2 font-bold text-black">Visit Time:</h1>
            <h1 className="mx-1">14:40:00</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesPlanCard;
