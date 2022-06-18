import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Modal({ showModal, setShowModal }) {
  const router = useRouter();
  return (
    <>
      {showModal ? (
        <>
          <div className="anim justify-center items-end flex overflow-x-hidden overflow-y-auto bottom-0 fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative h-auto w-full my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-2 border-b border-solid border-slate-200 rounded-t">
                  <p> ATTENDANCE </p>
                  {/* <img src="https://i.ibb.co/MpCJTpV/expand-arrow.png" alt="" /> */}

                  <button
                    className="p-1 ml-auto duration-700 border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <img
                      src="https://i.ibb.co/MpCJTpV/expand-arrow.png"
                      alt=""
                    />
                  </button>
                </div>
                {/*body*/}
                <div className=" p-6 flex flex-col">
                  <div className="myShadow flex items-center  text-black font-bold py-4 px-4 rounded-lg my-2 ">
                    <Image
                      src="https://i.ibb.co/hsHy4m0/immigration.png"
                      alt="attendence"
                      width="30px"
                      height="30px"
                    />
                    <Link
                      // onClick={()=>router.push("/attendance")}
                      href={"/attendance/start"}
                      className="text-xl mx-3"
                      type="button "
                    >
                      <a className="ml-5"> Attend Start</a>
                    </Link>
                  </div>

                  <div className="myShadow flex items-center  text-black font-bold py-4 px-4 rounded-lg my-2 ">
                    <Image
                      src="https://i.ibb.co/hsHy4m0/immigration.png"
                      alt="attendence"
                      width="30px"
                      height="30px"
                    />
                    <Link
                      href={"/attendance/end"}
                      className="text-xl mx-3"
                      type="button "
                    >
                      <a className="ml-5"> Attend End</a>
                    </Link>
                  </div>
                  <div className="myShadow flex items-center  text-black font-bold py-4 px-4 rounded-lg my-2 ">
                    <Image
                      src="https://i.ibb.co/hsHy4m0/immigration.png"
                      alt="attendence"
                      width="30px"
                      height="30px"
                    />
                    <Link
                      href={"/attendance/details"}
                      className="text-xl mx-3"
                      type="button "
                    >
                      <a className="ml-5"> Details</a>
                    </Link>
                  </div>
                </div>
                {/*footer*/}

                {/* <div className="flex items-center justify-end p-2 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>

             
                </div> */}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
