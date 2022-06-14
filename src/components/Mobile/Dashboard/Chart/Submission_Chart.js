import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Submission_Chart = () => {
  const data = [
    {
      name: "06-14-2022",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "07-14-2022",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "08-14-2022",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "09-14-2022",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "10-14-2022",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "11-14-2022",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "12-14-2022",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div className="myShadow2 w-full h-full my-3 py-2">
      <h1 className="text-center text-sm">Submission</h1>
      <hr className=" border-dotted my-1" />
      <ResponsiveContainer
        width="100%"
        className=" text-[8px] font-exo  ml-[-20px]"
      >
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Submission_Chart;
