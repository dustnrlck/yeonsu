import './Cart.css'
import React from 'react';
import Header from '../header/Header';
import { Link } from 'react-router-dom';

function Cart() {
    const logoText = "장바구니";

    const bottonStyle = {
        background: "#FCCB6F",
    };

    const emptyStyle = {
    }

    return (
        <div className="cart-page">
            <Header logoText={logoText} />
            <Link to='/cart'>
                <button className='cart-page-button' style={bottonStyle}>내가 담은 장바구니</button>
            </Link>
            <Link to='/bookmark'>
                <button className='bookmark-page-button'>즐겨찾는 메뉴</button>
            </Link>

            <div className='cart-menu'>
                내가 담은 메뉴가 없습니다.
            </div>

            <Link to='/order'>
                <button className='order-button'>주문하기</button>
            </Link>
        </div>
    );
}

export default Cart;
