import './App.css';
import styled from "styled-components"
import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Switch, Link, RouterProvider } from "react-router-dom";

import Splash from './verification/Splash';
import Login from './verification/Login';
import SignUp from './verification/SignUp';

import MyPage from './inform/MyPage';
import Information from './inform/Information';
import Reservation from './reservation/Reservation';
import TwoFourPage from './reservation/TwoFourPage';
import ResModal from './reservation/ResModal';
import ReviewMain from "./review/ReviewMain";

import Tournament from './tournament/Tournament';

import MenuMain from './menu/MenuMain';
import TodayA from './menu/menuPage/TodayA';
import TodayB from './menu/menuPage/TodayB';
import Pasta from './menu/Pasta';
import Katsu from './menu/Katsu';
import Masung from './menu/Masung';
import Malatang from './menu/Malatang';
import Toast from './menu/Toast';
import Cafe from './menu/Cafe';

import Cart from './cart/Cart';
import CartBookmark from './cart/CartBookmark';
import CartOrder from './cart/CartOrder';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Splash />} />             {/* 첫 번째 페이지 */} 
        <Route path='/login' element={<Login />} />
        <Route path='/review' element={<ReviewMain />} />   {/* 후기게시판 메인 페이지 */}
        <Route path='/signup' element={<SignUp />} />       {/* 회원가입 */}
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/information' element={<Information />} />   {/* 내 정보 */}
        <Route path='/reservation' element={<Reservation />} />   {/* 자리 예약 */}
        <Route path="/twofourpage" element={<TwoFourPage />} />
        <Route path="/resmodal" element={<ResModal />} />
        <Route path='/tournament' element={<Tournament />} />     {/* 토너먼트 */}
        <Route path='/cart' element={<Cart />} />                 {/* 장바구니 */}
        <Route path='/bookmark' element={<CartBookmark />} />     {/* 장바구니 즐겨찾기 */}
        <Route path='/order' element={<CartOrder />} />           {/* 장바구니 결제창 */}
        <Route path='/menu' element={<MenuMain />} />             {/* 메뉴 메인 페이지 */}
        <Route path='/todayA' element={<TodayA />} />
        <Route path='/todayB' element={<TodayB />} />
        <Route path='/pasta' element={<Pasta />} />
        <Route path='/katsu' element={<Katsu />} />
        <Route path='/masung' element={<Masung />} />
        <Route path='/malatang' element={<Malatang />} />
        <Route path='/toast' element={<Toast />} />
        <Route path='/cafe' element={<Cafe />} />
      </Routes>
    </>
);
}

export default App;
