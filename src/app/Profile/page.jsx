"use Client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Profile = ({ name, email }) => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    profilePicture: "",
  });

  useEffect(() => {
    const storedProfile = localStorage.getItem("profile");
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile));
    }
  }, []);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Profile Details
        </h2>
        <div className="flex flex-col mb-6">
          <div className="flex justify-center">
            <Image
              src="https://via.placeholder.com/150" // Placeholder image URL
              alt="Profile Avatar"
              className="rounded-full h-24 w-24 mb-4"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name:
            </label>
            <p className="text-gray-700 text-lg">{profile.userName}</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email Address:
            </label>
            <p className="text-gray-700 text-lg">{profile.mail}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
