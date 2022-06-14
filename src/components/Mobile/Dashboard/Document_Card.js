import React from "react";

const Document_Card = () => {
  return (
    <div className="myShadow2  font-exo rounded-t-lg">
      <div className=" bg-[#E5E5E5] rounded-t-lg">
        {/* this is title  */}
        <h1 className="text-center py-2 ">
          Document <span className="ml-3">0</span>{" "}
        </h1>
        {/* card body  */}
        <div className="grid grid-cols-2 place-content-between place-items-center bg-white text-[12px]">
          <div className="py-2 ">
            <h1>Active</h1>
            <h1>Pending</h1>
            <h1>Upcoming</h1>
          </div>
          <div>
            <h1>12</h1>
            <h1>10</h1>
            <h1>07</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Document_Card;
