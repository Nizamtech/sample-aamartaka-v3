import React from "react";
import BackMenu from "../../../Shared/BackMenu";
import CustomerDetailsCard from "./CustomerDetailsCard";

const CustomersDetails = ({ name }) => {
  const data = [
    {
      id: 1,
      name: "Aland De Cruce",
      profession: "Senior Quality Engineer",
      salary: 194191,
      company: "InnoZ",
      location: "79702 Southridge Place",
      visitDate: "3/1/2022",
      scheduleDate: "6/9/2021",
      scheduleTime: "6:44 PM",
      status: "Rejected",
      color: "text-red-500",
    },
    {
      id: 2,
      name: "Daphne Le Guin",
      profession: "Social Worker",
      salary: 156601,
      company: "Yotz",
      location: "983 La Follette Park",
      visitDate: "12/23/2021",
      scheduleDate: "7/16/2021",
      scheduleTime: "1:33 AM",
      status: "Approved",
      color: "text-green-500",
    },
    {
      id: 3,
      name: "Lyda Zuan",
      profession: "Technical Writer",
      salary: 336265,
      company: "Abatz",
      location: "7 Laurel Park",
      visitDate: "3/14/2022",
      scheduleDate: "9/29/2021",
      scheduleTime: "11:08 AM",
      status: "In Progress",
      color: "text-yellow-500",
    },
    {
      id: 4,
      name: "Etta Williamson",
      profession: "Geological Engineer",
      salary: 486549,
      company: "Riffpedia",
      location: "522 Oneill Junction",
      visitDate: "9/22/2021",
      scheduleDate: "3/20/2022",
      scheduleTime: "7:28 PM",
      status: "Pending",
      color: "text-orange-500",
    },
    {
      id: 5,
      name: "Cornelia Simukov",
      profession: "Junior Executive",
      salary: 127644,
      company: "Blogtag",
      location: "9 Fuller Hill",
      visitDate: "11/28/2021",
      scheduleDate: "11/6/2021",
      scheduleTime: "7:16 PM",
      status: "Rejected",
      color: "text-red-500",
    },
  ];
  return (
    <div>
      <BackMenu title={name} />
      <div className="absolute bg-gray-200 w-full h-screen">
        <div className="myShadow bg-white mx-2 my-2 rounded-lg p-2">
          <div className="flex justify-between items-center my-2 px-5">
            <h1 className=" col-span-8 font-bold">Total Customer</h1>
            <h1 className=" col-span-4 font-bold">05</h1>
          </div>
          <hr className="border-dotted border-slate-500 mt-2 mb-4 mx-4" />
          {data &&
            data.map((item) => {
              return (
                <>
                  <CustomerDetailsCard item={item} />
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default CustomersDetails;
