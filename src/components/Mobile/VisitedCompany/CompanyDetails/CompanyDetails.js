import Image from "next/image";
import React, { useState } from "react";
import BackMenu from "../../../Shared/BackMenu";

import Select from "react-select";
const CompanyDetails = ({ name }) => {
  const [selectedOption, setSelectedOption] = useState({
    name: "",
    phone: "",
  });
  const [salariedBank, setSalariedBank] = useState(null);
  const [salaryRange, setSalaryRange] = useState(null);
  const [employee, setEmployee] = useState(null);
  const [img, setImg] = useState(null);
  const [companyImage, setCompanyImage] = useState([]);

  console.log(companyImage);

  const employeeData = [
    { value: "1-30", label: "1-30" },
    { value: "31-50", label: "31-50" },
    { value: "51-100", label: "51-100" },
    { value: "101-200", label: "101-200" },
    { value: "201-500", label: "201-500" },
    { value: "501-1000", label: "501-1000" },
    { value: "1001-2000", label: "1001-2000" },
    { value: "2001-5000", label: "2001-5000" },
    { value: "5001-10000", label: "5001-10000" },
    { value: "10000+", label: "10000+" },
  ];
  const salaryRangeData = [
    { value: "1-30", label: "1-30" },
    { value: "31-50", label: "31-50" },
    { value: "51-100", label: "51-100" },
    { value: "101-200", label: "101-200" },
    { value: "201-500", label: "201-500" },
    { value: "501-1000", label: "501-1000" },
    { value: "1001-2000", label: "1001-2000" },
    { value: "2001-5000", label: "2001-5000" },
    { value: "5001-10000", label: "5001-10000" },
    { value: "10000+", label: "10000+" },
  ];

  const bankData = [
    { value: "Agrani Bank Limited", label: "Agrani Bank Limited" },
    { value: "Janata Bank Limited", label: "Janata Bank Limited" },
    { value: "City Bank Limited", label: "City Bank Limited" },
    { value: "Dutch-Bangla Bank Limited", label: "Dutch-Bangla Bank Limited" },
    { value: "Jamuna Bank Limited", label: "Jamuna Bank Limited" },
    { value: "Mercantile Bank Limited", label: "Mercantile Bank Limited" },
  ];

  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newData = { ...selectedOption };
    newData[field] = value;

    setSelectedOption(newData);
  };

  const handleSunmit = (e) => {
    e.predentDefault();
    console.log("submit");
  };

  const handeImage = (e) => {
    var file = e.target.files[0];
    setImg(URL.createObjectURL(file));
  };

  const handeCompanyImage = (e) => {
    var file = e.target.files[0];
    setCompanyImage([...companyImage, URL.createObjectURL(file)]);
  };

  return (
    <div>
      <BackMenu title={name} />

      <div className="absolute bg-gray-200 w-full h-screen">
        <div className="myShadow rounded-lg mx-2 my-2 bg-white grid grid-cols-12 gap-2 p-2">
          {/* <h1 className="bg-[#4DCBBF] py-2 text-lg text-center ">{id}</h1>
          <h1>{id}</h1>
          <h1>{id}</h1> */}
          <div className=" col-span-4 ">
            <h1>Name</h1>
            <h1>Type</h1>
            <h1>Category</h1>
            <h1>Establishment</h1>
          </div>
          <div className=" col-span-8 ">
            <h1>{name}</h1>
            <h1>financial </h1>
            <h1>A</h1>
            <h1>23 years</h1>
          </div>
        </div>

        {/* Salaried Bank  */}
        <div className="myShadow rounded-lg mx-2 my-2 bg-white p-2">
          <label> Salaried Bank</label>
          <Select
            requred
            defaultValue={salariedBank}
            onChange={setSalariedBank}
            closeMenuOnSelect={false}
            isMulti
            name="salaried Bank"
            options={bankData}
            className="basic-multi-select font-exo my-2"
            placeholder="Select At least One"
            classNamePrefix="select "
          />
        </div>

        {/*Company Imgage uploaded files  */}
        <div className="myShadow rounded-lg mx-2 my-2 bg-white p-2">
          <h1 className=" text-lg font-monster mt-1 mb-2 ">Company Images</h1>

          <div className=" grid grid-cols-3 gap-3 place-content-center place-items-center">
            {companyImage.map((img, index) => {
              return (
                <>
                  <div className=" w-24 h-20 p-[2px] border-dashed border border-gray-400 rounded-lg">
                    <img
                      className="rounded-lg w-full h-full"
                      src={img}
                      alt={name}
                    />
                  </div>
                </>
              );
            })}
            <div className="flex w-[50px] h-[50px] items-center justify-cente">
              <label className=" w-full ">
                <Image
                  width={50}
                  height={50}
                  className="rounded-lg"
                  src={"https://i.ibb.co/cX0kwXS/icons8-plus-100.png"}
                  alt={name}
                />

                <input
                  onChange={handeCompanyImage}
                  type="file"
                  className="hidden"
                />
              </label>
            </div>
          </div>
        </div>

        {/* Employee Range */}
        <div className="myShadow rounded-lg mx-2 my-2 bg-white p-2">
          <label> Employee </label>
          <Select
            required
            name="Employee Number"
            onChange={setEmployee}
            options={employeeData}
            className="my-2"
          />
        </div>
        {/* Salary Range */}
        <div className="myShadow rounded-lg mx-2 my-2 bg-white p-2 font-monster">
          <h1 className=" font-monster font-bold mb-3">Salary Range </h1>

          <label>Bellow 20,000 </label>
          <Select
            required
            name="Salary Range"
            onChange={setSalaryRange}
            options={salaryRangeData}
            className="my-2"
          />

          <label>Between 20,000 to 35,000 </label>
          <Select
            required
            name="Salary Range"
            onChange={setSalaryRange}
            options={salaryRangeData}
            className="my-2"
          />
          <label>Above 35,000 </label>
          <Select
            required
            name="Salary Range"
            onChange={setSalaryRange}
            options={salaryRangeData}
            className="my-2"
          />
        </div>

        {/* HR  */}

        <div>
          <div className="myShadow rounded-lg mx-2 my-2 bg-white p-2">
            <h1 className=" font-monster font-bold mb-3">HR Details</h1>
            <div>
              <form onSubmit={handleSunmit}>
                {/* <label> Name</label> */}
                <input
                  required
                  type="text"
                  name="name"
                  onChange={handleChange}
                  placeholder="Name"
                  className="my-2 focus:outline-[#2684FF] focus:duration-400 font-exo w-full h-8 border py-4 px-3 rounded-[3px] border-[#CCCCCC] "
                />

                {/* <label> Phone</label> */}
                <input
                  required
                  type="text"
                  name="phone"
                  onInput={`() if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength)`}
                  maxLength="11"
                  // max={9999999999}
                  // min={1000000000}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="my-2 focus:outline-[#2684FF] focus:duration-400 font-exo w-full h-8 border py-4 px-3 rounded-[3px] border-[#CCCCCC] "
                />

                <input
                  required
                  type="text"
                  name="email"
                  onChange={handleChange}
                  placeholder="Email"
                  className="my-2 focus:outline-[#2684FF] focus:duration-400 font-exo w-full h-8 border py-4 px-3 rounded-[3px] border-[#CCCCCC] "
                />

                <div className="flex w-full items-center justify-cente">
                  <label className=" w-full flex flex-col items-center px-4 py-2 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
                    {img ? (
                      <img
                        width="300px"
                        height="200px"
                        src={img}
                        alt=""
                        className="my-3 rounded-lg"
                      />
                    ) : (
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                      </svg>
                    )}

                    {!img ? (
                      <span className="mt-2 text-base leading-normal">
                        Select a Visiting Card
                      </span>
                    ) : null}
                    <input
                      onChange={handeImage}
                      type="file"
                      className="hidden"
                    />
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
