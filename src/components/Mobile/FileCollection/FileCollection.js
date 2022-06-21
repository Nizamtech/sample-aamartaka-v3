import React, { useState } from "react";
import BackMenu from "../../Shared/BackMenu";
import LeadListCard from "../../Shared/LeadListCard/LeadListCard";
import DeclineCard from "../SubmittedFiles/Decline/DeclineCard";
import data from "../../../../public/assets/data/data.json";
import Select from "react-select";
const FileCollection = () => {
  const [fileCollection, setFileCollection] = useState(null);
  const fileCollectionData = [
    { value: "Full Collected", label: "Full Collected" },
    { value: "Partial Collected", label: "Partial Collected" },
    { value: "Phone Not Received", label: "Phone Not Received" },
    { value: "Rejected", label: "Rejected" },
    { value: "Re-Schedule", label: "Re-Schedule" },
  ];
  console.log(fileCollection);
  return (
    <div>
      <BackMenu title="File Collection" />
      <div className="  absolute bg-gray-200 w-full h-screen">
        <div className="myShadow bg-white my-2 rounded-lg p-2">
          <div>
            {data &&
              data.map((item) => {
                return (
                  <>
                    <div className="rounded-md m-2 bg-white myShadow py-2">
                      <div className="mx-4 flex justify-between items-center">
                        <h1 className="  text-sm font-monster bg-sky-500 px-2 text-white rounded-md py-[2px]">
                          {"productType"}
                        </h1>

                        {/* <h1 className="  text-sm font-monster ">2,000,000</h1> */}
                      </div>
                      <hr className=" border-dotted  my-1 border-gray-400" />
                      <LeadListCard item={item} isStatus={false} />
                      <div className=" mx-4 my-2">
                        <h1 className="text-[15px] font-bold ">Address:</h1>
                        <h1>
                          {item?.location}Mohakhali, banani, Dhaka,Bangladesh
                        </h1>
                      </div>
                      <div className=" mx-4 my-2 flex  items-center">
                        <h1 className="text-[15px] font-bold ">Time:</h1>
                        <h1 className="mx-4">{"10:00 AM - 12:00 PM"}</h1>
                      </div>
                      <div className=" mx-4 my-2 flex  items-center">
                        <h1 className="text-[15px] font-bold ">Note:</h1>
                      </div>

                      <div className="mx-2">
                        {/* <label> Select One</label> */}
                        <Select
                          required
                          name="profession"
                          onChange={setFileCollection}
                          options={fileCollectionData}
                          className="my-2"
                        />
                        <label> Remarks</label> <br />
                        <textarea
                          className="w-full border p-2"
                          type="text"
                          name=""
                          id=""
                          placeholder="Write here"
                        />
                        <button className=" w-full bg-green-500 p-2 text-white text-lg font-monster">
                          SAVE
                        </button>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileCollection;
