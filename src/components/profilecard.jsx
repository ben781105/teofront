import React from "react";
import "../styles/profilecard.css";
import profile from '../assets/baker.png'
const ProfileCard = ({userInfo}) => {
  return (
    <div className="profile-card">
      <img src={profile} alt="Profile" className="profile-image" />
      <h2>{userInfo.username}</h2>
      <p>{userInfo.email}</p>
      <button className="edit-button">Edit Profile</button>
    </div>
  );
};

export default ProfileCard;
