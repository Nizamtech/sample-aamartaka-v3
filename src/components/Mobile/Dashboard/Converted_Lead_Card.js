import React from "react";

const Converted_Lead_Card = () => {
  return (
    <div className="myShadow2  font-exo rounded-t-lg">
      <div className=" bg-[#E5E5E5] rounded-t-lg">
        {/* this is title  */}
        <h1 className="text-center py-2 ">
          Converted Lead<span className="ml-3">15</span>{" "}
        </h1>
        {/* card body  */}
        <div className="grid grid-cols-2 place-content-between place-items-center bg-white text-[12px]">
          <div className="py-2 ">
            <h1>In-Progress</h1>
            <h1>Disbursed</h1>
            <h1>Declined</h1>
            <h1>Total Lead</h1>
            <h1>Received Lead</h1>
          </div>
          <div>
            <h1>09</h1>
            <h1>13</h1>
            <h1>17</h1>
            <h1>12</h1>
            <h1>7</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Converted_Lead_Card;
