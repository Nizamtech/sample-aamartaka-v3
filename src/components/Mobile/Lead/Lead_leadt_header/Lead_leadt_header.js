import React, { useState } from "react";
import Lead_Modal from "./Lead_Modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders } from "@fortawesome/free-solid-svg-icons";

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
    <div className="border border-gray-300 mx-2 mt-2 rounded-lg bg-white p-2">
      <div className="flex justify-between items-center w-full">
        <form onSubmit={handleSubmit} className="w-4/5">
          <input
            required
            type="text"
            name="companyName"
            onChange={handleChange}
            placeholder="Company Name Search"
            className="my-2 focus:outline-[#2684FF] focus:duration-400 font-exo border py-2 px-3 border-[#CCCCCC] rounded-md w-full"
          />
        </form>
        <button onClick={() => setShowModal(true)} className="w-1/5">
          <FontAwesomeIcon icon={faSliders} className="text-[#2684FF] h-7 w-7 mx-auto" />
        </button>
      </div>
      <Lead_Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default Lead_leadt_header;
