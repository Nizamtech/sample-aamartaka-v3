import React from "react";

const ConvertedLeadCard = ({ title, body, color }) => {
  return (
    <>
      <div className={`py-1 px-1 bg-white rounded-lg hover:bg-gray-100 shadow-lg`}>
        {body && (
          <h1 className={`text-center text-[${color}] text-3xl font-bold border-2 border-sky-400 w-[58px] h-[55px] rounded-full mx-auto flex flex-col items-center justify-center mt-1`}>
            {body}
          </h1>
        )}

        <h5 className={`text-[14px] font-bold tracking-tight text-slate-700 text-center my-1`}>
          {title}
        </h5>
      </div>
    </>
  );
};

export default ConvertedLeadCard;
