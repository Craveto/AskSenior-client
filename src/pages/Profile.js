
import React, { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import axios from "axios";

const Profile = () => {
  const { user } = useUser();

  useEffect(() => {
    const saveUserToDB = async () => {
      try {
        const res = await axios.post("https://asksenior-server.onrender.com/api/users/register", {
          name: user.fullName,
          email: user.primaryEmailAddress.emailAddress,
          photo: user.imageUrl,
          comment: "Excited to help aspirants!", // Default bio, can make editable later
          role: "senior", // or allow to choose
        });
        console.log("User saved:", res.data);
      } catch (err) {
        console.log("Already exists or error:", err.response?.data);
      }
    };

    if (user) saveUserToDB();
  }, [user]);

  return (
    <div className="profile-container">
      <img src={user.imageUrl} alt="User" className="profile-img" />
      <h2>{user.fullName}</h2>
      <p>{user.primaryEmailAddress.emailAddress}</p>
    </div>
  );
};

export default Profile;
