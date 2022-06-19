import React from "react";
import BackMenu from "../../../Shared/BackMenu";
import SalesHistoryCard from "./SalesHistoryCard";

const SalesHistory = () => {
  return (
    <div className="bg-gray-100">
      <BackMenu title="Sales History" />
      <div className="mx-2 ">
        <SalesHistoryCard />
        <SalesHistoryCard />
      </div>
    </div>
  );
};

export default SalesHistory;
