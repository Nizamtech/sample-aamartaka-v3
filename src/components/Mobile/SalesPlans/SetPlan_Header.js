import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import Select from "react-select";
import { useState } from "react";
const SetPlan_Header = () => {
  const [status, setStatus] = useState(null);

  const router = useRouter();

  const statusData = [
    { label: "In Process", value: "in process" },
    { label: "Rejected", value: "rejected" },
    { label: "Other Bank", value: "other Bank" },
    { label: "Document Collection", value: "document collection" },
  ];
  return (
    <div>
      <label> Status</label>
      <Select
        defaultValue={"in process"}
        required
        name="Status"
        onChange={setStatus}
        options={statusData}
        className="my-2"
      />

      <label className="mt-2"> Product Type</label>
      <Select
        defaultValue={"in process"}
        required
        name="Status"
        onChange={setStatus}
        options={statusData}
        className="my-2"
      />
    </div>
  );
};

export default SetPlan_Header;
