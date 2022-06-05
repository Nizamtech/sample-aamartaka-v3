import React from "react";
import User from "../../components/Desktop/User/User";
import Mobile_User from "../../components/Mobile/User/Mobile_User";

const index = ({ isMobile }) => {
  return <div>{isMobile ? <Mobile_User /> : <User />}</div>;
};

export default index;
