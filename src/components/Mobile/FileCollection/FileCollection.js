import React, { useState } from "react";
import BackMenu from "../../Shared/BackMenu";
import LeadListCard from "../../Shared/LeadListCard/LeadListCard";
import DeclineCard from "../SubmittedFiles/Decline/DeclineCard";
import data from "../../../../public/assets/data/data.json";
import Select from "react-select";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
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
      <div className="absolute bg-gray-200 w-full h-screen">
        <div className="myShadow bg-white my-2 rounded-lg p-2">
          <div>
            {data &&
              data.map((item) => {
                return (
                  <>
                    <div className="rounded-md mx-2 mt-2 mb-3 bg-white py-2 border border-gray-300 shadow">
                      <div className="mx-4 flex justify-between items-center">
                        <h1 className="text-md font-semibold font-monster px-2 rounded-md py-[2px]">
                          {"Product Type"}
                        </h1>
                        <div className="flex justify-between items-center">
                          <div className="mt-1 mx-2">
                            <Image
                              src="https://i.ibb.co/fpLJdg2/sms.png"
                              alt=""
                              width="27px"
                              height="27px"
                            />
                          </div>

                          <div className="mx-2">
                            <FontAwesomeIcon icon={faPhone} className="h-6 w-6 animate-bounce text-[#0EA5E9]" />
                          </div>
                        </div>
                        {/* <h1 className="  text-sm font-monster ">2,000,000</h1> */}
                      </div>
                      <hr className="border-dotted my-1 border-gray-700" />
                      <LeadListCard item={item} isStatus={false} />
                      <div className="mx-3 mb-2 mt-1">
                        <h5 className="text-md font-semibold">Address:</h5>
                        <p className="text-gray-600">
                          {item?.location},Mohakhali, banani, Dhaka,Bangladesh
                        </p>
                      </div>
                      <div className="mx-3 my-1 flex items-center">
                        <h1 className="text-md font-semibold">Time:</h1>
                        <h1 className="mx-4">{"10:00 AM - 12:00 PM"}</h1>
                      </div>
                      <div className="mx-3 my-1 flex items-center">
                        <h1 className="text-md font-semibold">Note:</h1>
                      </div>

                      <div className="mx-3 my-1">
                        <Select
                          required
                          name="profession"
                          onChange={setFileCollection}
                          options={fileCollectionData}
                          className="my-1"
                        />
                        <label className="text-md font-semibold mb-1 inline-block">Remarks</label> <br />
                        <textarea
                          className="w-full border p-2 focus:outline-[#2684FF] rounded-md"
                          type="text"
                          name=""
                          id=""
                          placeholder="Write Here"
                        />
                        <button className="bg-[#2684FF] py-2 text-white text-sm font-semibold font-monster rounded-md w-28 mt-1">
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
