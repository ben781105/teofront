import React from "react";
import "../styles/accountoverview.css";

const AccountOverview = ({userInfo}) => {
  return (
    <div className="account-overview">
      <h2>Account Overview</h2>
      <div className="overview-grid">
      <div  className="overview-item"><strong>Username:</strong> <span>{userInfo.username}</span></div>
        <div className="overview-item"><strong>Name:</strong> <span>{userInfo.first_name} {userInfo.last_name}</span></div>
        <div  className="overview-item"><strong>Email:</strong> <span>{userInfo.email}</span></div>
        <div  className="overview-item"><strong>Phone:</strong> <span>{userInfo.Phone}</span></div>
        <div  className="overview-item"><strong>City:</strong> <span>{userInfo.City}</span></div>
        <div  className="overview-item"><strong>Country:</strong> <span>uganda</span></div>
      </div>
    </div>
  );
};

export default AccountOverview;
