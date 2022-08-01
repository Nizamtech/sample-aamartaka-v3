import React from "react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import SubmittedCard from "./SubmittedCard";
const SubmittedSlide = () => {
  const data = [
    {
      title: "In Progress",
      color: "#4DCCFF",
      icon: "https://i.ibb.co/QdPPdGN/icons8-statistic-64.png",
      link: "/submittedfiles/inprogress",
      body: "23",
    },
    {
      title: "Send Query",
      color: "#5F67EC",
      icon: "https://i.ibb.co/8j1pHjn/icons8-signal-64.png",
      link: "/submittedfiles/sendquery",
      body: "15",
    },
    {
      title: "Decline",
      color: "#EB5757",
      icon: "https://i.ibb.co/VB2X2xB/icons8-company-96.png",
      link: "/submittedfiles/decline",
      body: "30",
    },
    {
      title: "Approved",
      color: "#36B37E",
      icon: "https://i.ibb.co/zHwnrsw/icons8-visit-80.png",
      link: "/submittedfiles/approved",
      body: "40",
    },
  ];
  return (
    <div className=" mx-2 p-2 py-2 bg-white rounded-lg border border-gray-200 shadow-md ">
      <h1 className=" text-md font-bold font-monster text-black mb-1  ">
        Submitted Files
      </h1>
      <Swiper
        loop={true}
        grabCursor={true}
        slidesPerView={3.333}
        spaceBetween={15}
        className="mySwiper"
      >
        {data.map((item, key) => (
          <>
            <SwiperSlide key={key}>
              <Link href={item.link}>
                <a>
                  <SubmittedCard
                    title={item.title}
                    body={item.body}
                    color={item.color}
                  />
                </a>
              </Link>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
      {/* <Image
    width="50px"
    height="50px"
    src={"https://i.ibb.co/Ht67F5q/arrow-37-64.png"}
    alt="Arrow"
  /> */}
    </div>
  );
};

export default SubmittedSlide;
