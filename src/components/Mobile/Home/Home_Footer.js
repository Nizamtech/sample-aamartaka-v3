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
    <div className="absolute w-full mt-6 ">
      {/* <Footer_modal showModal={showModal} setShowModal={setShowModal} /> */}
      <div className="border-b rounded-b-[30px] myShadow px-2 bottom-0 amin  bg-white   border-gray-200 shadow-md grid grid-cols-3 place-content-between place-items-center">
        <div>
          <button
            onClick={handleAttendance}
            className="text-xl font-exo2 font-bold flex  flex-col justify-center items-center my-1"
          >
            <img
              width="30px"
              height="30px"
              src="https://i.ibb.co/q90Gq33/icons8-attendance-64.png"
              alt=""
            />
            <h1 className=" font-monster text-md text-slate-700">Attend</h1>
          </button>
        </div>
        <div className=" ">
          <button
            onClick={() => router.push("/lead/newlead")}
            className=" p-4  relative top-[-29px]  py-1 px-2 z-50 flex flex-col justify-center items-center"
          >
            <img
              src="https://i.ibb.co/r6h3kWB/pluse.png"
              alt="Logo"
              className="h-12 w-12 mr-2 myShadow2  rounded-[50%] "
            />
            {/* <span className=" text-[10px] font-bold  font-roboto ">New</span>
            <span className=" text-[10px] font-bold  font-roboto ">Lead</span> */}
          </button>
        </div>
        <div>
          {" "}
          <button
            onClick={() => () => router.push("/dashboard")}
            className="text-xl font-exo2 font-bold flex  flex-col justify-center items-center my-1"
          >
            <img
              width="30px"
              height="30px"
              src="https://i.ibb.co/vHTPw8R/icons8-area-chart-64.png "
              alt=""
            />
            <h1 className=" font-monster text-md text-slate-700">Stats</h1>
          </button>
        </div>
        <div></div>

        <Modal showModal={showModal} setShowModal={setShowModal} />
      </div>
    </div>
  );
};

export default Home_Footer;
