import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import SetPlan_Header from "./SetPlan_Header";
import SetPlan_Input_Card from "./SetPlan_Input_Card/SetPlan_Input_Card";
import { useState } from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function SetPlan_Modal({ showModal, setShowModal }) {
  const [status, setStatus] = useState(null);
  const [visit, setVisit] = useState(null);
  const router = useRouter();

  const item = 3;
  // console.log("visit", visit?.value);
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-end flex overflow-x-hidden overflow-y-auto  fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="h-auto w-full my-6 mx-auto max-w-3xl ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg  flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-between py-2 px-4 border-b border-solid border-slate-200 rounded-t">
                  <p className="font-semibold text-lg"> Set Plan </p>
                  {/* <img src="https://i.ibb.co/MpCJTpV/expand-arrow.png" alt="" /> */}

                  <button
                    className="p-1 ml-auto duration-700 border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <FontAwesomeIcon icon={faXmark} className="text-2xl text-red-500" />
                  </button>
                </div>
                {/*body*/}
                <div className=" p-6 flex flex-col">
                  <SetPlan_Header
                    status={status}
                    setStatus={setStatus}
                    visit={visit}
                    setVisit={setVisit}
                  />
                  {/* {item &&
                    item.map((item) => {
                      return (
                        <>
                          <SetPlan_Input_Card />
                        </>
                      );
                    })} */}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
