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
    <div className="flex items-center mx-2 p-4 bg-white rounded-lg border border-gray-200 shadow-md ">
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
              <Link href={item.link}>
                <a>
                  {" "}
                  <HomeCard title={item.title} icon={item.icon} />
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

export default HomeSlide;
