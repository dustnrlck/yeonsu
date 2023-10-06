import './App.css';
import React from "react";
import { Routes, Route } from "react-router-dom";

import Splash from './verification/Splash';
import Login from './verification/Login';
import SignUp from './verification/SignUp';

import MyPage from './inform/MyPage';
import Information from './inform/Information';
import Reservation from './reservation/Reservation';
import TwoFourPage from './reservation/TwoFourPage';
import ResModal from './reservation/ResModal';
import ResModal24 from './reservation/ResModal24';
import ReviewMain from "./review/ReviewMain";
import ReviewWrite from './review/ReviewWrite';
import ReviewDetail from './review/ReviewDetail';

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
        <Route path='/' element={<Splash />} />
        <Route path='/login' element={<Login />} />
        <Route path='/review' element={<ReviewMain />} />
        <Route path='/reviewwrite' element={<ReviewWrite />} />
        <Route path='/review/:id' element={<ReviewDetail />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/information' element={<Information />} />
        <Route path='/reservation' element={<Reservation />} />
        <Route path="/twofourpage" element={<TwoFourPage />} />
        <Route path="/resmodal" element={<ResModal />} />
        <Route path="/resmodal24" element={<ResModal24 />} />
        <Route path='/tournament' element={<Tournament />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/bookmark' element={<CartBookmark />} />
        <Route path='/order' element={<CartOrder />} />
        <Route path='/menu' element={<MenuMain />} />
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
