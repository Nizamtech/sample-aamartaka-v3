import React from "react";
import MobileNavbar from "../components/Shared/Navbar/MobileNavbar";
import stylesheet from "../styles/Mobile.module.scss";

const MobileLayout = ({ children }) => {
  return (
    <div className="mobile">
      <MobileNavbar />
      {children}
      <h1>Mobile Footer</h1>;
    </div>
  );
};

export default MobileLayout;
