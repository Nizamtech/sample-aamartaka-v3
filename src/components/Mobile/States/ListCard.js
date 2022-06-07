import React from "react";

const ListCard = () => {
  return (
    <div className="w-full rounded-t-lg bg-white border-2 ">
      <div className="ml-8">
        <h1 className="text-xl text-slate-800 font-bold">Junayed Ahmed</h1>
        <div className="flex justify-between items-center">
          {" "}
          <h1 className="text-xl text-gray-500 "> Salaried</h1>{" "}
          {/* <h1 className="text-xl text-gray-500">Banani,Dhaka,1230</h1> */}
        </div>
        <hr className="my-3" />
        <div className="grid grid-cols-2 place-items-start  my-2">
          <div>
            <h1 className="text-sm text-gray-500 ">Company Name</h1>
            <h1 className="text-sm text-slate-800 font-bold">
              Asha Telecom ltd.
            </h1>
          </div>
          <div className="flex flex-col justify-start">
            <h1 className="text-sm text-gray-500">Salary</h1>
            <h1 className="text-sm text-slate-800 font-bold">12000 TK</h1>
          </div>
        </div>
        <div className="grid grid-cols-2 place-items-start  my-2">
          <div>
            <h1 className="text-sm text-gray-500">Location</h1>
            <h1 className="text-sm text-slate-800 font-bold">
              Banani,Dhaka-1230
            </h1>
          </div>
          <div className="flex flex-col justify-start">
            <h1 className="text-sm text-gray-500">Visit Date </h1>
            <h1 className="text-sm text-slate-800 font-bold"> 2022-06-05</h1>
          </div>
        </div>
        <div className="grid grid-cols-2 place-items-start my-2">
          <div>
            <h1 className="text-sm text-gray-500">Schedule Date </h1>
            <h1 className="text-sm text-slate-800 font-bold">2022-06-19</h1>
          </div>
          <div className="flex flex-col justify-start">
            <h1 className="text-sm text-gray-500">Schedule Time </h1>
            <h1 className="text-sm text-slate-800 font-bold">
              {" "}
              12:00:00 - 14:00:00
            </h1>
          </div>
        </div>

        {/* test div for image 

        https://i.ibb.co/chYZ6xm/icons8-forward-64.png
https://i.ibb.co/8zvFscJ/icons8-update-60.png
https://i.ibb.co/6rcLZzD/icons8-update-96.png
https://i.ibb.co/v3YzgNg/icons8-follow-up-64.png
https://i.ibb.co/4s6VLW1/icons8-furnitureandhousehold-64.png
https://i.ibb.co/WgnHDz3/icons8-sms-96.png
https://i.ibb.co/fSyHNQ1/icons8-phone-96.png
         */}
        <div className="grid grid-cols-3 place-items-start my-8 gap-4">
          {/* call div  */}
          <div className="flex flex-col  justify-center items-center">
            <img
              src="https://i.ibb.co/fSyHNQ1/icons8-phone-96.png"
              alt=""
              width="30px"
              height="30px"
            />
            <small className=" mt-1 text-xs">Call</small>
          </div>
          {/* sms  */}
          <div className="flex flex-col justify-center items-center">
            <img
              src="https://i.ibb.co/WgnHDz3/icons8-sms-96.png"
              alt=""
              width="30px"
              height="30px"
            />
            <small className=" mt-1 text-xs">SMS</small>
          </div>
          {/* Schedule  */}
          <div className="flex flex-col  justify-center items-center">
            <img
              src="https://i.ibb.co/4s6VLW1/icons8-furnitureandhousehold-64.png"
              alt=""
              width="30px"
              height="30px"
            />
            <small className=" mt-1 text-xs">Schedule</small>
          </div>
          {/* follow-up  */}
          <div className="flex flex-col  justify-center items-center">
            <img
              src="https://i.ibb.co/v3YzgNg/icons8-follow-up-64.png"
              alt=""
              width="30px"
              height="30px"
            />
            <small className=" mt-1 text-xs">follow Up</small>
          </div>
          <div className="flex flex-col  justify-center items-center">
            <img
              src="https://i.ibb.co/6rcLZzD/icons8-update-96.png"
              alt=""
              width="30px"
              height="30px"
            />
            <small className=" mt-1 text-xs">Update</small>
          </div>
          {/* Forward  */}
          <div className="flex flex-col  justify-center items-center">
            {" "}
            <img
              src="https://i.ibb.co/chYZ6xm/icons8-forward-64.png"
              alt=""
              width="30px"
              height="30px"
            />
            <small className=" mt-1 text-xs">Forward</small>
          </div>
        </div>

        {/* 


        <table className="w-full text-left rounded-lg">
         
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
 */}
      </div>
    </div>
  );
};

export default ListCard;
