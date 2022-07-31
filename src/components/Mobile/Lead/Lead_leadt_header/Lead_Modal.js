import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import Select from "react-select";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
export default function Lead_Modal({ showModal, setShowModal }) {
  const [status, setStatus] = useState(null);

  const router = useRouter();

  const statusData = [
    { label: "In Process", value: "in process" },
    { label: "Rejected", value: "rejected" },
    { label: "Other Bank", value: "other Bank" },
    { label: "Document Collection", value: "document collection" },
  ];
  return (
    <>
      {showModal ? (
        <>
          <div className=" relative  justify-center items-end flex overflow-x-hidden overflow-y-auto bottom-0  inset-0 z-50 outline-none focus:outline-none">
            <div className="h-auto w-full my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-between p-2 border-b border-solid border-slate-200 rounded-t">
                  <p className="mx-2 font-bold">Filter Lead List</p>
                  {/* <img src="https://i.ibb.co/MpCJTpV/expand-arrow.png" alt="" /> */}

                  <button
                    className="p-1 ml-auto duration-700 border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <FontAwesomeIcon icon={faXmark} className="text-red-500 w-6 h-6" />
                  </button>
                </div>
                {/*body*/}
                <div className=" p-6 flex flex-col  ">
                  <label className="font-semibold"> Status</label>
                  <Select
                    defaultValue={"in process"}
                    required
                    name="Status"
                    onChange={setStatus}
                    options={statusData}
                    className="my-2"
                  />

                  <label className="mt-2 font-semibold"> Product Type</label>
                  <Select
                    defaultValue={"in process"}
                    required
                    name="Status"
                    onChange={setStatus}
                    options={statusData}
                    className="my-2"
                  />
                  <button
                    type="button"
                    className="flex justify-center text-white font text-center bg-[#2684FF] hover:bg-[#2684FF] focus:ring-0 focus:outline-none focus:bg-[#1879f8] font-medium rounded-lg text-sm px-5 py-2.5 items-center mt-5 mb-2">
                    Apply
                  </button>
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
