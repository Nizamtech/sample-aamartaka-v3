import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import SetPlan_Header from "./SetPlan_Header";

export default function SetPlan_Modal({ showModal, setShowModal }) {
  const router = useRouter();
  return (
    <>
      {showModal ? (
        <>
          <div className="anim2 justify-center items-end flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative h-auto w-full my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-2 border-b border-solid border-slate-200 rounded-t">
                  <p> Set Plan </p>
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
                <div className=" p-6 flex flex-col">
                  <SetPlan_Header />
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
