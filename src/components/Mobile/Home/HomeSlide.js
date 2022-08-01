import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import HomeCard from "./HomeCard";

SwiperCore.use([Autoplay, Pagination]);

const HomeSlide = () => {
  const data = [
    {
      title: "Lead Section",
      color: "#FB9259",
      icon: "https://i.ibb.co/QdPPdGN/icons8-statistic-64.png",
      link: "/lead",
    },
    {
      title: "Sales Plans",
      color: "#36B37E",
      icon: "https://i.ibb.co/8j1pHjn/icons8-signal-64.png",
      link: "/salesplans",
    },
    {
      title: "Company Status",
      color: "#5F67EC",
      icon: "https://i.ibb.co/VB2X2xB/icons8-company-96.png",
      link: "/companystatus",
    },
    {
      title: "Visited Company",
      color: "#4DCCFF",
      icon: "https://i.ibb.co/zHwnrsw/icons8-visit-80.png",
      link: "/visitedcompany",
    },
    {
      title: "Learnig Section",
      color: "#4DCCFF",
      icon: "https://i.ibb.co/bHvMPpL/icons8-digital-learning-66.png",
      link: "/",
    },
    {
      title: "New Policy",
      color: "#4DCCFF",
      icon: "https://i.ibb.co/WDRTzYw/icons8-privacy-policy-64.png",
      link: "/",
    },
  ];

  return (
    <div className="grid grid-cols-3 place-items-center place-content-center p-4 rounded-lg shadow-lg mt-8 gap-y-2 bgShape">
      {data.map((item, key) => (
        <>
          <div key={key}>
            <Link href={item.link}>
              <a>
                {" "}
                <HomeCard title={item.title} icon={item.icon} />
              </a>
            </Link>
          </div>
        </>
      ))}
    </div>
  );
};

export default HomeSlide;
