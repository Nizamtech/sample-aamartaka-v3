import React from "react";
import BackMenu from "../../../Shared/BackMenu";
import VisitingDetailsCard from "./VisitingDetailsCard";

const VisitDetails = ({ name }) => {
  return (
    <div>
      <BackMenu title={name} />
      <div className="  absolute bg-gray-200 w-full h-screen">
        <div className="myShadow bg-white mx-2 my-2 rounded-lg p-2">
          {/* <h1 className=" font-monster text-lg mb-2 font-bold">
            Visit Details
          </h1> */}
          <div className="grid grid-cols-12 px-2">
            <div className="col-span-4 font-semibold">
              <h1>Total Visit-</h1>
              <h1>Location-</h1>
            </div>
            <div className="col-span-8 font-semibold">
              <h1>03</h1>
              <h1>30 East Mohakhali, Banani, Dhaka, Bangldesh</h1>
            </div>
          </div>
          {/* <hr className=" border-dotted border-slate-500 my-2" /> */}

          <VisitingDetailsCard
            purpose="Document Collection"
            name="Jamal Uddin"
            time="12:00 PM"
            date="12/06/2022"
            phone="01711122233"
          />
          <VisitingDetailsCard
            purpose="Visit"
            name="MR. Helal Mia"
            time="02:00 PM"
            date="19/06/2022"
            phone="01911122233"
          />
          <VisitingDetailsCard
            purpose="Document Collection"
            name="Aman Ullah"
            time="10:00 AM"
            date="20/06/2022"
            phone="01811122233"
          />
        </div>
      </div>
    </div>
  );
};

export default VisitDetails;
