import logo from 'C:\\Users\\User\\Desktop\\login-signup\\login-signup\\src\\Components\\Assets\\user.png'
import twitter from 'C:\\Users\\User\\Desktop\\login-signup\\login-signup\\src\\Components\\Assets\\twitter.png'
import './Sosyalmedya.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsDown, faThumbsUp, faCommentDots } from '@fortawesome/free-solid-svg-icons';

const Sosyalmedya = ({ tweet }) => {
    const [userData, setUserData] = useState({});
    const [showComments, setShowComments] = useState(false);
    const [commentText, setCommentText] = useState('');

    useEffect(() => {
        const id = localStorage.getItem('userId');
        if (!id) {
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
            submitComment();
        }
    };

    const submitComment = () => {
        if (!commentText) {
            return;
        }

        const commentData = {
            userId: userData.id,
            contentId: tweet.id,
            commentText: commentText
        };

        axios.post('http://localhost:8085/api/commentsToSocialMediaContent/save', commentData, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                setCommentText('');
                window.location.reload();
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
                console.log('Like successful');
            })
            .catch((error) => {
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
                console.log('Dislike successful');
            })
            .catch((error) => {
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
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        return text.replace(urlRegex, '');
    };

    const handleDeleteComment = (commentId) => {
        axios.delete(`http://localhost:8085/api/commentsToSocialMediaContent/delete/${commentId}`)
            .then((response) => {
                console.log('Yorum silindi:', response.data);
                window.location.reload();
            })
            .catch((error) => {
                console.error('Hata:', error);
            });
    };

    return (
        <>
            <div className="kart">
                <img className="kart-foto" src={tweet.userInfo.avatar} alt="" />
                <div className="kart-baslik">
                    <span>{tweet.userInfo.name}</span>
                </div>
                <div className="kart-zaman">
                    <span>{formatDate(tweet.createdAt)}</span>
                </div>
                <img className="kart-twitter" src={twitter} alt="" />
                <div className="kart-icerik">
                    <span>{hideUrls(tweet.text)}</span>
                </div>
                <div className="rating-container">
                    <div className="rating-item" onClick={handleLike}>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        <span>{tweet.likes}</span>
                    </div>
                    <div className="rating-item" onClick={handleDislike}>
                        <FontAwesomeIcon icon={faThumbsDown} />
                        <span>{tweet.dislikes}</span>
                    </div>
                    <div className="rating-item" onClick={toggleComments}>
                        <FontAwesomeIcon icon={faCommentDots} />
                        <span>{tweet.comments.length} Yorum</span>
                    </div>
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
                        <div className="kart-yorum">
                            <img src={userData.profilePicture ? `data:image/png;base64,${userData.profilePicture}` : logo} alt="" />
                            <input type="text"
                                placeholder="Yorumunuzu buraya yazınız..."
                                value={commentText}
                                onChange={(event) => setCommentText(event.target.value)}
                                onKeyDown={handleKeyPress} />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Sosyalmedya;