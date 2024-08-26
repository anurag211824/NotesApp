import React, { useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import ProfileInfo from "./Cards/ProfileInfo";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  signoutFailure,
  signoutStart,
  signoutSuccess,
} from "../redux/user/userSlice";
import axios from "axios";
import { toast } from "react-toastify";
function Navbar({ userInfo, handleClearSearch, onSearchNote }) {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSearch = () => {
    if (searchQuery) {
      onSearchNote(searchQuery);
    }
  };
  const onClearSearch = () => {
    setSearchQuery("");
    handleClearSearch();
  };
  const onLogout = async () => {
    try {
      localStorage.clear();
      dispatch(signoutStart);
      const res = await axios.get("http://localhost:3000/api/auth/signout", {
        withCredentials: true,
      });
      if (res.data.success == false) {
        dispatch(signoutFailure(res.data.message));
        toast.error(res.data.message);
        return;
      }
      toast.success(res.data.message);
      dispatch(signoutSuccess);
      navigate("/login");
    } catch (error) {
      dispatch(signoutFailure(error.message));
    }
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

      <ProfileInfo userInfo={userInfo} onLogout={onLogout} />
    </div>
  );
}

export default Navbar;
