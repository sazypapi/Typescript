import { auth, currentUser } from "@clerk/nextjs/server";
import React from "react";
import { LuUser } from "react-icons/lu";

async function UserIcon() {
  const { userId } = auth();
  const user = await currentUser();

  const profileImage = user?.imageUrl;
  if (profileImage) {
    return (
      <img src={profileImage} className="w-6 h-6 rounded-full object-cover" alt="user icon"/>
    );
  }
  return (
    <LuUser className="h-6 w-6 rounded-full bg-primary text-secondary"></LuUser>
  );
}

export default UserIcon;
