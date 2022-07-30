import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan, faCheck, faPhone, faSpinner, faXmark } from "@fortawesome/free-solid-svg-icons";
const Card2 = ({ item }) => {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const salary = numberWithCommas(item.salary);

  return (
    <Link href={`/lead/${item.id}`} className="overflow-scroll font-poppins">
      <div className="rounded-md m-2 bg-white py-2 border border-gray-300 shadow">
        <div className="flex justify-between items-center mx-4">
          <h1
            className={`${item?.status === "Rejected" && "text-red-500"} ${item?.status === "Aproved" && "text-green-700"
              } ${item?.status === "Declined" && " text-yellow-600"}  ${item?.status === "In Process" && " text-cyan-500"
              }   font-monster font-bold text-sm`}
          >
            <div className="flex items-center">
              {item?.status === "Rejected" && <FontAwesomeIcon icon={faBan} className="text-red-500 text-lg mr-1 font-bold" />}
              {item?.status === "Aproved" && <FontAwesomeIcon icon={faCheck} className="text-green-700 text-lg mr-1 font-bold" />}
              {item?.status === "Declined" && <FontAwesomeIcon icon={faXmark} className="text-yellow-600 text-lg mr-1 font-bold" />}
              {item?.status === "In Process" && <FontAwesomeIcon icon={faSpinner} className="text-cyan-500 text-lg mr-1 font-bold" />}
              {item?.status}
            </div>
          </h1>
          <div className="flex justify-between items-center">
            <div className="flex justify-start items-center mx-2">
              <Image
                src="https://i.ibb.co/fpLJdg2/sms.png"
                alt="SMS Icon"
                width="25px"
                height="25px"
              />
            </div>
            <div className="mx-2">
              <FontAwesomeIcon icon={faPhone} className="text-lg text-[#2684FF]" />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center w-full my-2 px-5 py-1">
          <div className="text-black font-semibold">
            <p>{item?.name}</p>
            <p>{item?.company}</p>
          </div>
          <div className="text-md text-black font-semibold">
            <div className="flex items-center gap-x-2">
              <div>
                <h5>
                  Bank:
                  <span className="font-bold ml-1">07,854</span>
                </h5>
                <h5>
                  Cash:
                  <span className="font-bold ml-1">12,123</span>
                </h5>
              </div>
              <Image
                src="https://i.ibb.co/vdNVKGS/Right-Arrow.png"
                alt=""
                width="20px"
                height="20px"
              />
            </div>
          </div>
        </div>
        <h1 className="text-sm text-gray-600 tracking-wider mx-4 font-[500] ">
          Customer Will Provide Documents
        </h1>
      </div>
    </Link>
  );
};

export default Card2;
