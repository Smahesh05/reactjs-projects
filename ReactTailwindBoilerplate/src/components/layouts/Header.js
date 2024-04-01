import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdArrowDropdown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import Logo from "./Logo";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="justify-center  mx-auto flex border-b border-gray-300">
      <div className=" container bg-light-background mx-auto w-full flex flex-wrap md:flex-nowrap items-center justify-between  px-12 py-3">
        <div className="flex items-center mb-4 md:mb-0">
          <Logo />
        </div>

        <div
          className="block md:hidden text-gray-500"
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? <RxCross2 /> : <GiHamburgerMenu />}
        </div>

        <ul
          className={`${
            showMenu ? "block" : "hidden"
          } md:flex md:flex-wrap gap-4 justify-between lg:justify-start`}
        >
          <li className="cursor-pointer mb-4 md:mb-0">Hello</li>
          <li className="cursor-pointer mb-4 md:mb-0">Integrations</li>
          <li className="cursor-pointer mb-4 md:mb-0">
            <button className="flex items-center gap-2">
              Help
              <IoMdArrowDropdown className="focus:outline-none hover:bg-gray-300 " />
            </button>
          </li>
          <li className="cursor-pointer flex gap-2 items-center mb-4 md:mb-0">
            <div className="w-8 h-8 border-2 border-gray-400 bg-gray-300 rounded-full flex items-center justify-center">
              <span>J</span>
            </div>
            <button className="flex items-center gap-2">
              Account
              <IoMdArrowDropdown className="focus:outline-none hover:bg-gray-300 " />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
