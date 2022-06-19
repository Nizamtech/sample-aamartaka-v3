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
    <div className="myShadow rounded-lg my-4 p-2 font-roboto">
      {/* date  */}
      <h1 className="text-center myShadow3 bg-[#4DCBBF] py-2 font-bold text-white font-exo ">
        {date}{" "}
      </h1>

      {/* compare Plan  */}
      <div className="grid grid-cols-2 gap-4 myShadow2 p-2 rounded-lg mt-2 mx-2">
        {/* Remaining Task  */}
        <div>
          <h1 className="text-md font-semibold text-slate-900 text-center">
            Plan
          </h1>
          <hr className=" border-dotted border-slate-500 my-1" />
          <div className=" grid grid-cols-2 gap-1">
            <h1 className=" text-sm text-gray-600 font-monster ">Visit </h1>
            <h1>02</h1>
          </div>
          <div className=" grid grid-cols-2 gap-1">
            <h1 className=" text-sm text-gray-600 font-monster ">Submit</h1>
            <h1>02</h1>
          </div>
        </div>
        {/* Completed Task  */}
        <div>
          <h1 className="text-md font-semibold text-slate-900 text-center">
            Actual
          </h1>{" "}
          <hr className=" border-dotted border-slate-500 my-1" />
          <div className=" grid grid-cols-2 gap-1">
            <h1 className=" text-sm text-gray-600 font-monster ">Visited </h1>
            <h1>03</h1>
          </div>
          <div className=" grid grid-cols-2 gap-1">
            <h1 className=" text-sm text-gray-600 font-monster ">Submitted</h1>
            <h1>04</h1>
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
                    <h1 className=" rounded-md mx-1 my-1  text-slate-900  py-[2px] px-2">
                      {item.name}
                      <div className=" font-monster text-gray-500 ">
                        <h1 className=" flex  font-monster text-[10px] ">
                          Mohakhali,Banani,Dhaka{" "}
                        </h1>
                        <small className="  flex  font-monster text-[10px]  ">
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
            <h1 className="text-md font-semibold text-slate-900 text-center ">
              Actual
            </h1>{" "}
            <hr className=" border-dotted border-slate-500 my-2" />
            {companyName &&
              companyName.map((item, index) => {
                return (
                  <>
                    <h1 className=" rounded-md mx-1 my-1  text-slate-900  py-[2px] px-2">
                      {item.name}
                      <div className=" font-monster text-gray-500">
                        <h1 className=" flex  font-monster text-[10px] ">
                          Mohakhali,Banani,Dhaka{" "}
                        </h1>
                        <small className="  flex  font-monster text-[10px]  ">
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
