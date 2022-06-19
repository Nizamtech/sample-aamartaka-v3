import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import Select from "react-select";
import { useState } from "react";
const SetPlan_Header = ({ status, setStatus, visit, setVisit }) => {
  //   const [status, setStatus] = useState(null);
  //   const [visit, setVisit] = useState(null);

  const router = useRouter();

  const statusData = [
    { label: 1, value: 1 },
    { label: 2, value: 2 },
    { label: 3, value: 3 },
    { label: 4, value: 4 },
    { label: 5, value: 5 },
    { label: 6, value: 6 },
    { label: 7, value: 7 },
    { label: 8, value: 8 },
    { label: 9, value: 9 },
  ];
  console.log("visit", visit);
  return (
    <div>
      <label>Tomorrow submit plan</label>
      <Select
        defaultValue={"in process"}
        required
        name="Status"
        onChange={setStatus}
        options={statusData}
        className="my-2"
      />

      <label className="mt-2">Tomorrow company visit plan</label>
      <Select
        defaultValue={"in process"}
        required
        name="Status"
        onChange={(item) => setVisit(item.value)}
        options={statusData}
        className="my-2"
      />
    </div>
  );
};

export default SetPlan_Header;
