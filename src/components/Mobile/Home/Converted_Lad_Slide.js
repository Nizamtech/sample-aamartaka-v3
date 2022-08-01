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
    <div className="mx-2 p-2 py-2 bg-white">
      <h1 className="text-md font-bold font-exo mb-2">
        Others Bank
      </h1>
      <div className="bg-white rounded-lg shadow-md pb-2">
        <div className="grid grid-cols-4 mx-auto text-center place-items-center place-content-center gap-x-4">
          {data.map((item, key) => (
            <>
              <div key={key} className="w-full">
                <p className={`border py-3 mb-1 rounded-lg bg-sky-400 text-white text-2xl font-bold`}>{item?.body}</p>
                <p className="text-sm font-semibold">{item?.title}</p>
              </div>
            </>
          ))}
        </div>
      </div>
      {/* <Swiper
        loop={true}
        grabCursor={true}
        slidesPerView={3.333}
        spaceBetween={15}
        className="mySwiper"
      >
        {data.map((item, key) => (
          <>
            <SwiperSlide key={key}>
              <Link href={"/"}>
                <a>
                  <ConvertedLeadCard
                    title={item.title}
                    body={item.body}
                    color={item.color}
                  />
                </a>
              </Link>
            </SwiperSlide>
          </>
        ))}
      </Swiper> */}
    </div>
  );
};

export default Converted_Lad_Slide;
