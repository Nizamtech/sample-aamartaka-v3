import React from "react";

const Table2 = () => {
  return (
    <div className="w-full bg-white rounded-lg shadow-lg">
      <div className="block overflow-x-auto">
        <table className="w-full text-left rounded-lg">
          <thead>
            <tr className="bg-gray-700 text-gray-200 border border-b-0">
              <th className="px-4 py-3 col-span-2">Lead</th>
              <th className="px-4 py-3">20</th>
            </tr>
          </thead>
          <tbody>
            <tr className="w-full bg-gray-600 text-gray-200 font-light whitespace-no-wrap border border-b-0">
              <td className="px-4 py-4">In Process</td>

              <td className="px-4 py-4">05</td>
            </tr>
            <tr className="w-full bg-gray-600 text-gray-200 font-light whitespace-no-wrap border border-b-0">
              <td className="px-4 py-4">In Process</td>

              <td className="px-4 py-4">05</td>
            </tr>
            <tr className="w-full bg-gray-600 text-gray-200 font-light whitespace-no-wrap border border-b-0">
              <td className="px-4 py-4">In Process</td>

              <td className="px-4 py-4">05</td>
            </tr>
            <tr className="w-full bg-gray-600 text-gray-200 font-light whitespace-no-wrap border border-b-0">
              <td className="px-4 py-4">In Process</td>

              <td className="px-4 py-4">05</td>
            </tr>
            <tr className="w-full bg-gray-600 text-gray-200 font-light whitespace-no-wrap border border-b-0">
              <td className="px-4 py-4">In Process</td>

              <td className="px-4 py-4">05</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table2;
