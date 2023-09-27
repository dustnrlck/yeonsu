import React from 'react';
import Header from '../header/Header';
import { Link } from 'react-router-dom';

function Cart() {
    const logoText = "장바구니";

    return (
        <div className="cart-page">
        <Header logoText={logoText} />
        <Link to='/bookmark'>메뉴 즐겨찾기</Link>

        </div>
    );
}

export default Cart;
