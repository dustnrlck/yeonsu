import './MenuList.css';
import React from 'react';
import Header_menu from '../header/Header_menu';
import { Link } from 'react-router-dom';
import images from '../img/malatang/index.js';
import star from '../icon/star1.png';

function Malatang() {
    const logoText = "마라탕";

    const menus = [
        { name: "한우사골마라탕", price: "6,900"},
        { name: "마라샹궈", price: "8,700"},
        { name: "꿔바로우_소", price: "5,000"},
        { name: "꿔바로우_대", price: "10,000"},
        { name: "빙홍차", price: "2,500"}
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

export default Malatang;