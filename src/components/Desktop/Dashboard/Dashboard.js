import Link from "next/link";
import React from "react";
import styles from "../../../styles/Dashboard.module.scss";
const Dashboard = () => {
  return (
    <div
      className={`${styles.dashboard} grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 place-items-center p-8 bg-[#EBF0F5]`}
    >
      <div>
        <Link href="/dashboard">
          <a
            href="#"
            className="card block p-6 max-w-sm  rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tigh text-[#36B37E] dark:text-white ">
              Dashboard
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio,
              cum dolores. Vel nam aliquid cupiditate.
            </p>
          </a>
        </Link>
      </div>
      <div>
        <a
          href="#"
          className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tigh text-[#5F67EC] dark:text-white">
            Dashboard
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, cum
            dolores. Vel nam aliquid cupiditate.
          </p>
        </a>
      </div>
      <div>
        <a
          href="#"
          className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#4DCCFF] dark:text-white">
            Dashboard
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, cum
            dolores. Vel nam aliquid cupiditate.
          </p>
        </a>
      </div>
      <div>
        <a
          href="#"
          className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#EB5757] dark:text-white">
            Dashboard
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, cum
            dolores. Vel nam aliquid cupiditate.
          </p>
        </a>
      </div>
    </div>
  );
};

export default Dashboard;
