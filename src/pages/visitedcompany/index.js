import React from "react";
import VisitedCompany from "../../components/Mobile/VisitedCompany/VisitedCompany";

const index = ({ isMobile }) => {
  return <div>{isMobile ? <VisitedCompany /> : <VisitedCompany />}</div>;
};

export default index;
