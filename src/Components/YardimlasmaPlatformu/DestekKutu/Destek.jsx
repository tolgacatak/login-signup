    import React from 'react';
    import './Destek.css';
    import foto1 from './DestekAssets/1.png';
    import foto2 from './DestekAssets/2.png';
    import StarRatings from 'react-star-ratings';
    import logo from 'C:\\Users\\User\\Desktop\\login-signup\\login-signup\\src\\Components\\Assets\\user.png'
    import comment from './DestekAssets/3.png'
    import axios from 'axios';
    import IletisimeGecModal from 'C:\\Users\\User\\Desktop\\login-signup\\login-signup\\src\\Components\\Modals\\IletisimeGecModal\\IletisimeGecModal.jsx'
    import { useEffect, useState } from 'react';

    const Destek = ({helpBox,count}) => {
        const [userData, setUserData] = useState({});
        const [commentText, setCommentText] = useState('');
        const [showComments, setShowComments] = useState(false);
        const [showModal, setShowModal] = useState(false);
        const [rating, setRating] = useState(0);

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

        const handleKeyPress = (event) => {
            if (event.key === 'Enter') {
                // Enter tuşuna basıldığında yorum yapma işlemini gerçekleştir
                submitComment();
            }
        };

        const submitComment = () => {
            if (!commentText || !helpBox.id) {
                // Yorum metni veya helpBoxId eksikse işlem yapma
                return;
            }

            const commentData = {
                helpBox: { id: helpBox.id }, // Yardım kutusu id'sini commentData'ya ekleyin
                content: commentText // Yorum içeriğini commentData'ya ekleyin
            };

            axios.post('http://localhost:8087/comments/add', commentData, {
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
        const handleRatingChange = (newRating) => {
            // Yıldıza tıklama olayı
            setRating(newRating);
            // Rating değerini güncellemek ve getRating fonksiyonunu çağırmak için
            getRating(newRating);
        };
    
        const getRating = async (newRating) => {
            try {
                const response = await axios.post('http://localhost:8087/votes', {
                    votedUser: { id: helpBox.user.id },
                    helpBox: { id: helpBox.id },
                    score: newRating
                });
    
                console.log('Rating:', response.data);
            } catch (error) {
                console.error('Hata:', error);
            }
        };

        

        const toggleComments = () => {
            setShowComments(!showComments);
        };
        const handleModalToggle = () => {
            setShowModal(!showModal); // Modal'ın görünürlüğünü toggle et
        };

    return (
        <div className="destek-card-wrapper">
            
            <div className="yardim-kutusu-baslik">
                <p>Yardım Kutusu Sahibi:</p>
                <h4>{helpBox.user?.nameSurname}</h4>
                <div className="star-ratings">
                    <StarRatings 
                    rating={rating} 
                    starRatedColor="gold" 
                    starEmptyColor="gray" 
                    starDimension="20px" 
                    starSpacing="2px"
                    changeRating={handleRatingChange}
                    />
                </div>
                {helpBox.active ? (
                <img src={foto1} alt="" />
                ) : (
                    <img src={foto2} alt="" />
                )}
                <div className="yardim-aktif">
                    <h2><h2>{helpBox.active ? 'AKTİF' : 'PASİF'}</h2></h2>
                </div>
                <div className="yardim-iletisime-gec" >
                    {helpBox.active ? (
                        <button onClick={handleModalToggle}>İletişime Geç</button>
                        
                    ) : (
                        ""
                    )    
                    }
                {showModal && <IletisimeGecModal helpBox={helpBox} handleModalToggle={handleModalToggle} />} 
                </div>
            </div>
            <div className="yardim-orta-cizgi">

            </div>
            <div className="yardim-sag-taraf">
                <div className="yardim-sag-title">
                    <h4>{helpBox.city} - {helpBox.purpose}</h4>
                </div>
                <div className="yardim-sag-content">
                    <p>{helpBox.summary}</p>
                </div>
                <div className="yardim-kutu-adres">
                    <p><b>Yardım Adresi: </b>{helpBox.contactInfo}</p>
                </div>
                <div className="yardim-kutu-kategori">
                    
                    <p>
                    <b>İhtiyaçlar: </b>
                        {helpBox.categories.map((category, index) => (
                            <span key={index}>
                                
                                {category}
                                {index !== helpBox.categories.length - 1 && " - "}
                            </span>
                        ))}
                    </p>
                </div>
            </div>
            <div className="yardim-yorum-yap">
                <div className="yardim-yorum-yap-img">
                    <img src={userData.profilePicture ? `data:image/png;base64,${userData.profilePicture}` : logo} alt="" />
                </div>
                <div className="yardim-input">
                    <input
                            type="text"
                            placeholder="Yorumunuzu buraya yazınız..."
                            value={commentText}
                            onChange={(event) => setCommentText(event.target.value)}
                            onKeyDown={handleKeyPress}
                        />
                </div>
                <div className="yorum-goster" onClick={toggleComments}>
                    <div className="yardim-comment-icon">
                        <img src={comment} alt="" />
                    </div>
                    <div className='uc-yorum'>{helpBox.commentHelpBoxes.length}</div>
                    <div className="uc-yorum-iki">Yorum</div>
                </div>
                {showComments && (
                    <div className="yorumlar">
                        <h3>Yorumlar</h3>
                        <ul>
                            {helpBox.commentHelpBoxes.map((comment, index) => (
                                <li key={index} className="yorum">
                                    <p className="yorum-icerik">{comment.content}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

            </div>
            
        </div>
    );
    }

    export default Destek;
