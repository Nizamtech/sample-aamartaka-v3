import React from "react";
import BackMenu from "../../../Shared/BackMenu";
import LeadListCard from "../../../Shared/LeadListCard/LeadListCard";
import data from "../../../../../public/assets/data/data.json";
const InProgress = () => {
  console.log(data);
  return (
    <div>
      <BackMenu title="In Progress" />
      <div className="  absolute bg-gray-200 w-full h-screen">
        <div className="myShadow bg-white h-screen my-2 rounded-lg p-2">
          {data &&
            data.map((item) => {
              return (
                <>
                  <div className="rounded-md m-2 bg-white myShadow py-2">
                    <div className="mx-4 flex justify-between items-center">
                      <h1 className="  text-sm font-monster bg-sky-500 px-2 text-white rounded-md py-[2px]">
                        {item.productType}
                      </h1>

                      {/* <h1 className="  text-sm font-monster ">2,000,000</h1> */}
                    </div>
                    <hr className=" border-dotted  my-1 border-gray-400" />
                    <LeadListCard item={item} />
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default InProgress;
