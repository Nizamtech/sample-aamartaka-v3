import React from "react";
import Approved from "../../../components/Mobile/SubmittedFiles/Approved/Approved";
import Decline from "../../../components/Mobile/SubmittedFiles/Decline/Decline";

const index = ({ isMobile }) => {
  return <div>{isMobile ? <Decline /> : <Decline />}</div>;
};

export default index;
