import './Cart.css'
import React from 'react';
import Header from '../header/Header';
import { Link } from 'react-router-dom';

function CartOrder() {
    const logoText = "장바구니";

    const bottonStyle = {
        background: "#FCCB6F",
    };

    const emptyStyle = {
    }

    return (
        <div className="cart-page">
            <Header logoText={logoText} />
            <div className='cart-menu'>
                내가 담은 메뉴가 없습니다.
            </div>

            <Link to='/cart'>
                <button className='pay-button'>결제하기</button>
            </Link>
        </div>
    );
}

export default CartOrder;
