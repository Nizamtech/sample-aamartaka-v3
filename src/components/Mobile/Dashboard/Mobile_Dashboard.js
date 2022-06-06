import React from "react";
import Link from "next/link";
import styles from "../../../styles/Dashboard.module.scss";
import DashboardCard from "./DashboardCard";
import dashboardIcon from "../../../images/document.png";
const Mobile_Dashboard = () => {
  console.log("dashboardIcon", dashboardIcon);
  return (
    <div>
      <div className="flex justify-evenly w-full bg-white border-t-2  text-xl ">
        <button className="  text-sky-500 font-bold py-2 px-4 rounded-l ">
          ATTENDANCE
        </button>
        <span className="border-2"></span>
        <button className="  text-sky-500 font-bold py-2 px-4 rounded-r">
          STATES
        </button>
      </div>
      <div className={` grid grid-cols-3 place-items-center p-4 gap-4 `}>
        <DashboardCard
          title="Dashboard"
          color="#FB9259"
          icon={"https://i.ibb.co/sqGNsWz/dashboard.png"}
        />
        <DashboardCard
          title="Sales Status"
          color="#36B37E"
          icon={"https://i.ibb.co/8j1pHjn/icons8-signal-64.png"}
        />
        <DashboardCard
          title="Company Status"
          color="#5F67EC"
          icon={"https://i.ibb.co/VB2X2xB/icons8-company-96.png"}
        />
        <DashboardCard
          title="Company Visited"
          color="#4DCCFF"
          icon={"https://i.ibb.co/zHwnrsw/icons8-visit-80.png"}
        />
        <DashboardCard
          title="Lead Section"
          color="#EB5757"
          icon={"https://i.ibb.co/QdPPdGN/icons8-statistic-64.png"}
        />
        <DashboardCard
          title="Dashboard"
          color="#939CA0"
          icon={"https://i.ibb.co/sqGNsWz/dashboard.png"}
        />
      </div>
      {/* file collection section  */}
      <div className="bg-red-500 text-white font-bold  px-4 py-2 w-full flex justify-between">
        <h1>3 File Colection Pending</h1>
        <img
          src="https://i.ibb.co/MC53tdP/arrow-right.png"
          alt=""
          width="30px"
          height="20px"
        />
      </div>

      {/* 
      https://i.ibb.co/60wZzzR/icons8-bank-64.png
https://i.ibb.co/x7jfTDk/icons8-rejected-64.png
https://i.ibb.co/fprmq67/icons8-process-improvement-80.png */}
      <div className={` grid grid-cols-3 place-items-center p-4 gap-4 `}>
        <DashboardCard
          title="In process"
          body={40}
          color="#4DCCFF"
          // icon={"https://i.ibb.co/fprmq67/icons8-process-improvement-80.png"}
        />
        <DashboardCard
          title="Rejected"
          body={70}
          color="#EB5757"
          // icon={"https://i.ibb.co/x7jfTDk/icons8-rejected-64.png"}
        />
        <DashboardCard
          title="Others Bank"
          body={20}
          color="#5F67EC"
          // icon={" https://i.ibb.co/60wZzzR/icons8-bank-64.png"}
        />
      </div>

      {/* Converted Lead Section  */}
      <div>
        <div className=" text-white bg-sky-400 font-bold  px-4 py-2 w-full flex justify-between">
          <h1>Converted Lead Section</h1>
        </div>
        <div className={` grid grid-cols-3 place-items-center p-4 gap-4 `}>
          <DashboardCard
            title="In process"
            // body={40}
            color="#4DCCFF"
            icon={"https://i.ibb.co/fprmq67/icons8-process-improvement-80.png"}
          />
          <DashboardCard
            title="Decline"
            // body={70}
            color="#EB5757"
            icon={"https://i.ibb.co/x7jfTDk/icons8-rejected-64.png"}
          />
          <DashboardCard
            title="Disbursed"
            // body={20}
            color="#5F67EC"
            icon={" https://i.ibb.co/60wZzzR/icons8-bank-64.png"}
          />
        </div>
      </div>
    </div>
  );
};

export default Mobile_Dashboard;
