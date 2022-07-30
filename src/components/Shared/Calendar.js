import React, { useState } from "react";

const Calendar = () => {
  const [state, setState] = useState([]);
  const [type, setType] = useState("text");
  const [type2, setType2] = useState("text");
  return (
    <div className="bg-white mt-1 py-2 px-3 grid grid-cols-2 gap-3">
      <input
        className="border border-gray-300 rounded-md p-3 focus:outline-none text-sm font-monster shadow focus:border-[#2684FF]"
        type={type}
        placeholder="From"
        onFocus={() => setType("date")}
        onBlur={() => setType("text")}
        onChange={(e) => console.log(e.target.value)}
      />
      <input
        className="border border-gray-300 rounded-md p-3 focus:outline-none text-sm font-monster shadow focus:border-[#2684FF]"
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
