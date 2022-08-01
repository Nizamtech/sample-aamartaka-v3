import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import ConvertedLeadCard from "./ConvertedLeadCard";

const Converted_Lad_Slide = () => {
  const data = [
    {
      title: "In Process",
      color: "#4DCCFF",
      icon: "https://i.ibb.co/QdPPdGN/icons8-statistic-64.png",
      link: "/lead",
      body: "23",
    },
    {
      title: "Send Query",
      color: "#5F67EC",
      icon: "https://i.ibb.co/8j1pHjn/icons8-signal-64.png",
      link: "/salesplans",
      body: "15",
    },
    {
      title: "Decline",
      color: "#EB5757",
      icon: "https://i.ibb.co/VB2X2xB/icons8-company-96.png",
      link: "/companystatus",
      body: "30",
    },
    {
      title: "Approved",
      color: "#36B37E",
      icon: "https://i.ibb.co/zHwnrsw/icons8-visit-80.png",
      link: "/visitedcompany",
      body: "40",
    },
  ];

  return (
    <div className="mx-2 px-2 pt-2 pb-1 mb-2 bg-white rounded-lg border border-gray-200 shadow-md bgShape">
      <h1 className="text-md font-bold mb-2">
        Others Bank
      </h1>
      <div className="grid grid-cols-4 gap-x-1 pb-3">
        {data.map((item, key) => (
          <>
            <Link href={"/"} key={key}>
              <a>
                <ConvertedLeadCard
                  title={item.title}
                  body={item.body}
                  color={item.color}
                />
              </a>
            </Link>
          </>
        ))}
      </div>
    </div>
  );
};

export default Converted_Lad_Slide;
