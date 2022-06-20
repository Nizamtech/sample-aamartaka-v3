import React from "react";
import BackMenu from "../../../Shared/BackMenu";

const CustomersDetails = ({ name }) => {
  return (
    <div>
      <BackMenu title={name} />
      <div className="  absolute bg-gray-200 w-full h-screen">
        <div className="myShadow bg-white mx-2 my-2 rounded-lg p-2">
          <h1 className=" font-monster text-lg mb-2 font-bold">
            Customers Details
          </h1>
          <div className=" grid grid-cols-12">
            <h1 className=" col-span-8 font-bold">Total Employee </h1>
            <h1 className=" col-span-4 font-bold">500 </h1>
          </div>
          <hr className=" border-dotted border-slate-500" />
          <h1 className=" my-2 font-monster font-bold">Salary Range</h1>
          <div className=" grid grid-cols-12 font-monster mx-2">
            <div className=" col-span-8 text-slate-500">
              <h1>10K-20K</h1>
              <h1>20K-30K</h1>
              <h1>30K-40K</h1>
              <h1>40K-50K</h1>
              <h1>50K-60K</h1>
              <h1>70K-80K</h1>
              <h1>Above 80K</h1>
            </div>
            <div className=" col-span-4 text-slate-900 font-bold">
              <h1>150</h1>
              <h1>50</h1>
              <h1>40</h1>
              <h1>30</h1>
              <h1>20</h1>
              <h1>10</h1>
              <h1>05</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomersDetails;
