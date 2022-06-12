import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
const BackMenu = ({ title }) => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-start bg-white w-full py-3">
      <button
        onClick={() => {
          router.back();
        }}
        className="ml-5 mr-5 my-2 flex items-center justify-center "
      >
        <Image
          className="pt-3"
          width="20px"
          height="20px"
          src={"https://i.ibb.co/HdWwCFp/arrow-96-64-1.png"}
          alt="back"
        />
      </button>
      <h1
        style={{ letterSpacing: "5px" }}
        className="text-sm font-exo my-2 font-bold  "
      >
        {title}
      </h1>
    </div>
  );
};

export default BackMenu;
