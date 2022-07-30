import React from "react";
import Image from "next/image";
import Modal from "../../Shared/Modal";
import { useState } from "react";
import Footer_modal from "../../Shared/Footer_modal";
import Webcam from "react-webcam";
import { useRouter } from "next/router";
import plus from "../../../images/plus.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faBook, faChartLine } from '@fortawesome/free-solid-svg-icons';

const Home_Footer = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  // const handleClose = () => setShowModal(false);
  // const handleShow = () => setShowModal(true);
  const handleAttendance = () => {
    setShowModal(true);
  };

  return (
    <div className="z-50 sticky bottom-0 mt-5">
      {/* <Footer_modal showModal={showModal} setShowModal={setShowModal} /> */}
      <div className="border-t rounded-lg px-2 py-1 bg-white border-gray-200 shadow-md grid grid-cols-3 place-content-between place-items-center">
        <div>
          <button
            onClick={handleAttendance}
            className="text-xl font-exo2 font-bold flex flex-col justify-center items-center my-1"
          >
            <FontAwesomeIcon icon={faBook} className="h-6 w-6 mx-auto text-[#2684FF]" />
            <h1 className=" font-monster text-sm text-slate-700">Attendence</h1>
          </button>
        </div>
        <div>
          <button
            onClick={() => router.push("/lead/newlead")}
            className="p-4 relative top-[-40px] py-1 px-2 flex flex-col justify-center items-center">
            <div className=" absolute h-8 w-16 top-[15px] rounded-b-full ">
              <FontAwesomeIcon icon={faCirclePlus} className="h-10 w-10 rounded-full mx-auto mt-2 text-[#2684FF]" />
            </div>
          </button>
        </div>
        <div>
          <button
            onClick={() => () => router.push("/dashboard")}
            className="text-xl font-exo2 font-bold flex flex-col justify-center items-center mt-1">
            <FontAwesomeIcon icon={faChartLine} className="h-6 w-6 mx-auto text-[#2684FF]" />
            <h1 className="font-monster text-sm text-slate-700">Stats</h1>
          </button>
        </div>
        <Modal showModal={showModal} setShowModal={setShowModal} />
      </div>
    </div>
  );
};

export default Home_Footer;
