import React from "react";
import Approved from "../../../components/Mobile/SubmittedFiles/Approved/Approved";
import SendQuery from "../../../components/Mobile/SubmittedFiles/SendQuery/SendQuery";

const index = ({ isMobile }) => {
  return <div>{isMobile ? <SendQuery /> : <SendQuery />}</div>;
};

export default index;
