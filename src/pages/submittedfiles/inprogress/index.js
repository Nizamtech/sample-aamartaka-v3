import React from "react";
import Approved from "../../../components/Mobile/SubmittedFiles/Approved/Approved";
import InProgress from "../../../components/Mobile/SubmittedFiles/InProgress/InProgress";

const index = ({ isMobile }) => {
  return <div>{isMobile ? <InProgress /> : <InProgress />}</div>;
};

export default index;
