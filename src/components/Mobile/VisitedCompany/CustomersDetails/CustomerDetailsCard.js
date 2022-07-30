import Image from "next/image";
import React, { useState } from "react";

const CustomerDetailsCard = ({ item }) => {
  return (
    <div className="rounded-md m-2 bg-white myShadow py-2">
      <div className=" flex justify-between items-center mx-4">
        <h1 className={`${item.color} font-monster font-bold text-sm`}>
          {item.status}
        </h1>
        <div className=" flex justify-between items-center">
          <div className="  p-[2px]  bg-gray-50 flex justify-start items-center mx-2">
            <Image
              src="https://i.ibb.co/fpLJdg2/sms.png"
              alt=""
              width="25px"
              height="25px"
            />
          </div>

          <div className=" p-[2px] bg-gray-50 flex justify-start items-center mx-2">
            <Image
              src="https://i.ibb.co/kxcGLfG/phone-call-2.png"
              alt=""
              width="25px"
              height="25px"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center w-full px-5 py-1">
        <div className="grid grid-cols-3 w-full ">
          <div className="bg-white col-span-2  text-slate-900  border-b-0 ">
            <p className=" text-[15px] font-bold ">{item?.name}</p>
            <p className="text-sm text-black ">{item?.company}</p>
          </div>
          <div className="bg-white  text-slate-900  border-b-0 ">
            <div className=" flex flex-col justify-center  items-center">
              {" "}
              <div className="my-1">
                {/* <h1 className="text-md font-semibold text-slate-900 ">
                    Salary
                  </h1> */}
                <h1 className="text-sm text-black ">
                  Bank:
                  <span className="mx-2">07,854</span>
                </h1>
                <h1 className="text-sm text-black ">
                  Cash:
                  <span className="mx-2">12,123</span>
                </h1>
              </div>
              {/* <p className="text-sm text-black ">{salary}</p> */}
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-sm text-black mx-4  font-[500] ">
        Customer Will Provide Documents
      </h1>
    </div>
  );
};

export default CustomerDetailsCard;
