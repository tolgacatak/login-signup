import React, { useState } from 'react';
import logo from '../Assets/logo.jpeg';
import './NewPassword.css';
import { Link } from 'react-router-dom';

const NewPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Şifreleri kontrol etme işlemleri burada yapılabilir
        if (password === confirmPassword) {
            // Şifreler eşleşiyor, işlemlere devam et
        } else {
            // Şifreler eşleşmiyor, hata mesajı göster
        }
    };

    return (
        <div className="tlg">
            <div className="logo-new">
                <img src={logo} alt="" />
            </div>
            <div className="new-header">
                <h2>Şifrenizi Yenileyin</h2>
                <div className="new-underline"></div>
            </div>
            <div className="new-password">
                <div className="password1">
                    <label>

                        <input type="password" value={password} onChange={handlePasswordChange} placeholder='Yeni Şifre' onPaste={(e) => e.preventDefault()} />
                    </label>
                </div>
                <div className="password2">
                    <form onSubmit={handleSubmit}>
                        <label>

                            <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} placeholder='Şifreyi Tekrar Giriniz' onPaste={(e) => e.preventDefault()} />
                        </label>

                    </form>

                </div>
                <Link to="/" className="submit-new">
                    <button type="submit">Şifreyi Kaydet</button>
                </Link>
            </div>

        </div>

    );
};

export default NewPassword;
