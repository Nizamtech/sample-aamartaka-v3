import React from "react";
import Navbar from "../Navbar/Navbar";

const DesktopLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <h1>Footer</h1>
    </div>
  );
};

export default DesktopLayout;
