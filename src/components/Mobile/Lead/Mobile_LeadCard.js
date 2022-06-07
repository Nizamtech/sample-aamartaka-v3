import React from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";

const Mobile_LeadCard = () => {
  return (
    <div>
      <Card1 />
      <Card1 />

      <div className="my-10">
        <Card2 />
        <Card2 />
      </div>
    </div>
  );
};

export default Mobile_LeadCard;
