import React from "react";

const DashboardTable = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Lead
            </th>
            <th scope="col" className="px-6 py-3">
              50
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
            >
              In Process
            </th>
            <td className="px-6 py-4">20</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
            >
              Reject
            </th>
            <td className="px-6 py-4">30</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
            >
              Others Bank
            </th>
            <td className="px-6 py-4">20</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
            >
              Document Collection
            </th>
            <td className="px-6 py-4">20</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
            >
              Total Lead
            </th>
            <td className="px-6 py-4">20</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
            >
              Received Lead
            </th>
            <td className="px-6 py-4">20</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DashboardTable;
