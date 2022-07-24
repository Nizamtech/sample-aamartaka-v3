import Image from "next/image";
import Link from "next/link";
import React from "react";
import userImage from "../../../../public/assets/icon/user.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = React.useState("hidden");

  return (
    <div>
      <nav className="bg-[#0b0b6a]">
        <div className="container mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

              <button onClick={() =>
                setMobileMenu(mobileMenu === "block" ? "hidden" : "block")
              }>
                <FontAwesomeIcon icon={faBars} className="w-6 h-6 mx-4 text-white hover:text-orange-500" />
              </button>

            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/home">
                  <a className="font-bold text-xl text-orange-500">M<span className="text-white">ain</span> L<span className="text-white">ogo</span></a>
                </Link>
              </div>
              <div className="hidden sm:block sm:ml-6 text-white" >
                <div className="flex space-x-4">
                  <Link
                    href="/">
                    <a className="text-white hover:text-orange-600 hover:border-white border border-transparent hover:bg-white duration-300 block px-2 py-1 rounded-md text-md font-medium">Home</a>
                  </Link>
                  <Link
                    href="/">
                    <a className="text-white hover:text-orange-600 hover:border-white border border-transparent hover:bg-white duration-300 block px-2 py-1 rounded-md text-md font-medium">Blog</a>
                  </Link>
                  <Link
                    href="/">
                    <a className="text-white hover:text-orange-600 hover:border-white border border-transparent hover:bg-white duration-300 block px-2 py-1 rounded-md text-md font-medium">
                      Top Place
                    </a>
                  </Link>
                  <Link
                    href="/">
                    <a className="text-white hover:text-orange-600 hover:border-white border border-transparent hover:bg-white duration-300 block px-2 py-1 rounded-md text-md font-medium">
                      Service
                    </a>
                  </Link>
                  <Link
                    href="/">
                    <a className="text-white hover:text-orange-600 hover:border-white border border-transparent hover:bg-white duration-300 block px-2 py-1 rounded-md text-md font-medium">
                      About
                    </a>
                  </Link>
                  <Link
                    href="/">
                    <a className="text-white hover:text-orange-600 hover:border-white border border-transparent hover:bg-white duration-300 block px-2 py-1 rounded-md text-md font-medium">
                      Contact
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auhref sm:ml-6 sm:pr-0">
              <Link href="/">
                <img
                  className="rounded-full border border-gray-100 shadow-sm"
                  src="https://randomuser.me/api/portraits/women/81.jpg"
                  alt="user"
                  width="50px"
                  height="50px"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu Here */}

        <div className={`lg:hidden ${mobileMenu} text-white`}>
          <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col items-center justify-center ">
            <Link
              href="/">
              <a onClick={() => setMobileMenu("hidden")} className="text-white hover:text-orange-600 duration-300 block px-3 py-2 rounded-md text-md font-medium"> Home </a>
            </Link>
            <Link
              href="/">
              <a
                onClick={() => setMobileMenu("hidden")}
                className="text-white hover:text-orange-600 duration-300 block px-3 py-1 rounded-md text-md font-medium"> About </a>
            </Link>
            <Link
              href="/">
              <a
                onClick={() => setMobileMenu("hidden")}
                className="text-white hover:text-orange-600 duration-300 block px-3 py-1 rounded-md text-md font-medium">Blog</a>
            </Link>
            <Link
              href="/">
              <a
                onClick={() => setMobileMenu("hidden")}
                className="text-white hover:text-orange-600 duration-300 block px-3 py-1 rounded-md text-md font-medium">Top Place</a>
            </Link>
            <Link
              href="/">
              <a
                onClick={() => setMobileMenu("hidden")}
                className="text-white hover:text-orange-600 duration-300 block px-3 py-1 rounded-md text-md font-medium">Service</a>
            </Link>
            <Link
              href="/">
              <a
                className="text-orange-600 block px-3 py-2 rounded-md text-md font-medium">M<span className="text-white">ain</span> L<span className="text-white">ogo</span></a>
            </Link>
          </div>
        </div>
      </nav >
    </div >
  );
};

export default Navbar;
