import React from "react";
import Link from "next/link";
import Image from "next/image";
const DashboardCard = ({ title, body, color, icon }) => {
  return (
    <div>
      <div
        href="#"
        className=" block p-3 h-28 w-28 max-w-sm min-w-min  bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5
          className={`mb-2 text-sm font-bold tracking-tigh text-[${color}] text-center`}
        >
          {title}
        </h5>
        {body && (
          <h1 className={`text-[${color}]  text-center text-4xl font-bold`}>
            {body}
          </h1>
        )}
        {icon && (
          <img
            src={icon}
            alt={title}
            height="35px"
            width="35px"
            className="flex mx-auto mt-1 justify-end items-end"
          />
        )}
      </div>
    </div>
  );
};

export default DashboardCard;
