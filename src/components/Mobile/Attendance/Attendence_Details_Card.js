import React from "react";

const Attendence_Details_Card = () => {
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
              <h1>Start Time</h1>
              <h1>02:00 PM</h1>
            </div>
            <div className="flex justify-between items-center text-xs font-exo">
              <h1>Location</h1>
              <h1>Banani</h1>
            </div>
          </div>
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
                <h1>Stop Time</h1>
                <h1>02:00 PM</h1>
              </div>
              <div className="flex justify-between items-center text-xs font-exo">
                <h1>Location</h1>
                <h1>Banani</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendence_Details_Card;
