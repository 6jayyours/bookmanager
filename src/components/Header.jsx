import React from "react";

//import react icons
import { IoLibrarySharp } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { FaBook } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b border-solid border-b-[#e7edf3] px-24 py-6">
      <div className="flex items-center justify-between whitespace-nowrap">
        {/* left section */}
      <div className="flex items-center gap-4 text-[#0e141b]">
        {/* icon */}
        <div className="flex items-center justify-center">
          <IoLibrarySharp className="text-yellow-500" size={30} />
        </div>

        {/* title */}
        <h2 className="text-[#0e141b] text-xl font-bold leading-tight tracking-[-0.015em]">
          Book Library
        </h2>
      </div>
      {/* right section */}
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex gap-4">
          {/* books*/}
          <Link to="/">
          <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#e7edf3] text-[#0e141b] gap-2 text-xl  leading-normal tracking-[0.015em] min-w-0 px-2.5">
            <FaBook />
          </button>
          </Link>

          {/* books*/}
          <Link to="/settings/allbooks">
          <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#e7edf3] text-[#0e141b] gap-2 text-xl  leading-normal tracking-[0.015em] min-w-0 px-2.5">
            <IoSettingsOutline />
          </button>
          </Link>
        </div>
      </div>
      </div>
    </header>
  );
};

export default Header;
