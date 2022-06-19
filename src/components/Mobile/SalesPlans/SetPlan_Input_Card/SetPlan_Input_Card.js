import React, { useState } from "react";
import AsyncSelect from "react-select/async";
import Select from "react-select";
const SetPlan_Input_Card = () => {
  const [profession, setProfession] = useState(null);
  const [state, setState] = useState([]);
  const [selected, setSelected] = useState();

  const professionData = [
    { value: "salaried", label: "Salaried" },
    { value: "business", label: "Business" },
    { value: "landloard", label: "Landloard" },
    { value: "professional", label: "Professional" },
  ];

  const colourOptions = [
    { label: "aamartaka", value: "value" },
    { label: "Robi", value: "value" },
    { label: "Grameen", value: "value" },
    { label: "Asha", value: "value" },
    { label: "Lonka Bangla", value: "value" },
    { label: "Indigo", value: "value" },
    { label: "Nizam", value: "value" },
  ];
  const vititeTime = [
    { value: "10:00 AM", label: "10:00 AM" },
    { value: "11:00 AM", label: "11:00 AM" },
    { value: "12:00 PM", label: "12:00 PM" },
    { value: "01:00 PM", label: "01:00 PM" },
    { value: "02:00 PM", label: "02:00 PM" },
    { value: "03:00 PM", label: "03:00 PM" },
    { value: "04:00 PM", label: "04:00 PM" },
    { value: "05:00 PM", label: "05:00 PM" },
    { value: "06:00 PM", label: "06:00 PM" },
    { value: "07:00 PM", label: "07:00 PM" },
  ];

  const filterColors = (inputValue) => {
    return colourOptions.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const loadOptions = (inputValue, callback) => {
    setTimeout(() => {
      callback(filterColors(inputValue));
    }, 1000);
  };

  const handleInputChange = (newValue) => {
    const inputValue = newValue.replace(/\W/g, "");
    setState(inputValue);

    // console.log(newValue);
    // setState(newValue);
  };

  const handleChange = (newValue) => {
    console.log(newValue);
    setSelected(newValue);
  };

  return (
    <div className=" myShadow p-2 rounded-lg my-3">
      <label>Company Name</label>
      <AsyncSelect
        // placeholder="Search Company"
        cacheOptions
        loadOptions={loadOptions}
        defaultOptions
        onInputChange={handleInputChange}
        onChange={(e) => handleChange(e)}
      />
      <label>Location</label>
      <AsyncSelect
        // placeholder="Location"
        cacheOptions
        loadOptions={loadOptions}
        defaultOptions
        onInputChange={handleInputChange}
        onChange={(e) => handleChange(e)}
      />

      <label> Visite Time</label>
      <Select
        required
        name="profession"
        onChange={setProfession}
        options={vititeTime}
        placeholder="Profession"
        className="my-2"
      />
    </div>
  );
};

export default SetPlan_Input_Card;
