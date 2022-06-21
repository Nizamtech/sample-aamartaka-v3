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
