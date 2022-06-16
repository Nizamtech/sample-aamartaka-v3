import React from "react";
import Image from "next/image";
import Card2 from "./Card2";
import Mobile_LeadCard from "./Mobile_LeadCard";
import Table2 from "./Table2";
import data from "../../../../public/assets/data/data.json";
import BackMenu from "../../Shared/BackMenu";
const MobileLead = () => {
  return (
    <div className="bg-gray-200 ">
      {/* <Table2 /> */}
      {/* <Mobile_LeadCard /> */}
      <BackMenu title={"lead List"} />
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
    </div>
  );
};

export default MobileLead;
