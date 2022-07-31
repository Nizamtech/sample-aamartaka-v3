import { faBan, faCheck, faSpinner, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
const LeadListCard = ({ item, isStatus }) => {
  return (
    <div className="px-3">
      <div
        className={`flex ${isStatus ? "justify-between" : "justify-end"
          }  items-center`}>
        {isStatus && (
          <h1
            className={`${item?.status === "Rejected" && "text-red-500"} ${item?.status === "Aproved" && "text-green-600"
              } ${item?.status === "Declined" && " text-yellow-600"}  ${item?.status === "In Process" && " text-cyan-500"
              } font-monster font-bold text-sm`}
          >
            <div className="flex items-center">
              {item?.status === "Rejected" && <FontAwesomeIcon icon={faBan} className="text-red-500 h-5 w-5 mr-1 font-bold" />}
              {item?.status === "Aproved" && <FontAwesomeIcon icon={faCheck} className="text-green-700 h-5 w-5 mr-1 font-bold" />}
              {item?.status === "Declined" && <FontAwesomeIcon icon={faXmark} className="text-yellow-600 h-5 w-5 mr-1 font-bold" />}
              {item?.status === "In Process" && <FontAwesomeIcon icon={faSpinner} className="text-cyan-500 h-5 w-5 mr-1 font-bold" />}
              {item?.status}
            </div>
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
            <span className="font-bold ml-1">7,854</span>
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
