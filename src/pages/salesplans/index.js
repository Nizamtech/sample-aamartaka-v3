import React from "react";
import SalesPlans from "../../components/Mobile/SalesPlans/SalesPlans";

const index = ({ isMobile }) => {
  return <div>{isMobile ? <SalesPlans /> : <SalesPlans />}</div>;
};

export default index;
