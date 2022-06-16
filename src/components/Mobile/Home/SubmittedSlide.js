import React from "react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import SubmittedCard from "./SubmittedCard";
const SubmittedSlide = () => {
  const data = [
    {
      title: "In Process",
      color: "#FB9259",
      icon: "https://i.ibb.co/QdPPdGN/icons8-statistic-64.png",
      link: "/lead",
      body: "23",
    },
    {
      title: "Send Query",
      color: "#36B37E",
      icon: "https://i.ibb.co/8j1pHjn/icons8-signal-64.png",
      link: "/salesplans",
      body: "15",
    },
    {
      title: "Decline",
      color: "#5F67EC",
      icon: "https://i.ibb.co/VB2X2xB/icons8-company-96.png",
      link: "/companystatus",
      body: "30",
    },
    {
      title: "Approved",
      color: "#4DCCFF",
      icon: "https://i.ibb.co/zHwnrsw/icons8-visit-80.png",
      link: "/visitedcompany",
      body: "40",
    },
  ];
  return (
    <div className=" mx-2 p-4 bg-white rounded-lg border border-gray-200 shadow-md ">
      <h1 className=" text-md font-bold font-exo text-cyan-500  ">
        Submitted Files
      </h1>
      <Swiper
        loop={true}
        grabCursor={true}
        slidesPerView={3.6}
        spaceBetween={15}
        // breakpoints={{
        //   300: {
        //     slidesPerView: 4,
        //   },
        //   550: {
        //     slidesPerView: 4,
        //   },
        //   900: {
        //     slidesPerView: 3,
        //   },
        //   1020: {
        //     slidesPerView: 4,
        //   },
        // }}
        className="mySwiper"
      >
        {data.map((item, key) => (
          <>
            <SwiperSlide key={key}>
              <Link href={"/"}>
                <a>
                  {" "}
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