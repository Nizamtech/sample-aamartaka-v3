import React from "react";
import MobileLead from "../../components/Mobile/Lead/MobileLead";

const index = ({ isMobile }) => {
  return <div>{isMobile ? <MobileLead /> : <MobileLead />}</div>;
};

export default index;
