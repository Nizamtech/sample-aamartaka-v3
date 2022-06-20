import React from "react";
import Approved from "../../../components/Mobile/SubmittedFiles/Approved/Approved";

const index = ({ isMobile }) => {
  return <div>{isMobile ? <Approved /> : <Approved />}</div>;
};

export default index;
