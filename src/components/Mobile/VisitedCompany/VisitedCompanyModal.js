import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import Select from "react-select";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
export default function VisitedCompanyModal({
  showModal,
  setShowModal,
  companyName,
}) {
  const [status, setStatus] = useState(null);
  console.log(showModal);
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
          <div className=" z-[100] absolute justify-center items-end flex overflow-x-hidden overflow-y-auto bottom-0 inset-0  outline-none focus:outline-none">
            <div className="h-auto w-full my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-between py-2 px-4 border-b border-solid border-slate-200 rounded-t">
                  <p className="font-semibold mx-2">{companyName}</p>
                  {/* <img src="https://i.ibb.co/MpCJTpV/expand-arrow.png" alt="" /> */}

                  <button
                    className="p-1 ml-auto duration-700 border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <FontAwesomeIcon icon={faXmark} className="h-6 w-6 text-red-500" />
                  </button>
                </div>
                {/*body*/}
                <div className=" p-6 flex flex-col  ">
                  <button
                    type="button"
                    className="flex font-monster justify-center text-white font text-center bg-[#2684FF] hover:bg-[#2684FF] rounded-lg text-md px-5 py-2.5 items-center mt-5"
                  >
                    <Link
                      href={`/visitedcompany/companydetails/${companyName}`}
                    >
                      Company Details
                    </Link>
                  </button>

                  <button
                    type="button"
                    className="flex font-monster justify-center text-white font text-center bg-[#2684FF] hover:bg-[#2684FF] rounded-lg text-md px-5 py-2.5 items-center mt-5"
                  >
                    <Link
                      href={`/visitedcompany/customersdetails/${companyName}`}
                    >
                      Cutomers Details
                    </Link>
                  </button>
                  <button
                    type="button"
                    className="flex font-monster justify-center text-white font text-center bg-[#2684FF] hover:bg-[#2684FF] rounded-lg text-md px-5 py-2.5 items-center mt-5"
                  >
                    <Link href={`/visitedcompany/visitdetails/${companyName}`}>
                      Visit Details
                    </Link>
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
