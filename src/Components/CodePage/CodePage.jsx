
import React, { useState } from 'react';
import './CodePage.css';
import logo from '../Assets/logo.jpeg';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const CodePage = () => {
    const input1Ref = useRef(null);
    const input2Ref = useRef(null);
    const input3Ref = useRef(null);
    const input4Ref = useRef(null);
    const input5Ref = useRef(null);
    const input6Ref = useRef(null);

    const handleCodeChange = (e, nextInputRef) => {
        if (e.target.value.length === e.target.maxLength) {
            nextInputRef.current.focus();
        }
    };

    return (
        <div className="container-code">
            {/* <div className="logo">
                <img src={logo} alt="" />
            </div> */}


            <div className="header-code">
                <div className="text-code">
                    <h4>Mail Hesabınıza Gelen 6 Haneli Kod:</h4>
                </div>
                <div className="underline-code"></div>
            </div>
            <div className="code">
                <input
                    ref={input1Ref}
                    type="text"
                    className='onecode1'
                    maxLength={1}
                    onChange={(e) => handleCodeChange(e, input2Ref)}
                />
                <input
                    ref={input2Ref}
                    type="text"
                    className='onecode2'
                    maxLength={1}
                    onChange={(e) => handleCodeChange(e, input3Ref)}
                />
                <input
                    ref={input3Ref}
                    type="text"
                    className='onecode3'
                    maxLength={1}
                    onChange={(e) => handleCodeChange(e, input4Ref)}
                />
                <input
                    ref={input4Ref}
                    type="text"
                    className='onecode4'
                    maxLength={1}
                    onChange={(e) => handleCodeChange(e, input5Ref)}
                />
                <input
                    ref={input5Ref}
                    type="text"
                    className='onecode5'
                    maxLength={1}
                    onChange={(e) => handleCodeChange(e, input6Ref)}
                />
                <input
                    ref={input6Ref}
                    type="text"
                    className='onecode6'
                    maxLength={1}
                />
            </div>
            <div className="submit-container-code">
                <Link to="/newpassword" className="submit-code" >
                    Gönder
                </Link>
            </div>
            <div className="code-recode">Mail Adresinize Kod Ulaşmadıysa,  <span>
                <Link to="/reload">
                    Buraya Tıklayın!
                </Link></span>
            </div>
        </div>
    );
};

export default CodePage;
