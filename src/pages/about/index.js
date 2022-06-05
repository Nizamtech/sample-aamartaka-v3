import React from "react";
import About from "../../components/Desktop/About/About";
import Mobile_About from "../../components/Mobile/About/Mobile_About";

const index = ({ isMobile }) => {
  return <div>{isMobile ? <Mobile_About /> : <About />}</div>;
};

export default index;
