import React from "react";
import Link from "next/link";
import styles from "../../../styles/Dashboard.module.scss";
import DashboardCard from "./DashboardCard";
import dashboardIcon from "../../../images/document.png";
const Mobile_Dashboard = () => {
  console.log("dashboardIcon", dashboardIcon);
  return (
    <div className={` grid grid-cols-3 place-items-center p-4 gap-4 `}>
      <DashboardCard
        title="Dashboard"
        body={120}
        color="#FB9259"
        icon={"https://i.ibb.co/sqGNsWz/dashboard.png"}
      />
      <DashboardCard
        title="Sales Status"
        body={120}
        color="#36B37E"
        icon={"https://i.ibb.co/8j1pHjn/icons8-signal-64.png"}
      />
      <DashboardCard
        title="Company Status"
        body={120}
        color="#5F67EC"
        icon={"https://i.ibb.co/VB2X2xB/icons8-company-96.png"}
      />
      <DashboardCard
        title="Company Visited"
        body={120}
        color="#4DCCFF"
        icon={"https://i.ibb.co/zHwnrsw/icons8-visit-80.png"}
      />
      <DashboardCard
        title="Dashboard"
        body={120}
        color="#EB5757"
        icon={"https://i.ibb.co/sqGNsWz/dashboard.png"}
      />
      <DashboardCard
        title="Dashboard"
        body={120}
        color="#939CA0"
        icon={"https://i.ibb.co/sqGNsWz/dashboard.png"}
      />
    </div>
  );
};

export default Mobile_Dashboard;
