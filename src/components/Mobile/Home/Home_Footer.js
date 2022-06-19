import React from "react";
import Image from "next/image";
import Modal from "../../Shared/Modal";
import { useState } from "react";
import Footer_modal from "../../Shared/Footer_modal";
import Webcam from "react-webcam";
import { useRouter } from "next/router";

const Home_Footer = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  // const handleClose = () => setShowModal(false);
  // const handleShow = () => setShowModal(true);
  const handleAttendance = () => {
    setShowModal(true);
  };

  return (
    <div className=" bg-[#ece4e4] h-[70px] mt-[-5px]">
      <div className="absolute w-full mt-10 ">
        {/* <Footer_modal showModal={showModal} setShowModal={setShowModal} /> */}
        <div className="border-t rounded-t-[30px]  px-2 bottom-0 amin  bg-white border-gray-200 shadow-md grid grid-cols-3 place-content-between place-items-center">
          <div>
            <button
              onClick={handleAttendance}
              className="text-xl font-exo2 font-bold flex  flex-col justify-center items-center my-1"
            >
              <img
                width="30px"
                height="30px"
                src="https://i.ibb.co/b3sShVs/icons8-attendance-80.png"
                alt=""
              />
              <h1 className=" font-monster text-sm text-slate-700">Attend</h1>
            </button>
          </div>
          <div className="">
            <button
              onClick={() => router.push("/lead/newlead")}
              className=" p-4  relative top-[-40px]  py-1 px-2 z-50 flex flex-col justify-center items-center"
            >
              <div className="circle ">
                <img
                  src="https://i.ibb.co/r6h3kWB/pluse.png"
                  alt="Logo"
                  className=" relative h-10 w-10  myShadow3  rounded-[50%] mx-auto  top-[15px]"
                />
              </div>
            </button>
          </div>
          <div>
            {" "}
            <button
              onClick={() => () => router.push("/dashboard")}
              className="text-xl font-exo2 font-bold flex  flex-col justify-center items-center mt-1"
            >
              <img
                width="30px"
                height="30px"
                src="https://i.ibb.co/P6bKFwh/icons8-combo-chart-100.png "
                alt=""
              />
              <h1 className=" font-monster text-sm text-slate-700">Stats</h1>
            </button>
          </div>

          <Modal showModal={showModal} setShowModal={setShowModal} />
        </div>
      </div>
    </div>
  );
};

export default Home_Footer;
