import './App.css';
import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Switch, Link, RouterProvider } from "react-router-dom";

import Login from './verification/Login';
import Splash from './verification/Splash';
import ReviewMain from "./review/ReviewMain";
import SignUp from './verification/SignUp';
import MyPage from './inform/MyPage';
import Information from './inform/Information';
import MenuMain from './menu/MenuMain';
import Reservation from './reservation/Reservation';
import Cart from './menu/Cart';
import Tournament from './tournament/Tournament';

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
        <Route path='/menu' element={<MenuMain />} />             {/* 메뉴 메인 페이지 */}
        <Route path='/reservation' element={<Reservation />} />   {/* 자리 예약 */}
        <Route path='/cart' element={<Cart />} />
        <Route path='/tournament' element={<Tournament />} />
      </Routes>
    </>
);
}

export default App;
