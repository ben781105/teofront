import React from 'react'
import ProfileCard from './profilecard'
import AccountOverview from './accountOverview'
import '../styles/userdetails.css'
function Userdetails({userInfo}) {
  return (
    <div className='user-details'>
      <ProfileCard userInfo={userInfo}/>
      <AccountOverview userInfo={userInfo}/>
    </div>
  )
}

export default Userdetails
