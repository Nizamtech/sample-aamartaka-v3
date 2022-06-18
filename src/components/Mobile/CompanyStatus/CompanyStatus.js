import BackMenu from "../../Shared/BackMenu";
import React, { Component, useEffect, useState } from "react";
import AsyncSelect from "react-select/async";

const CompanyStatus = () => {
  const [state, setState] = useState([]);
  const [selected, setSelected] = useState();

  // useEffect(() => {
  //   fetch("/api/company/status")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setState(data);

  //     }

  const data = [
    {
      name: "Aamartaka",
      bank: "City Bank",
      categoryType: "Listed Company (Categorize)",
      category: "Listed Company (Categorize)",
      categoryName: "B",
      companyType: "Financial Institution",
    },
    {
      name: "Robi",
      bank: "City Bank",
      categoryType: "Listed Company (Categorize)",
      category: "Listed Company (Categorize)",
      categoryName: "A",
      companyType: "Telecommunication",
    },
    {
      name: "Grameenphone",
      bank: "Asha Bank",
      categoryType: "Listed Company (Categorize)",
      category: "Listed Company (Categorize)",
      categoryName: "A",
      companyType: "Telecommunication",
    },
    {
      name: "Lonka Bangla",
      bank: "Grameen Bank",
      categoryType: "Listed Company (Categorize)",
      category: "Listed Company (Categorize)",
      categoryName: "A",
      companyType: "Money Transfer",
    },
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
  // const options = [
  //   { value: "chocolate", label: "Chocolate" },
  //   { value: "strawberry", label: "Strawberry" },
  //   { value: "vanilla", label: "Vanilla" },
  //   { value: "chocolate2", label: "Chocolate2" },
  //   { value: "strawberry2", label: "Strawberry2" },
  //   { value: "vanilla2", label: "Vanilla2" },
  // ];

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
    <div>
      <BackMenu title="Company Status" />
      {/* <h1>{state && state}</h1> */}

      <div className="mx-1  my-">
        <AsyncSelect
          placeholder="Search Company"
          cacheOptions
          loadOptions={loadOptions}
          defaultOptions
          onInputChange={handleInputChange}
          onChange={(e) => handleChange(e)}
        />
      </div>

      <div>
        {selected && (
          <div className="m-2 myShadow p-2 rounded-md font-exo">
            <h1 cl>City Bank</h1>
            <hr className=" border-dotted my-1 " />

            {/* <h1 className="grid grid-cols-3 text-xs mt-1">
              <span className=" text-slate-400 text-sm">Comapy Name</span>
              <span className=" col-span-2 text-sm"> {selected.label}</span>
            </h1> */}
            <h1 className="grid grid-cols-3 text-xs mt-2">
              <span className=" text-slate-400">Category Type</span>
              <span className=" col-span-2"> Listed Company (Categorize)</span>
            </h1>
            <h1 className="grid grid-cols-3 text-xs mt-1">
              <span className=" text-slate-400">Category Name</span>{" "}
              <span className=" col-span-2">B</span>
            </h1>
            <h1 className="grid grid-cols-3 text-xs mt-1">
              <span className=" text-slate-400">Company Type</span>{" "}
              <span className=" col-span-2">Other</span>
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompanyStatus;
