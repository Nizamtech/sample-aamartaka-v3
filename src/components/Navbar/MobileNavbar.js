import Link from "next/link";
import React from "react";

const MobileNavbar = () => {
  return (
    <div>
      <nav className="nav">
        <Link href="/">
          <a style={{ color: "red" }}>M Home</a>
        </Link>
        <Link href="/user">
          <a>M User</a>
        </Link>
        {/* <Link href="/contactForm">
          <a>Contact Form</a>
        </Link> */}
        <Link href="/app">
          <a>M App</a>
        </Link>
        <Link href="/pic">
          <a>M Picture</a>
        </Link>
        <Link href="/about">
          <a>M About</a>
        </Link>
      </nav>
    </div>
  );
};

export default MobileNavbar;
