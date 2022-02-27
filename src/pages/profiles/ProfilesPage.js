import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// import {  Redirect } from 'react-router';
// import ClientProfilePage from '../clients/ClientProfilePage';

const ProfilesPage = () => {
  let navigate = useNavigate();
  let { username } = useParams();


  return (
    <div className='md:container md:mx-auto'>


    <div>This is { username }'s profile page<br /></div>

    if user is customer <br />
      render user profile page 
      {/* {username === "James" && <Redirect to="/client-profile" />} */}
      {/* {username === "James" && navigate('/client-profile')} */}
      
      <br />else if user is employee <br />render employee profile page
    
    {/* <div>user token:{ userInfo }</div>
    <div>user name: { userInfo.user_email }</div>
    <div>user name: { userInfo.userEmail }</div> */}
    <button onClick={() => {navigate("/")}}>Go home</button>
  </div>
  )
}

export default ProfilesPage