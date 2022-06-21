import React from "react";
import FileCollection from "../../components/Mobile/FileCollection/FileCollection";

const index = ({ isMobile }) => {
  return <div>{isMobile ? <FileCollection /> : <FileCollection />}</div>;
};

export default index;
