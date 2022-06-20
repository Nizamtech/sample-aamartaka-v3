import Link from "next/link";
import React, { useState } from "react";
import VisitedCompanyModal from "./VisitedCompanyModal";

const Visited_Company_card = () => {
  const [showModal, setShowModal] = useState(false);
  const [companyName, setCompanyName] = useState("");
  console.log(showModal);
  const companyNameData = [
    {
      name: "Amin Fashion",
      bank: "City Bank",
      categoryType: "Listed Company (Categorize)",
      category: "Listed Company (Categorize)",
      categoryName: "A",
      companyType: "Fashion",
    },
    {
      name: "Bonolota Ceramic",
      bank: "City Bank",
      categoryType: "Listed Company (Categorize)",
      category: "Listed Company (Categorize)",
      categoryName: "A",
      companyType: "Ceramic",
    },
    {
      name: "Lanka BAngla",
      bank: "Grameen Bank",
      categoryType: "Listed Company (Categorize)",
      category: "Listed Company (Categorize)",
      categoryName: "A",
      companyType: "Telecommunication",
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
  ];

  return (
    <div className=" bg-white myShadow2  rounded-md pb-3 mb-4  ">
      <VisitedCompanyModal
        showModal={showModal}
        setShowModal={setShowModal}
        companyName={companyName}
      />
      <div>
        <h1 className="p-2 bg-[#4DCBBF] text-center font-roboto font-bold text-white">
          {"12/6/2022"}
        </h1>
        <hr className=" border-dotted mb-2" />
      </div>
      <div className="text-center m-4">
        {companyNameData &&
          companyNameData.map((item, index) => {
            return (
              <>
                <div
                  onClick={() => {
                    setShowModal(true), setCompanyName(item.name);
                  }}
                  className=" my-2 myShadow2 text-md p-2 bg-white rounded-md"
                >
                  {item.name}
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default Visited_Company_card;
