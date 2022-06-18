import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import BackIcon from "../../../public/assets/icons/swoosh-left.svg";
const BackMenu = ({ title }) => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-start bg-white w-full py-3 h-[57px]">
      <button
        onClick={() => {
          router.back();
        }}
        className="ml-5 mr-2 my-2 flex items-center justify-center "
      >
        <Image
          className="pt-3"
          width="25px"
          height="25px"
          src={BackIcon}
          alt="back"
        />
      </button>
      <h1 className="text-[16px] font-monster my-2  text-[#434343] capitalize  ">
        {title}
      </h1>
    </div>
  );
};

export default BackMenu;
