import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
function SearchBar({ value, onChange, handleSearch, onClearSearch }) {
  return (
    <div className="w-60 sm:w-30 md:80 flex items-center px-4 bg-slate-300 rounded-md">
      <input
        type="text"
        placeholder="Search Notes....."
        className="w-full text-xs bg-transparent py-[11px] outline-none"
        value={value}
        onChange={onChange}
      />
      {value && (
        <IoMdClose
          className="text-slate-500 cursor-pointer hover:text-black mr-3"
          onClick={onClearSearch}
        />
      )}
      <FaMagnifyingGlass
        className="text-slate-500 text-xl cursor-pointer hover:text-black mr-3"
        onClick={handleSearch}
      />
    </div>
  );
}

export default SearchBar;
