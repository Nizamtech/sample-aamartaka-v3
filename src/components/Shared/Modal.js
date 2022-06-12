import Image from "next/image";

export default function Modal({ showModal, setShowModal }) {
  return (
    <>
      {showModal ? (
        <>
          <div className="anim  justify-center items-end flex overflow-x-hidden overflow-y-auto bottom-0 fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative h-auto w-full my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-2 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-xl font-semibold tracking-[5px]">
                    ATTENDANCE
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className=" p-6 flex flex-col">
                  <div className="myShadow flex items-center  text-black font-bold py-2 px-4 rounded-lg my-2 ">
                    <Image
                      src="https://i.ibb.co/hsHy4m0/immigration.png"
                      alt="attendence"
                      width="30px"
                      height="30px"
                    />
                    <button className="text-xl mx-3" type="button ">
                      Attend Start
                    </button>
                  </div>

                  <div className="myShadow flex items-center  text-black font-bold py-2 px-4 rounded-lg my-2 ">
                    <Image
                      src="https://i.ibb.co/hsHy4m0/immigration.png"
                      alt="attendence"
                      width="30px"
                      height="30px"
                    />
                    <button className="text-xl mx-3" type="button ">
                      Attend End
                    </button>
                  </div>
                  <div className="myShadow flex items-center  text-black font-bold py-2 px-4 rounded-lg my-2 ">
                    <Image
                      src="https://i.ibb.co/hsHy4m0/immigration.png"
                      alt="attendence"
                      width="30px"
                      height="30px"
                    />
                    <button className="text-xl mx-3" type="button ">
                      Another
                    </button>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-2 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  {/* <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button> */}
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
