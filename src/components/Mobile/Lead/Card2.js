import React from "react";
import Image from "next/image";
import Link from "next/link";
const Card2 = ({ item }) => {
  return (
    <Link href={`/lead/${item.id}`} className="overflow-scroll font-poppins">
      <div className="rounded-md m-2 bg-white myShadow">
        <div className="flex justify-between items-center w-full px-5 py-1">
          <div className="grid grid-cols-3 w-full ">
            <div className="bg-white col-span-2  text-slate-900  border-b-0 ">
              <p className=" px-1 text-[11px] font-bold">{item?.name}</p>
              <p className="text-[10px] px-1 text-gray-700 ">{item?.company}</p>
              <p className="text-[10px] px-1 text-gray-700">
                {item?.profession}
              </p>
            </div>
            <div className="bg-white  text-slate-900  border-b-0 ">
              <p className=" px-1 text-[10px] font-bold ml-1 ">Follow Up</p>
              <p className="text-[10px] px-1 text-gray-700 ml-1">
                {item?.scheduleDate}
              </p>
              <p className="text-[10px] px-1  flex justify-start items-center text-gray-700 ">
                {/* <span>
                  <Image
                    src="https://i.ibb.co/xMpL73X/taka.png"
                    alt=""
                    width="16px"
                    height="16px"
                  />
                </span> */}
                {item?.salary}
              </p>
            </div>
          </div>

          <Image
            className="animate-pulse"
            src="https://i.ibb.co/2N7BLpz/arrow-32-64-1.png"
            alt=""
            width="20px"
            height="20px"
          />
        </div>

        {/* <button className="w-full bg-sky-400 p-1 rounded-md text-white text-xl flex justify-center items-center my-2">
          View
        </button> */}
      </div>
    </Link>
  );
};

export default Card2;
