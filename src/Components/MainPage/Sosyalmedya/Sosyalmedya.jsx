import logo from 'C:\\Users\\User\\Desktop\\login-signup\\login-signup\\src\\Components\\Assets\\user.png'
import twitter from 'C:\\Users\\User\\Desktop\\login-signup\\login-signup\\src\\Components\\Assets\\twitter.png'
import './Sosyalmedya.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
const Sosyalmedya = ({tweet}) => {
    const [userData, setUserData] = useState({});
    const [showComments, setShowComments] = useState(false);
    const [commentText, setCommentText] = useState('');
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
    const toggleComments = () => {
        setShowComments(!showComments);
    };
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            // Enter tuşuna basıldığında yorum yapma işlemini gerçekleştir
            submitComment();
        }
    };
    const submitComment = () => {
        if (!commentText) {
            // Yorum metni veya helpBoxId eksikse işlem yapma
            return;
        }

        const commentData = {
            userId: userData.id,
            contentId : tweet.id,
            commentText: commentText
        };

        axios.post('http://localhost:8085/api/commentsToSocialMediaContent/save', commentData, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                // Yorum ekleme işlemi başarılı
                console.log('Yorum eklendi:', response.data);
                setCommentText('');
                window.location.reload(); // Sayfayı yenile
            })
            .catch((error) => {
                console.error('Hata:', error);
            });
    };
    const handleLike = () => {
        const likeData = {
            userId: userData.id,
            contentId: tweet.id
        };

        axios.post('http://localhost:8085/api/contents/like', likeData, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                // Handle success
                console.log('Like successful');
            })
            .catch((error) => {
                // Handle error
                console.error('Like error:', error);
            });

            window.location.reload();
    };

    const handleDislike = () => {
        const dislikeData = {
            userId: userData.id,
            contentId: tweet.id
        };

        axios.post('http://localhost:8085/api/contents/dislike', dislikeData, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                // Handle success
                console.log('Dislike successful');
            })
            .catch((error) => {
                // Handle error
                console.error('Dislike error:', error);
            });

            window.location.reload();
    };
           
    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear().toString();

    return `${day}-${month}-${year}`;
};
const hideUrls = (text) => {
    // URL'leri tespit etmek için basit bir regex kullanarak gizleyebiliriz
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, ''); // URL'leri boş bir string ile değiştiriyoruz
};
const handleDeleteComment = (commentId) => {
    axios.delete(`http://localhost:8085/api/commentsToSocialMediaContent/delete/${commentId}`)
        .then((response) => {
            console.log('Yorum silindi:', response.data);
            window.location.reload(); // Sayfayı yenile
        })
        .catch((error) => {
            console.error('Hata:', error);
        });
};

    


    return (
        <>
            <div class="kart">
                <img class="kart-foto" src={tweet.userInfo.avatar} alt="" />
                <div class="kart-baslik">
                    <span>{tweet.userInfo.name}</span>
                </div>
                <div class="kart-zaman">
                    <span>{formatDate(tweet.createdAt)}</span>
                </div>
                <div className="rating-like" onClick={handleLike}>
                    <FontAwesomeIcon icon={faArrowUp}   />
                </div>
                <div className="rating-like-sayi" >
                    <span>{tweet.likes}</span>
                </div>
                <div className="rating-dislike">
                    <FontAwesomeIcon icon={faArrowDown} onClick={handleDislike} />
                </div>
                <div className="rating-dislike-sayi">
                    <span>{tweet.dislikes}</span>
                </div>
                <img class="kart-twitter" src={twitter} alt="" />
                <div class="kart-icerik">
                    <span>{hideUrls(tweet.text)}</span>
                </div>
                <div class="kart-alt">
                    
                    
                    <div class="kart-yorum">
                        <img src={userData.profilePicture ? `data:image/png;base64,${userData.profilePicture}` : logo} alt="" />
                        <input type="text"
                            placeholder="Yorumunuzu buraya yazınız..."
                            value={commentText}
                            onChange={(event) => setCommentText(event.target.value)}
                            onKeyDown={handleKeyPress}/>
                        <div class="kart-yorum-sayisi" onClick={toggleComments}>
                            <span>{tweet.comments.length} Yorum</span>
                        </div>
                        {showComments && (
                        <div className="yorumlar-sosyal">
                            <h3>Yorumlar</h3>
                            <ul className="yorumlar-liste-sosyal">
                                {tweet.comments.map((comment, index) => (
                                    <li key={index} className="yorum-sosyal">
                                        <p className="yorum-icerik-sosyal">
                                            <b>{userData.username}: </b>
                                            {comment.commentText}
                                            <button className="yorum-icerik-button-sosyal" onClick={() => handleDeleteComment(comment.id)}>X</button>
                                            </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}


                    </div>
                </div>
            </div>


        </>
    )
}

export default Sosyalmedya