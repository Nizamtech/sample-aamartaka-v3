import { useRouter } from "next/router";
import React from "react";
import CompanyDetails from "../../../components/Mobile/VisitedCompany/CompanyDetails/CompanyDetails";

const Companydetails = ({ isMobile }) => {
  const router = useRouter();
  const id = router.query.id;
  // console.log("companydetails", router.query.id);
  return (
    <div>
      {isMobile ? <CompanyDetails id={id} /> : <CompanyDetails id={id} />}
    </div>
  );
};

export default Companydetails;
