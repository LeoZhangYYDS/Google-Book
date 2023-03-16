import React from "react";
//react icons
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { BiStoreAlt } from "react-icons/bi";
const Footer = () => {
  //get current year
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="top">
        <a href="/">
          <AiOutlineMail className="icon" />
          SEND US AN EMAIL
        </a>
        <a href="/">
          <AiOutlinePhone className="icon" />
          1800 333 333
        </a>
        <a href="/">
          <BiStoreAlt className="icon" />
          LOCATE A STORE
        </a>
      </div>
      <div className="bot">
        <div className="text">
          <a href="/">Privacy Policy</a>
          <span> | </span>
          <a href="/">Terms & Conditions</a>
          <span> | </span>
          <a href="/">Contact Us</a>
        </div>
        <p>©{currentYear} BookLover Pty Ltd</p>
      </div>
    </div>
  );
};

export default Footer;
