import React from "react";

const Extra_Document_Card = () => {
  return (
    <div className="myShadow2  font-exo rounded-t-lg">
      <div className=" bg-[#E5E5E5] rounded-t-lg">
        {/* this is title  */}
        <h1 className="text-center py-2 ">
          Extra Documents <span className="ml-3">0</span>{" "}
        </h1>
        {/* card body  */}
        <div className="grid grid-cols-2 place-content-between place-items-center bg-white text-[12px]">
          <div className="py-2 ">
            <h1>New</h1>
            <h1>Informed</h1>
            <h1>On Process</h1>
            <h1>Submitted</h1>
            <h1>Hold</h1>
          </div>
          <div>
            <h1>13</h1>
            <h1>17</h1>
            <h1>12</h1>
            <h1>7</h1>
            <h1>9</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extra_Document_Card;
