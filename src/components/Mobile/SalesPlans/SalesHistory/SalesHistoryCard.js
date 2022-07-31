import React from "react";

const SalesHistoryCard = () => {
  const date = new Date().toLocaleDateString();

  const companyName = [
    // { name: "A K Khan & Company" },
    { name: "Aarong" },
    // { name: "Eastern Housing Limited" },
    { name: "Grameenphone" },
    { name: "Ha-meem Group" },
    // { name: "Partex Group" },
  ];
  return (
    <div className="shadow rounded-lg my-4 p-2 font-roboto">
      {/* date  */}
      <h1 className="text-center shadow bg-sky-500 py-1.5 font-bold text-white font-exo rounded-md mb-3 mt-1">
        {date}{" "}
      </h1>

      {/* compare Plan  */}
      <div className="grid grid-cols-2 gap-4 myShadow2 p-2 rounded-lg mt-2 mx-2">
        {/* Remaining Task  */}
        <div>
          <h1 className="text-md font-bold text-black text-center">
            Plan
          </h1>
          <hr className="border-dotted border-slate-500 my-1" />
          <div className="grid grid-cols-12 gap-1 text-center">
            <h4 className="text-sm text-gray-600 font-monster col-span-5">Visit</h4>
            <p className="col-span-2">--</p>
            <h4 className="col-span-5">02</h4>
          </div>
          <div className="grid grid-cols-12 gap-1 text-center">
            <h4 className="text-sm text-gray-600 font-monster col-span-5">Submit</h4>
            <p className="col-span-2">--</p>
            <h4 className="col-span-5">02</h4>
          </div>
        </div>
        {/* Completed Task  */}
        <div>
          <h1 className="text-md font-bold text-black text-center">
            Actual
          </h1>{" "}
          <hr className="border-dotted border-slate-500 my-1" />
          <div className="grid grid-cols-12 gap-1 text-center">
            <h1 className=" text-sm text-gray-600 font-monster col-span-5">Visited </h1>
            <p className="col-span-2">--</p>
            <h1 className="col-span-5">03</h1>
          </div>
          <div className="grid grid-cols-12 gap-1 text-center">
            <h1 className="text-sm text-gray-600 font-monster col-span-5">Submitted</h1>
            <p className="col-span-2">--</p>
            <h1 className="col-span-5">04</h1>
          </div>
        </div>
      </div>

      {/* Visited Company List   */}
      <div className="p-2 mt-1">
        {/* <h1 className="text-sm font-semibold text-slate-900 my-1">
          Visited Company
        </h1> */}
        {/* <div className=" flex  flex-wrap items-center">
          {companyName &&
            companyName.map((item, index) => {
              return (
                <>
                  <h1 className=" rounded-md mx-1 my-1 bg-sky-500 text-white py-[2px] px-2">
                    {item.name}
                  </h1>
                </>
              );
            })}
        </div> */}

        <div className="grid grid-cols-2 gap-4 myShadow2 p-2 rounded-lg">
          {/* Remaining Task  */}
          <div>
            <h1 className="text-md font-semibold text-slate-900 text-center">
              Plan
            </h1>
            <hr className=" border-dotted border-slate-500 my-2" />

            {companyName &&
              companyName.map((item, index) => {
                return (
                  <>
                    <h1 className="rounded-md mx-1 my-1 text-black py-[2px] px-2 font-semibold">
                      <span className="mb-1 block">{item.name}</span>
                      <div className="font-monster text-gray-500">
                        <h1 className="flex font-monster font-normal text-xs">
                          Mohakhali,Banani,Dhaka{" "}
                        </h1>
                        <small className="flex font-monster text-xs font-normal">
                          10:00 AM
                        </small>
                      </div>
                    </h1>
                  </>
                );
              })}
          </div>
          {/* Completed Task  */}
          <div>
            <h1 className="text-md font-semibold text-slate-900 text-center">
              Actual
            </h1>{" "}
            <hr className=" border-dotted border-slate-500 my-2" />
            {companyName &&
              companyName.map((item, index) => {
                return (
                  <>
                    <h1 className="rounded-md mx-1 my-1 text-black py-[2px] px-2 font-semibold">
                      <span className="mb-1 block">{item.name}</span>
                      <div className="font-monster text-gray-500">
                        <h1 className="flex font-monster font-normal text-xs">
                          Mohakhali,Banani,Dhaka{" "}
                        </h1>
                        <small className="flex font-monster text-xs font-normal">
                          10:00 AM
                        </small>
                      </div>
                    </h1>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesHistoryCard;
