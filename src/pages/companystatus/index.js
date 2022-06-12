import CompanyStatus from "../../components/Mobile/CompanyStatus/CompanyStatus";

const index = ({ isMobile }) => {
  return (
    <div>
      <div>{isMobile ? <CompanyStatus /> : <CompanyStatus />}</div>;
    </div>
  );
};

export default index;
