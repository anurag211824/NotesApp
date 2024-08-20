import React, { useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import ProfileInfo from "./Cards/ProfileInfo";
import onLogout from "./Cards/ProfileInfo";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const handleSearch = () => {};
  const onClearSearch = () => {
    setSearchQuery("");
  };
  const onLogout = () => {
    navigate("/login");
  };
  return (
    <div className="bg-white flex items-center justify-between px-2 py-2 shadow-2xl">
      <h2 className="text-xl font-medium text-black py-2 ">
        <span className="text-slate-500 text-3xl">One</span>
        <span className="tect-slate-900 text-3xl">Note</span>
      </h2>
      <SearchBar
        value={searchQuery}
        onChange={({ target }) => setSearchQuery(target.value)}
        handleSearch={handleSearch}
        onClearSearch={onClearSearch}
      />

      <ProfileInfo onLogout={onLogout} />
    </div>
  );
}

export default Navbar;
