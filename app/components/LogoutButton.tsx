"use client";

import { logoutUser } from "../actions/auth-actions";

export default function LogoutButton() {
  return (
    <button
      onClick={async () => {
        await logoutUser();
      }}
      className="w-full text-left"
    >
      Logout
    </button>
  );
}
