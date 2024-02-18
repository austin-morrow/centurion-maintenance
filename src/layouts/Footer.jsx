import React from "react";
import Logo from "../assets/brand/cm-logo.png";

const Footer = () => {
  return (
    <div className="w-full  text-[#A8A899] px-2 py-2">
      <div className="flex flex-col items-center max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-[text-[#A8A899] border-t">
        <div className="flex-shrink-0">
          <img className="h-14 pb-2 sm:pb-0" src={Logo} alt="Your Company" />
        </div>
        <div>© 2024 Centurion Maintenance Inc. All rights reserved.</div>
      </div>
    </div>
  );
};

export default Footer;
