import React from "react";
import { getIntials } from "../../utils/helper";
function ProfileInfo({ onLogout,userInfo }) {
  console.log("ProfileInfo userInfo:", userInfo);
  return (
    
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-300">
        {getIntials(userInfo?.username)}
      </div>
      <div>
        <p className="text-sm font-medium">{userInfo?.username}</p>
      </div>
      <button
        className="text-sm font-medium bg-green-500 p-1 rounded-md text-white hover:opacity-80"
        onClick={onLogout}
      >
        LogOut
      </button>
    </div>
  );
}

export default ProfileInfo;
