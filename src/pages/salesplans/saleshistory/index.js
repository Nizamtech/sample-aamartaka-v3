import React from "react";
import SalesHistory from "../../../components/Mobile/SalesPlans/SalesHistory/SalesHistory";

const saleshistory = ({ isMobile }) => {
  return <div>{isMobile ? <SalesHistory /> : <SalesHistory />}</div>;
};

export default saleshistory;
