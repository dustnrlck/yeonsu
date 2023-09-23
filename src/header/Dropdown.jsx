import "./Dropdown.css";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import MenuMain from '../menu/MenuMain';
import Reservation from '../reservation/Reservation';
import ReviewMain from '../review/ReviewMain';
import MyPage from '../inform/MyPage';
import Tournament from "../tournament/Tournament";


function Dropdown() {
    return (
    <>
        <ul className="dropdown-menu">
            <li><Link to="/menu">{MenuMain}MENU</Link></li>
            <li><Link to="/reservation">{Reservation}좌석 예약</Link></li>
            <li><Link to="/review">{ReviewMain}후기 페이지</Link></li>
            <li><Link to="/myPage">{MyPage}마이 페이지</Link></li>
            <li><Link to="/tournament">{Tournament}오늘의 떡밥</Link></li>
        </ul>
    </>
    );
}

export default Dropdown;