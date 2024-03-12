import { Link } from 'react-router-dom'
import './Profil.css'
import logo from 'C:\\Users\\User\\Desktop\\login-signup\\login-signup\\src\\Components\\Assets\\user.png'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profil = () => {

  const [userData, setUserData] = useState({});


    useEffect(() => {
        const id = localStorage.getItem('userId');
        if (!id) {
            // id yoksa işlem yapma
            return;
        }

        axios.get(`http://localhost:8087/users/getProfileInfo/${id}`)
            .then((response) => {
                setUserData(response.data);
            })
            .catch((error) => {
                console.error("Hata:", error);
            });
    }, []);

  return (
    <div className="profile-wrapper">
        <div className="profile-img">
            <img src={userData.profilePicture ? `data:image/png;base64,${userData.profilePicture}` : logo} alt="" />
        </div>
        <div className="profile-text">
            <span>{userData.nameSurname || userData.username}</span>
        </div>
        <div className="profile-btn">
            <Link className='profile-link' to="/profil-page">Profile Git</Link>
        </div>
    </div>
  )
}

export default Profil