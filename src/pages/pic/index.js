import React from "react";
import Pictiure from "../../components/Desktop/Picture/Pictiure";
import Mobile_Picture from "../../components/Mobile/Picture/Mobile_Picture";

const index = ({ isMobile }) => {
  return <div>{isMobile ? <Mobile_Picture /> : <Pictiure />}</div>;
};

export default index;
