// login 페이지와 signup 페이지에서 사용하는 헤더_아이콘과 닉네임 없음

import './Header.css';
import React, {useState} from 'react';


function Header({ logoText }) {
    return (
        <header>
            <div className="logo">{logoText}</div>
            
        </header>
    );
}

export default Header;
