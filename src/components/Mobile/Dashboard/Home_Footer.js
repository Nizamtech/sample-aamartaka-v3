import React from "react";
import Image from "next/image";
import Modal from "../../Shared/Modal";
import { useState } from "react";
import Footer_modal from "../../Shared/Footer_modal";
const Home_Footer = () => {
  const [showModal, setShowModal] = useState(false);
  // const handleClose = () => setShowModal(false);
  // const handleShow = () => setShowModal(true);
  const handleAttendance = () => {
    setShowModal(true);
  };

  return (
    <div>
      {/* <Footer_modal showModal={showModal} setShowModal={setShowModal} /> */}
      <div className="px-2  bg-white  rounded-b-lg border  border-gray-200 shadow-md grid grid-cols-3 place-content-between place-items-center">
        <div>
          <button onClick={handleAttendance} className="text-xl">
            Attend
          </button>
        </div>
        <div>
          <div className="flex items-center py-4 px-2">
            <img
              src="https://i.ibb.co/wS9LFwG/plus-7-64.png"
              alt="Logo"
              className="h-10 w-10 mr-2 "
            />
            {/* <span className="font-semibold text-gray-500 text-lg">Navigation</span> */}
          </div>
        </div>
        <div>
          {" "}
          <button onClick={handleAttendance} className="text-xl">
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
