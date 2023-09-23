import React from 'react';
import Header from '../header/Header';
import { Link } from 'react-router-dom';

function Splash() {
    return (
        <>
            <div className="splash">
                첫 화면
            </div>
            <div className='login-button'>
                <Link to="/login">로그인</Link>
            </div>
            <div className='signup-button'>
                <Link to="/signup">회원가입</Link>
            </div>
        </>
    );
}

export default Splash;
