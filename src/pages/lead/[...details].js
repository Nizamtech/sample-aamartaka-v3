import { useRouter } from "next/router";
import React from "react";
import Router from "next/router";
import Mobile_Lead_details from "../../components/Mobile/Lead/Mobile_Lead_details";
const Details = ({ isMobile }) => {
  const router = useRouter();
  const details = router.query.details;
  return (
    <div>
      <div>
        {isMobile ? (
          <Mobile_Lead_details id={details} />
        ) : (
          <Mobile_Lead_details id={details} />
        )}
      </div>
      ;
    </div>
  );
};

export default Details;
