import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import BackMenu from "../../Shared/backMenu";
const ListCard = ({ data }) => {
  const router = useRouter();
  return (
    <div>
      <BackMenu title={"Details"} />
      <div className="w-screen bg-gray-50  border my-2 ">
        <div className=" my-4">
          {/* header  */}
          <div className="ml-5 flex ">
            {/* <button
            onClick={() => {
              router.back();
            }}
          >
            <Image
              width="20px"
              height="20px"
              src={"https://i.ibb.co/6nqQvMm/icons8-back-64.png"}
              alt=" Back"
            />
          </button> */}
            <div className="ml-4 ">
              <h1 className="text-xl text-slate-800 font-bold">{data?.name}</h1>
              <h1 className="text-xs text-gray-500 ">
                Profession: {data?.profession}
              </h1>
            </div>
          </div>

          <hr className="my-2 border-1 border-slate-400 " />

          {/* main content  */}

          <div className="flex justify-around items-center">
            {/* firt halh  */}
            <div className="flex flex-col my-2 mx-3">
              <div className="my-1">
                <h1 className="text-sm text-gray-500 ">Company Name</h1>
                <h1 className="text-sm text-slate-800 font-bold">
                  {data?.company}
                </h1>
              </div>
              {/* <div>
            <h1 className="text-sm text-gray-500 ">Profession</h1>
            <h1 className="text-sm text-slate-800 font-bold">
              {data?.profession}
            </h1>
          </div> */}
              <div className="my-1">
                <h1 className="text-sm text-gray-500">Salary</h1>
                <h1 className="text-sm text-slate-800 font-bold">
                  {" "}
                  {data?.salary}
                </h1>
              </div>
              <div className="my-1">
                <h1 className="text-sm text-gray-500">Location</h1>
                <h1 className="text-sm text-slate-800 font-bold">
                  {data?.location}
                </h1>
              </div>
            </div>

            {/* second Half  */}

            <div className="flex flex-col my-2 mx-3">
              <div className="my-1">
                <h1 className="text-sm text-gray-500">Visit Date </h1>
                <h1 className="text-sm text-slate-800 font-bold">
                  {data?.visitDate}
                </h1>
              </div>
              <div className="my-1">
                <h1 className="text-sm text-gray-500">Schedule Date </h1>
                <h1 className="text-sm text-slate-800 font-bold">
                  {data?.scheduleDate}
                </h1>
              </div>
              <div className="my-1">
                <h1 className="text-sm text-gray-500">Schedule Time </h1>
                <h1 className="text-sm text-slate-800 font-bold">
                  {data?.scheduleTime}
                </h1>
              </div>
            </div>
          </div>
          <hr className="my-2 border-1 border-slate-400 " />
          <div className="grid grid-cols-3 place-items-center my-8 gap-4 ">
            {/* call div  */}
            <div className="flex flex-col  justify-center items-center">
              <div className="bg-white rounded-md h-16 w-16 flex myShadow justify-center items-center">
                <div className="flex flex-col  justify-center items-center bg-[#8EC2E4] h-14 w-14 rounded-md">
                  <Image
                    src="https://i.ibb.co/fSyHNQ1/icons8-phone-96.png"
                    alt=""
                    width="40px"
                    height="40px"
                  />
                </div>
              </div>
              <small className=" mt-1 text-xs">Call</small>
            </div>

            {/* sms  */}

            <div className="flex flex-col  justify-center items-center">
              <div className="bg-white rounded-md h-16 w-16 flex  myShadow  justify-center items-center">
                <div className="flex flex-col  justify-center items-center bg-[#EBAC8E] h-14 w-14 rounded-md">
                  <Image
                    src="https://i.ibb.co/WgnHDz3/icons8-sms-96.png"
                    alt=""
                    width="40px"
                    height="40px"
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
              <div className="bg-white rounded-md h-16 w-16 flex  myShadow justify-center items-center">
                <div className="flex flex-col  justify-center items-center bg-[#9C9FE7] h-14 w-14 rounded-md">
                  <Image
                    src="https://i.ibb.co/4s6VLW1/icons8-furnitureandhousehold-64.png"
                    alt=""
                    width="40px"
                    height="40px"
                  />
                </div>
              </div>
              <small className=" mt-1 text-xs">Schedule</small>
            </div>

            {/* follow-up  */}

            <div className="flex flex-col  justify-center items-center">
              <div className="bg-white rounded-md h-16 w-16 flex myShadow justify-center items-center">
                <div className="flex flex-col  justify-center items-center bg-[#A3DD8A] h-14 w-14 rounded-md">
                  <Image
                    src="https://i.ibb.co/v3YzgNg/icons8-follow-up-64.png"
                    alt=""
                    width="40px"
                    height="40px"
                  />
                </div>
              </div>
              <small className=" mt-1 text-xs">Follow Up</small>
            </div>

            {/* update  */}
            <div className="flex flex-col  justify-center items-center">
              <div className="bg-white rounded-md h-16 w-16 flex myShadow justify-center items-center">
                <div className="flex flex-col  justify-center items-center bg-[#C08CE7] h-14 w-14 rounded-md">
                  <Image
                    src="https://i.ibb.co/6rcLZzD/icons8-update-96.png"
                    alt=""
                    width="40px"
                    height="40px"
                  />
                </div>
              </div>
              <small className=" mt-1 text-xs">Update</small>
            </div>

            {/* Forward   */}

            <div className="flex flex-col  justify-center items-center">
              <div className="bg-white rounded-md h-16 w-16 flex  myShadow justify-center items-center">
                <div className="flex flex-col  justify-center items-center bg-[#E68E8D] h-14 w-14 rounded-md">
                  <Image
                    src="https://i.ibb.co/chYZ6xm/icons8-forward-64.png"
                    alt=""
                    width="40px"
                    height="40px"
                  />
                </div>
              </div>
              <small className=" mt-1 text-xs">Forward</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
