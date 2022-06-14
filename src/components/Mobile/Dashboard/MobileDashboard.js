import React from "react";
import BackMenu from "../../Shared/BackMenu";
import Pie_Chart from "./Chart/Pie_Chart";
import Submission_Chart from "./Chart/Submission_Chart";
import Converted_Lead_Card from "./Converted_Lead_Card";
import Document_Card from "./Document_Card";
import Document_Issue_Card from "./Document_Issue_Card";
import Extra_Document_Card from "./Extra_Document_Card";
import Lead_Card from "./Lead_Card";
import Submitted_File_Card from "./Submitted_File_Card";

const MobileDashboard = () => {
  return (
    <div className=" h-screen overflow-scroll">
      <BackMenu title="Dashboard" />
      <div className="my-4 h-44 mx-2  ">
        <Submission_Chart />
      </div>
      <div className="my-4 h-44 mx-2  ">
        <Pie_Chart />
      </div>
      <div className="my-2 mx-2">
        <Document_Card />
      </div>
      <div className="my-4 mx-2">
        <Lead_Card />
      </div>
      <div className="my-4 mx-2">
        <Submitted_File_Card />
      </div>
      <div className="my-4 mx-2">
        <Document_Issue_Card />
      </div>
      <div className="my-4 mx-2">
        <Extra_Document_Card />
      </div>
      <div className="my-4 mx-2">
        <Converted_Lead_Card />
      </div>
    </div>
  );
};

export default MobileDashboard;
