import { useRouter } from "next/router";
import React from "react";
import CompanyDetails from "../../../components/Mobile/VisitedCompany/CompanyDetails/CompanyDetails";
import CustomersDetails from "../../../components/Mobile/VisitedCompany/CustomersDetails/CustomersDetails";
import VisitDetails from "../../../components/Mobile/VisitedCompany/VisitDetails/VisitDetails";

const Companydetails = ({ isMobile }) => {
  const router = useRouter();
  const id = router.query.id;
  // console.log("companydetails", router.query.id);
  return (
    <div>
      {isMobile ? <VisitDetails name={id} /> : <VisitDetails name={id} />}
    </div>
  );
};

export default Companydetails;
