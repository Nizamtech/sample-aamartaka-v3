import { useRouter } from "next/router";
import React from "react";
import CompanyDetails from "../../../components/Mobile/VisitedCompany/CompanyDetails/CompanyDetails";

const Companydetails = ({ isMobile }) => {
  const router = useRouter();
  const id = router.query.id;
  // console.log("companydetails", router.query.id);
  return (
    <div>
      {isMobile ? <CompanyDetails name={id} /> : <CompanyDetails name={id} />}
    </div>
  );
};

export default Companydetails;
