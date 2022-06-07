import React from "react";

const Card1 = () => {
  return (
    <div className="grid grid-cols-2 gap-4 mx-2">
      {/* <div className="p-2 shadow-xl bg-white border-t shadow-slate-300">
        <h1 className="text-xl  font-bold">Nizam €Uddin</h1>
        <h1 className="text-md text-gray-500 "> Salaried</h1>{" "}
      </div> */}

      <div className="p-2 overflow-x-auto shadow-xl bg-white border-t shadow-slate-300 rounded-lg ">
        <div className="bg-white py-1 text-slate-900  border-b-0">
          <h1 className="px-2 col-span-2">Name</h1>
          <h1 className="px-2 text-black font-bold">Nizam Uddin</h1>
        </div>
        <div className="bg-white py-1 text-slate-900  border-b-0">
          <h1 className="px-2 col-span-2">Profession</h1>
          <h1 className="px-2 text-black font-bold">Salaried</h1>
        </div>
        <div className="bg-white py-1 text-slate-900  border-b-0">
          <h1 className="px-2 col-span-2">Salary</h1>
          <h1 className="px-2 text-black font-bold">12000</h1>
        </div>
        <div className="bg-white py-1 text-slate-900  border-b-0">
          <h1 className="px-2 col-span-2">Visit Date</h1>
          <h1 className="px-2 text-black font-bold">2022-06-05</h1>
        </div>

        <button className="w-full bg-sky-400 p-1 rounded-md text-white text-xl flex justify-center items-center my-2">
          View
        </button>
      </div>
      <div className="p-2 overflow-x-auto shadow-xl bg-white border-t shadow-slate-300 rounded-lg ">
        <div className="bg-white py-1 text-slate-900  border-b-0">
          <h1 className="px-2 col-span-2">Name</h1>
          <h1 className="px-2 text-black font-bold">Nizam Uddin</h1>
        </div>
        <div className="bg-white py-1 text-slate-900  border-b-0">
          <h1 className="px-2 col-span-2">Profession</h1>
          <h1 className="px-2 text-black font-bold">Salaried</h1>
        </div>
        <div className="bg-white py-1 text-slate-900  border-b-0">
          <h1 className="px-2 col-span-2">Salary</h1>
          <h1 className="px-2 text-black font-bold">12000</h1>
        </div>
        <div className="bg-white py-1 text-slate-900  border-b-0">
          <h1 className="px-2 col-span-2">Visit Date</h1>
          <h1 className="px-2 text-black font-bold">2022-06-05</h1>
        </div>

        <button className="w-full bg-sky-400 p-1 rounded-md text-white text-xl flex justify-center items-center my-2">
          View
        </button>
      </div>
    </div>
  );
};

export default Card1;
