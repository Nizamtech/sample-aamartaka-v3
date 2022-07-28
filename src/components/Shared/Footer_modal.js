import React from "react";

const Footer_modal = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal && (
        <div className="h-96 ">
          <h1>Attend</h1>
        </div>
      )}
    </>
  );
};

export default Footer_modal;
