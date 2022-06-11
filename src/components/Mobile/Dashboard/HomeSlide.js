import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import DashboardCard from "./DashboardCard";
import Link from "next/link";
import Image from "next/image";

SwiperCore.use([Autoplay, Pagination]);

const HomeSlide = () => {
  const data = [
    {
      title: "Lead",
      color: "#FB9259",
      icon: "https://i.ibb.co/sqGNsWz/dashboard.png",
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
  ];

  return (
    <div className=" mx-2 p-2 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <Swiper
        loop={true}
        grabCursor={true}
        slidesPerView={3}
        spaceBetween={5}
        breakpoints={{
          300: {
            slidesPerView: 3,
          },
          550: {
            slidesPerView: 3,
          },
          900: {
            slidesPerView: 3,
          },
          1020: {
            slidesPerView: 4,
          },
        }}
        className="mySwiper"
      >
        {data.map((item, key) => (
          <>
            <SwiperSlide key={key}>
              <DashboardCard
                title={item.title}
                color={item.color}
                icon={item.icon}
              />
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSlide;
