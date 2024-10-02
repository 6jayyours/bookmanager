import React, { useState } from "react";
// import react icons
import { IoSearch } from "react-icons/io5";

const Hero = ({ onSearch, books }) => {
  const [searchId, setSearchId] = useState("");

  const handleSearch = () => {
    const foundBook = books.find(book => book.id === parseInt(searchId)); // Find book by ID
    onSearch(foundBook || null); // Pass the found book or null if not found
  };

  return (
    <section className="flex flex-1 justify-center px-24 py-6">
      <div className="container flex flex-col max-w-[1400px] bg-custom-hero h-[400px] bg-cover justify-center gap-y-4 rounded-lg">
        <div className="flex items-center justify-center mt-64">
          <h1 className="text-white text-4xl font-black text-center leading-tight tracking-tight md:text-5xl">
            Search All Your Books
          </h1>
        </div>
        <div className="flex items-center justify-center gap-x-6">
          <div className="relative w-full max-w-[480px]">
            <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search Books"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)} // Update searchId state
              className="w-full h-14 pl-10 pr-4 rounded-xl border border-[#d0dbe7] bg-slate-50 text-black placeholder:text-[#4e7397] focus:outline-none focus:border-[#1980e6]"
            />
          </div>
          <button 
            onClick={handleSearch} // Trigger search on button click
            className="flex items-center justify-center h-14 px-6 rounded-3xl bg-[#1980e6] text-slate-50 font-bold"
          >
            <span className="truncate">Search</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
