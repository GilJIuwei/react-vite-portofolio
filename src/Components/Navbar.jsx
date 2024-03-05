import React from "react";
import { CiMedicalCross } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="flex justify-between px-8 mt-4 items-center">
      <div className="px-1">
        <CiMedicalCross size="40" />
      </div>
      <div className="">
        <ul className="flex gap-7">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Experiences</a>
          </li>
          <li>
            <a href="#">Portofolio</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
