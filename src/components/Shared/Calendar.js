import React, { useState } from "react";

const Calendar = () => {
  const [state, setState] = useState([]);
  return (
    <div className=" bg-[#EFF2F7] m-1 p-2 grid grid-cols-2 gap-3 ">
      <input
        placeholder="TO"
        className=" border-gray-300 rounded-md p-2 focus:outline-none text-xs "
        // value={new Date().toISOString().split("T")[0]}
        type="date"
        onChange={(e) => console.log(e.target.value)}
      />
      <input
        placeholder="From"
        className="datepicker-input border-gray-300 rounded-md p-2 focus:outline-none text-xs "
        type="date"
        // value={new Date().toISOString().split("T")[0]}
        onChange={(e) => console.log(e.target.value)}
      />
    </div>
  );
};

export default Calendar;
