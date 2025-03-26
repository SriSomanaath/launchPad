"use client";

import { logOut } from "@/lib/auth/actions";

export const LogoutButton = () => {
    const handleLogOut = async () => {
        await logOut();
      };      

    return (
        <button
            onClick={handleLogOut}
            className="bg-slate-600 w-full rounded-md p-3 disabled:opacity-60 transition-all hover:bg-slate-800 text-white"
        >
            Log Out
        </button>
    );
};
