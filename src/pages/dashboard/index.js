import React from "react";
import MobileDashboard from "../../components/Mobile/Dashboard/MobileDashboard";
import BackMenu from "../../components/Shared/BackMenu";

const index = ({ isMobile }) => {
  return <div>{isMobile ? <MobileDashboard /> : <MobileDashboard />}</div>;
};

export default index;
