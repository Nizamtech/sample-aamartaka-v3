import React from "react";
import Link from "next/link";
import Image from "next/image";
const HomeCard = ({ title, body, color, icon, anm }) => {
  return (
    <div>
      <div
        href="#"
        className="flex flex-col justify-center items-center py-3 px-1 h-[92px] w-[107px] bg-white rounded-lg border-gray-200 border shadow-2xl"
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
          className={`my-1 text-xs font-bold tracking-tight text-[${color}] text-center`}>
          {title}
        </h5>
      </div>
    </div>
  );
};

export default HomeCard;
