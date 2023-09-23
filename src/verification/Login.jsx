import React from 'react';
import Header from '../header/Header_verify';
import { Link } from 'react-router-dom';

function Login() {
    const logoText = "로그인";

    return (
        <div className="login-page">
            <Header logoText={logoText} />
            <div className='finish-button'>
                <Link to='/menu'>메뉴</Link>
            </div>
        </div>
    );
}

export default Login;
