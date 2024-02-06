"use client";
import Link from "next/link";
import { useState } from "react";

function NavBar() {
  const [navbar, setNavbar] = useState(false);

  const toggleNav = () => {
    setNavbar(!navbar);
  };

  return (
    <div className={`nav-wrapper ${navbar ? "open" : ""}`}>
      <nav className="flex justify-between items-center p-4 fixed top-0 left-0 right-0 z-20">
        <Link href="/" className="logo text-2xl font-bold">
          Si.graph
        </Link>

        <div className="md:hidden">
          <button className="outline-none ring-0" onClick={toggleNav}>
            <div className={`burger ${navbar ? "open" : ""}`}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </button>
        </div>

        <div
          className={`nav_elmt1 ${
            navbar ? "flex" : "hidden"
          } absolute w-full left-0 top-full md:static md:w-auto md:flex-row md:flex`}
        >
          <Link href="/" className="nav-link">
            À propos
          </Link>
          <Link href="/portfolio" className="nav-link">
            Portfolio
          </Link>
          <Link href="/" className="nav-link">
            Contact
          </Link>
          <div className="icon_box">
            <Link href="/" className="nav-link">
              En
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
