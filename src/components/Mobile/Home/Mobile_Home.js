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
import Mobile_Footer from "../../Shared/Mobile_Footer/Mobile_Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import Mobile_Bannar from "./Mobile_Bannar";
const Mobile_Home = () => {
  const router = useRouter();
  return (
    <div>
      <MobileNavbar />

      {/* <Home_Header /> */}
      <Mobile_Bannar />

      <HomeSlide />

      {/* file collection section  */}
      <div className="mx-2 bg-[#0AB9F2] text-white font-bold  px-4 py-2 rounded-md  mt-2">
        <Link href={"/file_collection"}>
          <a className="flex justify-between">
            <h1 className="tracking-wider font-semibold">3 File Collection Pending</h1>
            <FontAwesomeIcon icon={faAngleDoubleRight} className="w-6 h-6 animate-pulse" />
          </a>
        </Link>
      </div>

      {/* Submitted Files  */}
      <div className="my-2">
        <SubmittedSlide />
      </div>

      {/* Converted Lead Section  */}

      <Converted_Lad_Slide />

      <Home_Footer />
    </div>
  );
};

export default Mobile_Home;
