import React from "react";
import BackMenu from "../../Shared/BackMenu";
import Attendence_Details_Card from "./Attendence_Details_Card";
import GoogleMapCard from "./GoogleMapCard";

const Attendence_Details = () => {
  return (
    <div>
      <BackMenu title="Attendence Details" />
      <div className=" bg-zinc-400 h-screen overflow-scroll w-full">
        <div className="m-3">
          <Attendence_Details_Card />
          <div className="w-full h-20">{/* <GoogleMapCard /> */}</div>
        </div>
      </div>
    </div>
  );
};

export default Attendence_Details;
