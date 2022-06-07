import { useRouter } from "next/router";
import React from "react";
import data from "../../../../public/assets/data/data.json";
const Table2 = () => {
  const router = useRouter();

  return (
    <div className="w-full bg-white rounded-lg shadow-lg">
      <div className="block overflow-x-auto">
        <table className="w-full text-left rounded-lg">
          <thead>
            <tr className="bg-gray-700 text-gray-200  border-b-0">
              <th className="px-4 py-2 col-span-2">Name</th>
              <th className="px-4 py-2">Profession</th>
              <th className="px-4 py-2">Salary</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item) => {
                return (
                  <>
                    <tr
                      onClick={() => router.push(`/lead/${item.id}`)}
                      className="w-full bg-gray-600 text-gray-200 font-light whitespace-no-wrap border border-b-0"
                    >
                      <td className="px-4 py-1">{item.name}</td>
                      <td className="px-4 py-1">{item.profession}</td>
                      <td className="px-4 py-1">{item.salary}</td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table2;
