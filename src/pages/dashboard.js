import React from "react";
import { Calendar, DateRangePicker, DateRange } from "react-date-range";
import { useState } from "react";
import Mobile_Dashboard from "../components/Mobile/Dashboard/Mobile_Dashboard";
import DashboardDeskTop from "../components/Desktop/Dashboard/Dashboard";
const Dashboard = ({ isMobile }) => {
  return (
    <div className="mx-auto bg-slate-200 h-screen">
      {isMobile ? <Mobile_Dashboard /> : <Mobile_Dashboard />}
    </div>
  );
};

export default Dashboard;
