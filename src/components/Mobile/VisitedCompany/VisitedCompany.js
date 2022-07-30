import React, { useState } from "react";
import BackMenu from "../../Shared/BackMenu";
import Calendar from "../../Shared/Calendar";
import Visited_Company_card from "./Visited_Company_card";

const VisitedCompany = () => {
  return (
    <div>
      <BackMenu title="Visited Company" />
      <Calendar />
      <div className="bg-white h-screen w-full p-3  overflow-scroll ">
        <Visited_Company_card />
        <Visited_Company_card />
      </div>
    </div>
  );
};

export default VisitedCompany;
