import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import BackMenu from "../../Shared/BackMenu";
import waveBG from "../../../../public/assets/images/Background.svg";
import { useState } from "react";
import Modal from "../../Shared/Modal";
import Link from "next/link";
import GoogleMapCard from "../Attendance/GoogleMapCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faMessage, faForwardFast, faFilePen } from '@fortawesome/free-solid-svg-icons';
const ListCard = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  return (
    <div className=" font-monster">
      <BackMenu title={"Details"} />
      <div
        className={`w-screen border my-2 font-exo h-screen overflow-scroll`}>
        <div className="my-4">
          {/* header  */}
          <div className="mx-2 p-3 rounded-md font-monster myShadow2 bg-white border">
            <div>
              <div className="flex items-center justify-between">
                <h4 className="text-md text-black font-bold">{data?.name}</h4>
                <h4 className="text-sm text-slate-800">{data?.profession}</h4>
              </div>
              <h4 className="text-sm text-slate-800">{data?.company}</h4>
            </div>
          </div>

          <p className="my-2 border-1 border-white" />

          {/* main content  */}

          <div className="p-3 rounded-md myShadow2 bg-white mx-2">
            <div className="grid grid-cols-2">
              {/* firt halh  */}
              <div className="flex flex-col my-2">
                {/* <div className="my-1">
                <h1 className="text-mg font-semibold text-slate-900  ">
                  Company Name
                </h1>
                <h1 className="text-sm text-black ">{data?.company}</h1>
              </div> */}

                <div className="my-1">
                  <h1 className="text-md font-semibold text-slate-900 mb-1">
                    Salary
                  </h1>
                  <h1 className="text-sm text-black">
                    Bank:
                    <span className="mx-2">07,854</span>
                  </h1>
                  <h1 className="text-sm text-black">
                    Cash:
                    <span className="mx-2">12,123</span>
                  </h1>
                </div>
                <div className="my-1">
                  <h1 className="text-md font-semibold text-slate-900 mb-1">
                    <p> Location</p>
                  </h1>
                  <h1 className="text-sm text-black  ">
                    12 West, Mohakhali, Dhaka,Bangladesh
                  </h1>
                </div>
              </div>
              {/* <div className="my-1">
                  <h1 className="text-md font-semibold text-slate-900 ">
                    Last Follow Up
                  </h1>
                  <h1 className="text-sm text-black  ">
                    {data?.visitDate}
                  </h1>
                </div> */}
              {/* second Half  */}

              <div className="flex flex-col my-2 mx-3">
                <div className="my-1">
                  <h1 className="text-md font-semibold text-slate-900 mb-1">
                    Last Visit Date{" "}
                  </h1>
                  <h1 className="text-sm text-black ">{data?.visitDate}</h1>
                </div>
                <div className="my-1">
                  <h1 className="text-md font-semibold text-slate-900 mb-1">
                    Next Schedule
                  </h1>
                  <h1 className="text-sm text-black ">
                    <span className="mx-2"> {data?.scheduleDate}</span>{" "}
                    <span> {data?.scheduleTime}</span>
                  </h1>
                </div>
                <div className="text-sm font-semibold text-slate-900 mt-2 ">
                  <button className="flex justify-center items-center border border-[#0ea5e9] py-1 px-2 rounded-md bg-gray-100 text-[#0ea5e9]">
                    <h1 className="mx-1">View On Map</h1>
                    <FontAwesomeIcon icon={faLocationDot} className="h-4 w-4" />
                    {/* <img
                      src="https://i.ibb.co/g60GgKz/map.png"
                    width="20px"
                    height="20px"
                    alt=""
                    className=" mx-auto"
                    /> */}
                  </button>
                </div>
              </div>
            </div>

            {/* break;  */}
            <hr className=" border-dotted border-slate-500 mb-2" />
            {/* Last Follow Up  */}
            <div>
              <div className="flex items-center">
                <div className="grid grid-cols-2">
                  <div>
                    <h1 className="text-md font-semibold text-slate-900 mb-1 ">
                      Current Status
                    </h1>
                    <h1 className="text-sm text-black "> Call me Later</h1>
                  </div>
                  <div>
                    <h1 className="text-md font-semibold text-slate-900 mb-1 ">
                      Remarks
                    </h1>
                    <h1 className="text-sm text-black ">
                      {" "}
                      Customer Will Provide Documents
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            {/* break;  */}
            <hr className=" border-dotted border-slate-500 my-2" />
            {/* interested Product  */}
            <div>
              <h1 className="text-md font-semibold text-slate-900 mb-1">
                Interested Product
              </h1>
              <div className=" flex  items-center">
                <h1 className=" rounded-md mx-1 my-1 bg-sky-500 text-white py-[2px] px-2">
                  Car loan{" "}
                </h1>
                <h1 className=" rounded-md mx-1 my-1 bg-sky-500 text-white py-[2px] px-2">
                  Home Load{" "}
                </h1>
                <h1 className=" rounded-md mx-1 my-1 bg-sky-500 text-white py-[2px] px-2">
                  DPS{" "}
                </h1>
              </div>
            </div>
            {/* break;  */}
            <hr className=" border-dotted border-slate-500 my-2" />
            {/* interested Product  */}
            <div>
              <h1 className="text-md font-semibold text-slate-900 mb-1">
                Interested Bank
              </h1>
              <div className=" flex  flex-wrap items-center">
                <h1 className=" rounded-md mx-1 my-1 bg-sky-500 text-white py-[2px] px-2">
                  South Asian Bank
                </h1>
                <h1 className=" rounded-md mx-1 my-1 bg-sky-500 text-white py-[2px] px-2">
                  Islami Bank
                </h1>
                <h1 className=" rounded-md mx-1 my-1 bg-sky-500 text-white py-[2px] px-2">
                  Agrani bank
                </h1>
              </div>
            </div>
          </div>
          <p className="my-2 border-1 border-white" />
          <div className="grid grid-cols-3 place-items-center  gap-4 mt-2 py-4 p-2 rounded-md   myShadow bg-white mx-2">
            {/* call div  */}
            <Link href={`/lead/leadaction/call`}>
              <a className="flex flex-col  justify-center items-center">
                {" "}
                <div
                  // onClick={() => router.push("/lead/leadaction")}
                  className="bg-white rounded-md h-16 w-16 flex myShadow justify-center items-center"
                >
                  <div className="flex flex-col  justify-center items-center bg-sky-500 h-14 w-14 rounded-md">
                    <FontAwesomeIcon icon={faPhone} className="text-white w-6 h-6" />
                    {/*  <Image
                      src="https://i.ibb.co/fSyHNQ1/icons8-phone-96.png"
                      alt=""
                      width="40px"
                      height="40px"
                    /> */}
                  </div>
                </div>
                <small className="mt-1 text-md text-black font-bold text-center">
                  Call
                </small>
              </a>
            </Link>

            {/* sms  */}

            <Link href={`/lead/leadaction/sms`}>
              <a className="flex flex-col  justify-center items-center">
                {" "}
                <div className="bg-white rounded-md h-16 w-16 flex  myShadow  justify-center items-center">
                  <div className="flex flex-col  justify-center items-center bg-[#E68E8D] h-14 w-14 rounded-md">
                    <FontAwesomeIcon icon={faMessage} className="text-white w-6 h-6" />
                    {/*  <Image
                      src="https://i.ibb.co/WgnHDz3/icons8-sms-96.png"
                      alt=""
                      width="40px"
                      height="40px"
                    /> */}
                  </div>
                </div>
                <small className="mt-1 text-md text-black font-bold">SMS</small>
              </a>
            </Link>

            <Link href={`/lead/leadaction/schedule`}>
              <a className="flex flex-col  justify-center items-center">
                <div className="bg-white rounded-md h-16 w-16 flex  myShadow justify-center items-center">
                  <div className="flex flex-col  justify-center items-center bg-sky-500 h-14 w-14 rounded-md">
                    <Image
                      src="https://i.ibb.co/4s6VLW1/icons8-furnitureandhousehold-64.png"
                      alt=""
                      width="40px"
                      height="40px"
                    />
                  </div>
                </div>
                <small className="mt-1 text-md text-black font-bold">
                  Schedule
                </small>
              </a>
            </Link>

            {/* follow-up  */}

            <Link href={`/lead/leadaction/schedule`}>
              <a className="flex flex-col  justify-center items-center">
                {" "}
                <div className="bg-white rounded-md h-16 w-16 flex myShadow justify-center items-center">
                  <div className="flex flex-col  justify-center items-center bg-[#E68E8D] h-14 w-14 rounded-md">
                    <Image
                      src="https://i.ibb.co/v3YzgNg/icons8-follow-up-64.png"
                      alt=""
                      width="40px"
                      height="40px"
                    />
                  </div>
                </div>
                <small className="mt-1 text-md text-black font-bold">
                  Follow Up
                </small>
              </a>
            </Link>

            {/* update  */}
            <Link href={`/lead/leadaction/follow-up`}>
              <a className="flex flex-col  justify-center items-center">
                {" "}
                <div className="bg-white rounded-md h-16 w-16 flex myShadow justify-center items-center">
                  <div className="flex flex-col  justify-center items-center bg-sky-500 h-14 w-14 rounded-md">
                    {/*  <Image
                      src="https://i.ibb.co/6rcLZzD/icons8-update-96.png"
                      alt=""
                      width="40px"
                      height="40px"
                    /> */}
                    <FontAwesomeIcon icon={faFilePen} className="w-7 h-7 text-white" />
                  </div>
                </div>
                <small className=" mt-1 text-md text-black font-bold">
                  Update Info
                </small>
              </a>
            </Link>

            {/* Forward   */}

            <Link href={`/lead/leadaction/forward`}>
              <a className="flex flex-col  justify-center items-center">
                {" "}
                <div className="bg-white rounded-md h-16 w-16 flex myShadow justify-center items-center">
                  <div className="flex flex-col justify-center items-center bg-[#E68E8D] h-14 w-14 rounded-md">
                    <FontAwesomeIcon icon={faForwardFast} className="w-6 h-6 text-white" />
                    {/* <Image
                      src="https://i.ibb.co/chYZ6xm/icons8-forward-64.png"
                      alt=""
                      width="40px"
                      height="40px"
                    /> */}
                  </div>
                </div>
                <small className=" mt-1 text-md text-black font-bold">
                  Forward
                </small>
              </a>
            </Link>
          </div>
        </div>
      </div>
      {/* <GoogleMapCard /> */}
    </div>
  );
};

export default ListCard;
