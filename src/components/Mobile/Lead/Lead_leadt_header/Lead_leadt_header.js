import React, { useState } from "react";
import Lead_Modal from "./Lead_Modal";

const Lead_leadt_header = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState({});

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(e);
  };

  return (
    <div className=" myShadow mx-2 mt-2 rounded-lg bg-white p-2">
      <div className=" flex justify-between items-center ">
        <form onSubmit={handleSubmit}>
          <input
            required
            type="text"
            name="companyName"
            onChange={handleChange}
            placeholder="Company Name Search"
            className="my-2  focus:outline-[#2684FF] focus:duration-400 font-exo w-72 h-8 border py-4 px-3 rounded-[3px] border-[#CCCCCC] "
          />
        </form>
        <button onClick={() => setShowModal(true)}>
          <img
            src="https://i.ibb.co/qxdsSmG/adjust.png"
            alt=""
            width="30px"
            height="30px"
          />
        </button>
      </div>
      <Lead_Modal showModal={showModal} setShowModal={setShowModal} />
      {/* <div className=" myShadow2 p-1 rounded-md my-3 mx-2">2</div>

      <div className=" myShadow2 p-1 rounded-md my-3 mx-2">3</div> */}
    </div>
  );
};

export default Lead_leadt_header;
