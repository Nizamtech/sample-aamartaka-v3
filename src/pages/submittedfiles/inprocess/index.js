import React from "react";
import Approved from "../../../components/Mobile/SubmittedFiles/Approved/Approved";
import InProcess from "../../../components/Mobile/SubmittedFiles/InProcess/InProcess";

const index = ({ isMobile }) => {
  return <div>{isMobile ? <InProcess /> : <InProcess />}</div>;
};

export default index;
