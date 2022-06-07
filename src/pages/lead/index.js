import React from "react";
import Mobile_Dashboard from "../../components/Mobile/Dashboard/Mobile_Dashboard";
import MobileLead from "../../components/Mobile/Lead/MobileLead";

const index = ({ isMobile }) => {
  return (
    <div className="mx-auto bg-slate-200 h-full">
      {isMobile ? <MobileLead /> : <MobileLead />}
    </div>
  );
};

export default index;
