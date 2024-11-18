// src/components/molecules/Navbar.js
import React from "react";
import Link from "../atoms/Link";
import Buttonn from "../Atoms/Buttonn";

const Navbar = () => (
  <div className="NAVBAR">
    <div className="navbar-content">
    <Link>
        <img src="/logo.png" alt="Logo" className="logo" />
    </Link>
      <Link href="#services">Services</Link>
      <Link href="#work">Work</Link>
      <Link href="#pricing">Pricing</Link>
      <Link href="#faqs">FAQs</Link>
      <Buttonn>We're here</Buttonn>
    </div>
  </div>
);

export default Navbar;
