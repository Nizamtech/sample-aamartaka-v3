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
    console.log(result);
  }, [id]);
  console.log(userData);
  console.log(data);

  return <>{userData ? <ListCard data={userData} /> : <h1>Loading...</h1>}</>;
};

export async function getServerSideProps(context) {
  console.log(context.req);
  const data = data.find((item) => item.id == 3);
  console.log("context", context, id, data);
  return {
    props: { data },
  };
}

export default Mobile_Lead_details;
