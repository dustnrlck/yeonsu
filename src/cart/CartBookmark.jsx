import React from 'react';
import Header from '../header/Header';
import { Link } from 'react-router-dom';

function CartBookmark() {
    const logoText = "장바구니";

    const bottonStyle = {
        background: "#FCCB6F",
    };

    return (
        <div className="bookmark-page">
            <Header logoText={logoText} />
            <Link to='/cart'>
                <button className='cart-page-button'>내가 담은 장바구니</button>
            </Link>
            <Link to='/bookmark'>
                <button className='bookmark-page-button' style={bottonStyle}>즐겨찾는 메뉴</button>
            </Link>
            <div className='cart-menu'>
                즐겨찾기에 등록된 메뉴가 없습니다.
            </div>
        </div>
    );
}

export default CartBookmark;