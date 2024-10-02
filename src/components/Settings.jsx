import React from "react";
import Sidebar from "./Sidebar";
import AddBook from "./AddBook";
import { Outlet } from "react-router";

const Settings = () => {
  return (
    <div className="flex">
      <div className="w-1/5">
        <Sidebar />
      </div>
      <div className="w-4/5 px-4 py-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Settings;
