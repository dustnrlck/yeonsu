import './MenuList.css';
import React, { useState, useEffect } from 'react';
import Header_menu from '../header/Header_menu';
import { Link } from 'react-router-dom';
import images from '../img/pasta/index.js';
import star from '../icon/star1.png';

import styled from "styled-components";
import emptyStar from "../icon/star1.png";
import fullStar from "../icon/star2.png";

function Pasta() {
    const logoText = "파스타";
/*
    const Star = styled.img`
        width = 20px;
        height = 20px;
        }
    `;

    const starButton = ({ bookmark, onClick }) => {
        return (
            <Star src={bookmark?fullStar:emptyStar} onClick={onClick} />
        );
    };
*/
    const menus = [
        { name: "고기리들기름파스타", price: "6,000"},
        { name: "우삼겹알리올리오", price: "6,500"},
        { name: "클래식토마토파스타", price: "6,500"},
        { name: "트러플버섯크림파스타", price: "6,500"},
        { name: "돼지김치파스타", price: "7,500"},
        { name: "대패삼겹크림파스타", price: "7,500"},
        { name: "매콤로제파스타", price: "7,500"},
        { name: "김치삼겹필라프", price: "7,500"},
        { name: "콜라", price: "1,500"},
        { name: "사이다", price: "1,500"}
    ];

    return (
        <div className="menu-page">
            <Header_menu logoText={logoText} />
            <div id='gap'></div>
            <div id='menu-list'>
                {menus.map((m,i) => (
                        <div className='menu-container'>
                            <React.Fragment key={m.name}>
                                <Link to={`/menu/${m.name}`}>
                                    <div className='menu-wrap' id={m.name}>
                                        <div className='img'>
                                            <img src={images[m.name]} alt='사진' width='90' height='70' />
                                        </div>
                                        <div className='bookmarkIcon'>
                                            <button className='bookmark-button'>
                                                <img src={star} alt="Star" />
                                            </button>
                                            {/*<starButton bookmark={bookmark} onClick={toggleBookmark}/>*/}
                                        </div>
                                        <div className='name'>{m.name}</div>
                                    </div>
                                </Link>
                            </React.Fragment>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default Pasta;