import React from "react";
import Link from "next/link";
import styles from "../../../styles/Dashboard.module.scss";
import DashboardCard from "./DashboardCard";
import dashboardIcon from "../../../images/document.png";
import { useRouter } from "next/router";
import Image from "next/image";
import MobileNavbar from "../../Shared/Navbar/MobileNavbar";
import HomeSlide from "./HomeSlide";
import Home_Header from "./Home_Header";
import Home_Footer from "./Home_Footer";
const Mobile_Dashboard = () => {
  const router = useRouter();
  return (
    <div>
      <MobileNavbar />

      {/* <div className="grid grid-cols-2 w-full bg-white   text-xl ">
        <button className=" text-white bg-sky-400 font-bold py-2 px-4  w-full border-r">
          ATTENDANCE
        </button>
      
        <button
          onClick={() => router.push("/states")}
          className="text-white bg-sky-400 font-bold py-2 px-4  w-full  border-l"
        >
          STATS
        </button>
      </div> */}

      <Home_Header />

      <HomeSlide />
      {/* <div className={` grid grid-cols-3 place-items-center p-4 gap-4 `}>
      
        <DashboardCard
          title="Sales Plans"
          color="#36B37E"
          icon={"https://i.ibb.co/8j1pHjn/icons8-signal-64.png"}
        />
        <DashboardCard
          title="Company Status"
          color="#5F67EC"
          icon={"https://i.ibb.co/VB2X2xB/icons8-company-96.png"}
        />
        <DashboardCard
          title="Visited Company "
          color="#4DCCFF"
          icon={"https://i.ibb.co/zHwnrsw/icons8-visit-80.png"}
        />
        <Link href={"/lead"}>
          <a>
            {" "}
            <DashboardCard
              title="Lead Section"
              color="#EB5757"
              icon={"https://i.ibb.co/QdPPdGN/icons8-statistic-64.png"}
            />
          </a>
        </Link>
      </div> */}
      {/* file collection section  */}
      <div className="bg-red-500 text-white font-bold  px-4 py-2 w-full flex justify-between mt-2">
        <h1>3 File Colection Pending</h1>
        <Image
          className="animate-pulse"
          src="https://i.ibb.co/kSHHB22/arrow-31-256.png"
          alt=""
          width="30px"
          height="20px"
        />
      </div>

      {/* Submitted Files  */}
      <div className="mt-2">
        <div className=" text-white bg-sky-400 font-bold  px-4 py-2 w-full flex justify-between">
          <h1>Submitted Files</h1>
        </div>

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
      </div>

      {/* Converted Lead Section  */}
      <div>
        <div className=" text-white bg-sky-400 font-bold  px-4 py-2 w-full flex justify-between">
          <h1>Converted Lead Section</h1>
        </div>
        <div className={` grid grid-cols-3 place-items-center p-4 gap-4 `}>
          <DashboardCard
            className="animate-spin"
            anm="animate-spin"
            title="In process"
            // body={40}
            color="#4DCCFF"
            icon={"https://i.ibb.co/fprmq67/icons8-process-improvement-80.png"}
          />
          <DashboardCard
            title="Decline"
            anm="animate-pulse"
            // body={70}
            color="#EB5757"
            icon={"https://i.ibb.co/x7jfTDk/icons8-rejected-64.png"}
          />
          <DashboardCard
            title="Disbursed"
            anm="animate-bounce"
            // body={20}
            color="#5F67EC"
            icon={" https://i.ibb.co/60wZzzR/icons8-bank-64.png"}
          />
        </div>
      </div>
      <Home_Footer />
    </div>
  );
};

export default Mobile_Dashboard;
