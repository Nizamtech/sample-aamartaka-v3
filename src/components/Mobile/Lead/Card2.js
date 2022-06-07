import React from "react";

const Card2 = () => {
  return (
    <div>
      <div className=" shadow-lg rounded-md m-2 bg-white  shadow-slate-300 ">
        <div className="flex justify-between items-center p-2   w-full ">
          <div className="bg-white py-1 text-slate-900  border-b-0">
            <h1 className="px-2 col-span-2">Name</h1>
            <h1 className="px-2 text-black font-bold">Nizam Uddin</h1>
          </div>
          <div className="bg-white py-1 text-slate-900  border-b-0">
            <h1 className="px-2 col-span-2">Profession</h1>
            <h1 className="px-2 text-black font-bold">Salaried</h1>
          </div>
        </div>
        <div className="flex justify-between items-center p-2    w-full ">
          <div className="bg-white py-1 text-slate-900  border-b-0">
            <h1 className="px-2 col-span-2">Salary</h1>
            <h1 className="px-2 text-black font-bold">12000</h1>
          </div>
          <div className="bg-white py-1 text-slate-900  border-b-0">
            <h1 className="px-2 col-span-2">Visit Date</h1>
            <h1 className="px-2 text-black font-bold">2022-06-05</h1>
          </div>
        </div>
        <button className="w-full bg-sky-400 p-1 rounded-md text-white text-xl flex justify-center items-center my-2">
          View
        </button>
      </div>
    </div>
  );
};

export default Card2;
