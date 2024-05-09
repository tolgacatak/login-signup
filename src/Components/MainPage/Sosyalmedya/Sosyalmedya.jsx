import logo from 'C:\\Users\\User\\Desktop\\login-signup\\login-signup\\src\\Components\\Assets\\user.png'
import twitter from 'C:\\Users\\User\\Desktop\\login-signup\\login-signup\\src\\Components\\Assets\\twitter.png'
import './Sosyalmedya.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
const Sosyalmedya = () => {
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
        <>
            <div class="kart">
                <img class="kart-foto" src={logo} alt="" />
                <div class="kart-baslik">
                    <span>İsim Soyisim</span>
                </div>
                <div class="kart-zaman">
                    <span>Zaman</span>
                </div>
                <div className="rating-like">
                    <FontAwesomeIcon icon={faArrowUp}   />
                </div>
                <div className="rating-like-sayi">
                    <span>0</span>
                </div>
                <div className="rating-dislike">
                    <FontAwesomeIcon icon={faArrowDown} />
                </div>
                <div className="rating-dislike-sayi">
                    <span>0</span>
                </div>
                <img class="kart-twitter" src={twitter} alt="" />
                <div class="kart-icerik">
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quo vel hic error dignissimos impedit blanditiis vitae nam sint ipsa deserunt fugit iste omnis, nemo aperiam eos dicta, sapiente accusantium explicabo dolorum ea labore adipisci eius! Quibusdam voluptas quis ea doloribus architecto nihil eos eveniet rerum tempora. Totam doloremque minima reiciendis delectus modi numquam tempore hic vel doloribus? Mollitia debitis non, hic cum quos ipsum saepe blanditiis ducimus, ad quibusdam dolore in, doloribus quidem placeat excepturi odio beatae dolor nam. Minima esse adipisci architecto repellat molestiae. Velit tempore inventore soluta cumque quae voluptas numquam adipisci culpa, deleniti at fugiat asperiores?</span>
                </div>
                <div class="kart-alt">
                    
                    
                    <div class="kart-yorum">
                        <img src={userData.profilePicture ? `data:image/png;base64,${userData.profilePicture}` : logo} alt="" />
                        <input type="text" placeholder="Yorum Yap" />
                        <div class="kart-yorum-sayisi">
                        <span>3 Yorum</span>
                    </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Sosyalmedya