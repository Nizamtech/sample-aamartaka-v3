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
      <div className="border-t rounded-t-[25px] myShadow px-2 bottom-0 amin  bg-white   border-gray-200 shadow-md grid grid-cols-3 place-content-between place-items-center">
        <div>
          <button
            onClick={handleAttendance}
            className="text-xl font-exo2 font-bold"
          >
            ATTEND
          </button>
        </div>
        <div className=" ">
          <button
            onClick={() => router.push("/lead/newlead")}
            className=" p-4  relative top-[-15px]  py-1 px-2 z-50 flex flex-col justify-center items-center"
          >
            <img
              src="https://i.ibb.co/r6h3kWB/pluse.png"
              alt="Logo"
              className="h-10 w-10 mr-2 myShadow2  rounded-[50%] "
            />
            {/* <span className=" text-[10px] font-bold  font-roboto ">New</span>
            <span className=" text-[10px] font-bold  font-roboto ">Lead</span> */}
          </button>
        </div>
        <div>
          {" "}
          <button
            onClick={() => () => router.push("/dashboard")}
            className="text-xl font-exo2 font-bold"
          >
            STATS
          </button>
        </div>
        <div></div>

        <Modal showModal={showModal} setShowModal={setShowModal} />
      </div>
    </div>
  );
};

export default Home_Footer;
