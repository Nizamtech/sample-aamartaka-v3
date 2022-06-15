import React from "react";
import NewLead from "../../../components/Mobile/Lead/NewLead/NewLead";

const index = ({ isMobile }) => {
  return <div>{isMobile ? <NewLead /> : <NewLead />}</div>;
};

export default index;
