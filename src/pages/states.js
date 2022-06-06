import React from "react";
import States from "../components/Desktop/States/States";
import Mobile_States from "../components/Mobile/States/Mobile_States";

const states = ({ isMobile }) => {
  return <div>{isMobile ? <Mobile_States /> : <States />}</div>;
};

export default states;
