import React from "react";

// Import icons
import { ImBooks } from "react-icons/im";
import { BiSolidBookAdd } from "react-icons/bi";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex h-full min-h-[649px] w-full flex-col justify-between bg-slate-100 p-4 shadow-lg">
      <div className="flex flex-col gap-4">
        <Link to="/settings/allbooks">
        <div className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-300">
          <ImBooks className="text-2xl" />
          <p className="text-[#0e141b] text-lg font-medium leading-normal">
            All Books
          </p>
        </div>
        </Link>
        <Link to="/settings/addbook">
        <div className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-300">
          <BiSolidBookAdd className="text-2xl" />
          <p className="text-[#0e141b] text-lg font-medium leading-normal">
            Add Book
          </p>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
