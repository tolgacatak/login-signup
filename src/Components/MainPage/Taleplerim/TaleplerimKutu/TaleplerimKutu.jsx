import './TaleplerimKutu.css';
import kutu from './TaleplerimKutuAssets/1.png';
import logo from 'C:\\Users\\User\\Desktop\\login-signup\\login-signup\\src\\Components\\Assets\\user.png';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TaleplerimKutu = ({ helpBox, setHelpBox }) => {
    const [editMode, setEditMode] = useState(false);
    const id = window.localStorage.getItem('userId');
    const [values, setValues] = useState({
        city: helpBox.city,
        categories: helpBox.categories,
        purpose: helpBox.purpose,
        summary: helpBox.summary,
        contactInfo: helpBox.contactInfo,
        active: helpBox.active,
        user: {
            id: id
        }
    });


    
    const handleUpdate = async () => {
       
        const response = await axios.put(`http://localhost:8087/helpbox/updateHelpBox/${helpBox.id}`, values);
        if(response.status === 200){
            axios.get(`http://localhost:8087/helpbox/getHelpBoxesByUserId/${id}`)
            .then((response) => {
                const helpBoxData = response.data; // Sadece ilk talebi alıyoruz, diğerleri için gerekirse uygun bir şekilde döngü kullanabilirsiniz
                setHelpBox(helpBoxData);
            })
            .catch((error) => {
                console.error("Hata:", error);
            });
        }
    }

    return (
        <div>
            <div className="talep-kutu-wrapper">
                <div className="talep-kutu-soltaraf">
                    <div className="talep-kutu-userimg">
                        <img src={helpBox.user?.profilePicture ? `data:image/png;base64,${helpBox.user?.profilePicture}` : logo} alt="" />
                    </div>
                    <div className="talep-kutu-gorsel">
                        <img src={kutu} alt="" />
                    </div>
                    <div className="talep-kutu-adsoyad">
                        <h4>Sayın {helpBox.user?.nameSurname}</h4>
                    </div>
                    <div className="talep-kutu-aktif">
                        <h2 onClick={() => {
                            setValues({ ...values, active: !values.active })
                            handleUpdate();
                        }}>{helpBox.active ? 'AKTİF' : 'PASİF'}</h2>
                    </div>
                </div>
                <div className="talep-kutu-orta-cizgi">
                </div>
                <div className="talep-kutu-sagtaraf">
                    <div className="talep-kutu-title">
                        <h4>
                            {editMode ? <input type="text"
                                value={values.city}
                                onChange={(e) => setValues({ ...values, city: e.target.value })}
                            /> : helpBox.city}
                            - {
                                editMode ? <input type="text"
                                    value={values.purpose}
                                    onChange={(e) => setValues({ ...values, purpose: e.target.value })}
                                /> : helpBox.purpose
                            }</h4>
                    </div>
                    <div className="talep-kutu-content">
                        <p>{
                            editMode ? <textarea rows={13} type="text"
                                value={values.summary}
                                onChange={(e) => setValues({ ...values, summary: e.target.value })}
                            /> : helpBox.summary
                        }</p>
                    </div>
                    <div className="talep-kutu-adres">
                        <p>
                            {editMode ? <textarea rows={5} type="text"
                                value={values.contactInfo}
                                onChange={(e) => setValues({ ...values, contactInfo: e.target.value })}
                            /> : helpBox.contactInfo}
                        </p>
                    </div>
                    <div className="talep-kutu-ozet">
                        <button className='talep-kutu-ozet-button-' type='button' onClick={() => {
                            setEditMode(!editMode)
                            if (editMode) {
                                handleUpdate();
                            }
                        
                        }}>
                            {editMode ? 'Kaydet' : 'Düzenle'}
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default TaleplerimKutu;
