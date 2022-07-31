import { faBarsProgress, faCheck, faPhone, faSpinner, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useState } from "react";

const CustomerDetailsCard = ({ item }) => {
  return (
    <div className="rounded-md mx-2 bg-white shadow py-2 border border-gray-300 my-3">
      <div className="flex justify-between items-center mx-4">
        <h1 className={`${item.color} font-monster font-bold text-sm flex items-center`}>
          {item?.status === "Approved" &&
            <FontAwesomeIcon icon={faCheck} className={`${item.color} mr-2 w-5 h-5 font-bold`} />
          }
          {item?.status === "Rejected" &&
            <FontAwesomeIcon icon={faXmark} className={`${item.color} mr-2 h-5 w-5 font-bold`} />
          }
          {item?.status === "In Progress" &&
            <FontAwesomeIcon icon={faBarsProgress} className={`${item.color} mr-2 h-5 w-5 font-bold`} />
          }
          {item?.status === "Pending" &&
            <FontAwesomeIcon icon={faSpinner} className={`${item.color} mr-2 w-5 h-5 font-bold`} />
          }
          {item?.status}
        </h1>
        <div className="flex justify-between items-center mx-4">
          <div className="flex justify-start items-center mx-2">
            <Image
              src="https://i.ibb.co/fpLJdg2/sms.png"
              alt=""
              width="25px"
              height="25px"
            />
          </div>
          <div className="mx-2">
            <FontAwesomeIcon icon={faPhone} className="h-5 w-5 text-[#0EA5E9]" />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center my-2 mx-4">
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
      <h1 className="text-sm text-gray-600 mx-4 font-[500] ">
        Customer Will Provide Documents
      </h1>
    </div>
  );
};

export default CustomerDetailsCard;
