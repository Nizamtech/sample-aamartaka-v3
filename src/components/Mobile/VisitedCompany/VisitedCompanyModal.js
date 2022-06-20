import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import Select from "react-select";
import { useState } from "react";
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
                <div className="flex items-start justify-between p-2 border-b border-solid border-slate-200 rounded-t">
                  <p className=" mx-2">{companyName}</p>
                  {/* <img src="https://i.ibb.co/MpCJTpV/expand-arrow.png" alt="" /> */}

                  <button
                    className="p-1 ml-auto duration-700 border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <img
                      src="https://i.ibb.co/5hr0vN0/x-mark-32.png"
                      width="20px"
                      height="20px"
                      alt=""
                    />
                  </button>
                </div>
                {/*body*/}
                <div className=" p-6 flex flex-col  ">
                  <button
                    type="button"
                    className="flex font-monster  justify-center text-white font text-center bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50  rounded-lg text-md px-5 py-2.5  items-center dark:focus:ring-[#1da1f2]/55 mt-5  "
                  >
                    <Link
                      href={`/visitedcompany/companydetails/${companyName}`}
                    >
                      Company Details
                    </Link>
                  </button>

                  <button
                    type="button"
                    className="flex font-monster  justify-center text-white font text-center bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50  rounded-lg text-md px-5 py-2.5  items-center dark:focus:ring-[#1da1f2]/55 mt-5  "
                  >
                    Cutomers Details
                  </button>
                  <button
                    type="button"
                    className="flex font-monster  justify-center text-white font text-center bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50  rounded-lg text-md px-5 py-2.5  items-center dark:focus:ring-[#1da1f2]/55 mt-5 "
                  >
                    Visit Details
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
