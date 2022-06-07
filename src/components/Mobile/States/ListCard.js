import React from "react";
import Image from "next/image";
const ListCard = () => {
  return (
    <div className="w-full rounded-t-lg bg-[#EBE9E2] border-2 my-2 ">
      <div className="ml-8">
        <h1 className="text-xl text-slate-800 font-bold">Junayed Ahmed</h1>
        <div className="flex justify-between items-center">
          {" "}
          <h1 className="text-xl text-gray-500 "> Salaried</h1>{" "}
          {/* <h1 className="text-xl text-gray-500">Banani,Dhaka,1230</h1> */}
        </div>
        <hr className="my-2 border-1 border-white" />
        <div className="grid grid-cols-2 place-items-start  my-2">
          <div>
            <h1 className="text-sm text-gray-500 ">Company Name</h1>
            <h1 className="text-sm text-slate-800 font-bold">
              Asha Telecom ltd.
            </h1>
          </div>
          <div className="flex flex-col justify-start">
            <h1 className="text-sm text-gray-500">Salary</h1>
            <h1 className="text-sm text-slate-800 font-bold">12000 TK</h1>
          </div>
        </div>
        <div className="grid grid-cols-2 place-items-start  my-2">
          <div>
            <h1 className="text-sm text-gray-500">Location</h1>
            <h1 className="text-sm text-slate-800 font-bold">
              Banani,Dhaka-1230
            </h1>
          </div>
          <div className="flex flex-col justify-start">
            <h1 className="text-sm text-gray-500">Visit Date </h1>
            <h1 className="text-sm text-slate-800 font-bold"> 2022-06-05</h1>
          </div>
        </div>
        <div className="grid grid-cols-2 place-items-start my-2">
          <div>
            <h1 className="text-sm text-gray-500">Schedule Date </h1>
            <h1 className="text-sm text-slate-800 font-bold">2022-06-19</h1>
          </div>
          <div className="flex flex-col justify-start">
            <h1 className="text-sm text-gray-500">Schedule Time </h1>
            <h1 className="text-sm text-slate-800 font-bold">
              {" "}
              12:00:00 - 14:00:00
            </h1>
          </div>
        </div>

        {/* test div for image 

        https://i.ibb.co/chYZ6xm/icons8-forward-64.png
https://i.ibb.co/8zvFscJ/icons8-update-60.png
https://i.ibb.co/6rcLZzD/icons8-update-96.png
https://i.ibb.co/v3YzgNg/icons8-follow-up-64.png
https://i.ibb.co/4s6VLW1/icons8-furnitureandhousehold-64.png
https://i.ibb.co/WgnHDz3/icons8-sms-96.png
https://i.ibb.co/fSyHNQ1/icons8-phone-96.png


https://i.ibb.co/gSG82F9/clipboard-2-48.gif
https://i.ibb.co/dJXwM1r/alarm-clock-48.gif
https://i.ibb.co/fFmt0Qj/fast-forward-48.gif
https://i.ibb.co/4ZbQxhw/available-updates-48.gif
https://i.ibb.co/wh0xbjQ/phone-48.png
https://i.ibb.co/kyshDCD/sms-48.gif
         */}
        <div className="grid grid-cols-3 place-items-start my-4 gap-4 ">
          {/* call div  */}
          <div className="flex flex-col  justify-center items-center">
            <div className="bg-white rounded-md h-12 w-12 flex  shadow-xl  justify-center items-center">
              <div className="flex flex-col  justify-center items-center bg-[#8EC2E4] h-[42px] w-[42px] rounded-md">
                <Image
                  src="https://i.ibb.co/fSyHNQ1/icons8-phone-96.png"
                  alt=""
                  width="30px"
                  height="30px"
                />
              </div>
            </div>
            <small className=" mt-1 text-xs">Call</small>
          </div>

          {/* sms  */}

          <div className="flex flex-col  justify-center items-center">
            <div className="bg-white rounded-md h-12 w-12 flex  shadow-xl  justify-center items-center">
              <div className="flex flex-col  justify-center items-center bg-[#EBAC8E] h-[42px] w-[42px] rounded-md">
                <Image
                  src="https://i.ibb.co/WgnHDz3/icons8-sms-96.png"
                  alt=""
                  width="30px"
                  height="30px"
                />
              </div>
            </div>
            <small className=" mt-1 text-xs">SMS</small>
          </div>

          {/* <div className="flex flex-col justify-center items-center">
            <img
              src="https://i.ibb.co/WgnHDz3/icons8-sms-96.png"
              alt=""
              width="30px"
              height="30px"
            />
            <small className=" mt-1 text-xs">SMS</small>
          </div> */}
          {/* Schedule  */}

          <div className="flex flex-col  justify-center items-center">
            <div className="bg-white rounded-md h-12 w-12 flex  shadow-xl  justify-center items-center">
              <div className="flex flex-col  justify-center items-center bg-[#9C9FE7] h-[42px] w-[42px] rounded-md">
                <Image
                  src="https://i.ibb.co/4s6VLW1/icons8-furnitureandhousehold-64.png"
                  alt=""
                  width="30px"
                  height="30px"
                />
              </div>
            </div>
            <small className=" mt-1 text-xs">Schedule</small>
          </div>

          {/* follow-up  */}

          <div className="flex flex-col  justify-center items-center">
            <div className="bg-white rounded-md h-12 w-12 flex  shadow-xl  justify-center items-center">
              <div className="flex flex-col  justify-center items-center bg-[#A3DD8A] h-[42px] w-[42px] rounded-md">
                <Image
                  src="https://i.ibb.co/v3YzgNg/icons8-follow-up-64.png"
                  alt=""
                  width="30px"
                  height="30px"
                />
              </div>
            </div>
            <small className=" mt-1 text-xs">Follow Up</small>
          </div>

          {/* update  */}
          <div className="flex flex-col  justify-center items-center">
            <div className="bg-white rounded-md h-12 w-12 flex  shadow-xl  justify-center items-center">
              <div className="flex flex-col  justify-center items-center bg-[#C08CE7] h-[42px] w-[42px] rounded-md">
                <Image
                  src="https://i.ibb.co/6rcLZzD/icons8-update-96.png"
                  alt=""
                  width="30px"
                  height="30px"
                />
              </div>
            </div>
            <small className=" mt-1 text-xs">Update</small>
          </div>

          {/* Forward   */}

          <div className="flex flex-col  justify-center items-center">
            <div className="bg-white rounded-md h-12 w-12 flex  shadow-xl  justify-center items-center">
              <div className="flex flex-col  justify-center items-center bg-[#E68E8D] h-[42px] w-[42px] rounded-md">
                <Image
                  src="https://i.ibb.co/chYZ6xm/icons8-forward-64.png"
                  alt=""
                  width="30px"
                  height="30px"
                />
              </div>
            </div>
            <small className=" mt-1 text-xs">Forward</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
