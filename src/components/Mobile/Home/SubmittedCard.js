import React from "react";
import Link from "next/link";
import Image from "next/image";
const SubmittedCard = ({ title, body, color, icon, anm }) => {
  return (
    <div>
      <div
        href="#"
        className="flex flex-col justify-between items-center  p-3 h-[85px] w-24 max-w-sm min-w-min  bg-white rounded-lg border-gray-200  hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
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

export default SubmittedCard;
