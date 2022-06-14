import React, { useState } from "react";
import AttendenceModal from "./AttendenceModal";

const Attendence_Details_Card = () => {
  const [showModal, setShowModal] = useState(false);
  // const handleClose = () => setShowModal(false);
  // const handleShow = () => setShowModal(true);
  const handleAttendance = () => {
    setShowModal(true);
  };

  return (
    <div className="myShadow bg-white p-2 rounded-lg">
      <h1 className="text-center font-exo font-bold text-sm ">
        {" "}
        {new Date().toLocaleDateString()}{" "}
      </h1>
      <hr className=" border-dotted border-slate-400 my-1" />
      <div className="grid grid-cols-2">
        <div className=" border-r border-dotted border-slate-400 ">
          <img
            className="mx-auto rounded-md p-1"
            width="70px"
            height="50px"
            src="https://c.ndtvimg.com/2022-05/s5rkvdpg_elon-musk-reuters_625x300_15_May_22.jpg"
            alt=""
          />
          <div className="p-1">
            <div className="flex justify-between items-center text-xs font-exo">
              <h1 className="font-bold text-[10px]">Start Time:</h1>
              <h1 className="text-[10px]">02:00 PM</h1>
            </div>
            <div className="grid grid-cols-7 place-content-between text-xs font-exo">
              <h1 className="col-span-2 font-bold text-[10px]">Location:</h1>
              <h1 className=" col-span-5 text-[10px] text-justify">
                Gulshan ,Banani, Dhaka
              </h1>
            </div>
          </div>
          <button
            className=" font-exo text-sm text-cyan-500 flex justify-center items-center mx-auto"
            onClick={handleAttendance}
          >
            View Map
          </button>
        </div>

        <div className=" ">
          <div className="  border-dotted border-slate-400 ">
            <img
              className="mx-auto rounded-md p-1"
              width="70px"
              height="50px"
              src="https://c.ndtvimg.com/2022-05/s5rkvdpg_elon-musk-reuters_625x300_15_May_22.jpg"
              alt=""
            />
            <div className="p-1">
              <div className="flex justify-between items-center text-xs font-exo">
                <h1 className=" font-bold text-[10px]">Start Time:</h1>
                <h1 className="text-[10px]">02:00 PM</h1>
              </div>
              <div className="grid grid-cols-7 place-content-between text-xs font-exo">
                <h1 className="col-span-2 font-bold text-[10px] ">Location:</h1>
                <h1 className=" col-span-5 text-[10px] text-justify">
                  Gulshan , Banani, Dhaka
                </h1>
              </div>
            </div>
          </div>
          <button
            className=" font-exo text-sm text-cyan-500 flex justify-center items-center mx-auto"
            onClick={handleAttendance}
          >
            View Map
          </button>
        </div>
      </div>
      <AttendenceModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default Attendence_Details_Card;
