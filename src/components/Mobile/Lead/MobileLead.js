import React from "react";
import Image from "next/image";
import Card2 from "./Card2";
import Mobile_LeadCard from "./Mobile_LeadCard";
import Table2 from "./Table2";
import data from "../../../../public/assets/data/data.json";
import BackMenu from "../../Shared/BackMenu";
import Pagination from "../../Shared/Pagination";
import Lead_leadt_header from "./Lead_leadt_header/Lead_leadt_header";
const MobileLead = () => {
  return (
    <div className="bg-gray-200  ">
      {/* <Table2 /> */}
      {/* <Mobile_LeadCard /> */}
      <BackMenu title={"lead List"} />
      <Lead_leadt_header />

      {data ? (
        data &&
        data.map((item) => {
          return (
            <>
              <Card2 item={item} />
            </>
          );
        })
      ) : (
        <h1 className="text-center text-gray-900 font-bold text-5xl">
          Loading...
        </h1>
      )}
      <div className=" flex justify-center items-center mx-auto">
        {" "}
        <Pagination />
      </div>
    </div>
  );
};

export default MobileLead;
