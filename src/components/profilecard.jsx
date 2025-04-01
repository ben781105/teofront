import React from "react";
import "../styles/profilecard.css";
import profile from '../assets/baker.png'
import { useNavigate } from "react-router-dom";
const ProfileCard = ({userInfo}) => {

  const navigate = useNavigate();
  const explore = () => {
    navigate("/");
  };
  return (
    <div className="profile-card">
      <img src={profile} alt="Profile" className="profile-image" />
      <h2>{userInfo.username}</h2>
      <p>{userInfo.email}</p>
      <button className="edit-button" onClick={explore}>Explore</button>
    </div>
  );
};

export default ProfileCard;
