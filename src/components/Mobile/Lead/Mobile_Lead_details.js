import React from "react";
import { useEffect, useState } from "react";
import data from "../../../../public/assets/data/data.json";
import Image from "next/image";
import ListCard from "./ListCard";
const Mobile_Lead_details = ({ id }) => {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const result = data.find((item) => item.id == id);
    setUserData(result);
  }, [id]);
  console.log(userData);
  return (
    <>
      {userData ? (
        <ListCard data={userData} />
      ) : (
        <h1 className="text-center text-gray-900 font-bold text-5xl">
          Loading...
        </h1>
      )}
    </>
  );
};

export async function getServerSideProps(context) {
  console.log("context", context, id);
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default Mobile_Lead_details;
