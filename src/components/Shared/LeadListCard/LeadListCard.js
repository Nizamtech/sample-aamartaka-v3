import React from "react";
const LeadListCard = ({ item, isStatus }) => {
  return (
    <div className="px-3">
      <div
        className={`flex ${isStatus ? "justify-between" : "justify-end"
          }  items-center mx-4`}
      >
        {isStatus && (
          <h1
            className={`${item?.status === "Rejected" && "text-red-500"} ${item?.status === "Aproved" && "text-green-500"
              } ${item?.status === "Declined" && " text-orange-600"}  ${item?.status === "In Process" && " text-yellow-500"
              }   font-monster font-bold text-sm`}
          >
            {item?.status}
          </h1>
        )}
      </div>
      <div className="flex justify-between items-center w-full my-2">
        <div className="text-black font-semibold">
          <p>{item?.name}</p>
          <p>{item?.company}</p>
        </div>
        <div className="text-md text-black font-semibold">
          <h5>
            Bank:
            <span className="font-bold ml-1">07,854</span>
          </h5>
          <h5>
            Cash:
            <span className="font-bold ml-1">12,123</span>
          </h5>
        </div>
      </div>
      <p className="text-sm text-gray-600 font-[500]">
        Customer Will Provide Documents
      </p>
    </div>
  );
};

export default LeadListCard;
