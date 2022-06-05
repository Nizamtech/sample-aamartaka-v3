import React from "react";
import App from "../../components/Desktop/App/App";
import Mobile_App from "../../components/Mobile/App/Mobile_App";

const index = ({ isMobile }) => {
  return <div>{isMobile ? <Mobile_App /> : <App />}</div>;
};

export default index;
