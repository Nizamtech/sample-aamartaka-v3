import React from "react";
import Mobile_Dashboard from "../../components/Mobile/Home/Mobile_Dashboard";
import MobileLead from "../../components/Mobile/Lead/MobileLead";

const index = ({ isMobile }) => {
  return <div>{isMobile ? <MobileLead /> : <MobileLead />}</div>;
};

export default index;
