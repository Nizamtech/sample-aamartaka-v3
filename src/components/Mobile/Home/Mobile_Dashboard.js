import React from "react";
import Link from "next/link";
import styles from "../../../styles/Dashboard.module.scss";
import Card from "./Card";
import dashboardIcon from "../../../images/document.png";
import { useRouter } from "next/router";
import Image from "next/image";
import MobileNavbar from "../../Shared/Navbar/MobileNavbar";
import HomeSlide from "./HomeSlide";
import Home_Header from "./Home_Header";
import Home_Footer from "./Home_Footer";
import SubmittedCard from "./SubmittedCard";
import SubmittedSlide from "./SubmittedSlide";
import Converted_Lad_Slide from "./Converted_Lad_Slide";
const Mobile_Dashboard = () => {
  const router = useRouter();
  return (
    <div>
      <MobileNavbar />

      <Home_Header />

      <HomeSlide />

      {/* file collection section  */}
      <div className="mx-2 bg-red-500 text-white font-bold  px-4 py-2 rounded-md  mt-2">
        <Link href={"/file_collection"}>
          <a className="flex justify-between">
            <h1>3 File Collection Pending</h1>
            <Image
              className="animate-pulse"
              src="https://i.ibb.co/kSHHB22/arrow-31-256.png"
              alt=""
              width="20px"
              height="5px"
            />
          </a>
        </Link>
      </div>

      {/* Submitted Files  */}
      <div className="my-2">
        <SubmittedSlide />
      </div>

      {/* Converted Lead Section  */}
      <div className=" z-50">
        <Converted_Lad_Slide />
      </div>
      <Home_Footer />
    </div>
  );
};

export default Mobile_Dashboard;
