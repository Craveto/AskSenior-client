// client/src/pages/RoleSelect.js
import React from "react";
import { useUser} from "@clerk/clerk-react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import "./RoleSelect.css";

const RoleSelect = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  const selectRole = async (role) => {
    try {
      await axios.post("http://localhost:5000/api/users/register", {
        name: user.fullName,
        email: user.primaryEmailAddress.emailAddress,
        photo: user.imageUrl,
        comment: "Excited to help aspirants!",
        role,
      });
      navigate("/profile");
    } catch (err) {
      console.log(err.response?.data || err);
      navigate("/profile"); // in case user already exists
    }
  };

  return (
    <div className="role-select-container">
      <h2>Select Your Role</h2>
      <button onClick={() => selectRole("aspirant")} className="role-btn">I am an Aspirant</button>
      <button onClick={() => selectRole("senior")} className="role-btn">I am a Senior</button>
    </div>
  );
};

export default RoleSelect;
