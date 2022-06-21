import React from "react";
import Image from "next/image";
const SendQueryCard2 = ({ item }) => {
  const { sendBack } = item;
  console.log(sendBack);
  return (
    <div>
      <div className="rounded-md m-2 bg-white myShadow py-2 ">
        <div className="mx-4 flex justify-between items-center">
          <h1 className="  text-sm font-monster bg-sky-500 px-2 text-white rounded-md py-[2px]">
            {item.productType}
          </h1>

          {/* <h1 className="  text-sm font-monster ">2,000,000</h1> */}
        </div>
        <hr className=" border-dotted  my-2 border-gray-400" />
        <div className=" flex justify-between items-center mx-4">
          <h1
            className={`${item?.status === "Rejected" && "text-red-500"} ${
              item?.status === "Aproved" && "text-green-500"
            } ${item?.status === "Declined" && " text-orange-600"}  ${
              item?.status === "In Process" && " text-yellow-500"
            }   font-monster font-bold text-sm`}
          >
            {item?.status}
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
                    <span className="mx-2 "> 07,854</span>
                  </h1>
                  <h1 className="text-sm text-black ">
                    Cash:
                    <span className="mx-2"> 12,123</span>
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

        <details className=" mx-3 my-2 font-monster ">
          <summary className=" bg-slate-100 w-fu p-2 ">
            Send Query Details
          </summary>
          <div className="mt-3">
            {sendBack &&
              sendBack?.map((item, index) => {
                return (
                  <>
                    <div className=" font-roboto text-justify py-1 grid grid-cols-12 ">
                      <h1 className=" col-span-1">
                        <span className=" text-slate-400">{index + 1}.</span>{" "}
                      </h1>
                      <h1 className=" col-span-11">
                        <span className="">{item}</span>
                      </h1>
                    </div>
                  </>
                );
              })}
          </div>
        </details>
      </div>
    </div>
  );
};

export default SendQueryCard2;
