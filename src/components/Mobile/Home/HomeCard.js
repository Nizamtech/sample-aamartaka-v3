import React from "react";
import Link from "next/link";
import Image from "next/image";
const HomeCard = ({ title, body, color, icon, anm }) => {
  return (
    <div>
      <div
        href="#"
        className="flex flex-col justify-between items-center  p-3 h-[92px] w-20 max-w-sm min-w-min  bg-white rounded-lg border-gray-200  hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        {body && (
          <h1 className={`text-center text-slate-900 text-4xl font-bold`}>
            {body}
          </h1>
        )}
        {icon && (
          <img
            src={icon}
            alt={title}
            height="40px"
            width="40px"
            className={`${anm} flex mx-auto  justify-end items-end`}
          />
        )}
        <h5
          className={`mb-2 text-xs font-bold tracking-tigh text-[${color}] text-center mt-1`}
        >
          {title}
        </h5>
      </div>
    </div>
  );
};

export default HomeCard;
