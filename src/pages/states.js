import React from "react";
import States from "../components/Desktop/States/States";
import Mobile_States from "../components/Mobile/States/Mobile_States";
import Modal from "../components/Shared/Modal";

const states = ({ isMobile }) => {
  return (
    <div>
      <h1>Comming Soon </h1>

      <Modal />
      {/* {isMobile ? <Mobile_States /> : <States />} */}
    </div>
  );
};

export default states;
