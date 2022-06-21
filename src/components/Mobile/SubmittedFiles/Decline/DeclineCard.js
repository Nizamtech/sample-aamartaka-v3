import React from "react";

const DeclineCard = (item) => {
  const { reason, sendBack } = item;
  return (
    <details className=" mx-3 my-2 font-monster ">
      <summary className=" bg-slate-100 w-fu p-2 ">Decline Details</summary>
      <div className="mt-3">
        {sendBack &&
          sendBack?.map((item, index) => {
            return (
              <>
                <div className=" font-roboto text-justify py-1 grid grid-cols-12 ">
                  <h1 className=" col-span-1">
                    <span className=" text-slate-400">{index + 1}.</span>{" "}
                  </h1>
                  <h1 className=" col-span-11">
                    <span className="">{item}</span>
                  </h1>
                </div>
              </>
            );
          })}
      </div>
    </details>
  );
};

export default DeclineCard;
