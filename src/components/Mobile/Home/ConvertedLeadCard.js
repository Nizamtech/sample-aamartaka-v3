import React from "react";

const ConvertedLeadCard = ({ title, body, color, icon, anm }) => {
  return (
    <div className="grid grid-cols-3 gap-3 ">
      <div className=" border p-2 h-[85px] w-24 max-w-sm min-w-min  bg-white rounded-lg border-gray-200  hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        {body && (
          <h1 className={`text-center text-[${color}] text-4xl font-bold`}>
            {body}
          </h1>
        )}

        <h5
          className={`mb-2 text-xs font-bold tracking-tigh text-slate-900  text-center mt-1`}
        >
          {title}
        </h5>
      </div>
    </div>
  );
};

export default ConvertedLeadCard;
