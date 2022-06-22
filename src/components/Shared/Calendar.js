import React, { useState } from "react";

const Calendar = () => {
  const [state, setState] = useState([]);
  const [type, setType] = useState("text");
  const [type2, setType2] = useState("text");
  return (
    <div className=" bg-[#EFF2F7] mt-1  p-2 grid grid-cols-2 gap-3 ">
      <input
        className=" border-gray-300 rounded-md p-3 focus:outline-none text-sm font-monster  "
        type={type}
        placeholder="From"
        onFocus={() => setType("date")}
        onBlur={() => setType("text")}
        onChange={(e) => console.log(e.target.value)}
      />
      <input
        className=" border-gray-300 rounded-md p-3 focus:outline-none text-sm font-monster"
        type={type2}
        placeholder="To"
        onFocus={() => setType2("date")}
        onBlur={() => setType2("text")}
        onChange={(e) => console.log(e.target.value)}
      />
    </div>
  );
};

export default Calendar;
