import React from "react";
import MobileNavbar from "../Navbar/MobileNavbar";

const MobileLayout = ({ children }) => {
  return (
    <div>
      <MobileNavbar />
      {children}
      <h1>Mobile Footer</h1>;
    </div>
  );
};

export default MobileLayout;
