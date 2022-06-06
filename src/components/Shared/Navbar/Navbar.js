import Image from "next/image";
import Link from "next/link";
import React from "react";
import userImage from "../../../../public/assets/icon/user.jpg";
const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center nav mx-2">
        <Link href="/">
          <a style={{ color: "red" }}>Home</a>
        </Link>

        <div className="relative w-12 h-12">
          <img
            className="rounded-full border border-gray-100 shadow-sm"
            src="https://randomuser.me/api/portraits/women/81.jpg"
            alt="user"
            width="50px"
            height="50px"
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
