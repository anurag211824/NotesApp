import React from "react";
import { getIntials } from "../../utils/helper";

function ProfileInfo({ onLogout }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-300">
        {getIntials("Anurag kumar")}
      </div>
      <div>
        <p className="text-sm font-medium">Anurag Kumar</p>
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
